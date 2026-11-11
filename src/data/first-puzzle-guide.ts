import type { Locale } from "./home-content";

export type FirstPuzzleGuideCopy = {
	hintsHeading: string;
	hintsIntro: string;
	hints: Array<{ title: string; body: string }>;
	stepsHeading: string;
	stepsIntro: string;
	steps: string[];
	uncertainNote: string;
	forgottenHeading: string;
	forgottenBody: string;
	playLabel: string;
	dreamGuideLabel: string;
	houseGuideLabel: string;
	videoPlacementNote: string;
};

export const firstPuzzleGuideCopy: Record<Locale, FirstPuzzleGuideCopy> = {
	en: {
		hintsHeading: "Section hints (light spoilers)",
		hintsIntro:
			"First Puzzle takes place in a single hand-drawn room. The hints below describe what to look at, not the final letter codes. Try the room on the play page before opening the step-by-step method or the video.",
		hints: [
			{
				title: "The room",
				body: "Scan every object you can drag or place. Furniture, small props, and things that look broken or incomplete are usually part of the same visual sentence.",
			},
			{
				title: "Repeated shapes",
				body: "The series rarely explains itself in words. If a silhouette, leaf, crack, or toy appears more than once, compare those copies — the relationship is often the puzzle.",
			},
			{
				title: "The A–I letter grid",
				body: "Answers are entered as letters on the keypad to the right. You are matching a pattern you uncovered in the room, not guessing a random word.",
			},
		],
		stepsHeading: "Step-by-step method",
		stepsIntro:
			"This is a solving method written from this site’s own notes — it does not list a letter code for every beat, because inventing a wrong code would be worse than a careful hint. Use the video below when you need a specific moment.",
		steps: [
			"Open the play page and give the room a few quiet minutes before any spoiler.",
			"Move every loose object at least once. If something snaps, stacks, covers, or completes another object, that pairing is usually meaningful.",
			"Look back and forth between the scene and the A–I grid. Repeated outlines or counts often tell you which letters to press and in what order.",
			"Enter a short sequence only after a combination has made the pattern obvious. If the pad rejects it, undo the last placement and try a different pairing instead of mashing keys.",
			"When a corner of the room still refuses to move, check whether a prop from another cluster belongs on top of it, or whether two pieces form a single silhouette.",
			"If you are still stuck after that pass, scrub the video to the part of the room you are in rather than watching the whole solution first.",
		],
		uncertainNote:
			"Where a precise letter sequence is not listed here, treat the note as a hint and confirm it against the video rather than assuming a code.",
		forgottenHeading: "Her Trees A Forgotten House",
		forgottenBody:
			"Searches for “Her Trees A Forgotten House walkthrough” usually lead to the same early Stone room that players associate with First Puzzle. The observation rules are the same: move, combine, then match the code. Start with the browser First Puzzle session and the video on this page, then continue to The Puzzle House and Puzzle Dream (each has its own answers page).",
		playLabel: "Play Her Trees First Puzzle",
		dreamGuideLabel: "Puzzle Dream walkthrough and answers",
		houseGuideLabel: "The Puzzle House walkthrough and answers",
		videoPlacementNote:
			"The video is a full spoiler First Puzzle walkthrough. It is here as a fallback after the text hints, not as the first thing to click.",
	},
	"zh-cn": {
		hintsHeading: "分区提示（轻度剧透）",
		hintsIntro:
			"First Puzzle 发生在一个手绘房间里。下面只说明该看哪里，不直接给出全部字母密码。建议先在游玩页自己观察，再看逐步方法或视频。",
		hints: [
			{
				title: "房间本身",
				body: "先检查所有能拖动或摆放的物件。家具、小道具，以及看起来残缺、裂开或不完整的东西，往往同属一条视觉线索。",
			},
			{
				title: "重复的形状",
				body: "这个系列几乎不用文字解释规则。如果某种轮廓、叶子、裂痕或玩具出现了多次，把它们对照起来看——关系本身常常就是谜题。",
			},
			{
				title: "右侧的 A–I 字母格",
				body: "答案是在右侧键盘上输入字母。你是在把房间里已经发现的图案对上去，而不是随机猜词。",
			},
		],
		stepsHeading: "逐步解法思路",
		stepsIntro:
			"以下步骤来自本站自己的游玩记录，讲的是解法路径，而不是给每一拍都编造一个可能出错的密码。需要对准某一瞬间时，再使用下面的视频。",
		steps: [
			"打开游玩页，先安静地在房间里看几分钟，再考虑剧透。",
			"把每件能拿起来的物件都移动至少一次。如果某件东西能卡住、叠上、盖住或补全另一件，这种配对通常有意义。",
			"在场景和 A–I 键盘之间来回对照。重复的轮廓或数量，往往提示该按哪些字母、按什么顺序。",
			"只有当组合已经让图案变得明确时，再输入一小段字母。如果键盘不接受，先撤销上一次摆放，换一种配对，而不是连续乱按。",
			"如果房间的某一角始终动不了，检查是否有别的区域的小物件应该放上来，或者两件东西是否能拼成同一个轮廓。",
			"若这样走完仍卡住，再把视频拖到你所在的那一块，而不必先看完整通关。",
		],
		uncertainNote:
			"本页没有列出的具体字母序列，请只当作提示，并以视频核对，不要把猜测当成确定答案。",
		forgottenHeading: "关于 A Forgotten House",
		forgottenBody:
			"搜索 “Her Trees A Forgotten House 攻略” 的人，通常会落到与 First Puzzle 同一脉络的早期房间。观察规则是一样的：移动、组合，再把密码对上。请从本站的 First Puzzle 浏览器页和本页视频开始，然后再进入 The Puzzle House 与 Puzzle Dream（各自有独立的答案页）。",
		playLabel: "游玩 Her Trees First Puzzle",
		dreamGuideLabel: "Puzzle Dream 攻略与答案",
		houseGuideLabel: "The Puzzle House 攻略与答案",
		videoPlacementNote:
			"视频是完整剧透的 First Puzzle 攻略，放在文字提示之后，作为对照用，而不是一上来就点开。",
	},
	ja: {
		hintsHeading: "区画ごとのヒント（軽いネタバレ）",
		hintsIntro:
			"First Puzzle は一室の手描き部屋が舞台です。以下は「どこを見るか」のヒントで、最終的な文字コードは書いていません。手順や動画の前に、プレイページで自分で観察してみてください。",
		hints: [
			{
				title: "部屋",
				body: "ドラッグや配置ができる物を一通り確認します。家具、小物、欠けている・割れているように見えるものは、同じ視覚的な文の一部であることが多いです。",
			},
			{
				title: "繰り返される形",
				body: "このシリーズは言葉でルールを説明しません。シルエット、葉、ひび、おもちゃなどが複数回出たら、それらを見比べてください。関係そのものが謎です。",
			},
			{
				title: "右側の A–I キーパッド",
				body: "答えは右の文字盤に入力します。部屋で見つけた模様を対応させているのであって、単語を当てずっぽうに推測するわけではありません。",
			},
		],
		stepsHeading: "手順の考え方",
		stepsIntro:
			"ここは本サイトのメモに基づく解き方です。すべての場面に文字コードを付けて間違えるより、確実なヒントにしてあります。特定の瞬間が必要なときは、下の攻略動画を使ってください。",
		steps: [
			"プレイページを開き、ネタバレの前に部屋を数分観察します。",
			"動かせる物は一度は動かします。はまる、重なる、覆う、欠けを埋める組み合わせは、だいたい意味があります。",
			"場面と A–I キーパッドを行き来します。繰り返す輪郭や個数が、どの文字をどの順で押すかの手がかりになります。",
			"模様がはっきりしてから短い列を入力します。受け付けないときは連打せず、直前の配置を戻して別の組み合わせを試します。",
			"部屋の一角がどうしても動かないときは、別の場所の小物を乗せる必要があるか、二つでひとつのシルエットになるかを確認します。",
			"それでも詰まったら、動画を最初から全部見るより、今いる部分までスクラブしてください。",
		],
		uncertainNote:
			"ここに具体的な文字順が書いていない箇所はヒントとして扱い、動画で確認してください。推測を確定解にしないでください。",
		forgottenHeading: "A Forgotten House について",
		forgottenBody:
			"「Her Trees A Forgotten House 攻略」で来る人も、多くの場合 First Puzzle と同じ初期の部屋を指しています。観察のルールは同じで、動かして組み合わせ、コードを合わせます。このページの動画と First Puzzle のプレイページから始め、その後 The Puzzle House と Puzzle Dream（それぞれ解答ページあり）へ進んでください。",
		playLabel: "ハーツリーズ First Puzzle を遊ぶ",
		dreamGuideLabel: "Puzzle Dream 攻略と答え",
		houseGuideLabel: "The Puzzle House 攻略と答え",
		videoPlacementNote:
			"動画は完全ネタバレの First Puzzle 攻略です。テキストのヒントのあとに置く対照用で、最初に開くものではありません。",
	},
	fa: {
		hintsHeading: "اشاره‌های بخش‌ها (اسپویلر سبک)",
		hintsIntro:
			"First Puzzle در یک اتاق دست‌کشیده می‌گذرد. این اشاره‌ها می‌گویند کجا را ببینید، نه رمز نهایی حروف را. پیش از روش گام‌به‌گام یا ویدیو، اتاق را در صفحه بازی امتحان کنید.",
		hints: [
			{
				title: "اتاق",
				body: "هر شیء قابل جابه‌جایی یا قرارگیری را بررسی کنید. مبلمان، وسایل کوچک و چیزهایی که ناقص یا شکسته به نظر می‌رسند معمولاً بخشی از همان جمله دیداری هستند.",
			},
			{
				title: "شکل‌های تکراری",
				body: "این مجموعه به‌ندرت با متن توضیح می‌دهد. اگر یک طرح، برگ، ترک یا اسباب‌بازی چند بار دیده شد، آن‌ها را مقایسه کنید؛ خودِ رابطه معمولاً معماست.",
			},
			{
				title: "شبکه حروف A–I",
				body: "پاسخ‌ها به‌صورت حرف روی صفحه کلید سمت راست وارد می‌شوند. شما الگوی کشف‌شده در اتاق را منطبق می‌کنید، نه اینکه واژه‌ای تصادفی حدس بزنید.",
			},
		],
		stepsHeading: "روش گام‌به‌گام",
		stepsIntro:
			"این روش از یادداشت‌های همین سایت است و برای هر لحظه یک رمز نمی‌سازد. وقتی به لحظه مشخصی نیاز دارید از ویدیو استفاده کنید.",
		steps: [
			"صفحه بازی را باز کنید و پیش از هر اسپویلر چند دقیقه به اتاق نگاه کنید.",
			"هر شیء آزاد را حداقل یک بار جابه‌جا کنید. اگر چیزی قفل، روی هم، پوشانده یا کامل شود، آن جفت معمولاً معنا دارد.",
			"بین صحنه و شبکه A–I رفت‌وآمد کنید. طرح‌ها یا شمارش‌های تکراری اغلب می‌گویند کدام حروف و با چه ترتیبی.",
			"فقط پس از آشکار شدن الگو یک دنباله کوتاه وارد کنید. اگر پذیرفته نشد، جایگذاری آخر را برگردانید، نه اینکه کلیدها را پشت سر هم بزنید.",
			"اگر گوشه‌ای از اتاق حرکت نکرد، ببینید وسیله‌ای از خوشه دیگر باید روی آن قرار گیرد یا دو قطعه یک طرح می‌سازند.",
			"اگر باز هم گیر کردید، ویدیو را تا همان بخش اتاق جلو ببرید، نه اینکه اول کل راه‌حل را ببینید.",
		],
		uncertainNote:
			"جایی که ترتیب دقیق حروف نیامده، آن را فقط اشاره بدانید و با ویدیو تأیید کنید.",
		forgottenHeading: "Her Trees A Forgotten House",
		forgottenBody:
			"جستجوهای «A Forgotten House walkthrough» معمولاً به همان اتاق اولیه مجموعه می‌رسند که بازیکنان آن را با First Puzzle مرتبط می‌دانند. قاعده همان است: حرکت، ترکیب، سپس تطبیق رمز. از صفحه بازی و ویدیوی همین صفحه شروع کنید، بعد به The Puzzle House و Puzzle Dream بروید.",
		playLabel: "بازی Her Trees First Puzzle",
		dreamGuideLabel: "راهنمای Puzzle Dream",
		houseGuideLabel: "راهنمای The Puzzle House",
		videoPlacementNote:
			"ویدیو راهنمای کامل و اسپویلر First Puzzle است و بعد از نکات متنی آمده، نه به‌عنوان اولین کلیک.",
	},
	fr: {
		hintsHeading: "Indices par section (spoilers légers)",
		hintsIntro:
			"First Puzzle se déroule dans une seule pièce dessinée à la main. Les indices ci-dessous indiquent où regarder, pas les codes de lettres finaux. Essayez d’abord la page de jeu.",
		hints: [
			{
				title: "La pièce",
				body: "Parcourez chaque objet que vous pouvez déplacer ou poser. Les meubles, petits accessoires et éléments cassés ou incomplets font souvent partie de la même phrase visuelle.",
			},
			{
				title: "Formes répétées",
				body: "La série s’explique rarement par le texte. Si une silhouette, une feuille, une fissure ou un jouet revient, comparez ces copies : la relation est souvent le puzzle.",
			},
			{
				title: "La grille de lettres A–I",
				body: "Les réponses s’entrent en lettres sur le pavé à droite. Vous associez un motif trouvé dans la pièce, vous ne devinez pas un mot au hasard.",
			},
		],
		stepsHeading: "Méthode étape par étape",
		stepsIntro:
			"Cette méthode vient des notes de ce site. Elle ne fabrique pas un code pour chaque moment. Servez-vous de la vidéo pour un instant précis.",
		steps: [
			"Ouvrez la page de jeu et passez quelques minutes dans la pièce avant tout spoiler.",
			"Déplacez chaque objet libre au moins une fois. Un emboîtement, un empilement ou un recouvrement a généralement un sens.",
			"Allez et venez entre la scène et la grille A–I. Les contours ou comptes répétés indiquent souvent quelles lettres presser, et dans quel ordre.",
			"N’entrez une courte séquence qu’une fois le motif évident. Si le pavé refuse, annulez le dernier placement au lieu de marteler les touches.",
			"Si un coin de la pièce ne bouge pas, vérifiez si un accessoire d’un autre groupe doit s’y poser, ou si deux pièces forment une seule silhouette.",
			"Si vous êtes encore bloqué, avancez la vidéo jusqu’à la partie de la pièce où vous êtes, plutôt que de tout regarder d’abord.",
		],
		uncertainNote:
			"Lorsqu’une séquence exacte n’est pas listée, traitez la note comme un indice et confirmez-la avec la vidéo.",
		forgottenHeading: "Her Trees A Forgotten House",
		forgottenBody:
			"Les recherches « A Forgotten House walkthrough » pointent généralement vers la même pièce précoce que First Puzzle. Les règles d’observation sont les mêmes. Commencez par la page de jeu et la vidéo, puis continuez vers The Puzzle House et Puzzle Dream.",
		playLabel: "Jouer à Her Trees First Puzzle",
		dreamGuideLabel: "Guide Puzzle Dream",
		houseGuideLabel: "Guide The Puzzle House",
		videoPlacementNote:
			"La vidéo est un walkthrough complet (spoilers). Elle sert de recours après les indices écrits.",
	},
	id: {
		hintsHeading: "Petunjuk per bagian (spoiler ringan)",
		hintsIntro:
			"First Puzzle berlangsung di satu ruangan bergambar tangan. Petunjuk ini menjelaskan apa yang perlu dilihat, bukan kode huruf akhir. Coba dulu di halaman main.",
		hints: [
			{
				title: "Ruangan",
				body: "Periksa setiap objek yang bisa digeser atau diletakkan. Furnitur, properti kecil, dan benda yang tampak rusak atau tidak lengkap biasanya bagian dari kalimat visual yang sama.",
			},
			{
				title: "Bentuk berulang",
				body: "Seri ini jarang menjelaskan diri dengan teks. Jika siluet, daun, retakan, atau mainan muncul lebih dari sekali, bandingkan salinannya — hubungannya sering kali adalah puzzlenya.",
			},
			{
				title: "Kisi huruf A–I",
				body: "Jawaban dimasukkan sebagai huruf di keypad kanan. Anda mencocokkan pola yang sudah ditemukan di ruangan, bukan menebak kata acak.",
			},
		],
		stepsHeading: "Metode langkah demi langkah",
		stepsIntro:
			"Metode ini ditulis dari catatan situs ini. Kami tidak membuat-buat kode untuk setiap momen. Gunakan video jika Anda butuh detik yang spesifik.",
		steps: [
			"Buka halaman main dan beri ruangan beberapa menit sebelum spoiler.",
			"Gerakkan setiap objek longgar setidaknya sekali. Jika sesuatu menempel, menumpuk, menutupi, atau melengkapi objek lain, pasangan itu biasanya bermakna.",
			"Bolak-balik antara adegan dan kisi A–I. Garis atau jumlah yang berulang sering menunjukkan huruf mana dan urutannya.",
			"Masukkan urutan pendek hanya setelah polanya jelas. Jika ditolak, batalkan peletakan terakhir, jangan menekan tombol berulang-ulang.",
			"Jika satu sudut ruangan tidak bergerak, cek apakah properti dari kelompok lain harus diletakkan di atasnya, atau dua keping membentuk satu siluet.",
			"Jika masih terjebak, geser video ke bagian ruangan Anda, jangan menonton seluruh solusi lebih dulu.",
		],
		uncertainNote:
			"Jika urutan huruf yang tepat tidak tercantum, anggap itu petunjuk dan konfirmasikan dengan video.",
		forgottenHeading: "Her Trees A Forgotten House",
		forgottenBody:
			"Pencarian “A Forgotten House walkthrough” biasanya merujuk ke ruangan awal yang sama dengan First Puzzle. Aturannya sama: geser, gabungkan, lalu cocokkan kode. Mulai dari halaman main dan video ini, lalu lanjut ke The Puzzle House dan Puzzle Dream.",
		playLabel: "Mainkan Her Trees First Puzzle",
		dreamGuideLabel: "Panduan Puzzle Dream",
		houseGuideLabel: "Panduan The Puzzle House",
		videoPlacementNote:
			"Video adalah walkthrough First Puzzle yang penuh spoiler, diletakkan setelah petunjuk teks.",
	},
	vi: {
		hintsHeading: "Gợi ý theo khu vực (spoiler nhẹ)",
		hintsIntro:
			"First Puzzle diễn ra trong một căn phòng vẽ tay. Các gợi ý dưới đây nói nên nhìn vào đâu, không đưa mã chữ cái cuối. Hãy thử trên trang chơi trước.",
		hints: [
			{
				title: "Căn phòng",
				body: "Xem mọi vật có thể kéo hoặc đặt. Nội thất, đạo cụ nhỏ, và những thứ trông vỡ hoặc chưa hoàn chỉnh thường cùng một câu hình ảnh.",
			},
			{
				title: "Hình lặp lại",
				body: "Series ít khi giải thích bằng chữ. Nếu một bóng dáng, chiếc lá, vết nứt hoặc đồ chơi xuất hiện nhiều lần, hãy so chúng với nhau — mối quan hệ thường chính là câu đố.",
			},
			{
				title: "Lưới chữ A–I",
				body: "Đáp án được nhập bằng chữ trên bàn phím bên phải. Bạn khớp mẫu đã tìm thấy trong phòng, không phải đoán một từ ngẫu nhiên.",
			},
		],
		stepsHeading: "Cách làm từng bước",
		stepsIntro:
			"Phần này viết từ ghi chú của trang, không bịa mã cho từng nhịp. Dùng video khi bạn cần một khoảnh khắc cụ thể.",
		steps: [
			"Mở trang chơi và dành vài phút quan sát phòng trước khi xem spoiler.",
			"Di chuyển mọi vật rời ít nhất một lần. Nếu thứ gì đó khớp, chồng, che hoặc hoàn thiện vật khác, cặp đó thường có ý nghĩa.",
			"Nhìn qua lại giữa cảnh và lưới A–I. Đường nét hoặc số lượng lặp lại thường cho biết chữ nào và thứ tự nào.",
			"Chỉ nhập một chuỗi ngắn khi mẫu đã rõ. Nếu bàn phím từ chối, hoàn tác lần đặt vừa rồi, đừng bấm loạn.",
			"Nếu một góc phòng không nhúc nhích, kiểm tra xem đạo cụ từ cụm khác có phải đặt lên đó, hoặc hai mảnh có tạo một bóng dáng.",
			"Nếu vẫn kẹt, tua video tới đúng phần phòng bạn đang ở, đừng xem hết lời giải trước.",
		],
		uncertainNote:
			"Chỗ nào không ghi đúng chuỗi chữ, hãy coi đó là gợi ý và đối chiếu với video.",
		forgottenHeading: "Her Trees A Forgotten House",
		forgottenBody:
			"Các tìm kiếm “A Forgotten House walkthrough” thường dẫn tới cùng căn phòng sớm mà người chơi gắn với First Puzzle. Quy tắc quan sát giống nhau. Bắt đầu với trang chơi và video, rồi sang The Puzzle House và Puzzle Dream.",
		playLabel: "Chơi Her Trees First Puzzle",
		dreamGuideLabel: "Hướng dẫn Puzzle Dream",
		houseGuideLabel: "Hướng dẫn The Puzzle House",
		videoPlacementNote:
			"Video là walkthrough First Puzzle đầy spoiler, đặt sau phần gợi ý chữ.",
	},
};
