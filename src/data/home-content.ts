export type Locale = 'zh-cn' | 'en' | 'ja' | 'vi';

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

export const localeOrder: Locale[] = ['en', 'zh-cn', 'ja', 'vi'];

export const languageLabels: Record<Locale, string> = {
	'zh-cn': '中文',
	en: 'English',
	ja: '日本語',
	vi: 'Tiếng Việt',
};

export const homeContent: Record<Locale, HomeContent> = {
	'zh-cn': {
		lang: 'zh-CN',
		path: '/zh-cn/',
		guidePath: '/zh-cn/guide/',
		siteName: 'Her Trees Puzzle Game',
		pageTitle: 'Her Trees Puzzle Game',
		pageDescription:
			'了解 HER TREES 这个由 Stone 创作的黑白手绘解谜系列，体验以观察、物件组合与安静超现实氛围为核心的解谜过程。',
		guidePageTitle: 'HER TREES 攻略视频',
		guidePageDescription: '查看 HER TREES 攻略视频，页面内直接播放 YouTube 攻略内容。',
		headerIntro:
			'是一款独特的解谜游戏系列，玩家通过移动和组合物品来解谜。揭开这间奇特房间的奥秘。',
		playHeading: '在线游玩 HER TREES : First Puzzle',
		playButton: '开始游戏',
		guideButton: '点击查看攻略',
		iframeTitle: 'HER TREES : First Puzzle 在线试玩',
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
		],
		languageSwitchLabel: '切换语言',
	},
	en: {
		lang: 'en',
		path: '/',
		guidePath: '/guide/',
		siteName: 'Her Trees Puzzle Game',
		pageTitle: 'Her Trees Puzzle Game',
		pageDescription:
			'Explore HER TREES, Stone’s black-and-white hand-drawn puzzle series built around observation, object combinations, and quiet surreal atmosphere.',
		guidePageTitle: 'HER TREES Guide Video',
		guidePageDescription: 'Watch a HER TREES guide video embedded directly on this page.',
		headerIntro:
			'An unusual puzzle game series where you solve mysteries by moving and combining objects inside strange, hand-drawn rooms.',
		playHeading: 'Play HER TREES : First Puzzle Online',
		playButton: 'Start Game',
		guideButton: 'View Guide',
		iframeTitle: 'HER TREES : First Puzzle online demo',
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
				meta: 'Steam · Released February 29, 2024 · About 1 hour',
				alt: 'Screenshot from HER TREES : THE PUZZLE HOUSE',
				copy: 'A compact but complete surreal puzzle house that replaces heavy text and complex systems with symbols, spatial logic, and careful observation.',
			},
			{
				title: 'HER TREES : PUZZLE DREAM',
				meta: 'Steam / itch.io Demo · Released February 10, 2026 · 1.5 to 3 hours',
				alt: 'Screenshot from HER TREES : PUZZLE DREAM',
				copy: 'The largest entry so far, expanding the series into a dreamlike journey with more than 40 puzzles while keeping its quiet and intuitive design.',
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
		],
		languageSwitchLabel: 'Language',
	},
	ja: {
		lang: 'ja',
		path: '/ja/',
		guidePath: '/ja/guide/',
		siteName: 'Her Trees Puzzle Game',
		pageTitle: 'Her Trees Puzzle Game',
		pageDescription:
			'Stone による白黒手描きパズルシリーズ HER TREES を紹介。観察、オブジェクトの組み合わせ、静かな幻想性を中心にした体験を楽しめます。',
		guidePageTitle: 'HER TREES 攻略動画',
		guidePageDescription: 'YouTube の HER TREES 攻略動画をこのページ内で視聴できます。',
		headerIntro:
			'物を動かして組み合わせながら謎を解いていく、独特なパズルゲームシリーズです。不思議な部屋に隠された仕組みを見つけてください。',
		playHeading: 'HER TREES : First Puzzle をブラウザで遊ぶ',
		playButton: 'ゲーム開始',
		guideButton: '攻略を見る',
		iframeTitle: 'HER TREES : First Puzzle オンライン体験版',
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
		],
		languageSwitchLabel: '言語',
	},
	vi: {
		lang: 'vi',
		path: '/vi/',
		guidePath: '/vi/guide/',
		siteName: 'Her Trees Puzzle Game',
		pageTitle: 'Her Trees Puzzle Game',
		pageDescription:
			'Khám phá HER TREES, loạt game giải đố vẽ tay đen trắng của Stone, tập trung vào quan sát, kết hợp đồ vật và bầu không khí siêu thực yên tĩnh.',
		guidePageTitle: 'Video huong dan HER TREES',
		guidePageDescription: 'Xem video huong dan HER TREES duoc nhung truc tiep tren trang nay.',
		headerIntro:
			'Đây là một series game giải đố khác lạ, nơi bạn giải mật mã bằng cách di chuyển và kết hợp đồ vật trong những căn phòng kỳ quái.',
		playHeading: 'Chơi HER TREES : First Puzzle Trực Tuyến',
		playButton: 'Bắt đầu chơi',
		guideButton: 'Xem huong dan',
		iframeTitle: 'HER TREES : First Puzzle bản chơi trực tuyến',
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
		],
		languageSwitchLabel: 'Ngôn ngữ',
	},
};
