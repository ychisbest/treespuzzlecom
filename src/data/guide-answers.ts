import type { Locale } from "./home-content";

export type AnswerRow = {
	id: string;
	answer: string;
	puzzle: Record<Locale, string>;
};

const t = (
	en: string,
	zh: string,
	fa: string,
	id: string,
	vi: string,
	ja = en,
	fr = en,
): Record<Locale, string> => ({
	en,
	"zh-cn": zh,
	fa,
	id,
	vi,
	ja,
	fr,
});

export const houseAnswers: AnswerRow[] = [
	{
		id: "T1",
		answer: "CAFG",
		puzzle: t(
			"Tutorial — leaf on the box",
			"教程 — 盒子上的叶子",
			"آموزش — برگ روی جعبه",
			"Tutorial — daun di atas kotak",
			"Huong dan — la tren hop",
		),
	},
	{
		id: "T2",
		answer: "FEC",
		puzzle: t(
			"Tutorial — broken toy house",
			"教程 — 裂开的玩具屋",
			"آموزش — خانه اسباب‌بازی شکسته",
			"Tutorial — rumah mainan pecah",
			"Huong dan — nha do choi vo",
		),
	},
	{
		id: "1",
		answer: "ICGEA",
		puzzle: t(
			"Toy House — clockwork key",
			"玩具屋 — 发条钥匙",
			"خانه اسباب‌بازی — کلید کوکی",
			"Rumah mainan — kunci jam",
			"Nha do choi — chia khoa co",
		),
	},
	{
		id: "2",
		answer: "HCI",
		puzzle: t(
			"Toy House — stacked towers",
			"玩具屋 — 叠起来的塔",
			"خانه اسباب‌بازی — برج‌های روی هم",
			"Rumah mainan — menara bertumpuk",
			"Nha do choi — thap xep chong",
		),
	},
	{
		id: "3",
		answer: "FIA",
		puzzle: t(
			"Toy House — cat painting jigsaw",
			"玩具屋 — 猫画拼图",
			"خانه اسباب‌بازی — پازل نقاشی گربه",
			"Rumah mainan — puzzle lukisan kucing",
			"Nha do choi — ghep tranh meo",
		),
	},
	{
		id: "4",
		answer: "CAF",
		puzzle: t(
			"Toy House — group of toys",
			"玩具屋 — 一堆玩具",
			"خانه اسباب‌بازی — مجموعه اسباب‌بازی",
			"Rumah mainan — kumpulan mainan",
			"Nha do choi — nhom do choi",
		),
	},
	{
		id: "5",
		answer: "ECF",
		puzzle: t(
			"Cabinet — torn poster and tracing paper",
			"柜子 — 撕开的海报和描图纸",
			"کابینت — پوستر پاره و کاغذ کالک",
			"Lemari — poster sobek dan kertas kalkir",
			"Tu — poster rach va giay trong",
		),
	},
	{
		id: "6",
		answer: "DBHF",
		puzzle: t(
			"Cabinet — potted plant twigs",
			"柜子 — 盆栽枝条",
			"کابینت — شاخه‌های گلدان",
			"Lemari — ranting tanaman pot",
			"Tu — canh cay trong chau",
		),
	},
	{
		id: "7",
		answer: "HDBF",
		puzzle: t(
			"Cabinet — four glass jars",
			"柜子 — 四个玻璃罐",
			"کابینت — چهار شیشه",
			"Lemari — empat toples kaca",
			"Tu — bon lo thuy tinh",
		),
	},
	{
		id: "8",
		answer: "HIFDB",
		puzzle: t(
			"Cabinet — cat doll",
			"柜子 — 猫玩偶",
			"کابینت — عروسک گربه",
			"Lemari — boneka kucing",
			"Tu — bup be meo",
		),
	},
	{
		id: "9",
		answer: "CFIHGDAB",
		puzzle: t(
			"Cabinet — maze on the card",
			"柜子 — 卡片迷宫",
			"کابینت — ماز روی کارت",
			"Lemari — labirin di kartu",
			"Tu — me cung tren the",
		),
	},
	{
		id: "10",
		answer: "AHEB",
		puzzle: t(
			"Cabinet — fishbowl bones",
			"柜子 — 鱼缸鱼骨",
			"کابینت — استخوان ماهی در تنگ",
			"Lemari — tulang ikan di mangkuk",
			"Tu — xuong ca trong be",
		),
	},
	{
		id: "11",
		answer: "DIB",
		puzzle: t(
			"Mousehole — aquarium",
			"鼠洞 — 水族箱",
			"سوراخ موش — آکواریوم",
			"Lubang tikus — akuarium",
			"Lo chuot — be ca",
		),
	},
	{
		id: "12",
		answer: "EHF",
		puzzle: t(
			"Mousehole — snakes",
			"鼠洞 — 蛇",
			"سوراخ موش — مارها",
			"Lubang tikus — ular",
			"Lo chuot — ran",
		),
	},
	{
		id: "13",
		answer: "GHIFEDAB",
		puzzle: t(
			"Mousehole — butterfly life cycle",
			"鼠洞 — 蝴蝶生命周期",
			"سوراخ موش — چرخه زندگی پروانه",
			"Lubang tikus — siklus hidup kupu-kupu",
			"Lo chuot — vong doi buom",
		),
	},
	{
		id: "14",
		answer: "IFEB",
		puzzle: t(
			"Laboratory — stacked leaves",
			"实验室 — 叠叶",
			"آزمایشگاه — برگ‌های روی هم",
			"Laboratorium — daun bertumpuk",
			"Phong thi nghiem — la xep chong",
		),
	},
	{
		id: "15",
		answer: "ACHI",
		puzzle: t(
			"Laboratory — tripod and cup",
			"实验室 — 三脚架和杯子",
			"آزمایشگاه — سه‌پایه و فنجان",
			"Laboratorium — tripod dan cangkir",
			"Phong thi nghiem — chan may va tach",
		),
	},
	{
		id: "16",
		answer: "GACD",
		puzzle: t(
			"Laboratory — wavy leaves",
			"实验室 — 波浪形叶子",
			"آزمایشگاه — برگ‌های موج‌دار",
			"Laboratorium — daun bergelombang",
			"Phong thi nghiem — la uon song",
		),
	},
	{
		id: "17",
		answer: "CDF",
		puzzle: t(
			"Laboratory — cat figurines",
			"实验室 — 猫小雕像",
			"آزمایشگاه — مجسمه‌های گربه",
			"Laboratorium — patung kucing",
			"Phong thi nghiem — tuong meo",
		),
	},
	{
		id: "E",
		answer: "DCI",
		puzzle: t(
			"Ending — crack on the girl's dress",
			"结局 — 女孩裙子上的裂痕",
			"پایان — ترک روی لباس دختر",
			"Akhir — retakan pada gaun gadis",
			"Ket — vet nut tren vay",
		),
	},
];

export const dreamAnswers: AnswerRow[] = [
	{
		id: "I1",
		answer: "HDA",
		puzzle: t(
			"Intro — broken door piece in the tree hollow",
			"开场 — 树洞里的破门碎片",
			"مقدمه — تکه در شکسته در حفره درخت",
			"Intro — pecahan pintu di rongga pohon",
			"Mo dau — manh cua vo trong goc cay",
		),
	},
	{
		id: "I2",
		answer: "AEDH",
		puzzle: t(
			"Intro — flower inside the light bulb",
			"开场 — 放进灯泡的花",
			"مقدمه — گل داخل لامپ",
			"Intro — bunga di dalam bola lampu",
			"Mo dau — hoa trong bong den",
		),
	},
	{
		id: "0-1",
		answer: "EBCFIHGDA",
		puzzle: t(
			"Level 0 — tracing paper over petals (1–9)",
			"第0关 — 描图纸盖在花瓣上（1–9）",
			"سطح ۰ — کاغذ کالک روی گلبرگ‌ها (۱–۹)",
			"Level 0 — kertas kalkir di atas kelopak (1–9)",
			"Level 0 — giay trong tren canh hoa (1–9)",
		),
	},
	{
		id: "0-2",
		answer: "BCIG",
		puzzle: t(
			"Level 0 — bookmark on the open book",
			"第0关 — 打开的书上的书签",
			"سطح ۰ — نشانک روی کتاب باز",
			"Level 0 — pembatas pada buku terbuka",
			"Level 0 — bookmark tren sach mo",
		),
	},
	{
		id: "0-3",
		answer: "ADEHIFCB",
		puzzle: t(
			"Level 0 — butterfly portrait path",
			"第0关 — 蝴蝶画像路径",
			"سطح ۰ — مسیر پرتره پروانه",
			"Level 0 — jalur potret kupu-kupu",
			"Level 0 — duong di tranh buom",
		),
	},
	{
		id: "0-4",
		answer: "IBH",
		puzzle: t(
			"Level 0 — leaf over the broken miniature house",
			"第0关 — 带孔叶子盖住碎掉的微缩屋",
			"سطح ۰ — برگ روی خانه مینیاتوری شکسته",
			"Level 0 — daun di atas rumah mini pecah",
			"Level 0 — la de len nha mini vo",
		),
	},
	{
		id: "0-5",
		answer: "HBDA",
		puzzle: t(
			"Level 0 — opposing animal figures",
			"第0关 — 头朝相反方向的动物",
			"سطح ۰ — پیکره‌های حیوان روبه‌رو",
			"Level 0 — figur hewan berlawanan arah",
			"Level 0 — tuong dong vat nguoc huong",
		),
	},
	{
		id: "1-1",
		answer: "IDBAHGFEC",
		puzzle: t(
			"Level 1 — numbered tiles under tracing paper",
			"第1关 — 描图纸下的数字格",
			"سطح ۱ — کاشی‌های شماره‌دار زیر کاغذ کالک",
			"Level 1 — ubin bernomor di bawah kertas kalkir",
			"Level 1 — o so duoi giay trong",
		),
	},
	{
		id: "1-2",
		answer: "ICA",
		puzzle: t(
			"Level 1 — berry sprig white leaves",
			"第1关 — 浆果枝上的白叶",
			"سطح ۱ — برگ‌های سفید شاخه توت",
			"Level 1 — daun putih pada ranting beri",
			"Level 1 — la trang tren canh qua",
		),
	},
	{
		id: "1-3",
		answer: "DEH",
		puzzle: t(
			"Level 1 — leaves across cracked slabs",
			"第1关 — 盖在裂石上的叶子",
			"سطح ۱ — برگ‌ها روی سنگ‌های ترک‌خورده",
			"Level 1 — daun di atas lempeng retak",
			"Level 1 — la tren tam da nut",
		),
	},
	{
		id: "1-4",
		answer: "EFD",
		puzzle: t(
			"Level 1 — antenna houses on dotted tiles",
			"第1关 — 天线小屋对齐圆点",
			"سطح ۱ — خانه‌های آنتن روی کاشی نقطه‌دار",
			"Level 1 — rumah antena pada ubin bertitik",
			"Level 1 — nha ang-ten tren o cham",
		),
	},
	{
		id: "1-5",
		answer: "DAB",
		puzzle: t(
			"Level 1 — leaf cutouts with dotted tags",
			"第1关 — 带点标签的叶子切口",
			"سطح ۱ — برش برگ با برچسب نقطه‌دار",
			"Level 1 — potongan daun dengan tag bertitik",
			"Level 1 — la cat hinh voi nhan cham",
		),
	},
	{
		id: "1-6",
		answer: "ABDE",
		puzzle: t(
			"Level 1 — twig through dandelion puffs",
			"第1关 — 穿过蒲公英的小枝",
			"سطح ۱ — شاخه میان قاصدک‌ها",
			"Level 1 — ranting di antara dandelion",
			"Level 1 — canh xuyen bo bong",
		),
	},
	{
		id: "1-7",
		answer: "HIFA",
		puzzle: t(
			"Level 1 — white leaves on the middle branch",
			"第1关 — 中间枝上的白叶",
			"سطح ۱ — برگ‌های سفید شاخه میانی",
			"Level 1 — daun putih di cabang tengah",
			"Level 1 — la trang tren canh giua",
		),
	},
	{
		id: "1-8",
		answer: "I",
		puzzle: t(
			"Level 1 — two keys forming letter I (follow arrows after)",
			"第1关 — 两把钥匙拼出 I（再跟箭头）",
			"سطح ۱ — دو کلید که حرف I می‌سازند",
			"Level 1 — dua kunci membentuk huruf I",
			"Level 1 — hai chia khoa tao chu I",
		),
	},
	{
		id: "L",
		answer: "FHI",
		puzzle: t(
			"Corridor — repaired ladder",
			"走廊 — 修好的梯子",
			"راهرو — نردبان تعمیرشده",
			"Koridor — tangga yang diperbaiki",
			"Hanh lang — thang da sua",
		),
	},
	{
		id: "2-1",
		answer: "AFC",
		puzzle: t(
			"Level 2 — leaf tips on trunk dots",
			"第2关 — 叶尖对齐树干圆点",
			"سطح ۲ — نوک برگ روی نقاط تنه",
			"Level 2 — ujung daun pada titik batang",
			"Level 2 — chot la tren cham than cay",
		),
	},
	{
		id: "2-2",
		answer: "CHIF",
		puzzle: t(
			"Level 2 — cat-emblem keys back to back",
			"第2关 — 猫纹钥匙背靠背",
			"سطح ۲ — کلیدهای نشان گربه پشت‌به‌پشت",
			"Level 2 — kunci lambang kucing saling memunggungi",
			"Level 2 — chia khoa meo lung doi lung",
		),
	},
	{
		id: "2-3",
		answer: "IFCBEHGDA",
		puzzle: t(
			"Level 2 — paper cutout maze on the plant",
			"第2关 — 纸片迷宫盖在植物上",
			"سطح ۲ — ماز کاغذی روی گیاه",
			"Level 2 — labirin kertas pada tanaman",
			"Level 2 — me cung giay tren cay",
		),
	},
	{
		id: "2-4",
		answer: "CID",
		puzzle: t(
			"Level 2 — miniature roofs filling the star",
			"第2关 — 微缩屋顶填满星星",
			"سطح ۲ — سقف‌های مینیاتوری داخل ستاره",
			"Level 2 — atap mini mengisi bintang",
			"Level 2 — mai nha mini lap ngoi sao",
		),
	},
	{
		id: "2-5",
		answer: "FEHI",
		puzzle: t(
			"Level 2 — dry plants leveled then F plus arrows",
			"第2关 — 干植物齐顶后跟 F 和箭头",
			"سطح ۲ — گیاهان خشک هم‌ارتفاع سپس F و پیکان",
			"Level 2 — tanaman kering rata lalu F dan panah",
			"Level 2 — cay kho can deu roi F va mui ten",
		),
	},
	{
		id: "2-6",
		answer: "DGC",
		puzzle: t(
			"Level 2 — nested curly twigs",
			"第2关 — 嵌套的卷曲树枝",
			"سطح ۲ — شاخه‌های پیچ‌خورده تو در تو",
			"Level 2 — ranting keriting bersarang",
			"Level 2 — canh xoan long nhau",
		),
	},
	{
		id: "2-7",
		answer: "HCFI",
		puzzle: t(
			"Level 2 — mushroom imprint on wall dots",
			"第2关 — 蘑菇印对齐墙上圆点",
			"سطح ۲ — نقش قارچ روی نقاط دیوار",
			"Level 2 — jejak jamur pada titik dinding",
			"Level 2 — vet nam tren cham tuong",
		),
	},
	{
		id: "2-8",
		answer: "CBEDGHIF",
		puzzle: t(
			"Level 2 — tracing-paper maze in the leaf pile",
			"第2关 — 叶堆里的描图纸迷宫",
			"سطح ۲ — ماز کاغذ کالک در توده برگ",
			"Level 2 — labirin kertas kalkir di tumpukan daun",
			"Level 2 — me cung giay trong dong la",
		),
	},
	{
		id: "P",
		answer: "CDF",
		puzzle: t(
			"Portrait — miniature house on the painted house",
			"画像 — 微缩屋放到画中的房子上",
			"پرتره — خانه مینیاتوری روی خانه نقاشی",
			"Potret — rumah mini pada rumah lukisan",
			"Chan dung — nha mini len nha trong tranh",
		),
	},
	{
		id: "3-1",
		answer: "AHF",
		puzzle: t(
			"Level 3 — two building cutouts aligned",
			"第3关 — 两块建筑剪影对齐",
			"سطح ۳ — دو برش ساختمان هم‌تراز",
			"Level 3 — dua potongan gedung disejajarkan",
			"Level 3 — hai manh nha can hang",
		),
	},
	{
		id: "3-2",
		answer: "EHF",
		puzzle: t(
			"Level 3 — stilt-house ribbons",
			"第3关 — 高脚屋丝带",
			"سطح ۳ — روبان خانه پایه‌دار",
			"Level 3 — pita rumah panggung",
			"Level 3 — ruy bang nha san",
		),
	},
	{
		id: "3-3",
		answer: "GAFCE",
		puzzle: t(
			"Level 3 — berry sprigs filling taped gaps",
			"第3关 — 浆果枝填上胶带缺口",
			"سطح ۳ — شاخه توت در جای خالی چسب‌خورده",
			"Level 3 — ranting beri mengisi celah",
			"Level 3 — canh qua lap cho trong",
		),
	},
	{
		id: "3-4",
		answer: "ICBA",
		puzzle: t(
			"Level 3 — cat tails forming numbers 1–4",
			"第3关 — 猫尾组成数字 1–4",
			"سطح ۳ — دم گربه‌ها اعداد ۱–۴",
			"Level 3 — ekor kucing membentuk angka 1–4",
			"Level 3 — duoi meo tao so 1–4",
		),
	},
	{
		id: "3-5",
		answer: "CFIHEBA",
		puzzle: t(
			"Level 3 — origami house maze pieces",
			"第3关 — 折纸屋迷宫拼块",
			"سطح ۳ — قطعات ماز خانه اوریگامی",
			"Level 3 — potongan labirin rumah origami",
			"Level 3 — manh me cung nha origami",
		),
	},
	{
		id: "3-6",
		answer: "DCA",
		puzzle: t(
			"Level 3 — candle vines on the large building",
			"第3关 — 大楼蜡烛上的藤蔓",
			"سطح ۳ — پیچک شمع روی ساختمان بزرگ",
			"Level 3 — sulur lilin pada gedung besar",
			"Level 3 — day leo nen tren toa lon",
		),
	},
	{
		id: "3-7",
		answer: "GEF",
		puzzle: t(
			"Level 3 — pentagon flower surrounded by fans",
			"第3关 — 五边形花被扇形花围住",
			"سطح ۳ — گل پنج‌ضلعی میان گل‌های بادبزنی",
			"Level 3 — bunga segi lima dikelilingi kipas",
			"Level 3 — hoa ngu giac boc hoa quat",
		),
	},
	{
		id: "3-8",
		answer: "DEH",
		puzzle: t(
			"Level 3 — overlapping budded vines",
			"第3关 — 重叠的花苞藤",
			"سطح ۳ — پیچک‌های غنچه روی هم",
			"Level 3 — sulur kuncup yang bertumpuk",
			"Level 3 — day leo nap chong",
		),
	},
	{
		id: "M",
		answer: "DBF",
		puzzle: t(
			"Mirror — door on the broken mirror (1–3)",
			"镜子 — 门放到破镜上（1–3）",
			"آینه — در روی آینه شکسته (۱–۳)",
			"Cermin — pintu pada cermin pecah (1–3)",
			"Guong — cua tren guong vo (1–3)",
		),
	},
	{
		id: "4-1",
		answer: "CIFG",
		puzzle: t(
			"Level 4 — three horse sculptures merged",
			"第4关 — 三匹马雕塑拼成一匹",
			"سطح ۴ — سه مجسمه اسب یکی می‌شوند",
			"Level 4 — tiga patung kuda digabung",
			"Level 4 — ba tuong ngua ghep lai",
		),
	},
	{
		id: "4-2",
		answer: "CEF",
		puzzle: t(
			"Level 4 — butterfly painting stacked vertically",
			"第4关 — 蝴蝶画垂直叠放",
			"سطح ۴ — نقاشی پروانه به‌صورت عمودی",
			"Level 4 — lukisan kupu-kupu disusun vertikal",
			"Level 4 — tranh buom xep dung",
		),
	},
	{
		id: "4-3",
		answer: "ACF",
		puzzle: t(
			"Level 4 — blooming plants forming a tree",
			"第4关 — 开花植物拼成一棵树",
			"سطح ۴ — گیاهان شکوفا یک درخت می‌سازند",
			"Level 4 — tanaman mekar membentuk pohon",
			"Level 4 — cay no hoa tao thanh cay",
		),
	},
	{
		id: "4-4",
		answer: "DEFHB",
		puzzle: t(
			"Level 4 — cubes over the octagon paper (1–5)",
			"第4关 — 立方体叠在八边形纸上（1–5）",
			"سطح ۴ — مکعب‌ها روی کاغذ هشت‌ضلعی (۱–۵)",
			"Level 4 — kubus di atas kertas oktagon (1–5)",
			"Level 4 — khoi lap phuong tren giay bat giac (1–5)",
		),
	},
	{
		id: "4-5",
		answer: "EFCBADGHI",
		puzzle: t(
			"Level 4 — boat painting next to the fishhook (1–9)",
			"第4关 — 船画对齐鱼钩（1–9）",
			"سطح ۴ — نقاشی قایق کنار قلاب (۱–۹)",
			"Level 4 — lukisan perahu di samping kail (1–9)",
			"Level 4 — tranh thuyen can moc cau (1–9)",
		),
	},
	{
		id: "4-6",
		answer: "GIC",
		puzzle: t(
			"Level 4 — symbols around the three-roof building",
			"第4关 — 三屋顶建筑旁的符号",
			"سطح ۴ — نمادها کنار ساختمان سه‌سقف",
			"Level 4 — simbol di sekitar gedung tiga atap",
			"Level 4 — ky hieu quanh nha ba mai",
		),
	},
	{
		id: "4-7",
		answer: "HAFGBI",
		puzzle: t(
			"Level 4 — constellation star trail",
			"第4关 — 星座画上的轨迹",
			"سطح ۴ — مسیر ستاره صورت فلکی",
			"Level 4 — jejak bintang konstelasi",
			"Level 4 — vet sao tren tranh tinh tu",
		),
	},
	{
		id: "F",
		answer: "ABEC",
		puzzle: t(
			"Finale — tree map on the center door",
			"终章 — 树形地图放到中间大门上",
			"پایان — نقشه درخت روی در مرکزی",
			"Finale — peta pohon pada pintu tengah",
			"Ket — ban do cay len cua giua",
		),
	},
];

export const answerTableCopy: Record<
	Locale,
	{ heading: string; puzzle: string; answer: string; intro: string }
> = {
	en: {
		heading: "Every keypad answer",
		puzzle: "Puzzle",
		answer: "Code",
		intro: "Enter these letters on the A–I grid in order. Spoilers for the whole game.",
	},
	"zh-cn": {
		heading: "全部键盘答案",
		puzzle: "谜题",
		answer: "密码",
		intro: "按顺序在 A–I 键盘上输入这些字母。全文剧透。",
	},
	fa: {
		heading: "همه پاسخ‌های صفحه کلید",
		puzzle: "پازل",
		answer: "رمز",
		intro: "این حروف را به ترتیب روی شبکه A–I وارد کنید. اسپویلر کامل.",
	},
	fr: {
		heading: "Toutes les réponses du clavier",
		puzzle: "Puzzle",
		answer: "Code",
		intro: "Entrez ces lettres dans l’ordre sur la grille A–I. Spoilers complets.",
	},
	id: {
		heading: "Semua jawaban keypad",
		puzzle: "Puzzle",
		answer: "Kode",
		intro: "Masukkan huruf ini berurutan pada kisi A–I. Spoiler penuh.",
	},
	ja: {
		heading: "キーパッド解答一覧",
		puzzle: "パズル",
		answer: "コード",
		intro: "A–I のキーパッドにこの順で入力します。全文ネタバレです。",
	},
	vi: {
		heading: "Tat ca ma keypad",
		puzzle: "Cau do",
		answer: "Ma",
		intro: "Nhap cac chu cai theo thu tu tren luoi A–I. Spoiler toan bo.",
	},
};
