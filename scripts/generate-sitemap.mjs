import fs from "node:fs";
import path from "node:path";

const siteUrl = "https://treespuzzle.com";
const distDir = path.resolve("dist");
const sitemapPath = path.join(distDir, "sitemap.xml");
const sitemapIndexPath = path.join(distDir, "sitemap-index.xml");
const legacyChunkPath = path.join(distDir, "sitemap-0.xml");

const localeAlternates = {
	home: {
		en: "/",
		"zh-cn": "/zh-cn/",
		fa: "/fa/",
		fr: "/fr/",
		id: "/id/",
		ja: "/ja/",
		vi: "/vi/",
	},
	guide: {
		en: "/guide/",
		"zh-cn": "/zh-cn/guide/",
		fa: "/fa/guide/",
		fr: "/fr/guide/",
		id: "/id/guide/",
		ja: "/ja/guide/",
		vi: "/vi/guide/",
	},
	analysis: {
		en: "/analysis/puzzle-design/",
		"zh-cn": "/zh-cn/analysis/puzzle-design/",
		fa: "/fa/analysis/puzzle-design/",
		fr: "/fr/analysis/puzzle-design/",
		id: "/id/analysis/puzzle-design/",
		ja: "/ja/analysis/puzzle-design/",
		vi: "/vi/analysis/puzzle-design/",
	},
	puzzleDream: {
		en: "/play/puzzle-dream/",
		"zh-cn": "/zh-cn/play/puzzle-dream/",
		fa: "/fa/play/puzzle-dream/",
		fr: "/fr/play/puzzle-dream/",
		id: "/id/play/puzzle-dream/",
		ja: "/ja/play/puzzle-dream/",
		vi: "/vi/play/puzzle-dream/",
	},
	puzzleHouse: {
		en: "/play/puzzle-house/",
		"zh-cn": "/zh-cn/play/puzzle-house/",
		fa: "/fa/play/puzzle-house/",
		fr: "/fr/play/puzzle-house/",
		id: "/id/play/puzzle-house/",
		ja: "/ja/play/puzzle-house/",
		vi: "/vi/play/puzzle-house/",
	},
	puzzleDreamGuide: {
		en: "/play/puzzle-dream/guide/",
		"zh-cn": "/zh-cn/play/puzzle-dream/guide/",
		fa: "/fa/play/puzzle-dream/guide/",
		fr: "/fr/play/puzzle-dream/guide/",
		id: "/id/play/puzzle-dream/guide/",
		ja: "/ja/play/puzzle-dream/guide/",
		vi: "/vi/play/puzzle-dream/guide/",
	},
	puzzleHouseGuide: {
		en: "/play/puzzle-house/guide/",
		"zh-cn": "/zh-cn/play/puzzle-house/guide/",
		fa: "/fa/play/puzzle-house/guide/",
		fr: "/fr/play/puzzle-house/guide/",
		id: "/id/play/puzzle-house/guide/",
		ja: "/ja/play/puzzle-house/guide/",
		vi: "/vi/play/puzzle-house/guide/",
	},
	puzzleDreamAndroid: {
		en: "/play/puzzle-dream/android/",
		"zh-cn": "/zh-cn/play/puzzle-dream/android/",
		fa: "/fa/play/puzzle-dream/android/",
		fr: "/fr/play/puzzle-dream/android/",
		id: "/id/play/puzzle-dream/android/",
		ja: "/ja/play/puzzle-dream/android/",
		vi: "/vi/play/puzzle-dream/android/",
	},
};

const standaloneUrls = [
	"/about/",
	"/contact/",
	"/disclaimer/",
	"/editorial-policy/",
	"/links/",
	"/privacy-policy/",
	"/terms/",
	"/trees-hate-you/",
];

const hreflangByLocale = {
	en: "en",
	"zh-cn": "zh-CN",
	fa: "fa",
	fr: "fr",
	id: "id",
	ja: "ja",
	vi: "vi",
};

const xmlEscape = (value) =>
	value
		.replaceAll("&", "&amp;")
		.replaceAll("<", "&lt;")
		.replaceAll(">", "&gt;")
		.replaceAll('"', "&quot;")
		.replaceAll("'", "&apos;");

const toAbsoluteUrl = (routePath) =>
	`${siteUrl}${!routePath || routePath === "/" ? "/" : routePath}`;

const routePathToHtmlFile = (routePath) => {
	const normalized = routePath === "/" ? "" : routePath.replace(/^\/|\/$/g, "");
	return normalized
		? path.join(distDir, normalized, "index.html")
		: path.join(distDir, "index.html");
};

const getLastMod = (routePath) => {
	const stat = fs.statSync(routePathToHtmlFile(routePath));
	return stat.mtime.toISOString();
};

const buildAlternateLinksXml = (alternates) =>
	Object.entries(alternates)
		.map(
			([locale, routePath]) =>
				`<xhtml:link rel="alternate" hreflang="${hreflangByLocale[locale]}" href="${xmlEscape(toAbsoluteUrl(routePath))}" />`,
		)
		.concat(
			`<xhtml:link rel="alternate" hreflang="x-default" href="${xmlEscape(toAbsoluteUrl(alternates.en))}" />`,
		)
		.join("");

const buildLocalizedUrlEntries = () =>
	Object.values(localeAlternates)
		.flatMap((alternates) => {
			const alternateLinksXml = buildAlternateLinksXml(alternates);
			return Object.values(alternates).map((routePath) => {
				const loc = xmlEscape(toAbsoluteUrl(routePath));
				const lastmod = getLastMod(routePath);
				return `<url><loc>${loc}</loc><lastmod>${lastmod}</lastmod>${alternateLinksXml}</url>`;
			});
		})
		.join("");

const buildStandaloneUrlEntries = () =>
	standaloneUrls
		.map((routePath) => {
			const loc = xmlEscape(toAbsoluteUrl(routePath));
			const lastmod = getLastMod(routePath);
			return `<url><loc>${loc}</loc><lastmod>${lastmod}</lastmod></url>`;
		})
		.join("");

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${buildLocalizedUrlEntries()}${buildStandaloneUrlEntries()}
</urlset>
`;

const sitemapIndexXml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
<sitemap><loc>${xmlEscape(`${siteUrl}/sitemap.xml`)}</loc></sitemap>
</sitemapindex>
`;

fs.writeFileSync(sitemapPath, sitemapXml);
fs.writeFileSync(sitemapIndexPath, sitemapIndexXml);

if (fs.existsSync(legacyChunkPath)) {
	fs.rmSync(legacyChunkPath);
}
