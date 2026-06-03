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
		id: "/id/",
		ja: "/ja/",
		vi: "/vi/",
	},
	guide: {
		en: "/guide/",
		"zh-cn": "/zh-cn/guide/",
		fa: "/fa/guide/",
		id: "/id/guide/",
		ja: "/ja/guide/",
		vi: "/vi/guide/",
	},
	analysis: {
		en: "/analysis/puzzle-design/",
		"zh-cn": "/zh-cn/analysis/puzzle-design/",
		fa: "/fa/analysis/puzzle-design/",
		id: "/id/analysis/puzzle-design/",
		ja: "/ja/analysis/puzzle-design/",
		vi: "/vi/analysis/puzzle-design/",
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
	`${siteUrl}${routePath === "/" ? "" : routePath}`;

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
