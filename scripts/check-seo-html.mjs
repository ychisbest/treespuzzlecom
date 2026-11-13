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

const hasVideoGame = (html) => /"@type"\s*:\s*"VideoGame"/i.test(html);

const ALLOWED_DORITOS = new Set([
	"https://game.doritosscript.com/HerTreesFirstPuzzle.zip",
	"https://game.doritosscript.com/puzzle-dream/index.html",
	"https://game.doritosscript.com/HerTreesPuzzleDream.zip",
	"https://game.doritosscript.com/her-trees-puzzle-house/index.html",
	"https://game.doritosscript.com/HER.TREES.THE.PUZZLE.HOUSE.zip",
	"https://game.doritosscript.com/trees-hate-you/index.html",
]);

const locales = [
	{ home: "index.html", prefix: "", play: "" },
	{ home: "fa/index.html", prefix: "fa/", play: "/fa" },
	{ home: "id/index.html", prefix: "id/", play: "/id" },
	{ home: "vi/index.html", prefix: "vi/", play: "/vi" },
	{ home: "zh-cn/index.html", prefix: "zh-cn/", play: "/zh-cn" },
	{ home: "fr/index.html", prefix: "fr/", play: "/fr" },
	{ home: "ja/index.html", prefix: "ja/", play: "/ja" },
];

const isHubTitle = (title, localePrefix) => {
	if (!title) return false;
	if (/^Play Her Trees: Puzzle Dream/i.test(title) || /^Her Trees Puzzle Dream/i.test(title)) {
		return false;
	}
	if (localePrefix === "ja/") {
		return /ハーツリーズ|Her Trees/i.test(title) && /攻略|ハブ|案内/.test(title);
	}
	return /hub|导航|مجموعه|série|seri|cổng|案内|ハブ/i.test(title);
};

for (const locale of locales) {
	const html = read(locale.home);
	if (!html) continue;

	if (countH1(html) !== 1) {
		failures.push(`${locale.home}: expected 1 h1, found ${countH1(html)}`);
	}

	const title = titleOf(html);
	const h1 = h1Of(html);
	if (!isHubTitle(title, locale.prefix)) {
		failures.push(`${locale.home}: title should be a series hub, got: ${title}`);
	}
	if (!isHubTitle(h1, locale.prefix) && !/シリーズ|系列|مجموعه|série|seri|hub|cổng|案内/i.test(h1)) {
		failures.push(`${locale.home}: h1 should be a series hub, got: ${h1}`);
	}
	if (/^Play Her Trees Puzzle Dream/i.test(h1) || /^Her Trees Puzzle Dream$/i.test(h1)) {
		failures.push(`${locale.home}: h1 still looks like the Puzzle Dream play page: ${h1}`);
	}

	for (const playPath of [
		`${locale.play}/play/first-puzzle/`,
		`${locale.play}/play/puzzle-house/`,
		`${locale.play}/play/puzzle-dream/`,
	]) {
		if (!html.includes(`href="${playPath}"`)) {
			failures.push(`${locale.home}: missing play href ${playPath}`);
		}
	}

	if (!html.includes(`${locale.play}/play/puzzle-dream/guide/`)) {
		failures.push(`${locale.home}: missing dream guide href`);
	}

	const embedMatch = html.match(/data-embed-src="([^"]+)"/);
	if (embedMatch && /\/her-trees-first-puzzle\/index\.html$/.test(embedMatch[1])) {
		failures.push(
			`${locale.home}: First Puzzle embed still points at index.html (that URL 301s to the play page)`,
		);
	}

	const desc = html.match(/name="description" content="([^"]*)"/i)?.[1] || "";
	if (!/first puzzle|puzzle house|puzzle dream/i.test(`${title} ${desc}`)) {
		failures.push(`${locale.home}: meta should name the three games`);
	}

	if (locale.prefix === "" && !/SearchAction/.test(html)) {
		failures.push("homepage missing SearchAction");
	}
	if (locale.prefix === "" && !html.includes("/search/?q={search_term_string}")) {
		failures.push("homepage SearchAction missing /search/ target");
	}
	if (locale.prefix === "" && !/dateModified/.test(html)) {
		failures.push("homepage missing dateModified");
	}
	if (
		locale.prefix === "" &&
		!/<details class="faq-item"[\s\S]*?<a href="\/play\/puzzle-dream\//.test(html)
	) {
		failures.push("homepage FAQ missing Dream play href");
	}
}

if (fs.existsSync(path.join(distDir, "en/index.html"))) {
	failures.push("dist/en/index.html should not be generated; /en must 301 away");
}

const playPages = [
	["play/puzzle-dream/index.html", /puzzle dream/i, "/play/puzzle-dream/guide/"],
	["play/puzzle-house/index.html", /puzzle house/i, "/play/puzzle-house/guide/"],
	["fa/play/puzzle-dream/index.html", /puzzle dream/i, "/fa/play/puzzle-dream/guide/"],
	["fa/play/puzzle-house/index.html", /puzzle house/i, "/fa/play/puzzle-house/guide/"],
	["id/play/puzzle-dream/index.html", /puzzle dream/i, "/id/play/puzzle-dream/guide/"],
	["id/play/puzzle-house/index.html", /puzzle house/i, "/id/play/puzzle-house/guide/"],
	["vi/play/puzzle-dream/index.html", /puzzle dream/i, "/vi/play/puzzle-dream/guide/"],
	["vi/play/puzzle-house/index.html", /puzzle house/i, "/vi/play/puzzle-house/guide/"],
	["zh-cn/play/puzzle-dream/index.html", /puzzle dream/i, "/zh-cn/play/puzzle-dream/guide/"],
	["zh-cn/play/puzzle-house/index.html", /puzzle house/i, "/zh-cn/play/puzzle-house/guide/"],
	["ja/play/puzzle-dream/index.html", /puzzle dream|ハーツリーズ/i, "/ja/play/puzzle-dream/guide/"],
	["ja/play/puzzle-house/index.html", /puzzle house|ハーツリーズ/i, "/ja/play/puzzle-house/guide/"],
	["fr/play/puzzle-dream/index.html", /puzzle dream/i, "/fr/play/puzzle-dream/guide/"],
	["fr/play/puzzle-house/index.html", /puzzle house/i, "/fr/play/puzzle-house/guide/"],
];

for (const [file, h1Pattern, guideHref] of playPages) {
	const html = read(file);
	if (!html) continue;
	if (countH1(html) !== 1) {
		failures.push(`${file}: expected 1 h1, found ${countH1(html)}`);
	}
	const h1 = h1Of(html);
	if (!h1Pattern.test(h1)) {
		failures.push(`${file}: h1 does not name the game: ${h1}`);
	}
	if (!hasVideoGame(html)) {
		failures.push(`${file}: missing JSON-LD VideoGame`);
	}
	if (!html.includes(guideHref) && !html.includes(guideHref.replace(/^\//, "/"))) {
		failures.push(`${file}: missing internal link to ${guideHref}`);
	}
	if (file.includes("puzzle-dream") && !/play\/first-puzzle\//.test(html)) {
		failures.push(`${file}: missing First Puzzle play href`);
	}
	if (file === "play/puzzle-dream/index.html") {
		const title = titleOf(html);
		if (!/Play Her Trees: Puzzle Dream Online/i.test(title)) {
			failures.push(`${file}: English title should be Play Her Trees: Puzzle Dream Online, got: ${title}`);
		}
		if (!/^Her Trees Puzzle Dream/i.test(h1)) {
			failures.push(`${file}: English h1 should start with Her Trees Puzzle Dream: ${h1}`);
		}
	}
	if (file === "play/puzzle-house/index.html") {
		const title = titleOf(html);
		if (!/Play Her Trees: The Puzzle House Online/i.test(title)) {
			failures.push(`${file}: English title should be Play Her Trees: The Puzzle House Online, got: ${title}`);
		}
	}
	if (file === "ja/play/puzzle-dream/index.html" || file === "ja/play/puzzle-house/index.html") {
		const title = titleOf(html);
		if (!/ハーツリーズ|Her Trees/i.test(title)) {
			failures.push(`${file}: Japanese title should include ハーツリーズ or Her Trees: ${title}`);
		}
	}
}

const guidePages = [
	["play/puzzle-dream/guide/index.html", ["HDA", "AEDH", "EBCFIHGDA"], "dream"],
	["play/puzzle-house/guide/index.html", ["CAFG", "FEC", "ICGEA"], "house"],
	["fa/play/puzzle-dream/guide/index.html", ["HDA", "AEDH"], "dream"],
	["fa/play/puzzle-house/guide/index.html", ["CAFG", "ICGEA"], "house"],
	["id/play/puzzle-dream/guide/index.html", ["HDA", "AEDH"], "dream"],
	["id/play/puzzle-house/guide/index.html", ["CAFG", "ICGEA"], "house"],
	["vi/play/puzzle-dream/guide/index.html", ["HDA", "AEDH"], "dream"],
	["vi/play/puzzle-house/guide/index.html", ["CAFG", "ICGEA"], "house"],
	["zh-cn/play/puzzle-dream/guide/index.html", ["HDA", "AEDH"], "dream"],
	["zh-cn/play/puzzle-house/guide/index.html", ["CAFG", "ICGEA"], "house"],
	["ja/play/puzzle-dream/guide/index.html", ["HDA", "AEDH"], "dream"],
	["ja/play/puzzle-house/guide/index.html", ["CAFG", "ICGEA"], "house"],
	["fr/play/puzzle-dream/guide/index.html", ["HDA", "AEDH"], "dream"],
	["fr/play/puzzle-house/guide/index.html", ["CAFG", "ICGEA"], "house"],
];

for (const [file, codes, kind] of guidePages) {
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
	if (kind === "dream" && !/href="(?:\/[a-z0-9-]+)?\/play\/puzzle-dream\/"/.test(html)) {
		failures.push(`${file}: missing play Her Trees Puzzle Dream href`);
	}
	if (kind === "house" && !/href="(?:\/[a-z0-9-]+)?\/play\/puzzle-house\/"/.test(html)) {
		failures.push(`${file}: missing play Her Trees The Puzzle House href`);
	}
	if (kind === "dream" && !/play\/puzzle-house\/guide\//.test(html)) {
		failures.push(`${file}: missing cross-link to house guide`);
	}
	if (kind === "house" && !/play\/puzzle-dream\/guide\//.test(html)) {
		failures.push(`${file}: missing cross-link to dream guide`);
	}
	if (file === "play/puzzle-dream/guide/index.html") {
		const title = titleOf(html);
		if (!/Her Trees Puzzle Dream Walkthrough and Answers/i.test(title)) {
			failures.push(`${file}: English title mismatch: ${title}`);
		}
	}
	if (file === "play/puzzle-house/guide/index.html") {
		const title = titleOf(html);
		if (!/Her Trees The Puzzle House Walkthrough and Answers/i.test(title)) {
			failures.push(`${file}: English title mismatch: ${title}`);
		}
	}
	if (file.startsWith("ja/") && !/ハーツリーズ|Her Trees/i.test(titleOf(html))) {
		failures.push(`${file}: Japanese title should include ハーツリーズ or Her Trees: ${titleOf(html)}`);
	}
	if (file.startsWith("ja/") && !/攻略/.test(titleOf(html))) {
		failures.push(`${file}: Japanese guide title should include 攻略: ${titleOf(html)}`);
	}
}

const firstGuideHtml = read("guide/index.html");
if (firstGuideHtml) {
	if (!/first puzzle/i.test(titleOf(firstGuideHtml))) {
		failures.push(`guide title missing First Puzzle: ${titleOf(firstGuideHtml)}`);
	}
	if (!/forgotten house/i.test(titleOf(firstGuideHtml) + firstGuideHtml)) {
		failures.push("English First Puzzle guide should still mention Forgotten House");
	}
	if (!/play\/first-puzzle\//.test(firstGuideHtml)) {
		failures.push("guide page missing First Puzzle play href");
	}
	if (firstGuideHtml.indexOf("<h2") > -1 && firstGuideHtml.indexOf("<iframe") > -1) {
		if (firstGuideHtml.indexOf("<iframe") < firstGuideHtml.indexOf("id=\"first-puzzle-walkthrough\"")) {
			failures.push("guide page: walkthrough text should appear before the video iframe");
		}
	}
}

const zhGuideHome = read("zh-cn/guide/index.html");
if (zhGuideHome && zhGuideHome.length < 4000) {
	failures.push("zh-cn/guide looks too thin");
}
if (zhGuideHome && !/分区提示|逐步/.test(zhGuideHome)) {
	failures.push("zh-cn/guide should include structured hint/step text");
}

const jaGuideHome = read("ja/guide/index.html");
if (jaGuideHome && !/ハーツリーズ|攻略/.test(titleOf(jaGuideHome))) {
	failures.push(`ja/guide title should include ハーツリーズ or 攻略: ${titleOf(jaGuideHome)}`);
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

const redirectsPath = path.join(distDir, "_redirects");
if (!fs.existsSync(redirectsPath)) {
	failures.push("missing dist/_redirects");
} else {
	const redirects = fs.readFileSync(redirectsPath, "utf8");
	for (const rule of [
		"/her-trees-puzzle-dream/ /play/puzzle-dream/ 301",
		"/her-trees-the-puzzle-house/ /play/puzzle-house/ 301",
		"/en / 301",
		"/en/* /:splat 301",
		"/jp /ja/ 301",
		"/zh /zh-cn/ 301",
		"/cn /zh-cn/ 301",
		"/analysis /analysis/puzzle-design/ 301",
		"/her-trees-first-puzzle /play/first-puzzle/ 301",
		"/her-trees-first-puzzle/index.html /play/first-puzzle/ 301",
		"/apple-touch-icon-precomposed.png /apple-touch-icon.png 301",
	]) {
		if (!redirects.includes(rule)) {
			failures.push(`_redirects missing rule: ${rule}`);
		}
	}
	if (/^\/her-trees-first-puzzle\/\* /m.test(redirects)) {
		failures.push("_redirects must not splat-redirect /her-trees-first-puzzle/* (Build assets must stay)");
	}
}

const headersPath = path.join(distDir, "_headers");
if (!fs.existsSync(headersPath)) {
	failures.push("missing dist/_headers");
} else {
	const headers = fs.readFileSync(headersPath, "utf8");
	if (!headers.includes("/_astro/*")) {
		failures.push("_headers missing /_astro/* rule");
	}
	if (!/max-age=31536000/.test(headers) || !/immutable/.test(headers)) {
		failures.push("_headers should long-cache hashed/Unity assets as immutable");
	}
	if (/_astro[\s\S]{0,200}must-revalidate/.test(headers)) {
		failures.push("_headers must not set must-revalidate on hashed assets");
	}
}

const assetLinksPath = path.join(distDir, ".well-known/assetlinks.json");
if (!fs.existsSync(assetLinksPath)) {
	failures.push("missing dist/.well-known/assetlinks.json");
} else {
	const raw = fs.readFileSync(assetLinksPath, "utf8").trim();
	try {
		const parsed = JSON.parse(raw);
		if (!Array.isArray(parsed) || parsed.length !== 0) {
			failures.push("assetlinks.json should be an empty JSON array");
		}
	} catch {
		failures.push("assetlinks.json is not valid JSON");
	}
}

const androidHtml = read("play/puzzle-dream/android/index.html");
if (androidHtml && !/android/i.test(h1Of(androidHtml))) {
	failures.push("android page h1 missing Android");
}

const switchHtml = read("play/puzzle-dream/switch/index.html");
if (switchHtml) {
	if (countH1(switchHtml) !== 1) {
		failures.push(`switch page: expected 1 h1, found ${countH1(switchHtml)}`);
	}
	const switchH1 = h1Of(switchHtml);
	if (!/puzzle dream/i.test(switchH1) || !/switch/i.test(switchH1)) {
		failures.push(`switch page h1 missing Puzzle Dream or Switch: ${switchH1}`);
	}
	const switchTitle = titleOf(switchHtml);
	if (!switchTitle) {
		failures.push("switch page title empty");
	}
	const homeTitle = titleOf(read("index.html"));
	if (switchTitle && homeTitle && switchTitle === homeTitle) {
		failures.push("switch page title equals homepage title");
	}
}

const sitemapHtml = read("sitemap.xml");
if (sitemapHtml && !sitemapHtml.includes("https://treespuzzle.com/play/puzzle-dream/switch/")) {
	failures.push("sitemap missing https://treespuzzle.com/play/puzzle-dream/switch/");
}
if (sitemapHtml && sitemapHtml.includes("https://treespuzzle.com/en")) {
	failures.push("sitemap should not list /en URLs");
}

const firstPuzzleHtml = read("play/first-puzzle/index.html");
if (firstPuzzleHtml) {
	if (countH1(firstPuzzleHtml) !== 1) {
		failures.push("first-puzzle: expected 1 h1");
	}
	if (!/first puzzle/i.test(h1Of(firstPuzzleHtml))) {
		failures.push(`first-puzzle h1: ${h1Of(firstPuzzleHtml)}`);
	}
	if (!hasVideoGame(firstPuzzleHtml)) {
		failures.push("first-puzzle: missing VideoGame");
	}
	if (!firstPuzzleHtml.includes("/her-trees-first-puzzle/embed.html")) {
		failures.push("first-puzzle: missing local First Puzzle embed.html");
	}
	if (firstPuzzleHtml.includes("/her-trees-first-puzzle/index.html")) {
		failures.push("first-puzzle: embed should not use index.html (that path 301s)");
	}
	if (!firstPuzzleHtml.includes("/play/puzzle-dream/guide/")) {
		failures.push("first-puzzle: missing Dream walkthrough href");
	}
	const fpTitle = titleOf(firstPuzzleHtml);
	if (!/First Puzzle/i.test(fpTitle) || !/Forgotten House/i.test(fpTitle)) {
		failures.push(`first-puzzle title should target First Puzzle and A Forgotten House: ${fpTitle}`);
	}
}

const searchHtml = read("search/index.html");
if (searchHtml) {
	if (!searchHtml.includes("/play/puzzle-dream/")) {
		failures.push("search page missing Dream play href");
	}
	if (!searchHtml.includes("/play/puzzle-dream/guide/")) {
		failures.push("search page missing Dream guide href");
	}
	if (!searchHtml.includes("/play/puzzle-dream/switch/")) {
		failures.push("search page missing Switch href");
	}
}

const aboutHtml = read("about/index.html");
if (aboutHtml) {
	if (titleOf(aboutHtml) !== h1Of(aboutHtml)) {
		failures.push(`about title must match h1: title="${titleOf(aboutHtml)}" h1="${h1Of(aboutHtml)}"`);
	}
	if (/play online|puzzle dream online/i.test(titleOf(aboutHtml))) {
		failures.push(`about title should not compete for play queries: ${titleOf(aboutHtml)}`);
	}
	if (!aboutHtml.includes("/play/puzzle-dream/")) {
		failures.push("about page missing Dream play href");
	}
	if (!aboutHtml.includes("/play/puzzle-dream/guide/")) {
		failures.push("about page missing Dream guide href");
	}
}

const analysisHtml = read("analysis/puzzle-design/index.html");
if (analysisHtml) {
	if (!/href="\/play\/puzzle-dream\/"/.test(analysisHtml)) {
		failures.push("analysis page missing Dream play href");
	}
	if (!analysisHtml.includes("/play/puzzle-dream/guide/")) {
		failures.push("analysis page missing Dream guide href");
	}
}

const jaHome = read("ja/index.html");
if (jaHome && !/ハーツリーズ/.test(titleOf(jaHome))) {
	failures.push(`ja homepage title should include ハーツリーズ: ${titleOf(jaHome)}`);
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
