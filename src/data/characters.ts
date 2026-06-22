export interface Character {
  id: number;
  name: string;
  alias: string;
  novel: string;
  description: string;
  martialArts: string[];
  quote: string;
  image: string;
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
  },
];
