export interface TimelineEvent {
  title: string;
  description: string;
  age?: string;
  location?: string;
}

export interface CharacterJourney {
  origin: TimelineEvent[];
  destiny: TimelineEvent[];
  emotion: TimelineEvent[];
  martial: TimelineEvent[];
  ending: TimelineEvent[];
}

export interface Character {
  id: number;
  name: string;
  alias: string;
  novel: string;
  description: string;
  martialArts: string[];
  quote: string;
  image: string;
  journey: CharacterJourney;
}

export const characters: Character[] = [
  {
    id: 1,
    name: "乔峰",
    alias: "南院大王",
    novel: "天龙八部",
    description: "乔峰原名萧峰，乃契丹人后裔，自幼被汉人抚养长大，成为丐帮帮主。他豪迈刚烈、义薄云天，武功盖世，以降龙十八掌威震天下。其一生悲壮，身世之谜令他陷入宋辽之间的身份困境，最终为阻止辽宋之战而献出生命。",
    martialArts: ["降龙十八掌", "打狗棒法"],
    quote: "我乔峰大好男儿，何惧之有！",
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Qiao%20Feng%20from%20Demi-Gods%20and%20Semi-Devils%20wuxia%20hero%20ink%20wash%20painting%20style&image_size=portrait_4_3",
    journey: {
      origin: [
        { title: "契丹血脉", description: "生于辽国萧氏贵族，生父萧远山为契丹珊军总教头，母亲为汉人", age: "襁褓", location: "雁门关外" },
        { title: "寄养乔家", description: "雁门关惨案后，被少室山下乔三槐夫妇收养，改名乔峰", age: "婴儿", location: "少室山" },
        { title: "少林启蒙", description: "拜少林寺玄苦大师为师，修习少林内功，打下深厚武学根基", age: "七岁", location: "少林寺" },
      ],
      destiny: [
        { title: "执掌丐帮", description: "凭借过人胆识与武功，得汪剑通传位，成为丐帮帮主，统领江湖第一大帮", age: "而立之年", location: "丐帮总舵" },
        { title: "身世揭秘", description: "杏子林大会中，马夫人揭破其契丹身世，一夜之间从英雄变为众矢之的", age: "约三十岁", location: "无锡杏子林" },
        { title: "聚贤庄血战", description: "为救阿朱独闯聚贤庄，与天下英雄喝断义酒，大开杀戒，尽显英雄本色", age: "约三十岁", location: "聚贤庄" },
        { title: "南院大王", description: "与辽帝耶律洪基结为兄弟，受封南院大王，位极人臣", age: "约三十一岁", location: "辽国上京" },
      ],
      emotion: [
        { title: "邂逅阿朱", description: "在阿朱假扮止清和尚时初遇，被其精灵古怪所吸引", age: "约三十岁", location: "少林寺" },
        { title: "雁门关盟约", description: "阿朱在雁门关外等候五日五夜，两人相约塞外牧羊，共度此生", age: "约三十岁", location: "雁门关" },
        { title: "青石桥悲剧", description: "误信段正淳是杀父仇人，小镜湖青石桥上一掌误毙假扮段正淳的阿朱", age: "约三十岁", location: "小镜湖" },
        { title: "阿紫相随", description: "照顾阿朱之妹阿紫，虽无男女之情，却有责任之重", age: "约三十岁后", location: "辽国" },
      ],
      martial: [
        { title: "少林内功", description: "师从玄苦大师，修习少林正宗内功十余年，根基浑厚无比", age: "七岁起", location: "少林寺" },
        { title: "降龙十八掌", description: "得汪剑通亲授，将降龙十八掌练至刚柔并济、返璞归真之境", age: "青年时期", location: "丐帮" },
        { title: "打狗棒法", description: "作为丐帮帮主，承袭丐帮镇帮之宝打狗棒法，变化精妙", age: "继任帮主时", location: "丐帮" },
        { title: "天下第一", description: "少室山大战以一敌三，对战慕容复、丁春秋、游坦之，威震天下", age: "约三十二岁", location: "少室山" },
      ],
      ending: [
        { title: "胁迫辽帝", description: "为阻止耶律洪基南侵，于雁门关外胁迫辽帝折箭为誓，终其一生不得侵宋", age: "约三十三岁", location: "雁门关" },
        { title: "英雄末路", description: "自觉身为契丹人却叛辽国，愧对族人，以断箭自刺胸膛，壮烈殉道", age: "约三十三岁", location: "雁门关" },
        { title: "阿紫殉情", description: "阿紫抱着乔峰尸首跳下悬崖，游坦之随之而亡，三人同归黄土", age: "同日", location: "雁门关悬崖" },
      ],
    },
  },
  {
    id: 2,
    name: "郭靖",
    alias: "北侠",
    novel: "射雕英雄传",
    description: "郭靖生性憨厚老实，却心怀家国大义，是「侠之大者，为国为民」的典范。他虽天资愚钝，却凭借坚韧不拔的毅力练就一身绝世武功，镇守襄阳数十年，抵御蒙古铁骑，成为万民敬仰的一代大侠。",
    martialArts: ["降龙十八掌", "九阴真经"],
    quote: "侠之大者，为国为民。",
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Guo%20Jing%20from%20The%20Legend%20of%20the%20Condor%20Heroes%20wuxia%20hero%20ink%20wash%20painting%20style&image_size=portrait_4_3",
    journey: {
      origin: [
        { title: "牛家村遗孤", description: "父亲郭啸天为梁山好汉郭盛后人，被段天德杀害，母亲李萍逃亡大漠", age: "未出生", location: "临安牛家村" },
        { title: "大漠降生", description: "母亲李萍在蒙古大漠中产下郭靖，取「靖康之耻」之意命名", age: "出生", location: "蒙古大漠" },
        { title: "铁木真义子", description: "幼年救了哲别，被成吉思汗赏识，成为蒙古「金刀驸马」", age: "幼年", location: "蒙古" },
        { title: "江南七怪", description: "江南七怪远赴大漠传授武功十八年，虽资质愚钝但勤学不辍", age: "六岁起", location: "蒙古" },
      ],
      destiny: [
        { title: "初入中原", description: "奉母命南下寻找杀父仇人，初入江湖，开启传奇人生", age: "十八岁", location: "张家口" },
        { title: "华山论剑", description: "参与第二次华山论剑，与黄药师、洪七公各拆三百招，并列天下五绝之「北侠」", age: "约二十岁", location: "华山" },
        { title: "西征建功", description: "随成吉思汗西征花剌子模，以武穆遗书兵法屡建奇功", age: "约二十岁", location: "西域" },
        { title: "镇守襄阳", description: "与黄蓉夫妻同心，镇守襄阳数十年，抵御蒙古南侵，鞠躬尽瘁", age: "中年起", location: "襄阳" },
      ],
      emotion: [
        { title: "张家口初遇", description: "黄蓉扮成小乞丐，郭靖以诚相待，倾囊相助，两人一见如故", age: "十八岁", location: "张家口" },
        { title: "桃花岛提亲", description: "赴桃花岛求亲，与欧阳克比试，黄药师终许亲事", age: "约十九岁", location: "桃花岛" },
        { title: "夫妻同心", description: "与黄蓉结为连理，夫妻情深，一生相守，共育郭芙、郭襄、郭破虏", age: "约二十岁", location: "桃花岛" },
        { title: "华筝之约", description: "与华筝公主有婚约在先，但心中只有黄蓉，华筝终成全二人", age: "青年时期", location: "蒙古" },
      ],
      martial: [
        { title: "九阴真经", description: "周伯通于桃花岛洞中传授，并背诵全文，习得绝世内功心法", age: "约十九岁", location: "桃花岛" },
        { title: "降龙十八掌", description: "洪七公因爱吃黄蓉的菜，传授降龙十八掌十五掌，后补齐三掌", age: "约十九岁", location: "宝应县" },
        { title: "左右互搏", description: "周伯通传授双手互搏之术，可一人分使两种武功，威力倍增", age: "约十九岁", location: "桃花岛" },
        { title: "武穆遗书", description: "于铁掌峰得岳飞兵法遗书，精通韬略，成为一代兵法大家", age: "约十九岁", location: "铁掌峰" },
      ],
      ending: [
        { title: "襄阳城破", description: "苦守襄阳数十年，终因大势已去，城破之日与黄蓉双双殉国", age: "约六七十岁", location: "襄阳" },
        { title: "倚天出世", description: "城破前将倚天剑交予郭襄，屠龙刀交予郭破虏，留下「武林至尊，宝刀屠龙」的江湖传说", age: "城破前夕", location: "襄阳" },
        { title: "万古流芳", description: "「侠之大者，为国为民」的精神永载江湖，成为后世武林敬仰的丰碑", age: "身后", location: "江湖" },
      ],
    },
  },
  {
    id: 3,
    name: "杨过",
    alias: "神雕大侠",
    novel: "神雕侠侣",
    description: "杨过自幼父母双亡，性格桀骜不驯，行事亦正亦邪。他与师父小龙女的爱情历经世俗非议与生死考验，断臂之痛更令他浴火重生。十六年苦等终与小龙女重逢，自创黯然销魂掌，成就一代神雕大侠之名。",
    martialArts: ["黯然销魂掌", "玄铁剑法"],
    quote: "风陵渡口初相遇，一见杨过误终身。",
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Yang%20Guo%20from%20The%20Return%20of%20the%20Condor%20Heroes%20wuxia%20hero%20ink%20wash%20painting%20style&image_size=portrait_4_3",
    journey: {
      origin: [
        { title: "父母双亡", description: "父亲杨康死于嘉兴铁枪庙，母亲穆念慈生下他后不久染病去世，成为孤儿", age: "襁褓", location: "嘉兴" },
        { title: "桃花岛寄养", description: "郭靖、黄蓉将他带回桃花岛抚养，因与郭芙、武氏兄弟不和，被送往全真教", age: "约九岁", location: "桃花岛" },
        { title: "古墓拜师", description: "逃出全真教后闯入古墓，被小龙女收留，拜入古墓派门下", age: "约十四岁", location: "终南山活死人墓" },
      ],
      destiny: [
        { title: "师徒之恋", description: "与小龙女日久生情，互生爱慕，开启一段惊世骇俗的师徒之恋", age: "约十八岁", location: "古墓" },
        { title: "断臂之痛", description: "因误会被郭芙斩断右臂，却因祸得福，遇神雕，入剑冢", age: "约二十岁", location: "襄阳" },
        { title: "神雕侠侣", description: "携神雕行走江湖，行侠仗义，被百姓尊称为「神雕侠」", age: "约二十岁后", location: "江湖" },
        { title: "襄阳大战", description: "于万军之中击毙蒙古大汗蒙哥，解襄阳之围，立下不世奇功", age: "约三十六岁", location: "襄阳" },
      ],
      emotion: [
        { title: "古墓朝夕", description: "与小龙女在古墓中朝夕相处，练玉女心经，两情相悦", age: "青年时期", location: "古墓" },
        { title: "绝情谷分离", description: "小龙女为救杨过身中情花剧毒，于断肠崖写下「十六年后，在此重会」，纵身跃下", age: "约二十岁", location: "绝情谷断肠崖" },
        { title: "十六年苦候", description: "信守约定，苦等小龙女一十六年，行侠仗义，寄托思念", age: "二十至三十六岁", location: "江湖" },
        { title: "谷底重逢", description: "十六年之约到期，于断肠崖跳下殉情，竟在绝情谷底与小龙女重逢", age: "三十六岁", location: "绝情谷底" },
      ],
      martial: [
        { title: "古墓派武功", description: "从小龙女处习得玉女心经、天罗地网势、古墓派轻功等", age: "少年时期", location: "古墓" },
        { title: "玄铁剑法", description: "神雕引导下，于剑冢得独孤求败玄铁重剑，练就重剑无锋、大巧不工的境界", age: "约二十岁", location: "剑冢" },
        { title: "黯然销魂掌", description: "思念小龙女至极，自创黯然销魂掌，掌法精妙，威力无穷", age: "约三十岁", location: "海边" },
        { title: "集大成者", description: "兼通九阴真经、蛤蟆功、打狗棒法、玉箫剑法等，融会贯通", age: "中年时期", location: "江湖" },
      ],
      ending: [
        { title: "华山三论", description: "第三次华山论剑，被推为「西狂」，位列新五绝", age: "约三十六岁", location: "华山" },
        { title: "归隐江湖", description: "与小龙女携神雕飘然而去，绝迹江湖，留下神雕侠侣的传说", age: "约三十六岁", location: "华山之巅" },
        { title: "绝迹江湖", description: "此后再无人见过神雕侠侣，唯留风陵师太念念不忘", age: "身后", location: "江湖传说" },
      ],
    },
  },
  {
    id: 4,
    name: "令狐冲",
    alias: "恒山派掌门",
    novel: "笑傲江湖",
    description: "令狐冲生性洒脱不羁，嗜酒如命，却不失赤子之心。他在江湖权谋中始终保持真性情，虽遭师父背叛、身负重伤，仍能笑对人生。习得独孤九剑后武功大成，最终与任盈盈琴箫合奏，笑傲江湖。",
    martialArts: ["独孤九剑", "易筋经"],
    quote: "行云流水，任意所至。",
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Linghu%20Chong%20from%20The%20Smiling%20Proud%20Wanderer%20wuxia%20hero%20ink%20wash%20painting%20style&image_size=portrait_4_3",
    journey: {
      origin: [
        { title: "孤儿出身", description: "自幼父母双亡，被华山派掌门岳不群夫妇收养，视为己出", age: "襁褓", location: "不详" },
        { title: "华山大弟子", description: "拜入华山派，成为岳不群首徒，与师妹岳灵珊青梅竹马", age: "幼年起", location: "华山" },
        { title: "嗜酒成性", description: "生性豪爽，嗜酒如命，常因醉酒误事，但也因酒结交天下豪杰", age: "少年时期", location: "华山" },
      ],
      destiny: [
        { title: "面壁思过", description: "因触犯门规被罚在思过崖面壁一年，意外发现五岳剑派剑法遗迹", age: "约二十五岁", location: "华山思过崖" },
        { title: "独孤九剑", description: "遇风清扬太师叔，得传独孤九剑，从此剑法大进，进入剑道新境界", age: "约二十五岁", location: "思过崖" },
        { title: "蒙冤被逐", description: "被师父岳不群诬陷偷辟邪剑谱、与魔教勾结，逐出师门，成为武林公敌", age: "约二十六岁", location: "华山" },
        { title: "恒山掌门", description: "受定闲师太临终托孤，接任恒山派掌门，成为恒山创派以来第一位男掌门", age: "约二十六岁", location: "恒山" },
      ],
      emotion: [
        { title: "青梅竹马", description: "与小师妹岳灵珊自幼一起长大，情窦初开，练冲灵剑法", age: "少年时期", location: "华山" },
        { title: "绿竹巷知音", description: "于洛阳绿竹巷遇「婆婆」任盈盈，琴箫合奏，互生情愫", age: "约二十六岁", location: "洛阳" },
        { title: "小师妹之死", description: "岳灵珊被林平之杀害，临终托他照顾林平之，令狐冲悲痛欲绝", age: "约二十七岁", location: "华山" },
        { title: "琴箫和鸣", description: "与任盈盈历经波折，终成眷属，新婚之夜琴箫合奏《笑傲江湖》", age: "约二十八岁", location: "西湖梅庄" },
      ],
      martial: [
        { title: "华山剑法", description: "自幼修习华山派正宗剑法，根基扎实", age: "少年时期", location: "华山" },
        { title: "独孤九剑", description: "风清扬亲传，总诀式、破剑式、破刀式等九式，可破天下武功", age: "约二十五岁", location: "思过崖" },
        { title: "吸星大法", description: "于西湖梅庄地牢中习得任我行留下的吸星大法，可吸人内力", age: "约二十六岁", location: "梅庄地牢" },
        { title: "易筋经", description: "方证大师暗中传授少林易筋经，化解吸星大法后遗症，内力归于正道", age: "约二十七岁", location: "少林寺" },
      ],
      ending: [
        { title: "封禅台大战", description: "五岳剑派并派大典上，与岳不群决战，以独孤九剑破辟邪剑法", age: "约二十七岁", location: "嵩山封禅台" },
        { title: "击杀岳不群", description: "思过崖中，仪琳为救令狐冲，一剑刺死岳不群，恩怨终了", age: "约二十七岁", location: "思过崖" },
        { title: "笑傲江湖", description: "将恒山掌门传与仪清，与任盈盈归隐西湖梅庄，从此逍遥自在，笑傲江湖", age: "约二十八岁", location: "西湖梅庄" },
      ],
    },
  },
  {
    id: 5,
    name: "张无忌",
    alias: "明教教主",
    novel: "倚天屠龙记",
    description: "张无忌性格温和宽厚，待人真诚，虽身负九阳神功与乾坤大挪移两大绝学，却不喜争斗。他因缘际会成为明教教主，统领群雄抗击元朝统治，在四女之间纠结徘徊，最终选择与赵敏归隐江湖。",
    martialArts: ["九阳神功", "乾坤大挪移", "太极剑法"],
    quote: "我这一生，总是犹疑不决，辜负了许多人。",
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Zhang%20Wuji%20from%20The%20Heaven%20Sword%20and%20Dragon%20Saber%20wuxia%20hero%20ink%20wash%20painting%20style&image_size=portrait_4_3",
    journey: {
      origin: [
        { title: "冰火岛降生", description: "张翠山与殷素素流落冰火岛，在岛上生下张无忌，谢逊收为义子", age: "出生", location: "冰火岛" },
        { title: "回归中土", description: "十岁时随父母回归中土，在武当山上首次见到中原武林", age: "十岁", location: "武当山" },
        { title: "父母双亡", description: "为保护谢逊下落，父母在武当山自刎而死，张无忌成为孤儿", age: "十岁", location: "武当山" },
        { title: "寒毒缠身", description: "中玄冥二老玄冥神掌，寒毒深入骨髓，张三丰带他四处求医无果", age: "十岁", location: "武当山" },
      ],
      destiny: [
        { title: "胡青牛处学医", description: "被常遇春带去蝴蝶谷找胡青牛，两年间精通医理，救活无数人", age: "十二至十四岁", location: "蝴蝶谷" },
        { title: "九阳真经", description: "跌入昆仑仙境，于白猿腹中得九阳真经，练得九阳神功，驱除寒毒", age: "约十六岁", location: "昆仑山谷" },
        { title: "乾坤大挪移", description: "于明教密道中习得乾坤大挪移七层，成为明教第一高手", age: "约二十岁", location: "光明顶密道" },
        { title: "明教教主", description: "光明顶一役独败六大派高手，被推举为明教第三十四代教主", age: "约二十岁", location: "光明顶" },
      ],
      emotion: [
        { title: "芷若青梅", description: "幼时与周芷若在汉水舟中相遇，一饭之恩，铭记于心", age: "十岁", location: "汉水" },
        { title: "蛛儿情深", description: "殷离（蛛儿）对他一往情深，为他不惜与金花婆婆反目", age: "少年时期", location: "蝴蝶谷" },
        { title: "郡主痴情", description: "蒙古郡主赵敏对他情有独钟，放弃郡主之尊，追随左右", age: "约二十岁", location: "绿柳庄等" },
        { title: "小昭离去", description: "小昭为救众人，被迫远赴波斯，成为波斯明教总教教主，两人永诀", age: "约二十一岁", location: "灵蛇岛" },
      ],
      martial: [
        { title: "九阳神功", description: "练全九阳真经，内力充沛，生生不息，天下内功之冠", age: "约二十岁", location: "昆仑山谷" },
        { title: "乾坤大挪移", description: "于密道中一日练成七层，可挪移乾坤、借力打力、复制对手武功", age: "约二十岁", location: "光明顶密道" },
        { title: "太极功", description: "张三丰于武当山上亲授太极拳与太极剑，以柔克刚，无招胜有招", age: "约二十一岁", location: "武当山" },
        { title: "圣火令神功", description: "于灵蛇岛习得波斯明教圣火令上的怪异武功，招式诡异莫测", age: "约二十一岁", location: "灵蛇岛" },
      ],
      ending: [
        { title: "濠州婚礼", description: "濠州与周芷若大婚，赵敏以谢逊下落为由出现，张无忌随她而去", age: "约二十二岁", location: "濠州" },
        { title: "屠狮大会", description: "少林寺屠狮英雄会上，与周芷若联手对付金刚伏魔圈，终救谢逊", age: "约二十二岁", location: "少林寺" },
        { title: "辞官归隐", description: "将明教教主之位传与杨逍，与赵敏归隐蒙古，不问世事", age: "约二十二岁", location: "蒙古草原" },
      ],
    },
  },
  {
    id: 6,
    name: "段誉",
    alias: "大理国君",
    novel: "天龙八部",
    description: "段誉为大理国王子，生性儒雅好佛，不善武功却机缘巧合习得六脉神剑与北冥神功。他痴情专一，对王语嫣一往情深，历经千辛万苦终获美人芳心。其为人谦和有礼，虽贵为一国之君，却始终保持赤诚之心。",
    martialArts: ["六脉神剑", "北冥神功", "凌波微步"],
    quote: "神仙姐姐，我段誉对你一片真心！",
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Duan%20Yu%20from%20Demi-Gods%20and%20Semi-Devils%20wuxia%20prince%20ink%20wash%20painting%20style&image_size=portrait_4_3",
    journey: {
      origin: [
        { title: "大理世子", description: "大理国王段正淳之子（实为段延庆之子），生于帝王之家，自幼锦衣玉食", age: "出生", location: "大理皇宫" },
        { title: "笃信佛法", description: "受大理国佛风影响，自幼喜读佛经，不喜武功，慈悲为怀", age: "少年时期", location: "大理" },
        { title: "离家出走", description: "父亲逼他学武，他宁死不从，离家出走，开始江湖游历", age: "约十八岁", location: "大理" },
      ],
      destiny: [
        { title: "琅嬛福地", description: "跌入无量山琅嬛福地，得见「神仙姐姐」玉像，磕头千遍获北冥神功与凌波微步", age: "约十八岁", location: "无量山" },
        { title: "六脉神剑", description: "于天龙寺中，枯荣大师传授六脉神剑，情急之下练成六脉齐发", age: "约十九岁", location: "天龙寺" },
        { title: "结义金兰", description: "与乔峰、虚竹在松鹤楼结为异性兄弟，三人笑傲江湖", age: "约十九岁", location: "无锡松鹤楼" },
        { title: "身世揭秘", description: "曼陀山庄中，刀白凤揭开身世之谜，原来他是延庆太子之子", age: "约二十岁", location: "曼陀山庄" },
      ],
      emotion: [
        { title: "钟灵毓秀", description: "初入江湖遇钟灵，两人情投意合，钟灵成为他的红颜知己", age: "约十八岁", location: "无量山" },
        { title: "木婉清", description: "遇木婉清，立下誓言看她容貌便娶她为妻，后发现是同父异母的妹妹", age: "约十八岁", location: "大理" },
        { title: "神仙姐姐", description: "曼陀山庄初见王语嫣，惊为天人，从此痴情追逐，百折不回", age: "约十八岁", location: "曼陀山庄" },
        { title: "西夏招亲", description: "西夏公主招驸马，历经考验，最终抱得美人归", age: "约二十岁", location: "西夏" },
      ],
      martial: [
        { title: "北冥神功", description: "可吸人内力化为己用，初习时懵懂，多次吸干高手内力", age: "约十八岁", location: "无量山" },
        { title: "凌波微步", description: "天下第一轻功，以易经六十四卦方位为步法，飘逸灵动", age: "约十八岁", location: "无量山" },
        { title: "六脉神剑", description: "大理段氏最高武学，以无形剑气伤人，他是唯一练成六脉齐发之人", age: "约十九岁", location: "天龙寺" },
        { title: "万毒不侵", description: "误食莽牯朱蛤，从此万毒不侵，成为百毒之体", age: "约十八岁", location: "大理" },
      ],
      ending: [
        { title: "少室山大战", description: "三兄弟联手大战群雄，六脉神剑施展自如，击退慕容复", age: "约二十岁", location: "少室山" },
        { title: "大理国君", description: "父亲段正淳传位，成为大理国皇帝，勤政爱民", age: "约二十岁", location: "大理" },
        { title: "偕美归隐", description: "后避位为僧，传位给儿子段智兴，与王语嫣、钟灵、木婉清等归隐", age: "中年以后", location: "大理" },
      ],
    },
  },
  {
    id: 7,
    name: "黄蓉",
    alias: "丐帮帮主",
    novel: "射雕英雄传",
    description: "黄蓉乃桃花岛主黄药师之女，聪明伶俐、博学多才，琴棋书画、奇门遁甲无一不精。她以巾帼之姿执掌丐帮，辅佐郭靖镇守襄阳，是江湖中不可多得的奇女子。其智计百出，往往能在危急关头力挽狂澜。",
    martialArts: ["打狗棒法", "落英神剑掌"],
    quote: "靖哥哥，我只愿与你生死相随。",
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Huang%20Rong%20from%20The%20Legend%20of%20the%20Condor%20Heroes%20wuxia%20heroine%20ink%20wash%20painting%20style&image_size=portrait_4_3",
    journey: {
      origin: [
        { title: "桃花岛千金", description: "东邪黄药师独女，自幼丧母，在桃花岛长大，备受父亲宠爱", age: "出生", location: "桃花岛" },
        { title: "博闻强识", description: "父亲授以奇门遁甲、五行八卦、琴棋书画、医卜星相，无一不精", age: "少年时期", location: "桃花岛" },
        { title: "离家出走", description: "与父亲赌气，扮成小乞丐独自离开桃花岛，闯荡江湖", age: "约十五六岁", location: "桃花岛" },
      ],
      destiny: [
        { title: "张家口奇遇", description: "扮小乞丐遇郭靖，被其真诚善良打动，芳心暗许", age: "约十五六岁", location: "张家口" },
        { title: "洪七公之徒", description: "以美食诱洪七公，让郭靖学降龙十八掌，自己也得逍遥游掌法与打狗棒法", age: "约十六岁", location: "宝应县" },
        { title: "丐帮帮主", description: "洪七公将丐帮帮主之位传于她，成为丐帮第十九代帮主，也是首位女帮主", age: "约十六岁", location: "君山" },
        { title: "镇守襄阳", description: "助郭靖镇守襄阳数十年，运筹帷幄，智计百出，保一方百姓平安", age: "中年起", location: "襄阳" },
      ],
      emotion: [
        { title: "情定张家口", description: "郭靖以诚相待，赠送汗血宝马、黄金，两人情根深种", age: "约十五六岁", location: "张家口" },
        { title: "桃花岛定亲", description: "郭靖上桃花岛求亲，通过三道试题，黄药师终许亲事", age: "约十六岁", location: "桃花岛" },
        { title: "患难与共", description: "与郭靖同生共死，历经铁枪庙、烟雨楼等劫难，情深意笃", age: "青年时期", location: "江湖" },
        { title: "夫妻相守", description: "与郭靖结为夫妇，育郭芙、郭襄、郭破虏，相守一生", age: "约十八岁起", location: "桃花岛、襄阳" },
      ],
      martial: [
        { title: "落英神剑掌", description: "黄药师亲授，掌法轻灵飘逸，如落英缤纷", age: "少年时期", location: "桃花岛" },
        { title: "打狗棒法", description: "洪七公亲授丐帮镇帮之宝，三十六路打狗棒法变化精妙", age: "约十六岁", location: "宝应县" },
        { title: "逍遥游掌法", description: "洪七公传授，适合女子修习，身法轻盈", age: "约十六岁", location: "宝应县" },
        { title: "奇门遁甲", description: "精通黄药师的五行八卦、奇门遁甲之术，可布桃花阵", age: "少年时期", location: "桃花岛" },
      ],
      ending: [
        { title: "襄阳城破", description: "苦守襄阳数十年，城破之日与郭靖双双殉国，壮烈牺牲", age: "约六七十岁", location: "襄阳" },
        { title: "倚天屠龙", description: "破城前策划倚天剑屠龙刀方案，将兵法与武功秘籍藏于刀剑之中", age: "城破前夕", location: "襄阳" },
        { title: "巾帼留名", description: "智计无双、忠烈千秋，成为金庸笔下最受喜爱的奇女子之一", age: "身后", location: "江湖" },
      ],
    },
  },
  {
    id: 8,
    name: "小龙女",
    alias: "古墓派传人",
    novel: "神雕侠侣",
    description: "小龙女自幼居于古墓之中，清冷淡然如仙子下凡，不谙世间俗事。她与杨过的师徒之恋惊世骇俗，却矢志不渝。虽屡遭劫难，中毒、失贞、分离，她始终心如磐石，十六年后终与杨过重逢于绝情谷底。",
    martialArts: ["玉女心经", "古墓派轻功"],
    quote: "过儿，我在这里等你，不管多久。",
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Xiaolongnu%20from%20The%20Return%20of%20the%20Condor%20Heroes%20wuxia%20heroine%20ink%20wash%20painting%20style&image_size=portrait_4_3",
    journey: {
      origin: [
        { title: "古墓孤儿", description: "不知父母是谁，自幼被古墓派林朝英的侍女收养，在古墓中长大", age: "襁褓", location: "终南山古墓" },
        { title: "古墓派传人", description: "师父去世后，成为古墓派第三代掌门，与孙婆婆相依为命", age: "幼年", location: "古墓" },
        { title: "不谙世事", description: "常年居于古墓，从未踏入江湖，心性纯真，不知人间俗事", age: "少女时期", location: "古墓" },
      ],
      destiny: [
        { title: "收留杨过", description: "孙婆婆临终托付，收留杨过，收他为古墓派弟子", age: "约十八岁", location: "古墓" },
        { title: "师徒之恋", description: "与杨过共同修习玉女心经，日久生情，师徒之恋悄然萌芽", age: "约十八岁", location: "古墓" },
        { title: "失身之痛", description: "被欧阳锋点穴，甄志丙趁虚而入，误以为是杨过，失身于他", age: "约十八岁", location: "古墓外花丛" },
        { title: "情花剧毒", description: "绝情谷中为救杨过，身中情花剧毒，无药可解", age: "约二十岁", location: "绝情谷" },
      ],
      emotion: [
        { title: "古墓朝夕", description: "与杨过在古墓中练玉女心经，裸身相对，情丝暗结", age: "约十八岁", location: "古墓" },
        { title: "龙女花开", description: "立下誓言，谁能见到她的容貌便杀了他或嫁给他，杨过成为例外", age: "约十八岁", location: "古墓" },
        { title: "十六年之约", description: "为让杨过有活下去的希望，在断肠崖刻下「十六年后，在此重会」，纵身跃下", age: "约二十岁", location: "断肠崖" },
        { title: "谷底重逢", description: "绝情谷底与杨过分别十六年，日日思念，终得重逢", age: "约三十六岁", location: "绝情谷底" },
      ],
      martial: [
        { title: "玉女心经", description: "古墓派最高武学，需二人同修，剑法灵动飘逸，威力无穷", age: "少年时期", location: "古墓" },
        { title: "天罗地网势", description: "古墓派入门轻功，可徒手捕捉麻雀，身法轻灵无双", age: "幼年", location: "古墓" },
        { title: "玉女剑法", description: "古墓派剑法，剑招如行云流水，美妙绝伦", age: "少年时期", location: "古墓" },
        { title: "双手互搏", description: "于绝情谷周伯通传授，可一人使双剑，玉女素心剑法威力倍增", age: "约二十岁", location: "绝情谷" },
      ],
      ending: [
        { title: "谷底求生", description: "断肠崖下深潭中有白鱼可解情花毒，以玉蜂浆为生，十六年容颜不老", age: "二十至三十六岁", location: "绝情谷底" },
        { title: "襄阳大战", description: "与杨过助守襄阳，双剑合璧，屡建奇功", age: "约三十六岁", location: "襄阳" },
        { title: "归隐江湖", description: "与杨过携神雕归隐，从此绝迹江湖，唯留传说", age: "约三十六岁", location: "华山之巅" },
      ],
    },
  },
  {
    id: 9,
    name: "韦小宝",
    alias: "鹿鼎公",
    novel: "鹿鼎记",
    description: "韦小宝出身市井，不通武功，却凭借机灵狡黠在朝堂与江湖间游刃有余。他周旋于康熙帝与天地会之间，既为朝廷重臣又为反清义士，七位夫人相伴左右。其人虽油嘴滑舌，却重情重义，是金庸笔下最具争议也最具人情味的角色。",
    martialArts: ["神行百变"],
    quote: "我对你的敬仰犹如滔滔江水连绵不绝！",
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Wei%20Xiaobao%20from%20The%20Deer%20and%20the%20Cauldron%20wuxia%20trickster%20ink%20wash%20painting%20style&image_size=portrait_4_3",
    journey: {
      origin: [
        { title: "扬州丽春院", description: "母亲韦春花是扬州丽春院妓女，不知生父是谁，在妓院中长大", age: "出生", location: "扬州丽春院" },
        { title: "市井无赖", description: "从小在市井摸爬滚打，偷蒙拐骗、赌钱听书，练就一身机灵本事", age: "少年时期", location: "扬州" },
        { title: "入京奇遇", description: "因与茅十八结识，稀里糊涂来到北京，被抓入皇宫当太监", age: "约十三四岁", location: "北京" },
      ],
      destiny: [
        { title: "康熙好友", description: "假扮小桂子，与小皇帝康熙摔跤结识，成为康熙心腹好友", age: "约十三四岁", location: "皇宫" },
        { title: "擒鳌拜", description: "协助康熙智擒鳌拜，立下大功，被康熙赏识重用", age: "约十四岁", location: "皇宫布库房" },
        { title: "天地会香主", description: "被陈近南收为徒弟，任天地会青木堂香主，同时效忠清廷与反清组织", age: "约十四岁", location: "北京" },
        { title: "鹿鼎公", description: "屡建奇功，被康熙封为一等鹿鼎公，位极人臣", age: "约十八九岁", location: "北京" },
      ],
      emotion: [
        { title: "沐剑屏", description: "第一个夫人，天真烂漫的沐王府小郡主，被他从宫中救出", age: "约十四岁", location: "皇宫" },
        { title: "方怡", description: "沐王府女侠，起初看不起他，后被真情打动", age: "约十五岁", location: "皇宫" },
        { title: "双儿", description: "庄家少奶奶赠送的丫鬟，温柔体贴、忠心耿耿，是他最得力的助手", age: "约十五岁", location: "庄家" },
        { title: "七位夫人", description: "苏荃、方怡、双儿、沐剑屏、曾柔、建宁公主、阿珂，七美相伴", age: "约二十岁", location: "扬州丽春院" },
      ],
      martial: [
        { title: "神行百变", description: "九难师太传授的轻功，虽不精通但逃跑一流", age: "约十六岁", location: "五台山" },
        { title: "匕首护体", description: "有一把削铁如泥的宝匕首，危急时刻可救命", age: "约十四岁", location: "鳌拜府" },
        { title: "含沙射影", description: "洪教主传授的暗器，可暗藏于衣带间，发射毒针", age: "约十七岁", location: "神龙岛" },
        { title: "蒙汗药", description: "擅长使用蒙汗药、石灰粉等下三滥手段，屡建奇功", age: "少年时期", location: "江湖" },
      ],
      ending: [
        { title: "两难抉择", description: "康熙命他剿灭天地会，天地会要他反清复明，他左右为难", age: "约二十岁", location: "北京" },
        { title: "通吃岛隐居", description: "带七位夫人到通吃岛隐居，不问世事", age: "约二十岁", location: "通吃岛" },
        { title: "不知所终", description: "最后携七位夫人与母亲归隐，无人知其所终，留下鹿鼎公的传说", age: "约二十岁后", location: "江湖" },
      ],
    },
  },
  {
    id: 10,
    name: "任盈盈",
    alias: "日月神教圣姑",
    novel: "笑傲江湖",
    description: "任盈盈乃日月神教教主任我行之女，虽身处魔教却性情高洁，精通音律。她以一曲《笑傲江湖》与令狐冲结缘，琴箫和鸣间情根深种。她甘愿为令狐冲舍弃圣姑之尊，隐居西湖之畔，成就一段江湖佳话。",
    martialArts: ["日月神教武功"],
    quote: "我若不能与你在一起，纵有天下又有何用？",
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Ren%20Yingying%20from%20The%20Smiling%20Proud%20Wanderer%20wuxia%20heroine%20ink%20wash%20painting%20style&image_size=portrait_4_3",
    journey: {
      origin: [
        { title: "魔教千金", description: "日月神教教主任我行独女，自幼在黑木崖长大，身份尊贵", age: "出生", location: "黑木崖" },
        { title: "东方不败抚养", description: "父亲任我行被东方不败囚禁，她由东方不败抚养长大，被尊为「圣姑」", age: "幼年起", location: "黑木崖" },
        { title: "精通音律", description: "喜琴箫，尤擅弹奏七弦琴，造诣极高，是武林中少见的音律高手", age: "少年时期", location: "黑木崖" },
      ],
      destiny: [
        { title: "绿竹巷隐居", description: "厌倦黑木崖的权谋斗争，以「婆婆」身份隐居洛阳绿竹巷，抚琴度日", age: "约十七八岁", location: "洛阳绿竹巷" },
        { title: "邂逅令狐冲", description: "令狐冲在绿竹巷听她弹琴，两人因《笑傲江湖》曲谱结缘", age: "约十八岁", location: "洛阳" },
        { title: "少林求医", description: "令狐冲身受重伤，她背他上少林寺，以自己命换方证大师传他易筋经", age: "约十八岁", location: "少林寺" },
        { title: "助父复位", description: "救出任我行，助他重夺日月神教教主之位，父女团聚", age: "约十八岁", location: "梅庄" },
      ],
      emotion: [
        { title: "琴箫知音", description: "令狐冲以箫、她以琴，合奏《笑傲江湖》，知音相识，情愫暗生", age: "约十八岁", location: "绿竹巷" },
        { title: "舍身相救", description: "为救令狐冲性命，不惜委身少林寺，令天下群雄为令狐冲奔走", age: "约十八岁", location: "少林寺" },
        { title: "情定恒山", description: "令狐冲接任恒山掌门，她率众前来道贺，两人情意更浓", age: "约十九岁", location: "恒山" },
        { title: "归隐梅庄", description: "与令狐冲在西湖梅庄成婚，琴箫和鸣，笑傲江湖", age: "约二十岁", location: "西湖梅庄" },
      ],
      martial: [
        { title: "日月神教武功", description: "任我行亲授，内力深厚，精通日月神教各路武功", age: "少年时期", location: "黑木崖" },
        { title: "暗器功夫", description: "善以音律为掩饰，暗中施展暗器，手法精妙", age: "少年时期", location: "黑木崖" },
        { title: "剑术", description: "精通剑法，曾以一柄短剑力战群雄", age: "青年时期", location: "江湖" },
        { title: "音律武功", description: "可通过琴音扰乱敌人心神，以音波伤人，是罕见的音律武学", age: "青年时期", location: "江湖" },
      ],
      ending: [
        { title: "封禅台助战", description: "五岳并派大会上，助令狐冲与岳不群周旋，关键时刻出手相救", age: "约十九岁", location: "嵩山" },
        { title: "大婚梅庄", description: "与令狐冲在西湖梅庄成婚，曲洋、刘正风的《笑傲江湖》曲终于后继有人", age: "约二十岁", location: "西湖梅庄" },
        { title: "笑傲江湖", description: "与令狐冲归隐，不问江湖恩怨，每日琴箫合奏，逍遥自在", age: "约二十岁后", location: "西湖梅庄" },
      ],
    },
  },
];
