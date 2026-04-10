import type { Locale } from "./home-content";
import { homeContent } from "./home-content";

export const siteUrl = "https://treespuzzle.com";
export const contactEmail = "contact@treespuzzle.com";
export const shareImageUrl = `${siteUrl}/icon-512.png`;
export const currentYear = new Date().getFullYear();
export const adsensePublisherId = "ca-pub-8738419268805262";

export const globalPaths = {
	about: "/about/",
	contact: "/contact/",
	editorial: "/editorial-policy/",
	links: "/links/",
	privacy: "/privacy-policy/",
	terms: "/terms/",
	disclaimer: "/disclaimer/",
	analysis: "/analysis/puzzle-design/",
};

export const analysisPathForLocale = (locale: Locale) =>
	locale === "en" ? globalPaths.analysis : `/${locale}${globalPaths.analysis}`;

type ShellCopy = {
	homeLabel: string;
	guideLabel: string;
	analysisLabel: string;
	aboutLabel: string;
	contactLabel: string;
	editorialLabel: string;
	linksLabel: string;
	privacyLabel: string;
	termsLabel: string;
	disclaimerLabel: string;
	siteLinksHeading: string;
	legalLinksHeading: string;
	independentLabel: string;
	independentNote: string;
	footerNotice: string;
	breadcrumbHome: string;
};

export const shellContent: Record<Locale, ShellCopy> = {
	"zh-cn": {
		homeLabel: "首页",
		guideLabel: "攻略",
		analysisLabel: "玩法解析",
		aboutLabel: "关于本站",
		contactLabel: "联系",
		editorialLabel: "编辑原则",
		linksLabel: "友情链接",
		privacyLabel: "隐私政策",
		termsLabel: "使用条款",
		disclaimerLabel: "免责声明",
		siteLinksHeading: "站点导航",
		legalLinksHeading: "政策与说明",
		independentLabel: "独立整理站点",
		independentNote:
			"treespuzzle.com 是围绕 HER TREES 系列整理的独立信息站，并非游戏官方主页。",
		footerNotice:
			"本页包含原创整理、站点说明与外部平台跳转入口，便于用户了解并开始游玩该系列。",
		breadcrumbHome: "首页",
	},
	en: {
		homeLabel: "Home",
		guideLabel: "Guide",
		analysisLabel: "Analysis",
		aboutLabel: "About",
		contactLabel: "Contact",
		editorialLabel: "Editorial Policy",
		linksLabel: "Partner Links",
		privacyLabel: "Privacy Policy",
		termsLabel: "Terms",
		disclaimerLabel: "Disclaimer",
		siteLinksHeading: "Site Links",
		legalLinksHeading: "Policies",
		independentLabel: "Independent editorial site",
		independentNote:
			"treespuzzle.com is an independent information site covering the HER TREES puzzle series and is not the official publisher website.",
		footerNotice:
			"This website combines original editorial notes, gameplay explainers, policy pages, and direct links that help visitors understand the series before playing.",
		breadcrumbHome: "Home",
	},
	ja: {
		homeLabel: "ホーム",
		guideLabel: "攻略",
		analysisLabel: "分析記事",
		aboutLabel: "このサイトについて",
		contactLabel: "お問い合わせ",
		editorialLabel: "編集方針",
		linksLabel: "パートナーリンク",
		privacyLabel: "プライバシーポリシー",
		termsLabel: "利用規約",
		disclaimerLabel: "免責事項",
		siteLinksHeading: "サイト案内",
		legalLinksHeading: "ポリシー",
		independentLabel: "独立編集サイト",
		independentNote:
			"treespuzzle.com は HER TREES シリーズを紹介する独立系情報サイトであり、公式運営サイトではありません。",
		footerNotice:
			"このサイトでは、オリジナルの解説、プレイ案内、方針ページ、外部販売ページへの導線をまとめています。",
		breadcrumbHome: "ホーム",
	},
	vi: {
		homeLabel: "Trang chu",
		guideLabel: "Huong dan",
		analysisLabel: "Phan tich",
		aboutLabel: "Gioi thieu",
		contactLabel: "Lien he",
		editorialLabel: "Chinh sach bien tap",
		linksLabel: "Lien ket doi tac",
		privacyLabel: "Chinh sach quyen rieng tu",
		termsLabel: "Dieu khoan su dung",
		disclaimerLabel: "Tuyen bo mien tru",
		siteLinksHeading: "Lien ket trang",
		legalLinksHeading: "Chinh sach",
		independentLabel: "Trang bien tap doc lap",
		independentNote:
			"treespuzzle.com la trang thong tin doc lap gioi thieu dong game HER TREES, khong phai website chinh thuc cua nha phat hanh.",
		footerNotice:
			"Trang nay ket hop bai viet goc, huong dan choi, cac trang chinh sach, va lien ket den nhung noi ban de nguoi dung danh gia tro choi truoc khi choi.",
		breadcrumbHome: "Trang chu",
	},
};

export const siteLinksForLocale = (locale: Locale) => {
	const shell = shellContent[locale];

	return [
		{ label: shell.homeLabel, href: homeContent[locale].path },
		{
			label: shell.guideLabel,
			href: homeContent[locale].guidePath,
			openInNewTab: true,
		},
		{ label: shell.analysisLabel, href: analysisPathForLocale(locale) },
		{ label: shell.aboutLabel, href: globalPaths.about },
		{ label: shell.contactLabel, href: globalPaths.contact },
	];
};

export const legalLinksForLocale = (locale: Locale) => {
	const shell = shellContent[locale];

	return [
		{ label: shell.editorialLabel, href: globalPaths.editorial },
		{ label: shell.linksLabel, href: globalPaths.links },
		{ label: shell.privacyLabel, href: globalPaths.privacy },
		{ label: shell.termsLabel, href: globalPaths.terms },
		{ label: shell.disclaimerLabel, href: globalPaths.disclaimer },
	];
};
