import type { Locale } from "./home-content";

export type DreamGuideExtraCopy = {
	howToPlayHeading: string;
	howToPlayBody: string;
	featuresHeading: string;
	features: Array<{ title: string; body: string }>;
	faqHeading: string;
	faqs: Array<{ question: string; answer: string }>;
};

export const dreamGuideExtraCopy: Record<Locale, DreamGuideExtraCopy> = {
	en: {
		howToPlayHeading: "How to Play Her Trees: Puzzle Dream",
		howToPlayBody:
			"Her Trees: Puzzle Dream is a non-verbal, observation-driven point-and-click puzzle game by Stone. Click and drag objects, match monochrome shapes, align symbols, and enter keypad codes discovered across each surreal dreamscape. There is no text tutorial — every rule is taught visually inside the room.",
		featuresHeading: "What Makes Her Trees: Puzzle Dream Stand Out",
		features: [
			{
				title: "40+ Hand-Drawn Monochrome Puzzles",
				body: "The third and largest entry in the HER TREES series expands into interconnected dream rooms with distinct visual logic.",
			},
			{
				title: "Relaxing, Non-Verbal Design",
				body: "No timers, no fail states, and no language barriers — solve at your own pace using pure visual observation.",
			},
			{
				title: "Spoiler-Safe Walkthrough Structure",
				body: "Jump directly to your current area in the index above and reveal only the keypad code you need.",
			},
		],
		faqHeading: "Her Trees: Puzzle Dream FAQ",
		faqs: [
			{
				question: "What is Her Trees: Puzzle Dream?",
				answer:
					"Her Trees: Puzzle Dream is the third and largest installment in Stone's monochrome point-and-click puzzle series. It features over 40 hand-drawn, non-verbal puzzles set across a surreal dreamscape.",
			},
			{
				question: "Where can I play Her Trees: Puzzle Dream?",
				answer:
					"You can play Her Trees: Puzzle Dream free in your browser on our Puzzle Dream play page, try the free demo on itch.io, or purchase the full PC version on Steam.",
			},
			{
				question: "How long does it take to beat Her Trees: Puzzle Dream?",
				answer:
					"Most players finish Her Trees: Puzzle Dream in about 1.5 to 3 hours, depending on how often they use hints or this walkthrough.",
			},
			{
				question: "Is Her Trees: Puzzle Dream on iOS or Android?",
				answer:
					"Yes, an iOS version (listed as HER DREAM: Rätseltraum / Her Trees: Puzzle Dream) is available on the Apple App Store. On Android or mobile browsers without an app, you can play the WebGL version in landscape mode on our play page.",
			},
		],
	},
	"zh-cn": {
		howToPlayHeading: "Her Trees: Puzzle Dream 怎么玩",
		howToPlayBody:
			"《Her Trees: Puzzle Dream》是 Stone 制作的黑白手绘非语言点击解谜游戏。通过点击、拖拽物品、对齐图形与观察空间规律来推导出密码并解锁下一区域，全程无需文字教程。",
		featuresHeading: "本作核心特色",
		features: [
			{
				title: "40+ 手绘黑白梦境谜题",
				body: "系列第三作也是目前体量最大的一作，包含更丰富的房间衔接与视觉谜题。",
			},
			{
				title: "无计时、无惩罚的纯观察解谜",
				body: "没有倒计时与失败惩罚，适合按自己的节奏安静推理。",
			},
			{
				title: "按区域折叠的无剧透攻略",
				body: "先通过上方目录定位当前区域，只在卡关时展开对应密码或观看完整视频。",
			},
		],
		faqHeading: "Her Trees: Puzzle Dream 常见问题（FAQ）",
		faqs: [
			{
				question: "Her Trees: Puzzle Dream 是什么游戏？",
				answer:
					"它是独立开发者 Stone 打造的 HER TREES 解谜系列第三部作品，采用黑白手绘美术与非语言观察机制，共包含 40 多个谜题。",
			},
			{
				question: "在哪里可以玩 Her Trees: Puzzle Dream？",
				answer:
					"可以直接在本站游玩专页通过浏览器免费体验，也可以在 itch.io 试玩免费 Demo，或在 Steam 购买完整 PC 版。",
			},
			{
				question: "Her Trees: Puzzle Dream 通关大概要多久？",
				answer:
					"大多数玩家在不看或少看攻略的情况下需要约 1.5 到 3 小时通关全部谜题。",
			},
			{
				question: "有 iOS 或安卓手机版吗？",
				answer:
					"苹果 App Store 已有官方 iOS 版；安卓设备暂未推出官方 Google Play 应用，可在本站游玩页横屏使用浏览器体验。",
			},
		],
	},
	fa: {
		howToPlayHeading: "چگونه Her Trees: Puzzle Dream را بازی کنیم",
		howToPlayBody:
			"Her Trees: Puzzle Dream یک بازی پازل غیرکلامی و مشاهده‌محور اثر Stone است. با کلیک و جابه‌جایی اشیا، تطبیق شکل‌های سیاه‌وسفید و کشف کدهای صفحه کلید در فضاهای رویایی پیش بروید.",
		featuresHeading: "ویژگی‌های برجسته Puzzle Dream",
		features: [
			{
				title: "بیش از ۴۰ پازل دست‌ساز سیاه‌وسفید",
				body: "سومین و بزرگ‌ترین نسخه مجموعه HER TREES با اتاق‌های به هم پیوسته و منطق بصری خلاقانه.",
			},
			{
				title: "گیم‌پلی آرام و بدون محدودیت زمانی",
				body: "بدون تایمر و بدون متن پیچیده؛ فقط با دقت و مشاهده پازل‌ها را حل کنید.",
			},
			{
				title: "راهنمای دسته‌بندی‌شده بدون اسپویلر",
				body: "از فهرست بالا بخش مورد نظر را انتخاب کنید و فقط کد پازلی که در آن گیر کرده‌اید را باز کنید.",
			},
		],
		faqHeading: "پرسش‌های متداول Her Trees: Puzzle Dream",
		faqs: [
			{
				question: "بازی Her Trees: Puzzle Dream چیست؟",
				answer:
					"سومین و بزرگ‌ترین قسمت از مجموعه پازل‌های سیاه‌وسفید Stone با بیش از ۴۰ پازل غیرکلامی در فضایی رویایی است.",
			},
			{
				question: "کجا می‌توانم Her Trees: Puzzle Dream را بازی کنم؟",
				answer:
					"می‌توانید رایگان در مرورگر از طریق صفحه بازی همین سایت، دموی رایگان در itch.io یا نسخه کامل در Steam بازی کنید.",
			},
			{
				question: "تکمیل بازی چقدر زمان می‌برد؟",
				answer:
					"بیشتر بازیکنان بین ۱.۵ تا ۳ ساعت برای حل تمام پازل‌ها زمان نیاز دارند.",
			},
			{
				question: "آیا نسخه iOS یا اندروید دارد؟",
				answer:
					"نسخه iOS در App Store منتشر شده است. برای اندروید اپلیکیشن رسمی در گوگل‌پلی نیست و می‌توانید در حالت افقی مرورگر همین سایت بازی کنید.",
			},
		],
	},
	fr: {
		howToPlayHeading: "Comment jouer à Her Trees: Puzzle Dream",
		howToPlayBody:
			"Her Trees: Puzzle Dream est un jeu de réflexion point-and-click non verbal créé par Stone. Déplacez les objets, observez les formes monochromes et déduisez les codes du clavier dans chaque rêve.",
		featuresHeading: "Les points forts de Puzzle Dream",
		features: [
			{
				title: "Plus de 40 énigmes dessinées à la main",
				body: "Le troisième et plus grand épisode de la série HER TREES, avec des salles interconnectées.",
			},
			{
				title: "Expérience calme et sans texte",
				body: "Aucun chronomètre ni barrière de langue : tout repose sur l'observation visuelle.",
			},
			{
				title: "Réponses classées par zone",
				body: "Accédez directement à votre zone actuelle sans révéler les solutions suivantes.",
			},
		],
		faqHeading: "FAQ Her Trees: Puzzle Dream",
		faqs: [
			{
				question: "Qu'est-ce que Her Trees: Puzzle Dream ?",
				answer:
					"C'est le troisième et plus vaste opus de la série de puzzles monochromes de Stone, proposant plus de 40 énigmes sans texte.",
			},
			{
				question: "Où jouer à Her Trees: Puzzle Dream ?",
				answer:
					"Vous pouvez jouer gratuitement dans le navigateur sur notre page de jeu, tester la démo sur itch.io ou acheter la version complète sur Steam.",
			},
			{
				question: "Combien de temps faut-il pour terminer le jeu ?",
				answer:
					"La plupart des joueurs terminent Her Trees: Puzzle Dream en 1 h 30 à 3 heures.",
			},
			{
				question: "Le jeu est-il disponible sur iOS ou Android ?",
				answer:
					"Une version iOS est disponible sur l'App Store. Sur Android, utilisez le navigateur en mode paysage sur notre page de jeu.",
			},
		],
	},
	id: {
		howToPlayHeading: "Cara Bermain Her Trees: Puzzle Dream",
		howToPlayBody:
			"Her Trees: Puzzle Dream adalah game puzzle point-and-click non-verbal karya Stone. Geser objek, cocokkan bentuk monokrom, dan temukan kode keypad di setiap ruang mimpi tanpa tutorial teks.",
		featuresHeading: "Keunggulan Her Trees: Puzzle Dream",
		features: [
			{
				title: "40+ Puzzle Gambar Tangan Monokrom",
				body: "Entri ketiga dan terbesar dalam seri HER TREES dengan tantangan visual yang saling terhubung.",
			},
			{
				title: "Santai Tanpa Batas Waktu",
				body: "Tidak ada timer atau hukuman gagal — pecahkan teka-teki dengan pengamatan murni.",
			},
			{
				title: "Panduan Aman Spoiler per Area",
				body: "Pilih area dari indeks di atas dan buka hanya jawaban keypad yang kamu butuhkan.",
			},
		],
		faqHeading: "FAQ Her Trees: Puzzle Dream",
		faqs: [
			{
				question: "Apa itu Her Trees: Puzzle Dream?",
				answer:
					"Her Trees: Puzzle Dream adalah seri ketiga sekaligus terbesar dari game puzzle monokrom karya Stone dengan lebih dari 40 teka-teki non-verbal.",
			},
			{
				question: "Di mana bisa main Her Trees: Puzzle Dream?",
				answer:
					"Kamu bisa bermain gratis di browser melalui halaman main kami, mencoba demo gratis di itch.io, atau membeli versi lengkap PC di Steam.",
			},
			{
				question: "Berapa lama waktu tamat Her Trees: Puzzle Dream?",
				answer:
					"Rata-rata pemain membutuhkan sekitar 1,5 hingga 3 jam untuk menyelesaikan semua puzzle.",
			},
			{
				question: "Apakah tersedia di iOS atau Android?",
				answer:
					"Versi iOS tersedia di Apple App Store. Untuk Android, kamu dapat memainkannya langsung lewat browser mode lanskap di halaman main kami.",
			},
		],
	},
	ja: {
		howToPlayHeading: "Her Trees: Puzzle Dream の遊び方",
		howToPlayBody:
			"Her Trees: Puzzle Dream は Stone 制作のモノクロ手描き・非言語ポイント＆クリックパズルです。アイテムを動かしたり図形や配置を観察したりして、キーパッドの答えを導き出します。",
		featuresHeading: "Puzzle Dream の特徴",
		features: [
			{
				title: "40以上の手描きモノクロパズル",
				body: "シリーズ第3作にして最大規模。夢の空間がつながる独自の視覚ロジックを体験できます。",
			},
			{
				title: "時間制限なしの静かな謎解き",
				body: "テキスト説明やタイマーがなく、自分のペースでじっくり観察して解けます。",
			},
			{
				title: "エリア別のネタバレ配慮構成",
				body: "目次から現在のエリアへ移動し、詰まった箇所の答えだけを開いて確認できます。",
			},
		],
		faqHeading: "Her Trees: Puzzle Dream よくある質問（FAQ）",
		faqs: [
			{
				question: "Her Trees: Puzzle Dream とはどんなゲームですか？",
				answer:
					"Stone によるモノクロパズルシリーズの第3作で、40以上の非言語パズルを収録した最大ボリュームの作品です。",
			},
			{
				question: "どこでプレイできますか？",
				answer:
					"当サイトのプレイページ（ブラウザ無料）、itch.io の無料デモ版、または Steam の製品版でプレイできます。",
			},
			{
				question: "クリアまでのプレイ時間はどのくらいですか？",
				answer:
					"自力で進める場合、おおむね 1.5〜3 時間程度でクリアできます。",
			},
			{
				question: "iOS や Android で遊べますか？",
				answer:
					"iOS 版は App Store で配信されています。Android 端末ではプレイページの横画面ブラウザで遊べます。",
			},
		],
	},
	vi: {
		howToPlayHeading: "Cách chơi Her Trees: Puzzle Dream",
		howToPlayBody:
			"Her Trees: Puzzle Dream là game giải đố point-and-click không lời của Stone. Kéo thả vật thể, đối chiếu hình khối đen trắng và tìm mã keypad qua từng không gian giấc mơ.",
		featuresHeading: "Điểm nổi bật của Puzzle Dream",
		features: [
			{
				title: "Hơn 40 câu đố vẽ tay đơn sắc",
				body: "Phần thứ ba và lớn nhất trong series HER TREES với nhiều phòng nối tiếp nhau.",
			},
			{
				title: "Thư giãn, không giới hạn thời gian",
				body: "Không đồng hồ đếm ngược, không rào cản ngôn ngữ — hoàn toàn dựa vào quan sát.",
			},
			{
				title: "Hướng dẫn chia khu vực tránh spoiler",
				body: "Chọn đúng khu vực từ mục lục phía trên và chỉ mở đáp án khi cần.",
			},
		],
		faqHeading: "Câu hỏi thường gặp về Her Trees: Puzzle Dream",
		faqs: [
			{
				question: "Her Trees: Puzzle Dream là game gì?",
				answer:
					"Đây là phần thứ ba và lớn nhất trong series game giải đố đen trắng của Stone, gồm hơn 40 câu đố không lời.",
			},
			{
				question: "Chơi Her Trees: Puzzle Dream ở đâu?",
				answer:
					"Bạn có thể chơi miễn phí trên trình duyệt tại trang chơi của chúng tôi, thử bản demo trên itch.io hoặc mua bản đầy đủ trên Steam.",
			},
			{
				question: "Phá đảo game mất bao lâu?",
				answer:
					"Phần lớn người chơi hoàn thành Her Trees: Puzzle Dream trong khoảng 1,5 đến 3 giờ.",
			},
			{
				question: "Game có trên iOS hoặc Android không?",
				answer:
					"Bản iOS đã có trên App Store. Trên Android, bạn có thể chơi bản WebGL chế độ màn hình ngang ngay trên trình duyệt tại trang chơi.",
			},
		],
	},
};
