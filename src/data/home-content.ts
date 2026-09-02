export type Locale = 'zh-cn' | 'en' | 'fa' | 'fr' | 'id' | 'ja' | 'vi';

export type HomeContent = {
	lang: string;
	path: string;
	guidePath: string;
	siteName: string;
	pageTitle: string;
	pageDescription: string;
	guidePageTitle: string;
	guidePageDescription: string;
	headerIntro: string;
	heroH1: string;
	playHeading: string;
	playButton: string;
	guideButton: string;
	iframeTitle: string;
	guideIframeTitle: string;
	gameIntro: string;
	fullscreenButton: string;
	rotateHint: string;
	backHomeLabel: string;
	introHeading: string;
	introParagraphs: string[];
	positioningHeading: string;
	positioningPoints: string[];
	startHeading: string;
	startItems: Array<{
		title: string;
		copy: string;
	}>;
	seriesHeading: string;
	compareHeading: string;
	compareColumns: {
		game: string;
		platform: string;
		playtime: string;
		access: string;
		bestFor: string;
	};
	comparisonRows: Array<{
		game: string;
		platform: string;
		playtime: string;
		access: string;
		bestFor: string;
	}>;
	whyHeading: string;
	sellingPointsHeading: string;
	videoLabel: string;
	analysisStrong: string;
	analysisBody: string;
	audienceHeading: string;
	audienceItems: string[];
	faqHeading: string;
	footerCopy: string;
	languageSwitchLabel: string;
	games: Array<{
		title: string;
		meta: string;
		alt: string;
		copy: string;
	}>;
	highlights: Array<{
		title: string;
		copy: string;
	}>;
	faqs: Array<{
		question: string;
		answer: string;
	}>;
};

export const localeOrder: Locale[] = ['en', 'zh-cn', 'fa', 'fr', 'id', 'ja', 'vi'];

export const languageLabels: Record<Locale, string> = {
	'zh-cn': '中文',
	en: 'English',
	fa: 'فارسی',
	fr: 'Français',
	id: 'Bahasa Indonesia',
	ja: '日本語',
	vi: 'Tiếng Việt',
};

export const homeContent: Record<Locale, HomeContent> = {
	'zh-cn': {
		lang: 'zh-CN',
		path: '/zh-cn/',
		guidePath: '/zh-cn/guide/',
		siteName: 'Her Trees Puzzle Game',
		pageTitle: 'Her Trees Puzzle Dream - 浏览器免费玩（无需下载）',
		pageDescription:
			'免费在浏览器玩 Her Trees Puzzle Dream，不用下载。40 多个黑白手绘谜题，移动和组合物体即可。Puzzle House 和 First Puzzle 也在本站。',
		guidePageTitle: 'Her Trees First Puzzle Walkthrough',
		guidePageDescription: '本页是 First Puzzle 视频攻略。Her Trees Puzzle Dream 和 Puzzle House 的键盘答案在各自攻略页。',
		headerIntro:
			'是一款独特的解谜游戏系列，玩家通过移动和组合物品来解谜。揭开这间奇特房间的奥秘。',
		heroH1: 'Her Trees Puzzle Dream — 浏览器免费树木解谜',
		playHeading: '在线游玩 HER TREES : PUZZLE DREAM',
		playButton: '开始 Puzzle Dream',
		guideButton: '点击查看攻略',
		iframeTitle: 'HER TREES : PUZZLE DREAM 在线试玩',
		guideIframeTitle: 'HER TREES 攻略视频',
		gameIntro: '玩法很简单：用鼠标拖动物件并观察它们之间的关系，然后在右侧点击对应密码来解开谜题。',
		fullscreenButton: '全屏游玩',
		rotateHint: '如果没有自动横屏，请打开手机自动旋转，或手动将设备横过来游玩。',
		backHomeLabel: '返回首页',
		introHeading: 'HER TREES 是什么',
		introParagraphs: [
			'HER TREES 是独立开发者 Stone 创作的解谜游戏系列，核心玩法不是传统找物或复杂道具管理，而是通过移动、摆放与组合画面中的对象来推动谜题。',
			'整个系列以黑白手绘、低文本或无文本表达、梦境与超现实氛围为主要特征，更强调观察、空间关系与直觉理解，而不是繁琐计算或大量记笔记。',
		],
		positioningHeading: '这个系列的体验定位',
		positioningPoints: [
			'观察驱动的点按式谜题体验，重视图形关系和空间联动。',
			'房间与场景本身就是谜题结构的一部分，答案往往藏在摆放顺序与邻接关系里。',
			'低门槛但有顿悟感，不需要复杂数值推导，也不靠长篇文本说明。',
			'整体更像一本安静的黑白绘本，被做成了可以亲手操作的独立解谜作品。',
		],
		startHeading: '新玩家从哪一部开始',
		startItems: [
			{
				title: '想先免费体验系列风格',
				copy: '从 HER TREES : First Puzzle 开始最合适。它是系列起点，时长短、上手快，也最能直接感受到“移动 + 组合”式解谜的核心玩法。',
			},
			{
				title: '想直接玩完成度更高的作品',
				copy: '可以从 HER TREES : THE PUZZLE HOUSE 或 HER TREES : PUZZLE DREAM 开始。第二作和第三作都适合新玩家直接进入，不必强制按顺序补前作。',
			},
			{
				title: '想先看体量和代表性',
				copy: 'THE PUZZLE HOUSE 更像系列代表作，PUZZLE DREAM 则是目前内容量最大、谜题数量最多的一部，并且还提供 Demo 入口。',
			},
		],
		seriesHeading: 'Play More Game',
		compareHeading: '三部作品快速对比',
		compareColumns: {
			game: '作品',
			platform: '平台',
			playtime: '时长',
			access: '入口特点',
			bestFor: '适合谁先玩',
		},
		comparisonRows: [
			{
				game: 'HER TREES : First Puzzle',
				platform: 'HTML5 / Windows',
				playtime: '约 1 小时',
				access: '免费游玩，可直接在浏览器体验',
				bestFor: '想零门槛入坑、快速感受系列气质的玩家',
			},
			{
				game: 'HER TREES : THE PUZZLE HOUSE',
				platform: 'Steam',
				playtime: '约 1 小时',
				access: '正式作品，提供提示与答案',
				bestFor: '想先玩系列代表作、偏好完整短篇体验的玩家',
			},
			{
				game: 'HER TREES : PUZZLE DREAM',
				platform: 'Steam / itch.io Demo',
				playtime: '1.5 到 3 小时',
				access: '40+ 谜题，正式版加 Demo 双入口',
				bestFor: '想要更完整内容量，或想先试玩 Demo 再决定的玩家',
			},
		],
		whyHeading: '这个系列为什么值得玩',
		sellingPointsHeading: '核心卖点',
		videoLabel: 'HER TREES 解谜动画演示',
		analysisStrong: '先观察，再理解。',
		analysisBody:
			'HER TREES 把整个画面本身当作规则的一部分。形状、摆放位置、顺序和相邻关系往往比对白更重要，因此每次解开谜题更像是发现，而不是照着说明执行。',
		audienceHeading: '这系列适合谁',
		audienceItems: [
			'喜欢观察、图形关系、空间联动谜题的玩家。',
			'喜欢短流程、完成感强、一次可以专注打完的独立游戏玩家。',
			'偏好黑白手绘、梦境、超现实、安静氛围的用户。',
			'不喜欢大段文字、复杂教程或说明书式引导的玩家。',
			'希望玩到不依赖颜色识别和声音机制的解谜作品的用户。',
			'喜欢 Rusty Lake、Cube Escape、房间谜题气质，但希望整体表达更安静、更抽象的玩家。',
		],
		faqHeading: '常见问题',
		footerCopy: '独立整理的 HER TREES 系列信息与试玩首页。',
		games: [
			{
				title: 'HER TREES : First Puzzle',
				meta: 'HTML5 / Windows · 约 1 小时 · 免费游玩',
				alt: 'HER TREES : First Puzzle 游戏截图',
				copy: '系列第一作奠定了整体气质：房间式谜题、黑白手绘场景，以及通过移动和组合物件来找到答案的解谜方式。',
			},
			{
				title: 'HER TREES : THE PUZZLE HOUSE',
				meta: 'Steam · 2024 年 2 月 29 日发售 · 约 1 小时',
				alt: 'HER TREES : THE PUZZLE HOUSE 游戏截图',
				copy: '一座短小但完整的超现实谜题屋，用符号、空间逻辑与细致观察替代大量文字说明和复杂机制。',
			},
			{
				title: 'HER TREES : PUZZLE DREAM',
				meta: 'Steam / itch.io Demo · 2026 年 2 月 10 日发售 · 1.5 到 3 小时',
				alt: 'HER TREES : PUZZLE DREAM 游戏截图',
				copy: '目前体量最大的一作，在保持系列安静直观风格的同时，把体验扩展成包含 40 多个谜题的梦境旅程。',
			},
			{
				title: 'Trees Hate You',
				meta: 'Windows / Web Demo · Rage Comedy Game',
				alt: 'Trees Hate You 游戏截图',
				copy: '一款风格完全不同的恶搞陷阱游戏：森林会主动针对玩家，靠高速重开、恶意路标和直播效果制造连续的挫败与笑点。',
			},
		],
		highlights: [
			{
				title: '移动与组合的解谜逻辑',
				copy: 'HER TREES 的乐趣不在于传统道具管理，而在于重新摆放和组合画面元素，直到隐藏规则自己浮现出来。',
			},
			{
				title: '低文本、低门槛',
				copy: '这个系列主要通过图像、形状和空间关系来传达信息，不依赖大量文本、颜色识别或声音提示。',
			},
			{
				title: '短流程但完整',
				copy: '多数作品都可以在一次专注游玩中完成，既有完整闭环，又不需要投入很长时间。',
			},
			{
				title: '不依赖复杂计算或记笔记',
				copy: '公开信息多次强调，系列更看重观察和直觉，不要求繁琐计算，也不是那种必须边玩边做表格的谜题设计。',
			},
			{
				title: '非语言化表达，跨语言更友好',
				copy: '第二作和第三作明确强调 non-verbal，第一作也带有 textless 属性，因此即使不靠大量文字说明，仍能完整传达玩法与氛围。',
			},
			{
				title: '可访问性优势清晰',
				copy: '公开资料显示，系列不依赖颜色识别和声音解谜；第一作还标注了色盲友好、单按钮、无文本等特征。',
			},
		],
		faqs: [
			{
				question: 'HER TREES 是什么类型的游戏？',
				answer: 'HER TREES 是一个以观察、物件移动和视觉组合为核心的手绘解谜系列，介于密室、点击解谜和超现实艺术谜题之间。',
			},
			{
				question: '需要按顺序游玩吗？',
				answer: '不需要。后续作品也适合新玩家直接上手，如果想完整体验系列演变，再回头玩前作即可。',
			},
			{
				question: 'HER TREES 会不会很多文字、很难看懂？',
				answer: '不会。这个系列刻意保持低文本甚至接近无语言表达，推进主要依赖你观察场景中的关联，而不是阅读说明。',
			},
			{
				question: '这系列适合什么玩家？',
				answer: '适合喜欢短篇氛围解谜、难度曲线平缓、并享受通过观察而不是讲解来理解规则的玩家。',
			},
			{
				question: 'HER TREES 可以免费玩吗？',
				answer: '可以。First Puzzle、Puzzle House 和 Puzzle Dream 都能在本站浏览器里免费玩，不用下载。Steam 上的是另一份付费版本。',
			},
			{
				question: 'hertrees 或 her tree 是同一款游戏吗？',
				answer: '是的。有人会搜 hertrees、her tree、her trees game，指的都是本站的 HER TREES 系列。',
			},
			{
				question: '通关 HER TREES 需要多长时间？',
				answer: 'HER TREES : First Puzzle 大约 1 小时。THE PUZZLE HOUSE 大约 1 小时。PUZZLE DREAM 有 40 多个谜题，大约 1.5 到 3 小时。',
			},
		],
		languageSwitchLabel: '切换语言',
	},
	en: {
		lang: 'en',
		path: '/',
		guidePath: '/guide/',
		siteName: 'Her Trees Puzzle Game',
		pageTitle: 'Her Trees Puzzle Dream - Play Free Online (No Download)',
		pageDescription:
			'Play Her Trees Puzzle Dream free in your browser — no download. 40+ puzzles, keypad walkthrough, and Android browser play. Puzzle House and First Puzzle are here too.',
		guidePageTitle: 'Her Trees First Puzzle Walkthrough',
		guidePageDescription: 'Video walkthrough for Her Trees First Puzzle. Keypad answers for Her Trees Puzzle Dream and Puzzle House are on their own guide pages.',
		headerIntro:
			'An unusual puzzle game series where you solve mysteries by moving and combining objects inside strange, hand-drawn rooms.',
		heroH1: 'Her Trees Puzzle Dream — Play Free in Your Browser',
		playHeading: 'Play HER TREES : PUZZLE DREAM Online',
		playButton: 'Start Puzzle Dream',
		guideButton: 'View Guide',
		iframeTitle: 'HER TREES : PUZZLE DREAM online',
		guideIframeTitle: 'HER TREES guide video',
		gameIntro:
			'The idea is simple: drag objects with your mouse, study how they relate to each other, and click the matching code on the right to solve the room.',
		fullscreenButton: 'Fullscreen',
		rotateHint:
			'If the game does not switch to landscape automatically, turn on auto-rotate or rotate your phone manually.',
		backHomeLabel: 'Back to Home',
		introHeading: 'What HER TREES Is',
		introParagraphs: [
			'HER TREES is a puzzle game series by the independent creator Stone. Its core interaction is not traditional hidden object play or heavy inventory management, but solving rooms by moving, arranging, and combining the objects already inside the scene.',
			'Across the series, the identity stays consistent: black-and-white hand-drawn art, low-text or textless presentation, dreamlike surreal atmosphere, and puzzle design built around observation, spatial relationships, and intuition instead of complex calculation.',
		],
		positioningHeading: 'How The Series Feels To Play',
		positioningPoints: [
			'Observation-driven point-and-click puzzle design centered on shapes, symbols, and spatial relationships.',
			'Rooms and scenes function as puzzle structures themselves, with answers hidden in placement, order, and adjacency.',
			'Low friction but still capable of real aha moments, without requiring difficult math or pages of notes.',
			'The overall tone feels closer to an interactive black-and-white picture book than a noisy conventional puzzle game.',
		],
		startHeading: 'Where New Players Should Start',
		startItems: [
			{
				title: 'If you want a free first taste',
				copy: 'Start with HER TREES : First Puzzle. It is the series entry point, short enough to finish in one sitting, and the clearest introduction to the move-and-combine puzzle logic.',
			},
			{
				title: 'If you want a more complete standalone game',
				copy: 'Start with HER TREES : THE PUZZLE HOUSE or HER TREES : PUZZLE DREAM. Both later entries are described as approachable even if you have never played the earlier games.',
			},
			{
				title: 'If you care most about scale',
				copy: 'THE PUZZLE HOUSE works well as a representative short-form entry, while PUZZLE DREAM is the largest game so far and also offers a demo path for cautious newcomers.',
			},
		],
		seriesHeading: 'Play More Game',
		compareHeading: 'Quick Comparison Of The Three Games',
		compareColumns: {
			game: 'Game',
			platform: 'Platform',
			playtime: 'Playtime',
			access: 'Access',
			bestFor: 'Best First For',
		},
		comparisonRows: [
			{
				game: 'HER TREES : First Puzzle',
				platform: 'HTML5 / Windows',
				playtime: 'About 1 hour',
				access: 'Free to play and playable in the browser',
				bestFor: 'Players who want the easiest possible entry point',
			},
			{
				game: 'HER TREES : THE PUZZLE HOUSE',
				platform: 'Steam',
				playtime: 'About 1 hour',
				access: 'Full release with hints and answers',
				bestFor: 'Players who want the most representative compact game',
			},
			{
				game: 'HER TREES : PUZZLE DREAM',
				platform: 'Steam / itch.io Demo',
				playtime: '1.5 to 3 hours',
				access: 'Largest entry so far with 40+ puzzles and a demo',
				bestFor: 'Players who want the fullest version of the formula',
			},
		],
		whyHeading: 'Why This Series Is Worth Playing',
		sellingPointsHeading: 'Core Strengths',
		videoLabel: 'HER TREES puzzle animation demo',
		analysisStrong: 'Observe first, understand after.',
		analysisBody:
			'HER TREES treats the whole screen as part of the rule set. Shapes, placement, sequence, and adjacency matter more than dialogue, so each solution feels discovered rather than instructed.',
		audienceHeading: 'Who This Series Fits Best',
		audienceItems: [
			'Players who enjoy observation, pattern recognition, and spatial puzzle logic.',
			'People looking for short indie games with a strong sense of completion.',
			'Anyone drawn to black-and-white, dreamlike, surreal, and quiet visual design.',
			'Players who do not want long tutorials or walls of text.',
			'People seeking puzzle games that do not rely on color recognition or audio clues.',
			'Fans of Rusty Lake, Cube Escape, or room-puzzle games who want something calmer and more abstract.',
		],
		faqHeading: 'FAQ',
		footerCopy: 'Independent landing page and playable overview for the HER TREES series.',
		games: [
			{
				title: 'HER TREES : First Puzzle',
				meta: 'HTML5 / Windows · About 1 hour · Free to play',
				alt: 'Screenshot from HER TREES : First Puzzle',
				copy: 'The first game defines the tone of the series: room-scale puzzles, black-and-white hand-drawn scenes, and solutions built from moving and combining objects.',
			},
			{
				title: 'HER TREES : THE PUZZLE HOUSE',
				meta: 'HTML5 / Steam · About 1 hour · Play free in browser',
				alt: 'Screenshot from HER TREES : THE PUZZLE HOUSE',
				copy: 'Play HER TREES : THE PUZZLE HOUSE free in your browser — no download. A compact surreal puzzle house built on symbols, spatial logic, and observation.',
			},
			{
				title: 'HER TREES : PUZZLE DREAM',
				meta: 'HTML5 / Steam · 1.5 to 3 hours · Play free in browser',
				alt: 'Screenshot from HER TREES : PUZZLE DREAM',
				copy: 'Play HER TREES : PUZZLE DREAM free in your browser — no download. 40+ hand-drawn puzzles in the largest entry of the series.',
			},
			{
				title: 'Trees Hate You',
				meta: 'Windows / Web Demo · Rage Comedy Game',
				alt: 'Screenshot from Trees Hate You',
				copy: 'A very different pick from the HER TREES series pages: a fast-restart comedy trap game where the forest itself is the joke, the threat, and the punchline.',
			},
		],
		highlights: [
			{
				title: 'Puzzle logic built on movement and combinations',
				copy: 'The appeal of HER TREES is not inventory management. It comes from rearranging elements until the hidden rule reveals itself.',
			},
			{
				title: 'Low text, low friction',
				copy: 'This series communicates mainly through images, shapes, and spatial relationships instead of long text, color dependency, or audio cues.',
			},
			{
				title: 'Short, but complete',
				copy: 'Most entries can be finished in one focused sitting, giving you a full arc without asking for a huge time commitment.',
			},
			{
				title: 'Built around intuition, not calculation',
				copy: 'Public descriptions repeatedly frame the series as observation-first puzzle design, so it is not the kind of game that expects heavy arithmetic or constant note taking.',
			},
			{
				title: 'Non-verbal by design',
				copy: 'Later entries explicitly describe themselves as non-verbal, and the first game also presents itself as text-light, which makes the series easier to approach across languages.',
			},
			{
				title: 'Clear accessibility advantages',
				copy: 'Publicly listed features note that the games do not rely on color recognition or audio-based puzzle solving, and the first game is marked as color-blind friendly, one-button, and textless.',
			},
		],
		faqs: [
			{
				question: 'What kind of game is HER TREES?',
				answer: 'HER TREES is a hand-drawn puzzle series focused on observation, object movement, and visual combinations, somewhere between room escape, point-and-click, and surreal art puzzle design.',
			},
			{
				question: 'Do I need to play the games in order?',
				answer: 'No. Later entries are still approachable for new players, and you can always return to the earlier games if you want to see how the series evolved.',
			},
			{
				question: 'Is there a lot of text to read?',
				answer: 'Not really. The series deliberately keeps language minimal, so progression comes mostly from noticing relationships in the scene rather than reading instructions.',
			},
			{
				question: 'Who is this series for?',
				answer: 'It works well for players who like short atmospheric puzzles, gentle difficulty curves, and figuring things out through observation rather than explicit tutorials.',
			},
			{
				question: 'Can I play HER TREES for free?',
				answer: 'Yes. First Puzzle, Puzzle House, and Puzzle Dream all play free in your browser on this site. No download. Steam sells separate paid builds of the later games.',
			},
			{
				question: 'Is hertrees or her tree the same game?',
				answer: 'Yes. People also search hertrees, her tree, and her trees game. They all refer to the HER TREES series on this site.',
			},
			{
				question: 'How long does it take to complete HER TREES?',
				answer: 'HER TREES : First Puzzle takes about 1 hour. THE PUZZLE HOUSE takes about 1 hour. PUZZLE DREAM takes 1.5-3 hours with 40+ puzzles.',
			},
			{
				question: 'Where can I play Her Trees Puzzle Dream online?',
				answer: 'Play Her Trees Puzzle Dream free in the browser on this homepage. No download. The dedicated play page is /play/puzzle-dream/ and the keypad answers are on /play/puzzle-dream/guide/.',
			},
			{
				question: 'Is there a Her Trees Puzzle Dream Android app?',
				answer: 'No official Android app. Play in your phone browser in landscape. Details: /play/puzzle-dream/android/.',
			},
		],
		languageSwitchLabel: 'Language',
	},
	fa: {
		lang: 'fa',
		path: '/fa/',
		guidePath: '/fa/guide/',
		siteName: 'Her Trees Puzzle Game',
		pageTitle: 'Her Trees Puzzle Dream - بازی رایگان در مرورگر (بدون دانلود)',
		pageDescription:
			'HER TREES را بازی کنید، مجموعه بازی پازلی مستقل با طراحی دستی. در اتاق‌های سورئال سیاه‌وسفید معماها را حل کنید. بازی رایگان مرورگر + Steam. ۹۵٪ مثبت.',
		guidePageTitle: 'ویدیوی راهنمای HER TREES : First Puzzle',
		guidePageDescription: 'این صفحه فقط راهنمای ویدیویی HER TREES : First Puzzle است. برای Puzzle Dream و Puzzle House صفحات راهنمای جداگانه را باز کنید.',
		headerIntro:
			'مجموعه‌ای از بازی‌های پازلی غیرمعمول که در آن معماها را با جابجایی و ترکیب اشیاء در اتاق‌های عجیب حل می‌کنید.',
		heroH1: 'Her Trees Puzzle Dream — بازی رایگان در مرورگر',
		playHeading: 'بازی آنلاین HER TREES : PUZZLE DREAM',
		playButton: 'شروع بازی',
		guideButton: 'مشاهده راهنما',
		iframeTitle: 'نسخه آنلاین HER TREES : PUZZLE DREAM',
		guideIframeTitle: 'ویدیوی راهنمای HER TREES',
		gameIntro:
			'روش بازی ساده است: اشیاء را با ماوس بکشید، ارتباط بین آن‌ها را مشاهده کنید و روی کد مربوطه در سمت راست کلیک کنید تا معما حل شود.',
		fullscreenButton: 'تمام صفحه',
		rotateHint:
			'اگر بازی خودکار به حالت افقی تغییر نکرد، چرخش خودکار را فعال کنید یا گوشی را دستی بچرخانید.',
		backHomeLabel: 'بازگشت به صفحه اصلی',
		introHeading: 'HER TREES چیست',
		introParagraphs: [
			'HER TREES مجموعه بازی‌های پازلی ساخته توسعه‌دهنده مستقل Stone است. تعامل اصلی آن نه جمع‌آوری آیتم سنتی و نه مدیریت پیچیده موجودی، بلکه حل اتاق‌ها از طریق جابجایی، چیدمان و ترکیب اشیاء داخل صحنه است.',
			'در سراسر مجموعه، هویت بصری ثابت است: طراحی دستی سیاه‌وسفید، متن کم یا بدون متن، فضای رویایی و سورئال، و طراحی پازل مبتنی بر مشاهده، روابط فضایی و شهود به جای محاسبات پیچیده.',
		],
		positioningHeading: 'ویژگی‌های تجربه این مجموعه',
		positioningPoints: [
			'طراحی پازل نقطه‌و‌کلیک مبتنی بر مشاهده، متمرکز بر اشکال، نمادها و روابط فضایی.',
			'اتاق‌ها و صحنه‌ها خود بخشی از ساختار پازل هستند، پاسخ‌ها در جایگذاری، ترتیب و مجاورت پنهان‌اند.',
			'ورود آسان اما با لحظات واقعی اورکا، بدون نیاز به محاسبات سخت یا یادداشت‌برداری طولانی.',
			'حس کلی بیشتر شبیه یک کتاب تصویری سیاه‌وسفید تعاملی است تا یک بازی پازلی پرسروصدا.',
		],
		startHeading: 'بازیکنان جدید از کجا شروع کنند',
		startItems: [
			{
				title: 'اگر می‌خواهید ابتدا رایگان امتحان کنید',
				copy: 'با HER TREES : First Puzzle شروع کنید. نقطه ورود مجموعه است، کوتاه و در یک نشست قابل اتمام، و واضح‌ترین معرفی برای منطق پازل مبتنی بر جابجایی و ترکیب.',
			},
			{
				title: 'اگر می‌خواهید مستقیماً بازی کامل‌تری را تجربه کنید',
				copy: 'با HER TREES : THE PUZZLE HOUSE یا HER TREES : PUZZLE DREAM شروع کنید. هر دو حتی برای بازیکنانی که نسخه‌های قبلی را بازی نکرده‌اند مناسب هستند.',
			},
			{
				title: 'اگر حجم محتوا برایتان مهم است',
				copy: 'THE PUZZLE HOUSE به‌عنوان یک ورودی کوتاه نماینده عالی است، در حالی که PUZZLE DREAM بزرگ‌ترین بازی مجموعه تاکنون است و مسیر دمو نیز دارد.',
			},
		],
		seriesHeading: 'Play More Game',
		compareHeading: 'مقایسه سریع سه بازی',
		compareColumns: {
			game: 'بازی',
			platform: 'پلتفرم',
			playtime: 'مدت زمان',
			access: 'دسترسی',
			bestFor: 'مناسب برای شروع',
		},
		comparisonRows: [
			{
				game: 'HER TREES : First Puzzle',
				platform: 'HTML5 / Windows',
				playtime: 'حدود ۱ ساعت',
				access: 'رایگان و قابل بازی در مرورگر',
				bestFor: 'کسانی که می‌خواهند آسان‌ترین نقطه ورود را داشته باشند',
			},
			{
				game: 'HER TREES : THE PUZZLE HOUSE',
				platform: 'Steam',
				playtime: 'حدود ۱ ساعت',
				access: 'نسخه کامل با راهنما و پاسخ',
				bestFor: 'کسانی که می‌خواهند بازی کوتاه نماینده مجموعه را اول بازی کنند',
			},
			{
				game: 'HER TREES : PUZZLE DREAM',
				platform: 'Steam / itch.io Demo',
				playtime: '۱.۵ تا ۳ ساعت',
				access: 'بزرگ‌ترین نسخه با بیش از ۴۰ پازل و دمو',
				bestFor: 'کسانی که می‌خواهند کامل‌ترین نسخه فرمول را تجربه کنند',
			},
		],
		whyHeading: 'چرا این مجموعه ارزش بازی کردن دارد',
		sellingPointsHeading: 'نقاط قوت اصلی',
		videoLabel: 'نمایش انیمیشن پازل HER TREES',
		analysisStrong: 'اول مشاهده کن، بعد بفهم.',
		analysisBody:
			'HER TREES کل صفحه را بخشی از قوانین می‌داند. اشکال، جایگذاری، ترتیب و مجاورت مهم‌تر از دیالوگ هستند، بنابراین هر راه‌حل بیشتر شبیه یک کشف است تا اجرای دستور.',
		audienceHeading: 'این مجموعه برای چه کسانی مناسب است',
		audienceItems: [
			'بازیکنانی که از مشاهده، تشخیص الگو و منطق فضایی لذت می‌برند.',
			'کسانی که به دنبال بازی‌های مستقل کوتاه با حس تکمیل قوی هستند.',
			'هرکسی که به طراحی سیاه‌وسفید، رویایی، سورئال و آرام علاقه‌مند است.',
			'بازیکنانی که آموزش‌های طولانی یا دیوارهای متنی را دوست ندارند.',
			'کسانی که به دنبال بازی‌های پازلی هستند که به تشخیص رنگ یا نشانه‌های صوتی وابسته نباشند.',
			'طرفداران Rusty Lake، Cube Escape یا بازی‌های اتاق‌معمایی که چیزی آرام‌تر و انتزاعی‌تر می‌خواهند.',
		],
		faqHeading: 'سوالات متداول',
		footerCopy: 'صفحه فرود مستقل و مرور قابل بازی برای مجموعه HER TREES.',
		games: [
			{
				title: 'HER TREES : First Puzzle',
				meta: 'HTML5 / Windows · حدود ۱ ساعت · رایگان',
				alt: 'اسکرین‌شات از HER TREES : First Puzzle',
				copy: 'بازی اول لحن مجموعه را مشخص می‌کند: پازل‌های اتاقی، صحنه‌های دستی سیاه‌وسفید، و راه‌حل‌هایی مبتنی بر جابجایی و ترکیب اشیاء.',
			},
			{
				title: 'HER TREES : THE PUZZLE HOUSE',
				meta: 'Steam · منتشر شده ۲۹ فوریه ۲۰۲۴ · حدود ۱ ساعت',
				alt: 'اسکرین‌شات از HER TREES : THE PUZZLE HOUSE',
				copy: 'خانه پازلی سورئال فشرده اما کامل که متن سنگین و سیستم‌های پیچیده را با نمادها، منطق فضایی و مشاهده دقیق جایگزین می‌کند.',
			},
			{
				title: 'HER TREES : PUZZLE DREAM',
				meta: 'Steam / itch.io Demo · منتشر شده ۱۰ فوریه ۲۰۲۶ · ۱.۵ تا ۳ ساعت',
				alt: 'اسکرین‌شات از HER TREES : PUZZLE DREAM',
				copy: 'بزرگ‌ترین نسخه تاکنون، مجموعه را به سفری رویایی با بیش از ۴۰ پازل گسترش می‌دهد در حالی که طراحی آرام و شهودی خود را حفظ کرده است.',
			},
			{
				title: 'Trees Hate You',
				meta: 'Windows / Web Demo · بازی کمدی خشم',
				alt: 'اسکرین‌شات از Trees Hate You',
				copy: 'بازی‌ای کاملاً متفاوت: جنگل خود بازیکن را هدف می‌گیرد و با بازشروع سریع، تابلوهای مخرب و افکت‌های استریم، ناامیدی و خنده متوالی ایجاد می‌کند.',
			},
		],
		highlights: [
			{
				title: 'منطق پازل مبتنی بر جابجایی و ترکیب',
				copy: 'جذابیت HER TREES در مدیریت آیتم سنتی نیست. از مرتب‌سازی عناصر تا زمانی که قانون پنهان آشکار شود نشأت می‌گیرد.',
			},
			{
				title: 'متن کم، ورود آسان',
				copy: 'این مجموعه عمدتاً از طریق تصاویر، اشکال و روابط فضایی اطلاعات را منتقل می‌کند، نه متن طولانی، وابستگی رنگ یا نشانه‌های صوتی.',
			},
			{
				title: 'کوتاه اما کامل',
				copy: 'بیشتر نسخه‌ها در یک نشست متمرکز قابل اتمام هستند، با قوس کامل بدون نیاز به تعهد زمانی زیاد.',
			},
			{
				title: 'مبتنی بر شهود، نه محاسبه',
				copy: 'توضیحات عمومی بارها مجموعه را طراحی پازل مشاهده‌محور توصیف می‌کنند، بنابراین نوع بازی‌ای نیست که انتظار حساب‌های سنگین یا یادداشت‌برداری مداوم داشته باشد.',
			},
			{
				title: 'غیرکلامی طراحی شده',
				copy: 'نسخه‌های بعدی صراحتاً خود را non-verbal توصیف می‌کنند و بازی اول نیز وابستگی کمی به متن دارد، که مجموعه را برای مخاطبان بین‌المللی قابل دسترس‌تر می‌کند.',
			},
			{
				title: 'مزایای دسترسی‌پذیری واضح',
				copy: 'اطلاعات عمومی نشان می‌دهد بازی‌ها به تشخیص رنگ یا حل پازل صوتی وابسته نیستند و بازی اول به‌عنوان color-blind friendly، one-button و textless علامت‌گذاری شده است.',
			},
		],
		faqs: [
			{
				question: 'HER TREES چه نوع بازی‌ای است؟',
				answer: 'HER TREES مجموعه پازلی دستی متمرکز بر مشاهده، جابجایی اشیاء و ترکیب بصری است، جایی بین escape room، point-and-click و طراحی پازل هنری سورئال.',
			},
			{
				question: 'آیا باید به ترتیب بازی کنم؟',
				answer: 'نه. نسخه‌های بعدی همچنان برای بازیکنان جدید قابل دسترس هستند و همیشه می‌توانید به نسخه‌های قبلی برگردید اگر بخواهید ببینید مجموعه چگونه تکامل یافته است.',
			},
			{
				question: 'آیا متن زیادی برای خواندن وجود دارد؟',
				answer: 'نه زیاد. مجموعه عمداً زبان را حداقل نگه می‌دارد، بنابراین پیشرفت بیشتر از طریق توجه به روابط در صحنه حاصل می‌شود تا خواندن دستورالعمل.',
			},
			{
				question: 'این مجموعه برای چه کسانی مناسب است؟',
				answer: 'برای بازیکنانی مناسب است که پازل‌های کوتاه اتمسفریک، منحنی سختی ملایم و کشف قوانین از طریق مشاهده به جای آموزش صریح را دوست دارند.',
			},
			{
				question: 'آیا می‌توانم HER TREES را رایگان بازی کنم؟',
				answer: 'بله! HER TREES : First Puzzle به صورت رایگان در مرورگر شما در treespuzzle.com قابل بازی است. بازی‌های کامل (Puzzle House و Puzzle Dream) در Steam موجود هستند.',
			},
			{
				question: 'تمام کردن HER TREES چقدر طول می‌کشد؟',
				answer: 'HER TREES : First Puzzle حدود ۱ ساعت طول می‌کشد. THE PUZZLE HOUSE حدود ۱ ساعت. PUZZLE DREAM با بیش از ۴۰ پازل ۱.۵ تا ۳ ساعت.',
			},
			{
				question: 'آیا Her Trees Puzzle Dream برای اندروید هست؟',
				answer: 'نسخه رسمی اندروید نیست. در مرورگر گوشی و حالت افقی بازی کنید: /fa/play/puzzle-dream/android/',
			},
		],
		languageSwitchLabel: 'زبان',
	},
	fr: {
		lang: 'fr',
		path: '/fr/',
		guidePath: '/fr/guide/',
		siteName: 'Her Trees Puzzle Game',
		pageTitle: 'Her Trees Puzzle Dream - Jouer gratuitement (sans téléchargement)',
		pageDescription:
			'Jouez à HER TREES gratuitement dans le navigateur, sans téléchargement. Puzzle Dream et Puzzle House se jouent ici. Steam est une version payante séparée.',
		guidePageTitle: 'HER TREES : First Puzzle - Guide Vidéo',
		guidePageDescription: 'Cette page couvre uniquement la vidéo de HER TREES : First Puzzle. Pour Puzzle Dream et Puzzle House, ouvrez leurs pages de guide.',
		headerIntro:
			'Une série de jeux de puzzle inhabituelle où vous résolvez des mystères en déplaçant et combinant des objets dans des pièces étranges dessinées à la main.',
		heroH1: 'Her Trees Puzzle Dream — Jouer gratuitement dans le navigateur',
		playHeading: 'Jouez à HER TREES : PUZZLE DREAM en ligne',
		playButton: 'Lancer le Jeu',
		guideButton: 'Voir le Guide',
		iframeTitle: 'HER TREES : PUZZLE DREAM en ligne',
		guideIframeTitle: 'Vidéo guide de HER TREES',
		gameIntro:
			'Le principe est simple : glissez les objets avec votre souris, observez comment ils se rapportent les uns aux autres, puis cliquez sur le code correspondant à droite pour résoudre la pièce.',
		fullscreenButton: 'Plein Écran',
		rotateHint:
			'Le jeu ne passe pas automatiquement en mode paysage ? Activez la rotation automatique ou tournez votre téléphone manuellement.',
		backHomeLabel: "Retour à l'Accueil",
		introHeading: 'Qu\'est-ce que HER TREES',
		introParagraphs: [
			'HER TREES est une série de jeux de puzzle créée par le développeur indépendant Stone. Son interaction principale n\'est pas la collecte d\'objets traditionnelle ni la gestion d\'inventaire complexe, mais la résolution de pièces en déplaçant, disposant et combinant les objets déjà présents dans la scène.',
			'Tout au long de la série, l\'identité reste cohérente : dessin à la main en noir et blanc, présentation à texte réduit ou sans texte, atmosphère onirique et surréaliste, et conception de puzzles basée sur l\'observation, les relations spatiales et l\'intuition plutôt que sur des calculs complexes.',
		],
		positioningHeading: 'Ce que Ressent cette Série en Jouant',
		positioningPoints: [
			'Conception de puzzles point-and-click axée sur l\'observation, centrée sur les formes, les symboles et les relations spatiales.',
			'Les pièces et les scènes fonctionnent comme des structures de puzzle en soi, avec des réponses cachées dans le placement, l\'ordre et la proximité.',
			'Début facile mais capable de vrais moments d\'épiphanie, sans nécessiter de calculs difficiles ni de pages de notes.',
			'Le ton général ressemble davantage à un livre d\'images interactif en noir et blanc qu\'à un jeu de puzzle conventionnel bruyant.',
		],
		startHeading: 'Par où les Nouveaux Joueurs Doivent-ils Commencer',
		startItems: [
			{
				title: 'Si vous voulez un premier aperçu gratuit',
				copy: 'Commencez par HER TREES : First Puzzle. C\'est le point d\'entrée de la série, assez court pour être terminé en une session, et l\'introduction la plus claire à la logique de puzzle basée sur le déplacement et la combinaison.',
			},
			{
				title: 'Si vous voulez un jeu complet plus abouti',
				copy: 'Commencez par HER TREES : THE PUZZLE HOUSE ou HER TREES : PUZZLE DREAM. Les deux derniers opus sont accessibles même si vous n\'avez jamais joué aux précédents.',
			},
			{
				title: 'Si vous privilégiez le contenu',
				copy: 'THE PUZZLE HOUSE fonctionne bien comme entrée courte et représentative, tandis que PUZZLE DREAM est le plus grand jeu à ce jour et propose également une démo pour les joueurs prudents.',
			},
		],
		seriesHeading: 'Play More Game',
		compareHeading: 'Comparaison Rapide des Trois Jeux',
		compareColumns: {
			game: 'Jeu',
			platform: 'Plateforme',
			playtime: 'Durée',
			access: 'Accès',
			bestFor: 'Idéal Pour Commencer',
		},
		comparisonRows: [
			{
				game: 'HER TREES : First Puzzle',
				platform: 'HTML5 / Windows',
				playtime: 'Environ 1 heure',
				access: 'Gratuit et jouable dans le navigateur',
				bestFor: 'Joueurs cherchant le point d\'entrée le plus accessible',
			},
			{
				game: 'HER TREES : THE PUZZLE HOUSE',
				platform: 'Steam',
				playtime: 'Environ 1 heure',
				access: 'Version complète avec indices et réponses',
				bestFor: 'Joueurs cherchant le jeu compact le plus représentatif',
			},
			{
				game: 'HER TREES : PUZZLE DREAM',
				platform: 'Steam / itch.io Demo',
				playtime: '1h30 à 3 heures',
				access: 'Le plus grand opus avec plus de 40 puzzles et une démo',
				bestFor: 'Joueurs cherchant la version la plus complète de la formule',
			},
		],
		whyHeading: 'Pourquoi cette Série vaut la Peine d\'être Jouée',
		sellingPointsHeading: 'Forces Principales',
		videoLabel: 'Démonstration de l\'animation de puzzle HER TREES',
		analysisStrong: 'Observer d\'abord, comprendre ensuite.',
		analysisBody:
			'HER TREES considère l\'ensemble de l\'écran comme faisant partie des règles. Les formes, le placement, la séquence et la proximité comptent plus que les dialogues, donc chaque solution semble découverte plutôt qu\'instructée.',
		audienceHeading: 'À qui cette Série convient le Mieux',
		audienceItems: [
			'Les joueurs qui aiment l\'observation, la reconnaissance de motifs et la logique spatiale.',
			'Les personnes cherchant des jeux indépendants courts avec un fort sentiment d\'accomplissement.',
			'Toute personne attirée par le design visuel en noir et blanc, onirique, surréaliste et calme.',
			'Les joueurs qui ne veulent pas de tutoriels longs ou de murs de texte.',
			'Les personnes cherchant des jeux de puzzle qui ne dépendent pas de la reconnaissance des couleurs ou des indices audio.',
			'Les fans de Rusty Lake, Cube Escape ou des jeux d\'énigmes de pièces qui veulent quelque chose de plus calme et abstrait.',
		],
		faqHeading: 'FAQ',
		footerCopy: 'Page d\'atterrissage indépendante et aperçu jouable pour la série HER TREES.',
		games: [
			{
				title: 'HER TREES : First Puzzle',
				meta: 'HTML5 / Windows · Environ 1 heure · Gratuit',
				alt: 'Capture d\'écran de HER TREES : First Puzzle',
				copy: 'Le premier jeu définit le ton de la série : puzzles à l\'échelle d\'une pièce, scènes dessinées à la main en noir et blanc, et solutions basées sur le déplacement et la combinaison d\'objets.',
			},
			{
				title: 'HER TREES : THE PUZZLE HOUSE',
				meta: 'Steam · Sorti le 29 février 2024 · Environ 1 heure',
				alt: 'Capture d\'écran de HER TREES : THE PUZZLE HOUSE',
				copy: 'Une maison de puzzle surréaliste compacte mais complète qui remplace le texte dense et les systèmes complexes par des symboles, une logique spatiale et une observation minutieuse.',
			},
			{
				title: 'HER TREES : PUZZLE DREAM',
				meta: 'Steam / itch.io Demo · Sorti le 10 février 2026 · 1h30 à 3 heures',
				alt: 'Capture d\'écran de HER TREES : PUZZLE DREAM',
				copy: 'Le plus grand opus à ce jour, étendant la série en un voyage onirique avec plus de 40 puzzles tout en conservant son design calme et intuitif.',
			},
			{
				title: 'Trees Hate You',
				meta: 'Windows / Web Demo · Jeu de comédie de rage',
				alt: 'Capture d\'écran de Trees Hate You',
				copy: 'Un choix très différent de la série HER TREES : un jeu de pièges comique à redémarrage rapide où la forêt elle-même est la blague, la menace et la chute.',
			},
		],
		highlights: [
			{
				title: 'Logique de puzzle basée sur le mouvement et les combinaisons',
				copy: 'L\'attrait de HER TREES ne réside pas dans la gestion d\'inventaire. Il vient du réarrangement des éléments jusqu\'à ce que la règle cachée se révèle.',
			},
			{
				title: 'Peu de texte, peu de friction',
				copy: 'Cette série communique principalement par les images, les formes et les relations spatiales plutôt que par un long texte, une dépendance aux couleurs ou des indices audio.',
			},
			{
				title: 'Court, mais complet',
				copy: 'La plupart des opus peuvent être terminés en une session concentrée, vous offrant un arc complet sans exiger un engagement temporel énorme.',
			},
			{
				title: 'Construit autour de l\'intuition, pas du calcul',
				copy: 'Les descriptions publiques cadrent à plusieurs reprises la série comme une conception de puzzle axée sur l\'observation, ce n\'est donc pas le type de jeu qui attend une arithmétique lourde ou la prise de notes constante.',
			},
			{
				title: 'Non-verbal par conception',
				copy: 'Les opus ultérieurs se décrivent explicitement comme non-verbaux, et le premier jeu se présente également comme léger en texte, ce qui rend la série plus facile à aborder quelle que soit la langue.',
			},
			{
				title: 'Avantages clairs en accessibilité',
				copy: 'Les caractéristiques listées publiquement notent que les jeux ne dépendent pas de la reconnaissance des couleurs ou de la résolution de puzzles audio, et le premier jeu est marqué comme adapté aux daltoniens, à un bouton et sans texte.',
			},
		],
		faqs: [
			{
				question: 'Quel type de jeu est HER TREES ?',
				answer: 'HER TREES est une série de puzzles dessinés à la main axée sur l\'observation, le déplacement d\'objets et les combinaisons visuelles, entre l\'escape room, le point-and-click et la conception de puzzle artistique surréaliste.',
			},
			{
				question: 'Dois-je jouer aux jeux dans l\'ordre ?',
				answer: 'Non. Les opus ultérieurs restent accessibles aux nouveaux joueurs, et vous pouvez toujours revenir aux jeux précédents si vous voulez voir comment la série a évolué.',
			},
			{
				question: 'Y a-t-il beaucoup de texte à lire ?',
				answer: 'Pas vraiment. La série garde délibérément le langage au minimum, donc la progression vient principalement de la remarque des relations dans la scène plutôt que de la lecture d\'instructions.',
			},
			{
				question: 'À qui cette série s\'adresse-t-elle ?',
				answer: 'Elle convient bien aux joueurs qui aiment les puzzles atmosphériques courts, les courbes de difficulté douces et la compréhension par l\'observation plutôt que par des tutoriels explicites.',
			},
			{
				question: 'Puis-je jouer à HER TREES gratuitement ?',
				answer: 'Oui ! HER TREES : First Puzzle est gratuit dans votre navigateur sur treespuzzle.com. Les jeux complets (Puzzle House et Puzzle Dream) sont disponibles sur Steam.',
			},
			{
				question: 'Combien de temps faut-il pour terminer HER TREES ?',
				answer: 'HER TREES : First Puzzle prend environ 1 heure. THE PUZZLE HOUSE prend environ 1 heure. PUZZLE DREAM prend 1h30 à 3 heures avec plus de 40 puzzles.',
			},
		],
		languageSwitchLabel: 'Langue',
	},
	id: {
		lang: 'id',
		path: '/id/',
		guidePath: '/id/guide/',
		siteName: 'Her Trees Puzzle Game',
		pageTitle: 'Her Trees Puzzle Dream - Main Gratis di Browser (Tanpa Unduh)',
		pageDescription:
			'Mainkan HER TREES, seri game puzzle indie bergambar tangan. Pecahkan misteri dengan memindahkan objek di ruangan surealis hitam-putih. Game browser gratis + Steam. 95% positif.',
		guidePageTitle: 'Video Panduan HER TREES : First Puzzle',
		guidePageDescription: 'Halaman ini hanya video walkthrough HER TREES : First Puzzle. Untuk Puzzle Dream dan Puzzle House, buka halaman panduan masing-masing.',
		headerIntro:
			'Seri game puzzle unik di mana Anda memecahkan misteri dengan memindahkan dan menggabungkan objek di dalam ruangan aneh.',
		heroH1: 'Her Trees Puzzle Dream — Main gratis di browser',
		playHeading: 'Mainkan HER TREES : PUZZLE DREAM Online',
		playButton: 'Mulai Game',
		guideButton: 'Lihat Panduan',
		iframeTitle: 'HER TREES : PUZZLE DREAM online',
		guideIframeTitle: 'Video panduan HER TREES',
		gameIntro:
			'Caranya sederhana: seret objek dengan mouse, perhatikan hubungan antara mereka, lalu klik kode yang sesuai di sebelah kanan untuk memecahkan ruangan.',
		fullscreenButton: 'Layar Penuh',
		rotateHint:
			'Jika game tidak berputar otomatis ke mode lanskap, aktifkan rotasi otomatis atau putar ponsel Anda secara manual.',
		backHomeLabel: 'Kembali ke Beranda',
		introHeading: 'Apa Itu HER TREES',
		introParagraphs: [
			'HER TREES adalah seri game puzzle oleh pengembang independen Stone. Interaksi utamanya bukan pengumpulan item tradisional atau manajemen inventaris yang rumit, melainkan memecahkan ruangan dengan memindahkan, menyusun, dan menggabungkan objek yang ada di dalam scene.',
			'Sepanjang seri, identitasnya tetap konsisten: gambar tangan hitam-putih, presentasi teks rendah atau tanpa teks, atmosfer surealis seperti mimpi, dan desain puzzle yang dibangun di sekitar observasi, hubungan spasial, dan intuisi alih-alih perhitungan rumit.',
		],
		positioningHeading: 'Bagaimana Pengalaman Seri Ini',
		positioningPoints: [
			'Desain puzzle point-and-click yang digerakkan oleh observasi, berpusat pada bentuk, simbol, dan hubungan spasial.',
			'Ruangan dan scene berfungsi sebagai struktur puzzle itu sendiri, jawaban tersembunyi dalam penempatan, urutan, dan kedekatan.',
			'Gesekan rendah tetapi tetap mampu menghadirkan momen aha yang nyata, tanpa memerlukan matematika sulit atau catatan panjang.',
			'Secara keseluruhan terasa lebih seperti buku gambar hitam-putih interaktif daripada game puzzle konvensional yang bising.',
		],
		startHeading: 'Dari Mana Pemain Baru Harus Memulai',
		startItems: [
			{
				title: 'Jika ingin mencoba gratis terlebih dahulu',
				copy: 'Mulai dengan HER TREES : First Puzzle. Ini adalah titik masuk seri, cukup pendek untuk diselesaikan dalam satu sesi, dan pengenalan paling jelas untuk logika puzzle berbasis pemindahan dan penggabungan.',
			},
			{
				title: 'Jika ingin langsung bermain game yang lebih lengkap',
				copy: 'Mulai dengan HER TREES : THE PUZZLE HOUSE atau HER TREES : PUZZLE DREAM. Keduanya cocok untuk pemain baru bahkan jika belum pernah memainkan game sebelumnya.',
			},
			{
				title: 'Jika paling peduli pada skala konten',
				copy: 'THE PUZZLE HOUSE bekerja baik sebagai entri pendek yang representatif, sementara PUZZLE DREAM adalah game terbesar sejauh ini dan juga menawarkan jalur demo.',
			},
		],
		seriesHeading: 'Play More Game',
		compareHeading: 'Perbandingan Cepat Tiga Game',
		compareColumns: {
			game: 'Game',
			platform: 'Platform',
			playtime: 'Waktu Main',
			access: 'Akses',
			bestFor: 'Cocok Untuk Memulai',
		},
		comparisonRows: [
			{
				game: 'HER TREES : First Puzzle',
				platform: 'HTML5 / Windows',
				playtime: 'Sekitar 1 jam',
				access: 'Gratis dan bisa dimainkan di browser',
				bestFor: 'Yang ingin titik masuk paling mudah',
			},
			{
				game: 'HER TREES : THE PUZZLE HOUSE',
				platform: 'Steam',
				playtime: 'Sekitar 1 jam',
				access: 'Rilis penuh dengan petunjuk dan jawaban',
				bestFor: 'Yang ingin memainkan game kompak representatif terlebih dahulu',
			},
			{
				game: 'HER TREES : PUZZLE DREAM',
				platform: 'Steam / itch.io Demo',
				playtime: '1,5 hingga 3 jam',
				access: 'Entri terbesar dengan 40+ puzzle dan demo',
				bestFor: 'Yang ingin versi paling lengkap dari formula ini',
			},
		],
		whyHeading: 'Mengapa Seri Ini Layak Dimainkan',
		sellingPointsHeading: 'Kekuatan Utama',
		videoLabel: 'Demo animasi puzzle HER TREES',
		analysisStrong: 'Amati dulu, pahami setelahnya.',
		analysisBody:
			'HER TREES memperlakukan seluruh layar sebagai bagian dari aturan. Bentuk, penempatan, urutan, dan kedekatan lebih penting daripada dialog, sehingga setiap solusi terasa ditemukan alih-alih diinstruksikan.',
		audienceHeading: 'Siapa yang Paling Cocok Dengan Seri Ini',
		audienceItems: [
			'Pemain yang menikmati observasi, pengenalan pola, dan logika puzzle spasial.',
			'Orang yang mencari game indie pendek dengan rasa penyelesaian yang kuat.',
			'Siapa pun yang tertarik pada desain visual hitam-putih, surealis, dan tenang.',
			'Pemain yang tidak ingin tutorial panjang atau dinding teks.',
			'Orang yang mencari game puzzle yang tidak bergantung pada pengenalan warna atau petunjuk audio.',
			'Penggemar Rusty Lake, Cube Escape, atau game puzzle ruangan yang menginginkan sesuatu yang lebih tenang dan abstrak.',
		],
		faqHeading: 'FAQ',
		footerCopy: 'Halaman landing independen dan ringkasan yang bisa dimainkan untuk seri HER TREES.',
		games: [
			{
				title: 'HER TREES : First Puzzle',
				meta: 'HTML5 / Windows · Sekitar 1 jam · Gratis',
				alt: 'Screenshot dari HER TREES : First Puzzle',
				copy: 'Game pertama menentukan nada seri: puzzle skala ruangan, scene gambar tangan hitam-putih, dan solusi yang dibangun dari memindahkan dan menggabungkan objek.',
			},
			{
				title: 'HER TREES : THE PUZZLE HOUSE',
				meta: 'Steam · Dirilis 29 Februari 2024 · Sekitar 1 jam',
				alt: 'Screenshot dari HER TREES : THE PUZZLE HOUSE',
				copy: 'Rumah puzzle surealis yang ringkas namun lengkap yang menggantikan teks berat dan sistem rumit dengan simbol, logika spasial, dan observasi cermat.',
			},
			{
				title: 'HER TREES : PUZZLE DREAM',
				meta: 'Steam / itch.io Demo · Dirilis 10 Februari 2026 · 1,5 hingga 3 jam',
				alt: 'Screenshot dari HER TREES : PUZZLE DREAM',
				copy: 'Entri terbesar sejauh ini, memperluas seri menjadi perjalanan surealis dengan lebih dari 40 puzzle sambil mempertahankan desain tenang dan intuitifnya.',
			},
			{
				title: 'Trees Hate You',
				meta: 'Windows / Web Demo · Game Komedi Kemarahan',
				alt: 'Screenshot dari Trees Hate You',
				copy: 'Game yang sangat berbeda: hutan sendiri yang menargetkan pemain, menciptakan kekecewaan dan tawa berkelanjutan dengan restart cepat, tanda jebakan, dan efek streaming.',
			},
		],
		highlights: [
			{
				title: 'Logika puzzle berbasis pemindahan dan penggabungan',
				copy: 'Daya tarik HER TREES bukan pada manajemen item tradisional. Ia berasal dari menyusun ulang elemen hingga aturan tersembunyi terungkap dengan sendirinya.',
			},
			{
				title: 'Teks sedikit, gesekan rendah',
				copy: 'Seri ini berkomunikasi terutama melalui gambar, bentuk, dan hubungan spasial alih-alih teks panjang, ketergantungan warna, atau petunjuk audio.',
			},
			{
				title: 'Pendek tapi lengkap',
				copy: 'Sebagian besar entri dapat diselesaikan dalam satu sesi terfokus, memberikan lengkungan penuh tanpa meminta komitmen waktu yang besar.',
			},
			{
				title: 'Dibangun di sekitar intuisi, bukan perhitungan',
				copy: 'Deskripsi publik berulang kali membingkai seri sebagai desain puzzle observasi-pertama, jadi bukan jenis game yang mengharapkan aritmetika berat atau catatan konstan.',
			},
			{
				title: 'Non-verbal berdasarkan desain',
				copy: 'Entri selanjutnya secara eksplisit menggambarkan diri mereka sebagai non-verbal, dan game pertama juga mempresentasikan diri sebagai teks-ringan, yang membuat seri lebih mudah diakses lintas bahasa.',
			},
			{
				title: 'Keunggulan aksesibilitas yang jelas',
				copy: 'Fitur yang terdaftar secara publik mencatat bahwa game tidak bergantung pada pengenalan warna atau pemecahan puzzle berbasis audio, dan game pertama ditandai sebagai color-blind friendly, one-button, dan textless.',
			},
		],
		faqs: [
			{
				question: 'Game seperti apa HER TREES itu?',
				answer: 'HER TREES adalah seri puzzle gambar tangan yang berfokus pada observasi, pergerakan objek, dan kombinasi visual, berada di antara room escape, point-and-click, dan desain puzzle seni surealis.',
			},
			{
				question: 'Apakah saya perlu memainkan game secara berurutan?',
				answer: 'Tidak. Entri selanjutnya tetap mudah diakses untuk pemain baru, dan Anda selalu bisa kembali ke game sebelumnya jika ingin melihat bagaimana seri berkembang.',
			},
			{
				question: 'Apakah ada banyak teks untuk dibaca?',
				answer: 'Tidak terlalu. Seri ini sengaja menjaga bahasa seminimal mungkin, sehingga kemajuan datang terutama dari memperhatikan hubungan dalam scene alih-alih membaca instruksi.',
			},
			{
				question: 'Seri ini untuk siapa?',
				answer: 'Cocok untuk pemain yang menyukai puzzle atmosfer pendek, kurva kesulitan yang lembut, dan memecahkan masalah melalui observasi alih-alih tutorial eksplisit.',
			},
			{
				question: 'Bisakah saya bermain HER TREES secara gratis?',
				answer: 'Ya! HER TREES : First Puzzle bisa dimainkan gratis di browser Anda di treespuzzle.com. Game lengkap (Puzzle House dan Puzzle Dream) tersedia di Steam.',
			},
			{
				question: 'Berapa lama waktu untuk menyelesaikan HER TREES?',
				answer: 'HER TREES : First Puzzle membutuhkan waktu sekitar 1 jam. THE PUZZLE HOUSE sekitar 1 jam. PUZZLE DREAM 1,5-3 jam dengan 40+ puzzle.',
			},
			{
				question: 'Apakah ada Her Trees Puzzle Dream Android?',
				answer: 'Tidak ada aplikasi resmi. Main di browser HP mode landscape: /id/play/puzzle-dream/android/.',
			},
		],
		languageSwitchLabel: 'Bahasa',
	},
	ja: {
		lang: 'ja',
		path: '/ja/',
		guidePath: '/ja/guide/',
		siteName: 'Her Trees Puzzle Game',
		pageTitle: 'Her Trees Puzzle Dream - ブラウザで無料プレイ（ダウンロード不要）',
		pageDescription:
			'HER TREES は白黒手描きのインディーパズルゲームシリーズ。シュールな部屋でオブジェクトを動かして組み合わせて謎を解こう。ブラウザ無料 + Steam 発売中。95% 評価。',
		guidePageTitle: 'HER TREES : First Puzzle 攻略動画',
		guidePageDescription: 'このページは HER TREES : First Puzzle の攻略動画だけです。Puzzle Dream と Puzzle House はそれぞれの攻略ページを開いてください。',
		headerIntro:
			'物を動かして組み合わせながら謎を解いていく、独特なパズルゲームシリーズです。不思議な部屋に隠された仕組みを見つけてください。',
		heroH1: 'Her Trees Puzzle Dream — ブラウザで無料プレイ',
		playHeading: 'HER TREES : PUZZLE DREAM をブラウザで遊ぶ',
		playButton: 'ゲーム開始',
		guideButton: '攻略を見る',
		iframeTitle: 'HER TREES : PUZZLE DREAM ブラウザ版',
		guideIframeTitle: 'HER TREES 攻略動画',
		gameIntro:
			'遊び方はシンプルです。マウスで物を動かし、関係性を観察しながら、右側の対応するコードをクリックして謎を解きます。',
		fullscreenButton: '全画面で遊ぶ',
		rotateHint:
			'自動で横向きにならない場合は、端末の自動回転をオンにするか、手動で横向きにしてください。',
		backHomeLabel: 'ホームに戻る',
		introHeading: 'HER TREES とは',
		introParagraphs: [
			'HER TREES はインディー開発者 Stone によるパズルゲームシリーズです。一般的なアイテム収集や複雑な管理よりも、画面内のオブジェクトを動かし、並べ、組み合わせることで謎を解いていきます。',
			'シリーズ全体を通して、白黒の手描き表現、少ないテキスト、夢のようで少し超現実的な雰囲気、そして計算より観察と直感を重視する設計が一貫しています。',
		],
		positioningHeading: 'このシリーズの体験の特徴',
		positioningPoints: [
			'図形、記号、空間関係を読む観察主導のポイント＆クリック型パズルです。',
			'部屋や場面そのものが謎の構造であり、配置や順番、隣接関係が答えにつながります。',
			'難解な計算や長いメモを求めず、それでもしっかりしたひらめきの瞬間があります。',
			'全体の印象は、騒がしいゲームというより操作できる白黒の絵本に近い作品です。',
		],
		startHeading: '新規プレイヤーはどこから始めるべきか',
		startItems: [
			{
				title: '無料で雰囲気を試したいなら',
				copy: 'HER TREES : First Puzzle から始めるのが最適です。シリーズの出発点であり、短時間で遊べて、移動と組み合わせを軸にした解き方を最も分かりやすく体験できます。',
			},
			{
				title: '完成度の高い単独作品から入りたいなら',
				copy: 'HER TREES : THE PUZZLE HOUSE か HER TREES : PUZZLE DREAM がおすすめです。どちらも前作未経験でも入りやすい作品として案内されています。',
			},
			{
				title: 'ボリューム重視なら',
				copy: 'THE PUZZLE HOUSE は代表的な短編として優秀で、PUZZLE DREAM は現時点で最大規模の作品です。しかも Demo から試すこともできます。',
			},
		],
		seriesHeading: 'Play More Game',
		compareHeading: '3作品の比較',
		compareColumns: {
			game: '作品名',
			platform: 'プラットフォーム',
			playtime: 'プレイ時間',
			access: '入口の特徴',
			bestFor: '最初に向く人',
		},
		comparisonRows: [
			{
				game: 'HER TREES : First Puzzle',
				platform: 'HTML5 / Windows',
				playtime: '約1時間',
				access: '無料でブラウザから体験可能',
				bestFor: '最も気軽にシリーズへ入りたい人',
			},
			{
				game: 'HER TREES : THE PUZZLE HOUSE',
				platform: 'Steam',
				playtime: '約1時間',
				access: 'ヒントと答えのある正式作品',
				bestFor: '代表的な短編を先に遊びたい人',
			},
			{
				game: 'HER TREES : PUZZLE DREAM',
				platform: 'Steam / itch.io Demo',
				playtime: '1.5〜3時間',
				access: '40以上の謎と Demo の両方がある',
				bestFor: '最も内容量の多い作品から入りたい人',
			},
		],
		whyHeading: 'このシリーズを遊ぶ価値',
		sellingPointsHeading: '主な魅力',
		videoLabel: 'HER TREES パズルアニメーション',
		analysisStrong: 'まず観察し、そのあと理解する。',
		analysisBody:
			'HER TREES では画面そのものがルールの一部です。形、配置、順番、隣り合い方が会話より重要で、答えは説明されるものではなく発見するものとして感じられます。',
		audienceHeading: 'このシリーズが向いている人',
		audienceItems: [
			'観察、図形関係、空間的なつながりを読むパズルが好きな人。',
			'短時間で遊べて満足感の高いインディー作品を探している人。',
			'白黒の手描き、夢、超現実、静かな雰囲気に惹かれる人。',
			'長い説明文や過剰なチュートリアルを好まない人。',
			'色や音に依存しないパズル作品を求めている人。',
			'Rusty Lake や Cube Escape の空気感が好きで、さらに静かで抽象的な表現を味わいたい人。',
		],
		faqHeading: 'よくある質問',
		footerCopy: 'HER TREES シリーズを紹介する独立制作の情報ページ兼プレイ導線です。',
		games: [
			{
				title: 'HER TREES : First Puzzle',
				meta: 'HTML5 / Windows · 約1時間 · 無料',
				alt: 'HER TREES : First Puzzle のスクリーンショット',
				copy: '第1作でシリーズの空気感が確立されました。部屋型の謎、白黒の手描き背景、そして物を動かして組み合わせる解き方が核になっています。',
			},
			{
				title: 'HER TREES : THE PUZZLE HOUSE',
				meta: 'Steam · 2024年2月29日発売 · 約1時間',
				alt: 'HER TREES : THE PUZZLE HOUSE のスクリーンショット',
				copy: '短編ながら完成度の高い幻想的なパズルハウス。大量の説明文や複雑なシステムではなく、記号と空間把握、観察力で進みます。',
			},
			{
				title: 'HER TREES : PUZZLE DREAM',
				meta: 'Steam / itch.io Demo · 2026年2月10日発売 · 1.5〜3時間',
				alt: 'HER TREES : PUZZLE DREAM のスクリーンショット',
				copy: '現時点で最も大きな作品で、静かで直感的な魅力を保ちながら、40以上の謎を含む夢の旅へと広がっています。',
			},
			{
				title: 'Trees Hate You',
				meta: 'Windows / Web Demo · Rage Comedy Game',
				alt: 'Trees Hate You のスクリーンショット',
				copy: '雰囲気はまったく異なりますが、こちらは森そのものがプレイヤーを罠にかける高速リトライ型のコメディトラップゲームです。',
			},
		],
		highlights: [
			{
				title: '移動と組み合わせで解くロジック',
				copy: 'HER TREES の面白さは一般的なアイテム管理ではなく、画面内の要素を並べ替え、隠れた法則が浮かび上がる瞬間にあります。',
			},
			{
				title: 'テキストが少なく、入りやすい',
				copy: '長い文章や色分け、音のヒントに頼らず、主に図像、形、空間的な関係で情報を伝えるシリーズです。',
			},
			{
				title: '短いが、一本として完結している',
				copy: '多くの作品は集中した1回のプレイで最後まで進められ、短時間でもしっかりした満足感があります。',
			},
			{
				title: '複雑な計算や大量のメモが要らない',
				copy: '公開情報でも繰り返し、観察と直感を重視するシリーズとして説明されており、数式や表作りのような負荷は中心ではありません。',
			},
			{
				title: '非言語表現で入りやすい',
				copy: '後続作品は non-verbal と明記されており、第1作もテキスト依存が少ないため、言語の壁を感じにくい構成です。',
			},
			{
				title: 'アクセシビリティ面でも強みがある',
				copy: '色の識別や音の手掛かりに頼らず、第1作には色覚対応、単ボタン、無テキストといった特性も公開されています。',
			},
		],
		faqs: [
			{
				question: 'HER TREES はどんなゲームですか？',
				answer: 'HER TREES は観察、物の移動、視覚的な組み合わせを中心にした手描きパズルシリーズで、脱出ゲーム、ポイント&クリック、幻想的アートパズルの中間にあるような作品です。',
			},
			{
				question: '順番に遊ぶ必要はありますか？',
				answer: 'ありません。後の作品から入っても問題なく、気になったら前作に戻ってシリーズの変化を見ることもできます。',
			},
			{
				question: '文章は多いですか？',
				answer: '多くありません。言語表現は意図的に最小限に抑えられていて、進行は説明文よりも場面の関係性を読むことで進みます。',
			},
			{
				question: 'どんな人に向いていますか？',
				answer: '短編の雰囲気系パズル、穏やかな難易度、そして丁寧な観察から法則を見つける遊びが好きな人に向いています。',
			},
			{
				question: 'HER TREES を無料で遊べますか？',
				answer: 'はい！HER TREES : First Puzzle は treespuzzle.com でブラウザから無料で遊べます。フルゲーム（Puzzle House と Puzzle Dream）は Steam で発売中です。',
			},
			{
				question: 'HER TREES をクリアするのにどのくらいかかりますか？',
				answer: 'HER TREES : First Puzzle は約1時間。THE PUZZLE HOUSE は約1時間。PUZZLE DREAM は40以上の謎で1.5〜3時間です。',
			},
		],
		languageSwitchLabel: '言語',
	},
	vi: {
		lang: 'vi',
		path: '/vi/',
		guidePath: '/vi/guide/',
		siteName: 'Her Trees Puzzle Game',
		pageTitle: 'Her Trees Puzzle Dream - Choi mien phi tren trinh duyet',
		pageDescription:
			'Chơi HER TREES, series game giải đố indie vẽ tay. Giải mã bằng cách di chuyển đồ vật trong phòng siêu thực đen trắng. Chơi miễn phí trên trình duyệt + Steam. 95% đánh giá tích cực.',
		guidePageTitle: 'Video huong dan HER TREES : First Puzzle',
		guidePageDescription: 'Trang nay chi la video HER TREES : First Puzzle. Puzzle Dream va Puzzle House co trang huong dan rieng.',
		headerIntro:
			'Đây là một series game giải đố khác lạ, nơi bạn giải mật mã bằng cách di chuyển và kết hợp đồ vật trong những căn phòng kỳ quái.',
		heroH1: 'Her Trees Puzzle Dream — Choi mien phi tren trinh duyet',
		playHeading: 'Choi HER TREES : PUZZLE DREAM truc tuyen',
		playButton: 'Bắt đầu chơi',
		guideButton: 'Xem huong dan',
		iframeTitle: 'HER TREES : PUZZLE DREAM tren trinh duyet',
		guideIframeTitle: 'Video huong dan HER TREES',
		gameIntro:
			'Cách chơi rất đơn giản: kéo các đồ vật bằng chuột, quan sát mối liên hệ giữa chúng, rồi bấm vào mã tương ứng ở bên phải để giải câu đố.',
		fullscreenButton: 'Toàn màn hình',
		rotateHint:
			'Neu game khong tu dong xoay ngang, hay bat tu dong xoay hoac tu xoay dien thoai sang ngang.',
		backHomeLabel: 'Quay lai trang chu',
		introHeading: 'HER TREES La Gi',
		introParagraphs: [
			'HER TREES là series game giải đố của nhà phát triển độc lập Stone. Thay vì tập trung vào tìm đồ vật hay quản lý vật phẩm phức tạp, game để bạn giải câu đố bằng cách di chuyển, sắp xếp và kết hợp các đối tượng ngay trong khung cảnh.',
			'Toàn bộ series giữ một bản sắc khá rõ: hình vẽ tay đen trắng, rất ít chữ hoặc gần như không chữ, bầu không khí như mơ và hơi siêu thực, cùng kiểu thiết kế đặt trọng tâm vào quan sát, quan hệ không gian và trực giác hơn là tính toán rắc rối.',
		],
		positioningHeading: 'Cảm Giác Khi Chơi Series Nay',
		positioningPoints: [
			'Giải đố point-and-click thiên về quan sát hình dạng, ký hiệu và quan hệ không gian.',
			'Chính căn phòng và bố cục khung cảnh là một phần của cấu trúc câu đố, nơi đáp án nằm trong vị trí, thứ tự và sự kề nhau.',
			'Dễ tiếp cận nhưng vẫn tạo được khoảnh khắc a-ha, không cần toán khó hay ghi chú dài dòng.',
			'Tổng thể giống một cuốn sách tranh đen trắng có thể tương tác hơn là một game giải đố ồn ào thông thường.',
		],
		startHeading: 'Người Moi Nen Bat Dau Tu Dau',
		startItems: [
			{
				title: 'Neu ban muon thu mien phi truoc',
				copy: 'Hay bat dau voi HER TREES : First Puzzle. Day la diem vao series, ngan gon, de hoan thanh trong mot lan choi va the hien ro nhat logic giai do dua tren di chuyen va ket hop.',
			},
			{
				title: 'Neu ban muon choi mot ban hoan chinh hon ngay lap tuc',
				copy: 'Ban co the bat dau voi HER TREES : THE PUZZLE HOUSE hoac HER TREES : PUZZLE DREAM. Ca hai deu phu hop voi nguoi moi ngay ca khi chua choi phan truoc.',
			},
			{
				title: 'Neu ban quan tam den do lon noi dung',
				copy: 'THE PUZZLE HOUSE hop voi vai tro tac pham dai dien gon gang, con PUZZLE DREAM la phan co quy mo lon nhat hien tai va con co ca demo de thu truoc.',
			},
		],
		seriesHeading: 'Play More Game',
		compareHeading: 'So Sanh Nhanh Ba Tua Game',
		compareColumns: {
			game: 'Game',
			platform: 'Nen tang',
			playtime: 'Thoi luong',
			access: 'Loi vao',
			bestFor: 'Hop voi ai',
		},
		comparisonRows: [
			{
				game: 'HER TREES : First Puzzle',
				platform: 'HTML5 / Windows',
				playtime: 'Khoảng 1 giờ',
				access: 'Miễn phí và có thể chơi ngay trên trình duyệt',
				bestFor: 'Người muốn vào series với rào cản thấp nhất',
			},
			{
				game: 'HER TREES : THE PUZZLE HOUSE',
				platform: 'Steam',
				playtime: 'Khoảng 1 giờ',
				access: 'Bản phát hành đầy đủ có gợi ý và đáp án',
				bestFor: 'Người muốn chơi bản tiêu biểu và gọn gàng nhất trước',
			},
			{
				game: 'HER TREES : PUZZLE DREAM',
				platform: 'Steam / itch.io Demo',
				playtime: '1.5 đến 3 giờ',
				access: 'Phần lớn nhất hiện tại với hơn 40 câu đố và có demo',
				bestFor: 'Người muốn trải nghiệm phiên bản đầy đặn nhất',
			},
		],
		whyHeading: 'Vì sao series này đáng chơi',
		sellingPointsHeading: 'Diem Manh Cot Loi',
		videoLabel: 'Hoạt ảnh giải đố HER TREES',
		analysisStrong: 'Quan sát trước, hiểu sau.',
		analysisBody:
			'HER TREES biến toàn bộ khung hình thành một phần của luật chơi. Hình dạng, vị trí, thứ tự và sự kề nhau quan trọng hơn lời thoại, nên mỗi lời giải giống như một khám phá hơn là làm theo hướng dẫn.',
		audienceHeading: 'Series Nay Hop Nhat Voi Ai',
		audienceItems: [
			'Người thích quan sát, nhận diện quy luật hình ảnh và logic không gian.',
			'Người tìm game indie ngắn nhưng cho cảm giác hoàn thành rõ ràng.',
			'Người thích phong cách đen trắng, như mơ, siêu thực và yên tĩnh.',
			'Người không muốn đọc hướng dẫn dài hoặc tutorial quá nhiều.',
			'Người cần game giải đố không phụ thuộc vào phân biệt màu sắc hay âm thanh.',
			'Fan của Rusty Lake, Cube Escape hoặc room puzzle nhưng muốn một trải nghiệm trầm hơn và trừu tượng hơn.',
		],
		faqHeading: 'Câu hỏi thường gặp',
		footerCopy: 'Trang giới thiệu độc lập và lối vào bản chơi thử của series HER TREES.',
		games: [
			{
				title: 'HER TREES : First Puzzle',
				meta: 'HTML5 / Windows · Khoảng 1 giờ · Chơi miễn phí',
				alt: 'Ảnh chụp màn hình HER TREES : First Puzzle',
				copy: 'Phần đầu tiên định hình chất riêng của cả series: câu đố trong không gian phòng, hình ảnh vẽ tay đen trắng và cách giải bằng việc di chuyển, kết hợp đồ vật.',
			},
			{
				title: 'HER TREES : THE PUZZLE HOUSE',
				meta: 'Steam · Phát hành ngày 29 tháng 2, 2024 · Khoảng 1 giờ',
				alt: 'Ảnh chụp màn hình HER TREES : THE PUZZLE HOUSE',
				copy: 'Một ngôi nhà giải đố siêu thực ngắn gọn nhưng trọn vẹn, dùng biểu tượng, logic không gian và khả năng quan sát thay cho phần giải thích dài dòng hay cơ chế phức tạp.',
			},
			{
				title: 'HER TREES : PUZZLE DREAM',
				meta: 'Steam / itch.io Demo · Phát hành ngày 10 tháng 2, 2026 · 1.5 đến 3 giờ',
				alt: 'Ảnh chụp màn hình HER TREES : PUZZLE DREAM',
				copy: 'Đây là phần lớn nhất cho đến nay, mở rộng trải nghiệm thành một hành trình trong mơ với hơn 40 câu đố mà vẫn giữ nhịp điệu yên tĩnh và trực quan của series.',
			},
			{
				title: 'Trees Hate You',
				meta: 'Windows / Web Demo · Rage Comedy Game',
				alt: 'Ảnh chụp màn hình Trees Hate You',
				copy: 'Một game hoàn toàn khác về nhịp chơi: khu rừng liên tục gài bẫy người chơi, tạo nên kiểu hài hước ức chế rất hợp với video và stream.',
			},
		],
		highlights: [
			{
				title: 'Logic giải đố dựa trên di chuyển và kết hợp',
				copy: 'Điểm hay của HER TREES không nằm ở quản lý vật phẩm truyền thống, mà ở việc sắp xếp lại các yếu tố trong khung hình cho đến khi quy luật ẩn hiện ra.',
			},
			{
				title: 'Ít chữ, dễ tiếp cận',
				copy: 'Series này truyền đạt chủ yếu bằng hình ảnh, hình khối và quan hệ không gian, không phụ thuộc nhiều vào văn bản, màu sắc hay gợi ý âm thanh.',
			},
			{
				title: 'Ngắn nhưng trọn vẹn',
				copy: 'Phần lớn các game có thể hoàn thành trong một lần chơi tập trung, cho cảm giác khép kín đầy đủ mà không đòi hỏi quá nhiều thời gian.',
			},
			{
				title: 'Dua vao truc giac hon la tinh toan',
				copy: 'Mo ta cong khai cua series nhan manh quan sat va truc giac, vi vay day khong phai dang game bat ban phai lam toan hay ghi chu lien tuc.',
			},
			{
				title: 'Thiet ke phi ngon ngu',
				copy: 'Cac phan sau duoc mo ta ro rang la non-verbal, con phan dau cung rat it phu thuoc vao chu, nen de tiep can hon voi nguoi choi quoc te.',
			},
			{
				title: 'Loi the ve kha nang tiep can',
				copy: 'Thong tin cong khai cho thay game khong dua vao nhan biet mau sac hay giai do bang am thanh, va phan dau con duoc gan nhan color-blind friendly, one-button va textless.',
			},
		],
		faqs: [
			{
				question: 'HER TREES là thể loại game gì?',
				answer: 'HER TREES là series game giải đố vẽ tay tập trung vào quan sát, di chuyển đồ vật và kết hợp trực quan, nằm giữa escape room, point-and-click và game giải đố nghệ thuật siêu thực.',
			},
			{
				question: 'Có cần chơi theo thứ tự không?',
				answer: 'Không cần. Các phần sau vẫn phù hợp với người mới, và bạn luôn có thể quay lại phần cũ nếu muốn xem series đã phát triển như thế nào.',
			},
			{
				question: 'Game có nhiều chữ khó đọc không?',
				answer: 'Không nhiều. Series này cố ý giảm tối đa phần ngôn ngữ, nên quá trình chơi chủ yếu dựa vào việc nhận ra mối liên hệ trong cảnh hơn là đọc hướng dẫn.',
			},
			{
				question: 'Series này phù hợp với ai?',
				answer: 'Nó hợp với người thích game giải đố ngắn giàu không khí, độ khó tăng vừa phải, và thích tự quan sát để hiểu quy luật thay vì được giải thích trực tiếp.',
			},
			{
				question: 'Tôi có thể chơi HER TREES miễn phí không?',
				answer: 'Có! HER TREES : First Puzzle chơi miễn phí trên trình duyệt tại treespuzzle.com. Các bản đầy đủ (Puzzle House và Puzzle Dream) có trên Steam.',
			},
			{
				question: 'Hoàn thành HER TREES mất bao lâu?',
				answer: 'HER TREES : First Puzzle mất khoảng 1 giờ. THE PUZZLE HOUSE khoảng 1 giờ. PUZZLE DREAM 1,5-3 giờ với hơn 40 câu đố.',
			},
			{
				question: 'Co Her Trees Puzzle Dream Android khong?',
				answer: 'Khong co app chinh thuc. Choi tren trinh duyet dien thoai: /vi/play/puzzle-dream/android/.',
			},
		],
		languageSwitchLabel: 'Ngôn ngữ',
	},
};
