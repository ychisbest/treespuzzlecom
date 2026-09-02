import fs from "node:fs";
import path from "node:path";

const distDir = path.resolve("dist");
const failures = [];

const read = (relativePath) => {
	const filePath = path.join(distDir, relativePath);
	if (!fs.existsSync(filePath)) {
		failures.push(`missing file: ${relativePath}`);
		return "";
	}
	return fs.readFileSync(filePath, "utf8");
};

const countH1 = (html) => (html.match(/<h1\b/gi) || []).length;

const titleOf = (html) => {
	const match = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
	return match ? match[1].replace(/\s+/g, " ").trim() : "";
};

const h1Of = (html) => {
	const match = html.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/i);
	return match ? match[1].replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim() : "";
};

const hasPuzzleDreamName = (text) =>
	/her trees puzzle dream|puzzle dream/i.test(text);

const hasVideoGame = (html) =>
	/"@type"\s*:\s*"VideoGame"/i.test(html);

const ALLOWED_DORITOS = new Set([
	"https://game.doritosscript.com/HerTreesFirstPuzzle.zip",
	"https://game.doritosscript.com/puzzle-dream/index.html",
	"https://game.doritosscript.com/HerTreesPuzzleDream.zip",
	"https://game.doritosscript.com/her-trees-puzzle-house/index.html",
	"https://game.doritosscript.com/HER.TREES.THE.PUZZLE.HOUSE.zip",
	"https://game.doritosscript.com/trees-hate-you/index.html",
]);

const locales = [
	{ home: "index.html", prefix: "" },
	{ home: "fa/index.html", prefix: "fa/" },
	{ home: "id/index.html", prefix: "id/" },
	{ home: "vi/index.html", prefix: "vi/" },
	{ home: "zh-cn/index.html", prefix: "zh-cn/" },
	{ home: "fr/index.html", prefix: "fr/" },
	{ home: "ja/index.html", prefix: "ja/" },
];

for (const locale of locales) {
	const html = read(locale.home);
	if (!html) continue;

	const embedMatch = html.match(/data-embed-src="([^"]+)"/);
	if (!embedMatch || !/puzzle-dream/i.test(embedMatch[1])) {
		failures.push(
			`${locale.home}: hero embed is not Puzzle Dream (${embedMatch?.[1] ?? "missing"})`,
		);
	}

	const title = titleOf(html);
	const h1 = h1Of(html);
	if (!hasPuzzleDreamName(title)) {
		failures.push(`${locale.home}: title missing Puzzle Dream: ${title}`);
	}
	if (!hasPuzzleDreamName(h1)) {
		failures.push(`${locale.home}: h1 missing Puzzle Dream: ${h1}`);
	}
	if (/First Puzzle/i.test(h1)) {
		failures.push(`${locale.home}: h1 still names First Puzzle: ${h1}`);
	}
}

const playPages = [
	"play/puzzle-dream/index.html",
	"play/puzzle-house/index.html",
	"fa/play/puzzle-dream/index.html",
	"fa/play/puzzle-house/index.html",
	"id/play/puzzle-dream/index.html",
	"id/play/puzzle-house/index.html",
	"vi/play/puzzle-dream/index.html",
	"vi/play/puzzle-house/index.html",
];

for (const file of playPages) {
	const html = read(file);
	if (!html) continue;
	const h1Count = countH1(html);
	if (h1Count !== 1) {
		failures.push(`${file}: expected 1 h1, found ${h1Count}`);
	}
	const h1 = h1Of(html);
	const isDream = file.includes("puzzle-dream");
	if (isDream && !/puzzle dream/i.test(h1)) {
		failures.push(`${file}: h1 does not name Puzzle Dream: ${h1}`);
	}
	if (!isDream && !/puzzle house/i.test(h1)) {
		failures.push(`${file}: h1 does not name Puzzle House: ${h1}`);
	}
	if (!hasVideoGame(html)) {
		failures.push(`${file}: missing JSON-LD VideoGame`);
	}
}

const guidePages = [
	["play/puzzle-dream/guide/index.html", ["HDA", "AEDH", "EBCFIHGDA"]],
	["play/puzzle-house/guide/index.html", ["CAFG", "FEC", "ICGEA"]],
	["fa/play/puzzle-dream/guide/index.html", ["HDA", "AEDH"]],
	["fa/play/puzzle-house/guide/index.html", ["CAFG", "ICGEA"]],
	["id/play/puzzle-dream/guide/index.html", ["HDA", "AEDH"]],
	["id/play/puzzle-house/guide/index.html", ["CAFG", "ICGEA"]],
	["vi/play/puzzle-dream/guide/index.html", ["HDA", "AEDH"]],
	["vi/play/puzzle-house/guide/index.html", ["CAFG", "ICGEA"]],
];

for (const [file, codes] of guidePages) {
	const html = read(file);
	if (!html) continue;
	if (!/<table\b/i.test(html)) {
		failures.push(`${file}: missing answer <table>`);
	}
	for (const code of codes) {
		if (!html.includes(code)) {
			failures.push(`${file}: missing keypad code ${code}`);
		}
	}
}

const walkHtml = (dir, found = []) => {
	for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
		const full = path.join(dir, entry.name);
		if (entry.isDirectory()) walkHtml(full, found);
		else if (entry.name.endsWith(".html")) found.push(full);
	}
	return found;
};

if (fs.existsSync(distDir)) {
	for (const file of walkHtml(distDir)) {
		const html = fs.readFileSync(file, "utf8");
		const hrefs = [...html.matchAll(/href="(https?:\/\/[^"]*doritosscript\.com[^"]*)"/gi)].map(
			(match) => match[1],
		);
		for (const href of hrefs) {
			if (!ALLOWED_DORITOS.has(href)) {
				failures.push(
					`${path.relative(distDir, file)}: new doritosscript.com href ${href}`,
				);
			}
		}
	}
}

if (failures.length) {
	console.error("SEO HTML check failed:");
	for (const failure of failures) console.error(`- ${failure}`);
	process.exit(1);
}

console.log("SEO HTML check passed");
console.log(`checked homepage locales: ${locales.length}`);
console.log(`checked play pages: ${playPages.length}`);
console.log(`checked guide pages: ${guidePages.length}`);
