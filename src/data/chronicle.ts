export interface TimelineEvent {
  id: number;
  year: string;
  dynasty: string;
  novel: string;
  title: string;
  description: string;
}

export interface ClassicBattle {
  id: number;
  name: string;
  novel: string;
  year: string;
  sideA: string;
  sideB: string;
  result: string;
  highlight: string;
  replay: string;
}

export const timelineEvents: TimelineEvent[] = [
  {
    id: 1,
    year: "约前496年",
    dynasty: "春秋",
    novel: "越女剑",
    title: "越女论剑",
    description: "阿青以竹枝为剑，破三千越甲，范蠡惊叹剑术之精妙。越国以此剑法操练军士，终成灭吴之利。",
  },
  {
    id: 2,
    year: "1091年",
    dynasty: "北宋",
    novel: "天龙八部",
    title: "雁门关血案",
    description: "慕容博假传契丹来袭之讯，玄慈率中原群豪伏击萧远山一家，酿成三十年血海深仇。",
  },
  {
    id: 3,
    year: "1093年",
    dynasty: "北宋",
    novel: "天龙八部",
    title: "杏子林之变",
    description: "全冠清揭发乔峰契丹身世，丐帮内乱，乔峰从万人敬仰的帮主沦为众矢之的。",
  },
  {
    id: 4,
    year: "1093年",
    dynasty: "北宋",
    novel: "天龙八部",
    title: "少室山大战",
    description: "乔峰三兄弟力战群雄，降龙十八掌威震天下，兄弟义气感天动地。",
  },
  {
    id: 5,
    year: "1094年",
    dynasty: "北宋",
    novel: "天龙八部",
    title: "雁门关殉义",
    description: "乔峰以一己之死换宋辽数十年太平，断箭穿胸，英雄落幕。",
  },
  {
    id: 6,
    year: "1206年",
    dynasty: "南宋",
    novel: "射雕英雄传",
    title: "大漠弯弓射雕",
    description: "郭靖大漠成长，弯弓射雕显身手，邂逅黄蓉，开启一段传奇。",
  },
  {
    id: 7,
    year: "1220年",
    dynasty: "南宋",
    novel: "射雕英雄传",
    title: "华山论剑",
    description: "天下五绝齐聚华山，东邪西毒南帝北丐中神通，争夺天下第一之名。",
  },
  {
    id: 8,
    year: "1238年",
    dynasty: "南宋",
    novel: "神雕侠侣",
    title: "古墓情缘",
    description: "杨过误入古墓拜小龙女为师，师徒相恋却为世俗所不容。",
  },
  {
    id: 9,
    year: "1243年",
    dynasty: "南宋",
    novel: "神雕侠侣",
    title: "绝情谷断肠",
    description: "小龙女留十六年之约纵身跳崖，杨过苦等十六年肝肠寸断。",
  },
  {
    id: 10,
    year: "1259年",
    dynasty: "南宋",
    novel: "神雕侠侣",
    title: "襄阳大战",
    description: "杨过飞石击毙蒙哥大汗，襄阳之围暂解，神雕大侠名震天下。",
  },
  {
    id: 11,
    year: "1273年",
    dynasty: "南宋",
    novel: "神雕侠侣",
    title: "襄阳城破",
    description: "郭靖黄蓉殉城而亡，侠之大者为国为民，壮烈千秋。",
  },
  {
    id: 12,
    year: "1336年",
    dynasty: "元末",
    novel: "倚天屠龙记",
    title: "屠龙刀现世",
    description: "屠龙刀重现江湖，引得群雄争夺，「武林至尊，宝刀屠龙」之说不胫而走。",
  },
  {
    id: 13,
    year: "1340年",
    dynasty: "元末",
    novel: "倚天屠龙记",
    title: "光明顶之战",
    description: "六大派围攻明教，张无忌以九阳神功力挽狂澜，一战成名天下知。",
  },
  {
    id: 14,
    year: "1341年",
    dynasty: "元末",
    novel: "倚天屠龙记",
    title: "万安寺救人",
    description: "赵敏囚六大派于万安寺，张无忌率众营救，化解正邪恩怨。",
  },
  {
    id: 15,
    year: "1358年",
    dynasty: "元末",
    novel: "倚天屠龙记",
    title: "刀剑合璧",
    description: "屠龙刀与倚天剑相击，秘密揭晓，倚天剑中藏九阴真经，屠龙刀内藏武穆遗书。",
  },
  {
    id: 16,
    year: "约1520年",
    dynasty: "明朝",
    novel: "笑傲江湖",
    title: "思过崖传剑",
    description: "令狐冲于华山思过崖得风清扬传授独孤九剑，剑道开悟。",
  },
  {
    id: 17,
    year: "约1521年",
    dynasty: "明朝",
    novel: "笑傲江湖",
    title: "黑木崖决战",
    description: "令狐冲与任我行攻上黑木崖，东方不败以绣花针施展葵花宝典，惊世骇俗。",
  },
  {
    id: 18,
    year: "约1550年",
    dynasty: "明朝",
    novel: "侠客行",
    title: "侠客岛悟道",
    description: "石破天误入侠客岛，以赤子之心参透太玄经，武功臻至化境。",
  },
  {
    id: 19,
    year: "1633年",
    dynasty: "明末",
    novel: "碧血剑",
    title: "袁承志入世",
    description: "袁承志习得混元功与金蛇剑法，下山行走江湖，卷入明末风云。",
  },
  {
    id: 20,
    year: "1669年",
    dynasty: "清初",
    novel: "鹿鼎记",
    title: "韦小宝入宫",
    description: "扬州少年韦小宝误入皇宫，结识康熙帝，开启荒诞传奇人生。",
  },
  {
    id: 21,
    year: "1673年",
    dynasty: "清初",
    novel: "鹿鼎记",
    title: "智擒鳌拜",
    description: "韦小宝与康熙联手擒拿权臣鳌拜，少年天子亲政，鹿鼎公从此飞黄腾达。",
  },
  {
    id: 22,
    year: "1753年",
    dynasty: "清朝",
    novel: "书剑恩仇录",
    title: "红花会聚义",
    description: "陈家洛继任红花会总舵主，率众反清复明，却因身世之谜陷入忠义两难。",
  },
  {
    id: 23,
    year: "1760年",
    dynasty: "清朝",
    novel: "飞狐外传",
    title: "胡斐闯江湖",
    description: "胡斐为报父仇行走江湖，与程灵素、袁紫衣之间恩怨纠葛。",
  },
  {
    id: 24,
    year: "1780年",
    dynasty: "清朝",
    novel: "雪山飞狐",
    title: "雪山恩仇录",
    description: "大雪山中群豪齐聚，胡一刀与苗人凤的恩怨真相逐渐揭开。",
  },
];

export const classicBattles: ClassicBattle[] = [
  {
    id: 1,
    name: "少室山之战",
    novel: "天龙八部",
    year: "北宋·1093年",
    sideA: "乔峰·段誉·虚竹",
    sideB: "慕容复·丁春秋·游坦之",
    result: "乔峰方大胜",
    highlight: "三兄弟结义",
    replay: "少室山下，旌旗蔽日。乔峰一人横刀立马，降龙十八掌横扫千军，群雄莫敢近前。段誉六脉神剑纵横，虚竹天山折梅手精妙绝伦，三兄弟背靠背而立，气吞山河。慕容复复国执念终究成空，丁春秋化功大法亦难匹敌，游坦之虽有冰蚕毒掌却非乔峰敌手。此战之后，三兄弟之名响彻武林，义薄云天之情成为千古佳话。",
  },
  {
    id: 2,
    name: "光明顶之战",
    novel: "倚天屠龙记",
    year: "元末·1340年",
    sideA: "张无忌（明教）",
    sideB: "六大派联军",
    result: "张无忌力退六大派",
    highlight: "乾坤大挪移",
    replay: "六大派围攻光明顶，明教高手或死或伤，已成强弩之末。张无忌初出茅庐，却以九阳神功为根基，乾坤大挪移为用，一人接下少林、武当、峨眉、昆仑、崆峒、华山六大派轮番挑战。灭绝师太倚天剑锋芒毕露却被化解，空闻大师金刚伏魔功亦被破去。少年一人之力退天下群雄，从此明教不再为人所辱，张无忌亦踏上教主之路。",
  },
  {
    id: 3,
    name: "襄阳大战",
    novel: "神雕侠侣",
    year: "南宋·1259年",
    sideA: "郭靖·杨过·群豪",
    sideB: "蒙古铁骑",
    result: "蒙古大汗蒙哥阵亡",
    highlight: "飞石击毙大汗",
    replay: "蒙古铁骑十万围攻襄阳，城中军民死守数月，粮尽援绝。郭靖以降龙十八掌守城门，一夫当关万夫莫开。杨过与神雕从天而降，于万军丛中飞石击毙蒙哥大汗。蒙哥既死，蒙古大军群龙无首，仓皇北撤。襄阳城头旌旗猎猎，群豪高呼，郭靖黄蓉相视而笑——侠之大者，为国为民，此战之后永载史册。",
  },
  {
    id: 4,
    name: "黑木崖之战",
    novel: "笑傲江湖",
    year: "明朝·约1521年",
    sideA: "令狐冲·任我行·向问天",
    sideB: "东方不败",
    result: "东方不败战败身亡",
    highlight: "绣花针破万法",
    replay: "黑木崖上，风云变色。东方不败仅凭一根绣花针，以葵花宝典之诡奇身法，独战令狐冲、任我行、向问天三大高手犹占上风。其身法之快，令狐冲独孤九剑竟无处可破；其出手之准，任我行吸星大法亦无可奈何。最终任盈盈以杨莲亭为挟，东方不败心神大乱方被所伤。此战之惨烈、之惊心，堪称笑傲江湖第一战。",
  },
];
