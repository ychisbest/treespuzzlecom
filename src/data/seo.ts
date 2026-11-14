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

export type PageSeo = {
	title: string;
	description: string;
	h1: string;
};

const hreflangByLocale: Record<Locale, string> = {
	en: "en",
	"zh-cn": "zh-CN",
	fa: "fa",
	fr: "fr",
	id: "id",
	ja: "ja",
	vi: "vi",
};

const ogLocaleByLocale: Record<Locale, string> = {
	en: "en_US",
	"zh-cn": "zh_CN",
	fa: "fa_IR",
	fr: "fr_FR",
	id: "id_ID",
	ja: "ja_JP",
	vi: "vi_VN",
};

export const toAbsoluteUrl = (path: string) =>
	`${siteUrl}${path === "/" ? "" : path}`;

export const localeToHreflang = (locale: Locale) => hreflangByLocale[locale];

export const localeToOgLocale = (locale: Locale) => ogLocaleByLocale[locale];

/** Prefix a site-root path with the locale, except English which stays unprefixed. */
export const localizedPath = (locale: Locale, path: string) => {
	const normalized = path.startsWith("/") ? path : `/${path}`;
	return locale === "en" ? normalized : `/${locale}${normalized}`;
};

export const playFirstPath = (locale: Locale) =>
	localizedPath(locale, "/play/first-puzzle/");
export const playHousePath = (locale: Locale) =>
	localizedPath(locale, "/play/puzzle-house/");
export const playDreamPath = (locale: Locale) =>
	localizedPath(locale, "/play/puzzle-dream/");
export const guideFirstPath = (locale: Locale) =>
	localizedPath(locale, "/guide/");
export const guideHousePath = (locale: Locale) =>
	localizedPath(locale, "/play/puzzle-house/guide/");
export const guideDreamPath = (locale: Locale) =>
	localizedPath(locale, "/play/puzzle-dream/guide/");
export const playDreamAndroidPath = (locale: Locale) =>
	localizedPath(locale, "/play/puzzle-dream/android/");
export const playDreamIosPath = (locale: Locale) =>
	localizedPath(locale, "/play/puzzle-dream/ios/");
export const playDreamSwitchPath = (locale: Locale) =>
	localizedPath(locale, "/play/puzzle-dream/switch/");

/** Iframe src for the First Puzzle Unity build. Do not use index.html (that URL 301s to the play page). */
export const firstPuzzleEmbedUrl = "/her-trees-first-puzzle/embed.html";

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

export const guideVideoUploadDates = {
	firstPuzzle: "2026-03-15T18:10:58-07:00",
	puzzleDream: "2026-03-15T18:28:27-07:00",
	puzzleHouse: "2026-03-15T18:23:10-07:00",
} as const;

export const homeAlternateLinks = (locale: Locale) =>
	buildAlternateLinks(
		{
			en: homeContent.en.path,
			"zh-cn": homeContent["zh-cn"].path,
			fa: homeContent.fa.path,
			fr: homeContent.fr.path,
			id: homeContent.id.path,
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
			fa: homeContent.fa.guidePath,
			fr: homeContent.fr.guidePath,
			id: homeContent.id.guidePath,
			ja: homeContent.ja.guidePath,
			vi: homeContent.vi.guidePath,
		},
		locale,
	);

export const playFirstAlternateLinks = (locale: Locale) =>
	buildAlternateLinks(
		{
			en: playFirstPath("en"),
			"zh-cn": playFirstPath("zh-cn"),
			fa: playFirstPath("fa"),
			fr: playFirstPath("fr"),
			id: playFirstPath("id"),
			ja: playFirstPath("ja"),
			vi: playFirstPath("vi"),
		},
		locale,
	);

export const playHouseAlternateLinks = (locale: Locale) =>
	buildAlternateLinks(
		{
			en: playHousePath("en"),
			"zh-cn": playHousePath("zh-cn"),
			fa: playHousePath("fa"),
			fr: playHousePath("fr"),
			id: playHousePath("id"),
			ja: playHousePath("ja"),
			vi: playHousePath("vi"),
		},
		locale,
	);

export const playDreamAlternateLinks = (locale: Locale) =>
	buildAlternateLinks(
		{
			en: playDreamPath("en"),
			"zh-cn": playDreamPath("zh-cn"),
			fa: playDreamPath("fa"),
			fr: playDreamPath("fr"),
			id: playDreamPath("id"),
			ja: playDreamPath("ja"),
			vi: playDreamPath("vi"),
		},
		locale,
	);

export const guideHouseAlternateLinks = (locale: Locale) =>
	buildAlternateLinks(
		{
			en: guideHousePath("en"),
			"zh-cn": guideHousePath("zh-cn"),
			fa: guideHousePath("fa"),
			fr: guideHousePath("fr"),
			id: guideHousePath("id"),
			ja: guideHousePath("ja"),
			vi: guideHousePath("vi"),
		},
		locale,
	);

export const guideDreamAlternateLinks = (locale: Locale) =>
	buildAlternateLinks(
		{
			en: guideDreamPath("en"),
			"zh-cn": guideDreamPath("zh-cn"),
			fa: guideDreamPath("fa"),
			fr: guideDreamPath("fr"),
			id: guideDreamPath("id"),
			ja: guideDreamPath("ja"),
			vi: guideDreamPath("vi"),
		},
		locale,
	);

export const homeSeo: Record<Locale, PageSeo> = {
	en: {
		title: "Her Trees – Indie Puzzle Series Hub",
		description:
			"Independent fan hub for Stone’s HER TREES puzzle series. Open the play pages for First Puzzle (A Forgotten House), The Puzzle House, and Puzzle Dream, or use the walkthroughs when you get stuck. Not an official publisher site.",
		h1: "Her Trees – Indie Puzzle Series Hub",
	},
	"zh-cn": {
		title: "Her Trees – 独立解谜系列导航",
		description:
			"独立整理的 Her Trees（Stone）解谜系列导航站。请分别进入 First Puzzle（A Forgotten House）、The Puzzle House、Puzzle Dream 游玩专页；卡关可查看对应攻略。本站不是官方主页，也没有官方手机版。",
		h1: "Her Trees – 独立解谜系列导航",
	},
	fa: {
		title: "Her Trees – پایگاه مجموعه پازل مستقل",
		description:
			"هاب مستقل مجموعه Her Trees اثر Stone. برای بازی به صفحات First Puzzle، The Puzzle House و Puzzle Dream بروید؛ راهنماها جدا هستند. نسخه رسمی موبایل وجود ندارد.",
		h1: "Her Trees – معرفی مجموعه پازل",
	},
	fr: {
		title: "Her Trees – Hub de la série puzzle indépendante",
		description:
			"Hub indépendant de la série HER TREES de Stone. Ouvrez les pages de jeu de First Puzzle, The Puzzle House et Puzzle Dream, ou les guides si vous êtes bloqué. Pas de version mobile officielle.",
		h1: "Her Trees – Hub de la série puzzle",
	},
	id: {
		title: "Her Trees – Hub Seri Puzzle Indie",
		description:
			"Hub independen untuk seri puzzle HER TREES karya Stone. Buka halaman main First Puzzle, The Puzzle House, dan Puzzle Dream, atau panduannya jika terjebak. Bukan situs resmi, tidak ada aplikasi seluler resmi.",
		h1: "Her Trees – Hub Seri Puzzle Indie",
	},
	ja: {
		title: "ハーツリーズ（Her Trees）– ブラウザで遊ぶ＆攻略ハブ",
		description:
			"Stone 作のインディーパズル「ハーツリーズ / Her Trees」の非公式案内ページ。First Puzzle、The Puzzle House、Puzzle Dream は各プレイページへ。詰まったら攻略ページをどうぞ。公式スマホ版はありません。",
		h1: "ハーツリーズ（Her Trees）シリーズ案内",
	},
	vi: {
		title: "Her Trees – Cổng series puzzle indie",
		description:
			"Trang độc lập về series puzzle HER TREES của Stone. Vào trang chơi First Puzzle, The Puzzle House và Puzzle Dream, hoặc xem hướng dẫn khi bị kẹt. Không phải trang chính thức, không có ứng dụng mobile chính thức.",
		h1: "Her Trees – Cổng series puzzle indie",
	},
};

export const playDreamSeo: Record<Locale, PageSeo> = {
	en: {
		title: "Her Trees: Puzzle Dream – Play Online Free & Guide",
		description:
			"Play Her Trees: Puzzle Dream free in your browser — 40+ hand-drawn monochrome puzzles. Mobile landscape supported, plus Steam, iOS & walkthrough links.",
		h1: "Her Trees: Puzzle Dream",
	},
	"zh-cn": {
		title: "在线游玩 Her Trees: Puzzle Dream",
		description:
			"在浏览器游玩 Her Trees: Puzzle Dream（系列第三作、目前体量最大的一作，40 多个手绘谜题）。这是本站的 Puzzle Dream 游玩专页。没有官方手机应用，手机请横屏用浏览器。卡关请看攻略页。",
		h1: "Her Trees Puzzle Dream",
	},
	fa: {
		title: "بازی آنلاین Her Trees: Puzzle Dream",
		description:
			"Puzzle Dream را در مرورگر بازی کنید — اثر سوم و در حال حاضر بزرگ‌ترین اثر مجموعه، با بیش از ۴۰ پازل. صفحه اختصاصی بازی است. اپ رسمی موبایل وجود ندارد؛ در گوشی مرورگر را افقی کنید.",
		h1: "Her Trees Puzzle Dream",
	},
	fr: {
		title: "Jouer à Her Trees : Puzzle Dream en ligne",
		description:
			"Jouez à Her Trees : Puzzle Dream dans le navigateur — troisième et actuellement plus grand jeu de la série, plus de 40 puzzles. Page de jeu dédiée. Pas d’appli mobile officielle ; sur téléphone, utilisez le navigateur en paysage.",
		h1: "Her Trees Puzzle Dream",
	},
	id: {
		title: "Mainkan Her Trees: Puzzle Dream Online",
		description:
			"Mainkan Her Trees: Puzzle Dream di browser — game ketiga dan yang terbesar saat ini, 40+ puzzle. Ini halaman main khusus. Tidak ada aplikasi seluler resmi; di HP gunakan browser mode lanskap.",
		h1: "Her Trees Puzzle Dream",
	},
	ja: {
		title: "ハーツリーズ Puzzle Dream をオンラインで遊ぶ",
		description:
			"ハーツリーズ（Her Trees）: Puzzle Dream をブラウザでプレイ。シリーズ第3作で、現時点で最もボリュームが大きく、40以上の手描きパズル。このページが専用プレイページです。公式スマホアプリはなく、端末では横画面のブラウザを使います。詰まったら攻略へ。",
		h1: "ハーツリーズ Puzzle Dream",
	},
	vi: {
		title: "Chơi Her Trees: Puzzle Dream Online",
		description:
			"Chơi Her Trees: Puzzle Dream trên trình duyệt — phần thứ ba và hiện là phần lớn nhất, hơn 40 câu đố. Đây là trang chơi riêng. Không có ứng dụng mobile chính thức; trên điện thoại hãy xoay ngang trình duyệt.",
		h1: "Her Trees Puzzle Dream",
	},
};

export const playHouseSeo: Record<Locale, PageSeo> = {
	en: {
		title: "Play Her Trees: The Puzzle House Online",
		description:
			"Play Her Trees: The Puzzle House in your browser — the compact middle game between First Puzzle and Puzzle Dream. This is the dedicated play page. Official release is on Steam; there is no official console or smartphone port on this site.",
		h1: "Her Trees The Puzzle House",
	},
	"zh-cn": {
		title: "在线游玩 Her Trees: The Puzzle House",
		description:
			"在浏览器游玩 Her Trees: The Puzzle House（介于 First Puzzle 与 Puzzle Dream 之间的短篇）。这是本站的 Puzzle House 游玩专页。正式版在 Steam 发售，本站不提供官方主机或手机移植。",
		h1: "Her Trees The Puzzle House",
	},
	fa: {
		title: "بازی آنلاین Her Trees: The Puzzle House",
		description:
			"The Puzzle House را در مرورگر بازی کنید — اثر میانی بین First Puzzle و Puzzle Dream. صفحه اختصاصی بازی است. نسخه رسمی در Steam است؛ پورت رسمی کنسول یا موبایل در این سایت نیست.",
		h1: "Her Trees The Puzzle House",
	},
	fr: {
		title: "Jouer à Her Trees : The Puzzle House en ligne",
		description:
			"Jouez à Her Trees : The Puzzle House dans le navigateur — l’épisode compact entre First Puzzle et Puzzle Dream. Page de jeu dédiée. Sortie officielle sur Steam ; pas de portage console ou mobile officiel ici.",
		h1: "Her Trees The Puzzle House",
	},
	id: {
		title: "Mainkan Her Trees: The Puzzle House Online",
		description:
			"Mainkan Her Trees: The Puzzle House di browser — game tengah yang ringkas antara First Puzzle dan Puzzle Dream. Ini halaman main khusus. Rilis resmi di Steam; tidak ada port konsol atau seluler resmi di situs ini.",
		h1: "Her Trees The Puzzle House",
	},
	ja: {
		title: "ハーツリーズ The Puzzle House をオンラインで遊ぶ",
		description:
			"ハーツリーズ（Her Trees）: The Puzzle House をブラウザでプレイ。First Puzzle と Puzzle Dream の間にある短編です。このページが専用プレイページ。公式は Steam 発売で、公式の据え置き機・スマホ版はありません。",
		h1: "ハーツリーズ The Puzzle House",
	},
	vi: {
		title: "Chơi Her Trees: The Puzzle House Online",
		description:
			"Chơi Her Trees: The Puzzle House trên trình duyệt — phần giữa ngắn gọn giữa First Puzzle và Puzzle Dream. Đây là trang chơi riêng. Bản chính thức trên Steam; không có bản máy console hay điện thoại chính thức tại đây.",
		h1: "Her Trees The Puzzle House",
	},
};

export const playFirstSeo: Record<Locale, PageSeo> = {
	en: {
		title: "Play Her Trees: First Puzzle (A Forgotten House) Online",
		description:
			"Play Her Trees: First Puzzle — also searched as A Forgotten House — free in your browser. This is the canonical play page for those queries. Shortest entry in the series; no download required. Open the walkthrough if you get stuck, then continue to The Puzzle House or Puzzle Dream.",
		h1: "Her Trees: First Puzzle (A Forgotten House)",
	},
	"zh-cn": {
		title: "在线游玩 Her Trees: First Puzzle（A Forgotten House）",
		description:
			"在浏览器免费游玩 Her Trees: First Puzzle（也常被搜作 A Forgotten House）。这是该词的游玩落地页，系列最短的一作，无需下载。卡关请看攻略，然后再去 Puzzle House 或 Puzzle Dream。",
		h1: "Her Trees: First Puzzle（A Forgotten House）",
	},
	fa: {
		title: "بازی آنلاین Her Trees: First Puzzle (A Forgotten House)",
		description:
			"First Puzzle را رایگان در مرورگر بازی کنید — گاهی با نام A Forgotten House جستجو می‌شود. این صفحهٔ اصلی بازی برای آن عبارت‌هاست. کوتاه‌ترین اثر مجموعه، بدون دانلود.",
		h1: "Her Trees: First Puzzle (A Forgotten House)",
	},
	fr: {
		title: "Jouer à Her Trees : First Puzzle (A Forgotten House) en ligne",
		description:
			"Jouez gratuitement à Her Trees : First Puzzle (aussi cherché comme A Forgotten House) dans le navigateur. Page de jeu canonique pour ces requêtes. Entrée la plus courte, sans téléchargement.",
		h1: "Her Trees : First Puzzle (A Forgotten House)",
	},
	id: {
		title: "Mainkan Her Trees: First Puzzle (A Forgotten House) Online",
		description:
			"Mainkan Her Trees: First Puzzle — juga dicari sebagai A Forgotten House — gratis di browser. Ini halaman main kanonis untuk kueri itu. Entri terpendek, tanpa unduhan.",
		h1: "Her Trees: First Puzzle (A Forgotten House)",
	},
	ja: {
		title: "ハーツリーズ First Puzzle（A Forgotten House）をオンラインで遊ぶ",
		description:
			"ハーツリーズ（Her Trees）: First Puzzle（A Forgotten House としても検索される）をブラウザで無料プレイ。このページが専用のプレイページです。シリーズ最短で、ダウンロード不要。詰まったら攻略へ。",
		h1: "ハーツリーズ First Puzzle（A Forgotten House）",
	},
	vi: {
		title: "Chơi Her Trees: First Puzzle (A Forgotten House) Online",
		description:
			"Chơi miễn phí Her Trees: First Puzzle — cũng được tìm với tên A Forgotten House — trên trình duyệt. Đây là trang chơi chuẩn cho các truy vấn đó. Phần ngắn nhất, không cần tải.",
		h1: "Her Trees: First Puzzle (A Forgotten House)",
	},
};

export const guideFirstSeo: Record<Locale, PageSeo> = {
	en: {
		title: "Her Trees First Puzzle Walkthrough & Forgotten House Guide",
		description:
			"Her Trees First Puzzle walkthrough with section hints, step-by-step method, and the video guide. Also covers A Forgotten House walkthrough searches. Try the room yourself first, then use spoilers only when stuck.",
		h1: "Her Trees Walkthrough – First Puzzle & Forgotten House",
	},
	"zh-cn": {
		title: "Her Trees First Puzzle 攻略（含 A Forgotten House）",
		description:
			"Her Trees First Puzzle 文字攻略：先给分区提示，再给逐步解法思路，并附视频。也覆盖 A Forgotten House 相关搜索。建议先自己观察房间，卡关再用提示或视频。",
		h1: "Her Trees First Puzzle 攻略（A Forgotten House）",
	},
	fa: {
		title: "راهنمای Her Trees First Puzzle و A Forgotten House",
		description:
			"راهنمای First Puzzle با اشاره‌های بخش‌به‌بخش، روش گام‌به‌گام و ویدیو. جستجوهای A Forgotten House را هم پوشش می‌دهد. اول خودتان اتاق را امتحان کنید.",
		h1: "راهنمای Her Trees – First Puzzle",
	},
	fr: {
		title: "Guide Her Trees First Puzzle et A Forgotten House",
		description:
			"Walkthrough de Her Trees First Puzzle : indices par section, méthode étape par étape, puis vidéo. Couvre aussi les recherches A Forgotten House. Essayez d’abord la pièce vous-même.",
		h1: "Guide Her Trees – First Puzzle & Forgotten House",
	},
	id: {
		title: "Panduan Her Trees First Puzzle & A Forgotten House",
		description:
			"Walkthrough Her Trees First Puzzle: petunjuk per bagian, metode langkah demi langkah, plus video. Juga untuk pencarian A Forgotten House. Coba ruangan sendiri dulu.",
		h1: "Panduan Her Trees – First Puzzle & Forgotten House",
	},
	ja: {
		title: "ハーツリーズ First Puzzle 攻略（A Forgotten House）",
		description:
			"ハーツリーズ（Her Trees）First Puzzle の攻略。区画ごとのヒント、手順の考え方、そして攻略動画。A Forgotten House の検索にも対応。まずは自分で部屋を観察し、詰まったらヒントや動画を使ってください。",
		h1: "ハーツリーズ First Puzzle 攻略（A Forgotten House）",
	},
	vi: {
		title: "Hướng dẫn Her Trees First Puzzle & A Forgotten House",
		description:
			"Walkthrough Her Trees First Puzzle: gợi ý theo khu vực, cách làm từng bước, kèm video. Cũng cho tìm kiếm A Forgotten House. Hãy tự thử phòng trước khi xem spoiler.",
		h1: "Hướng dẫn Her Trees – First Puzzle & Forgotten House",
	},
};

export const guideDreamSeo: Record<Locale, PageSeo> = {
	en: {
		title: "Her Trees: Puzzle Dream Walkthrough, Answers & Guide",
		description:
			"Complete Her Trees: Puzzle Dream walkthrough, keypad answers & spoiler-free hints by area. Includes 100% video guide, playtime, and Steam/iOS/browser info.",
		h1: "Her Trees: Puzzle Dream Walkthrough & Answers",
	},
	"zh-cn": {
		title: "Her Trees: Puzzle Dream 全关卡通关攻略与密码答案",
		description:
			"Her Trees: Puzzle Dream 完整图文攻略与各区域密码答案：先看无剧透提示，再展开解答与 100% 通关视频，附时长说明与在线游玩入口。",
		h1: "Her Trees: Puzzle Dream 攻略与答案",
	},
	fa: {
		title: "راهنمای کامل و پاسخ‌های Her Trees: Puzzle Dream",
		description:
			"راهنمای مرحله‌به‌مرحله Her Trees: Puzzle Dream و کدهای صفحه کلید بر اساس بخش: نکات بدون اسپویلر، ویدیوی ۱۰۰٪ و پرسش‌های متداول بازی.",
		h1: "راهنمای کامل و پاسخ‌های Her Trees: Puzzle Dream",
	},
	fr: {
		title: "Her Trees: Puzzle Dream – Guide, Solution et Réponses",
		description:
			"Solution complète de Her Trees: Puzzle Dream par zone : indices sans spoiler, codes du clavier, vidéo 100 % et FAQ (durée, iOS, Steam, navigateur).",
		h1: "Her Trees: Puzzle Dream – Guide et Réponses",
	},
	id: {
		title: "Her Trees: Puzzle Dream – Panduan, Walkthrough & Jawaban",
		description:
			"Panduan lengkap Her Trees: Puzzle Dream per area: petunjuk bebas spoiler, kode keypad, video walkthrough 100%, serta FAQ durasi main dan platform.",
		h1: "Her Trees: Puzzle Dream – Panduan dan Jawaban",
	},
	ja: {
		title: "ハーツリーズ Puzzle Dream 完全攻略・答え・ヒントまとめ",
		description:
			"Her Trees: Puzzle Dream のエリア別攻略とキーパッド解答一覧。ネタバレ控えめのヒント、100%攻略動画、プレイ時間やSteam/iOS/ブラウザ版FAQも掲載。",
		h1: "ハーツリーズ Puzzle Dream 攻略と答え",
	},
	vi: {
		title: "Her Trees: Puzzle Dream – Hướng dẫn, Walkthrough & Đáp án",
		description:
			"Hướng dẫn đầy đủ Her Trees: Puzzle Dream theo từng khu vực: gợi ý tránh spoiler, mã keypad, video 100% và FAQ thời lượng chơi, iOS, Steam, trình duyệt.",
		h1: "Her Trees: Puzzle Dream – Hướng dẫn và Đáp án",
	},
};

export const guideHouseSeo: Record<Locale, PageSeo> = {
	en: {
		title: "Her Trees The Puzzle House Walkthrough and Answers",
		description:
			"Her Trees The Puzzle House walkthrough and keypad answers, grouped by area (Tutorial, Toy House, Cabinet, and more). Use section hints first, then the codes or the video. Links back to the play page.",
		h1: "Her Trees The Puzzle House Walkthrough and Answers",
	},
	"zh-cn": {
		title: "Her Trees The Puzzle House 攻略与答案",
		description:
			"Her Trees The Puzzle House 文字攻略与键盘答案，按教程、玩具屋、柜子等区域整理。先看分区提示，卡住再展开答案或视频。可返回游玩页。",
		h1: "Her Trees The Puzzle House 攻略与答案",
	},
	fa: {
		title: "راهنما و پاسخ‌های Her Trees The Puzzle House",
		description:
			"راهنمای The Puzzle House و پاسخ‌های صفحه کلید بر اساس بخش. ابتدا اشاره‌ها، سپس کدها یا ویدیو. لینک بازگشت به صفحه بازی.",
		h1: "راهنما و پاسخ‌های Her Trees The Puzzle House",
	},
	fr: {
		title: "Guide et réponses Her Trees The Puzzle House",
		description:
			"Walkthrough de The Puzzle House et codes du clavier par zone. Indices d’abord, puis les réponses ou la vidéo. Lien vers la page de jeu.",
		h1: "Guide et réponses Her Trees The Puzzle House",
	},
	id: {
		title: "Panduan dan Jawaban Her Trees The Puzzle House",
		description:
			"Walkthrough The Puzzle House dan kode keypad per area. Petunjuk dulu, lalu jawaban atau video. Tautan kembali ke halaman main.",
		h1: "Panduan dan Jawaban Her Trees The Puzzle House",
	},
	ja: {
		title: "ハーツリーズ The Puzzle House 攻略と答え",
		description:
			"ハーツリーズ（Her Trees）The Puzzle House の攻略とキーパッド解答。チュートリアル、おもちゃの家、キャビネットなどエリア別。まずはヒント、詰まったら解答や動画を。プレイページへ戻れます。",
		h1: "ハーツリーズ The Puzzle House 攻略と答え",
	},
	vi: {
		title: "Hướng dẫn và đáp án Her Trees The Puzzle House",
		description:
			"Walkthrough The Puzzle House và mã keypad theo khu vực. Gợi ý trước, rồi đáp án hoặc video. Có liên kết về trang chơi.",
		h1: "Hướng dẫn và đáp án Her Trees The Puzzle House",
	},
};

export const aboutSeo: PageSeo = {
	title: "About This Site",
	description:
		"About treespuzzle.com: an independent fan hub for Stone’s HER TREES puzzle series. We organize play pages and walkthroughs; we are not the official publisher or developer site.",
	h1: "About This Site",
};

export const pageSeoUpdated = "2026-11-11";
