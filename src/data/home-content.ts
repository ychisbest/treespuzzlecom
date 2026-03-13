export type Locale = 'zh-cn' | 'en' | 'ja' | 'vi';

export type HomeContent = {
	lang: string;
	path: string;
	siteName: string;
	pageTitle: string;
	pageDescription: string;
	headerIntro: string;
	playHeading: string;
	playButton: string;
	iframeTitle: string;
	gameIntro: string;
	fullscreenButton: string;
	seriesHeading: string;
	whyHeading: string;
	videoLabel: string;
	analysisStrong: string;
	analysisBody: string;
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

export const localeOrder: Locale[] = ['zh-cn', 'en', 'ja', 'vi'];

export const languageLabels: Record<Locale, string> = {
	'zh-cn': '中文',
	en: 'English',
	ja: '日本語',
	vi: 'Tiếng Việt',
};

export const homeContent: Record<Locale, HomeContent> = {
	'zh-cn': {
		lang: 'zh-CN',
		path: '/',
		siteName: 'Her Trees Puzzle Game',
		pageTitle: 'Her Trees Puzzle Game',
		pageDescription:
			'了解 HER TREES 这个由 Stone 创作的黑白手绘解谜系列，体验以观察、物件组合与安静超现实氛围为核心的解谜过程。',
		headerIntro:
			'是一款独特的解谜游戏系列，玩家通过移动和组合物品来解谜。揭开这间奇特房间的奥秘。',
		playHeading: '在线游玩 HER TREES : First Puzzle',
		playButton: '开始游戏',
		iframeTitle: 'HER TREES : First Puzzle 在线试玩',
		gameIntro: '玩法很简单：用鼠标拖动物件并观察它们之间的关系，然后在右侧点击对应密码来解开谜题。',
		fullscreenButton: '全屏游玩',
		seriesHeading: '系列作品一览',
		whyHeading: '这个系列为什么值得玩',
		videoLabel: 'HER TREES 解谜动画演示',
		analysisStrong: '先观察，再理解。',
		analysisBody:
			'HER TREES 把整个画面本身当作规则的一部分。形状、摆放位置、顺序和相邻关系往往比对白更重要，因此每次解开谜题更像是发现，而不是照着说明执行。',
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
		path: '/en/',
		siteName: 'Her Trees Puzzle Game',
		pageTitle: 'Her Trees Puzzle Game',
		pageDescription:
			'Explore HER TREES, Stone’s black-and-white hand-drawn puzzle series built around observation, object combinations, and quiet surreal atmosphere.',
		headerIntro:
			'An unusual puzzle game series where you solve mysteries by moving and combining objects inside strange, hand-drawn rooms.',
		playHeading: 'Play HER TREES : First Puzzle Online',
		playButton: 'Start Game',
		iframeTitle: 'HER TREES : First Puzzle online demo',
		gameIntro:
			'The idea is simple: drag objects with your mouse, study how they relate to each other, and click the matching code on the right to solve the room.',
		fullscreenButton: 'Fullscreen',
		seriesHeading: 'Games In The Series',
		whyHeading: 'Why This Series Is Worth Playing',
		videoLabel: 'HER TREES puzzle animation demo',
		analysisStrong: 'Observe first, understand after.',
		analysisBody:
			'HER TREES treats the whole screen as part of the rule set. Shapes, placement, sequence, and adjacency matter more than dialogue, so each solution feels discovered rather than instructed.',
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
		siteName: 'Her Trees Puzzle Game',
		pageTitle: 'Her Trees Puzzle Game',
		pageDescription:
			'Stone による白黒手描きパズルシリーズ HER TREES を紹介。観察、オブジェクトの組み合わせ、静かな幻想性を中心にした体験を楽しめます。',
		headerIntro:
			'物を動かして組み合わせながら謎を解いていく、独特なパズルゲームシリーズです。不思議な部屋に隠された仕組みを見つけてください。',
		playHeading: 'HER TREES : First Puzzle をブラウザで遊ぶ',
		playButton: 'ゲーム開始',
		iframeTitle: 'HER TREES : First Puzzle オンライン体験版',
		gameIntro:
			'遊び方はシンプルです。マウスで物を動かし、関係性を観察しながら、右側の対応するコードをクリックして謎を解きます。',
		fullscreenButton: '全画面で遊ぶ',
		seriesHeading: 'シリーズ作品一覧',
		whyHeading: 'このシリーズを遊ぶ価値',
		videoLabel: 'HER TREES パズルアニメーション',
		analysisStrong: 'まず観察し、そのあと理解する。',
		analysisBody:
			'HER TREES では画面そのものがルールの一部です。形、配置、順番、隣り合い方が会話より重要で、答えは説明されるものではなく発見するものとして感じられます。',
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
		siteName: 'Her Trees Puzzle Game',
		pageTitle: 'Her Trees Puzzle Game',
		pageDescription:
			'Khám phá HER TREES, loạt game giải đố vẽ tay đen trắng của Stone, tập trung vào quan sát, kết hợp đồ vật và bầu không khí siêu thực yên tĩnh.',
		headerIntro:
			'Đây là một series game giải đố khác lạ, nơi bạn giải mật mã bằng cách di chuyển và kết hợp đồ vật trong những căn phòng kỳ quái.',
		playHeading: 'Chơi HER TREES : First Puzzle Trực Tuyến',
		playButton: 'Bắt đầu chơi',
		iframeTitle: 'HER TREES : First Puzzle bản chơi trực tuyến',
		gameIntro:
			'Cách chơi rất đơn giản: kéo các đồ vật bằng chuột, quan sát mối liên hệ giữa chúng, rồi bấm vào mã tương ứng ở bên phải để giải câu đố.',
		fullscreenButton: 'Toàn màn hình',
		seriesHeading: 'Các game trong series',
		whyHeading: 'Vì sao series này đáng chơi',
		videoLabel: 'Hoạt ảnh giải đố HER TREES',
		analysisStrong: 'Quan sát trước, hiểu sau.',
		analysisBody:
			'HER TREES biến toàn bộ khung hình thành một phần của luật chơi. Hình dạng, vị trí, thứ tự và sự kề nhau quan trọng hơn lời thoại, nên mỗi lời giải giống như một khám phá hơn là làm theo hướng dẫn.',
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
