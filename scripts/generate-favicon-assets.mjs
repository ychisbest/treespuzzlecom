import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const publicDir = new URL("../public/", import.meta.url);
const svgPath = new URL("favicon.svg", publicDir);
const svgBuffer = await fs.readFile(svgPath);

async function renderPng(size, outputName, options = {}) {
  let image = sharp(svgBuffer, { density: 1024 }).resize(size, size, {
    fit: "contain",
  });

  if (options.flattenBackground) {
    image = image.flatten({ background: options.flattenBackground });
  }

  await image.png().toFile(fileURLToPath(new URL(outputName, publicDir)));
}

function createIco(images) {
  const count = images.length;
  const headerSize = 6 + count * 16;
  let offset = headerSize;

  const entries = images.map((image) => {
    const width = image.size === 256 ? 0 : image.size;
    const height = image.size === 256 ? 0 : image.size;
    const entry = Buffer.alloc(16);
    entry.writeUInt8(width, 0);
    entry.writeUInt8(height, 1);
    entry.writeUInt8(0, 2);
    entry.writeUInt8(0, 3);
    entry.writeUInt16LE(1, 4);
    entry.writeUInt16LE(32, 6);
    entry.writeUInt32LE(image.buffer.length, 8);
    entry.writeUInt32LE(offset, 12);
    offset += image.buffer.length;
    return entry;
  });

  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(count, 4);

  return Buffer.concat([header, ...entries, ...images.map((image) => image.buffer)]);
}

await renderPng(180, "apple-touch-icon.png", { flattenBackground: "#111111" });
await renderPng(192, "icon-192.png");
await renderPng(512, "icon-512.png");

const icoImages = await Promise.all(
  [16, 32].map(async (size) => ({
    size,
    buffer: await sharp(svgBuffer, { density: 1024 }).resize(size, size).png().toBuffer(),
  })),
);

await fs.writeFile(new URL("favicon.ico", publicDir), createIco(icoImages));

const outputs = [
  "favicon.ico",
  "apple-touch-icon.png",
  "icon-192.png",
  "icon-512.png",
].map((file) => path.posix.join("public", file));

console.log(`Generated ${outputs.join(", ")}`);
