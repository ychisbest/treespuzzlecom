import {
	homeContent,
	languageLabels,
	localeOrder,
	type Locale,
} from "./home-content";
import { siteUrl } from "./site-shell";

export type AlternateLink = {
	locale: Locale;
	label: string;
	href: string;
	active: boolean;
};

const hreflangByLocale: Record<Locale, string> = {
	en: "en",
	"zh-cn": "zh-CN",
	ja: "ja",
	vi: "vi",
};

const ogLocaleByLocale: Record<Locale, string> = {
	en: "en_US",
	"zh-cn": "zh_CN",
	ja: "ja_JP",
	vi: "vi_VN",
};

export const toAbsoluteUrl = (path: string) =>
	`${siteUrl}${path === "/" ? "" : path}`;

export const localeToHreflang = (locale: Locale) => hreflangByLocale[locale];

export const localeToOgLocale = (locale: Locale) => ogLocaleByLocale[locale];

export const buildAlternateLinks = (
	pathsByLocale: Record<Locale, string>,
	currentLocale: Locale,
): AlternateLink[] =>
	localeOrder.map((locale) => ({
		locale,
		label: languageLabels[locale],
		href: pathsByLocale[locale],
		active: locale === currentLocale,
	}));

export const buildOgLocaleAlternates = (locale: Locale) =>
	localeOrder
		.filter((item) => item !== locale)
		.map((item) => localeToOgLocale(item));

export const homeAlternateLinks = (locale: Locale) =>
	buildAlternateLinks(
		{
			en: homeContent.en.path,
			"zh-cn": homeContent["zh-cn"].path,
			ja: homeContent.ja.path,
			vi: homeContent.vi.path,
		},
		locale,
	);

export const guideAlternateLinks = (locale: Locale) =>
	buildAlternateLinks(
		{
			en: homeContent.en.guidePath,
			"zh-cn": homeContent["zh-cn"].guidePath,
			ja: homeContent.ja.guidePath,
			vi: homeContent.vi.guidePath,
		},
		locale,
	);
