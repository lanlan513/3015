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

export interface ForkOutcome {
  title: string;
  description: string;
  age?: string;
  location?: string;
  consequence: string;
  mood: "tragic" | "bittersweet" | "peaceful" | "glorious" | "mundane";
}

export interface ForkChoice {
  id: string;
  label: string;
  isCanon: boolean;
  summary: string;
  outcomes: ForkOutcome[];
}

export interface DestinyFork {
  id: string;
  title: string;
  description: string;
  age?: string;
  location?: string;
  canonChoiceId: string;
  choices: ForkChoice[];
}

export type PerspectiveType = "bystander" | "enemy" | "lover" | "history";

export interface PerspectiveEvent {
  title: string;
  description: string;
  age?: string;
  location?: string;
}

export interface CharacterPerspective {
  overview: string;
  description: string;
  keyEvents: PerspectiveEvent[];
}

export interface CharacterPerspectives {
  bystander: CharacterPerspective;
  enemy: CharacterPerspective;
  lover: CharacterPerspective;
  history: CharacterPerspective;
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
  destinyForks?: DestinyFork[];
  perspectives?: CharacterPerspectives;
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
    destinyForks: [
      {
        id: "qf-fork-1",
        title: "杏子林身世揭秘",
        description: "马夫人于杏子林大会当众揭破乔峰契丹身世，群雄哗然。此刻，乔峰面临人生第一个重大抉择——是愤然离去以证清白，还是留下面对风浪？",
        age: "约三十岁",
        location: "无锡杏子林",
        canonChoiceId: "qf-fork-1-a",
        choices: [
          {
            id: "qf-fork-1-a",
            label: "交出打狗棒，黯然离去",
            isCanon: true,
            summary: "原著路线：乔峰不愿祸及丐帮，主动交出帮主之位，孤身调查身世真相。",
            outcomes: [
              { title: "孤身查案", description: "乔峰辞去帮主之位，独自追查带头大哥与杀父仇人下落", consequence: "踏上寻找真相的漫漫长路，却也因此邂逅阿朱，收获此生挚爱", mood: "bittersweet" },
              { title: "聚贤庄血战", description: "为救阿朱，与天下英雄喝断义酒，大开杀戒", consequence: "虽救得阿朱，却与中原武林彻底决裂，从此再无回头之路", mood: "glorious" },
              { title: "雁门关盟约", description: "阿朱在雁门关等候五日五夜，两人相约塞外牧羊", consequence: "英雄终得红颜知己，许下此生最美好的承诺", mood: "peaceful" },
            ],
          },
          {
            id: "qf-fork-1-b",
            label: "力压群雄，据理力争",
            isCanon: false,
            summary: "乔峰凭借降龙十八掌震慑众人，坚持留下查清真相再作定论。",
            outcomes: [
              { title: "丐帮内乱", description: "乔峰以武力压服反对者，但丐帮从此人心涣散，分崩离析", consequence: "虽暂保帮主之位，却失去了帮众的信任与敬意，丐帮名存实亡", mood: "bittersweet" },
              { title: "真假难辨", description: "乔峰留在丐帮，暗中追查，但马夫人等人步步紧逼，设下毒计", consequence: "中计误杀丐帮长老，百口莫辩，终究还是身败名裂", mood: "tragic" },
              { title: "错失阿朱", description: "忙于丐帮事务，从未踏上寻找真相之路，与阿朱再无交集", consequence: "一生为丐帮帮主，却从未感受过人间真情，最终孤独终老", mood: "mundane" },
            ],
          },
          {
            id: "qf-fork-1-c",
            label: "愤而出走，投奔辽国",
            isCanon: false,
            summary: "既然汉人不容，索性回归契丹，投奔同族，以牙还牙。",
            outcomes: [
              { title: "辽军大将", description: "乔峰投奔辽国，凭武功成为南院大王，率军南征", consequence: "率辽军攻破雁门关，屠戮中原，成为汉人眼中的恶魔，一生再无安宁", mood: "tragic" },
              { title: "兄弟反目", description: "与中原群雄于战场上刀兵相见，亲手击杀昔日丐帮兄弟", consequence: "虽立下赫赫战功，却夜夜被噩梦惊醒，最终自刎于军前", mood: "tragic" },
            ],
          },
        ],
      },
      {
        id: "qf-fork-2",
        title: "青石桥上的误会",
        description: "乔峰认定段正淳是杀父仇人，约其在小镜湖青石桥决一死战。风雨欲来之际，阿朱却在暗处得知了一个惊天秘密——",
        age: "约三十岁",
        location: "小镜湖青石桥",
        canonChoiceId: "qf-fork-2-a",
        choices: [
          {
            id: "qf-fork-2-a",
            label: "依约赴战，一掌击毙",
            isCanon: true,
            summary: "原著路线：乔峰依约而至，以降龙十八掌击毙假扮段正淳的阿朱，铸成千古大错。",
            outcomes: [
              { title: "青石桥悲剧", description: "雷霆万钧的降龙十八掌击出，倒下的却是身着段正淳衣衫的阿朱", consequence: "阿朱临死含笑，托付他照顾阿紫。乔峰痛不欲生，此生再无快乐可言", mood: "tragic" },
              { title: "追查真凶", description: "乔峰发现阿朱遗留下的段正淳手书，方知仇人另有其人", consequence: "携阿紫一路追查，终于在少室山揭开雁门关惨案的全部真相", mood: "bittersweet" },
              { title: "雁门关殉道", description: "最终为宋辽两国和平，以断箭自尽于雁门关外", consequence: "英雄身死，换得两国数十年安宁，阿紫抱着他的尸首跳下悬崖", mood: "tragic" },
            ],
          },
          {
            id: "qf-fork-2-b",
            label: "察觉端倪，停手追问",
            isCanon: false,
            summary: "乔峰察觉段正淳身形有异，收回十成功力，逼问真相。",
            outcomes: [
              { title: "真相大白", description: "乔峰收回掌力，阿朱在掌风中现身，道出段正淳是她生父的真相", consequence: "父女相认，乔峰与阿朱喜结连理，同赴塞外牧羊，从此不问江湖事", mood: "peaceful" },
              { title: "白世镜之死", description: "乔峰顺藤摸瓜，揪出真正的幕后凶手白世镜与马夫人", consequence: "手刃仇人，与阿朱远赴关外，生儿育女，得以善终", mood: "peaceful" },
            ],
          },
          {
            id: "qf-fork-2-c",
            label: "放弃私仇，远赴塞外",
            isCanon: false,
            summary: "阿朱劝乔峰放下仇恨，两人不赴青石桥之约，直接离开。",
            outcomes: [
              { title: "塞外牧羊", description: "乔峰与阿朱不告而别，在塞北草原牧马放羊，逍遥自在", consequence: "虽躲过悲剧，却一生不知杀父仇人是谁，午夜梦回时仍有遗憾", mood: "bittersweet" },
              { title: "萧峰后裔", description: "二人育有一子一女，取名萧远山、萧流水，传承契丹血脉", consequence: "子孙后代在草原上繁衍生息，成为一代草原部族，不知中原江湖", mood: "peaceful" },
            ],
          },
        ],
      },
      {
        id: "qf-fork-3",
        title: "雁门关外的抉择",
        description: "耶律洪基率大军南侵，乔峰于雁门关外横刀立马，直面辽帝。是为契丹尽忠，还是为汉人流血？一步之差，便是生死。",
        age: "约三十三岁",
        location: "雁门关",
        canonChoiceId: "qf-fork-3-a",
        choices: [
          {
            id: "qf-fork-3-a",
            label: "胁迫辽帝，折箭为誓",
            isCanon: true,
            summary: "原著路线：乔峰生擒耶律洪基，逼其发誓终其一生辽兵不踏入宋境一步。",
            outcomes: [
              { title: "英雄末路", description: "乔峰自觉身为契丹人却胁迫国君，愧对族人，以断箭自刺胸膛", consequence: "壮烈殉道，换得宋辽两国数十年和平，万民得以休养生息", mood: "glorious" },
              { title: "阿紫殉情", description: "阿紫抱着乔峰尸首跳下万丈悬崖，游坦之随之而亡", consequence: "三人同归黄土，只留下雁门关外的千古传说，令后人扼腕叹息", mood: "tragic" },
            ],
          },
          {
            id: "qf-fork-3-b",
            label: "挂印封金，归隐江湖",
            isCanon: false,
            summary: "乔峰交还南院大王金印，辞去一切官职，飘然远去。",
            outcomes: [
              { title: "辽帝震怒", description: "耶律洪基大怒，下令追捕乔峰，但念及结义之情，暗中放水", consequence: "乔峰隐姓埋名，在西域一小镇开了家武馆，传授降龙十八掌与有缘人", mood: "mundane" },
              { title: "宋辽终战", description: "失去乔峰的斡旋，三年后辽宋再度开战，生灵涂炭", consequence: "乔峰闻之叹息，却已无力回天，只能在佛前为万千亡灵超度", mood: "bittersweet" },
            ],
          },
          {
            id: "qf-fork-3-c",
            label: "协助辽帝，挥师南下",
            isCanon: false,
            summary: "乔峰铭记契丹血脉，率军为先锋，攻破雁门关。",
            outcomes: [
              { title: "大宋灭亡", description: "乔峰率辽军势如破竹，攻破汴京，北宋亡国", consequence: "虽为契丹立下不世之功，却双手沾满汉人鲜血，被后世唾骂千年", mood: "tragic" },
              { title: "功高震主", description: "耶律洪基忌惮乔峰兵权，设宴以毒酒赐死", consequence: "一代英雄未能战死沙场，却死于自己最信任的结义兄弟之手，可叹可叹", mood: "tragic" },
            ],
          },
        ],
      },
    ],
    perspectives: {
      bystander: {
        overview: "江湖人眼中的乔峰",
        description: "乔峰是江湖上一等一的好汉，丐帮上下无不敬服。他为人豪爽，义薄云天，武功盖世，一条降龙十八掌打遍天下无敌手。杏子林之前，他是人人敬仰的乔帮主；身世揭秘后，虽有不明真相者骂他为契丹狗贼，但更多人心中明白，乔峰的所作所为，无愧天地。",
        keyEvents: [
          { title: "执掌丐帮", description: "乔峰担任丐帮帮主多年，统领数十万帮众，是江湖上最有权势的人物之一。他治军严明，帮规肃然，丐帮在他手中声威达到顶峰。", age: "而立之年", location: "丐帮总舵" },
          { title: "杏子林疑云", description: "杏子林大会上，乔峰契丹身世被揭，群雄哗然。他虽有万千辩解之词，却敌不过人言可畏，最终交出打狗棒，黯然离去。", age: "约三十岁", location: "无锡杏子林" },
          { title: "聚贤庄一役", description: "聚贤庄上，乔峰为救阿朱，与天下英雄喝断义酒，大开杀戒。那一日，不知多少英雄好汉命丧他掌下，乔峰之名，从此成为江湖禁忌。", age: "约三十岁", location: "聚贤庄" },
          { title: "侠之大者", description: "雁门关外，乔峰胁迫辽帝折箭为誓，换得宋辽数十年和平。他虽自刎而死，但在江湖人心中，他永远是那个义薄云天的乔帮主。", age: "约三十三岁", location: "雁门关" },
        ],
      },
      enemy: {
        overview: "辽人眼中的乔峰",
        description: "萧峰是我大辽的英雄、南院大王。他虽在南朝长大，却不忘契丹血脉。耶律洪基与他结为兄弟，封他为王，位极人臣。他率领大辽勇士，威震西域，是我契丹人的骄傲。可惜最终为了一个南朝女人，竟与我大辽反目，挟持国君，实乃契丹之耻。",
        keyEvents: [
          { title: "南院大王", description: "萧峰受封南院大王，掌管大辽南境军政大权。他治军有方，深得军心，是我大辽最得力的干将。", age: "约三十一岁", location: "辽国上京" },
          { title: "威震西域", description: "萧峰率军西征，平定西域诸国叛乱，大辽声威远播。他的武勇，让西域各族闻风丧胆。", age: "约三十二岁", location: "西域" },
          { title: "背主叛国", description: "雁门关外，萧峰竟不顾契丹血脉，胁迫我大辽皇帝，折箭为誓不许南侵。此等叛国之举，实乃我大辽的千古罪人。", age: "约三十三岁", location: "雁门关" },
        ],
      },
      lover: {
        overview: "阿朱眼中的乔峰",
        description: "他是我这一生唯一爱过的男人。他豪迈洒脱，却也有柔情万千。世人都怕他、敬他、恨他，只有我知道，他内心深处的孤独与痛苦。他是契丹人也好，是汉人也罢，在我心中，他永远是那个会对我笑、会为我落泪的乔大哥。",
        keyEvents: [
          { title: "初遇倾心", description: "我假扮止清和尚偷入少林寺，被他识破。那是我第一次见他，威武如山，却又心细如发。", age: "约三十岁", location: "少林寺" },
          { title: "雁门盟约", description: "我在雁门关外等了他五天五夜。他来了，虽然满身疲惫，却笑着说要带我去塞外牧羊。那一刻，我知道我这一生都不会再离开他。", age: "约三十岁", location: "雁门关" },
          { title: "青石桥雨", description: "小镜湖青石桥上，电闪雷鸣。他那一掌打在我身上，我却一点都不疼。能死在他怀里，我很开心。乔大哥，不要为我难过，好好活下去。", age: "约三十岁", location: "小镜湖" },
        ],
      },
      history: {
        overview: "史书记载中的萧峰",
        description: "萧峰，契丹人，辽国南院大王。据《宋史》《辽史》所载，萧峰于宋辽边境对峙之时，胁迫辽帝耶律洪基折箭为誓，约定辽兵终其一生不踏入宋境，随后自刎而死。宋辽两国因此得以休养生息数十年，边境百姓安居乐业。其功在千秋，然其身世与动机，后世争议颇多。",
        keyEvents: [
          { title: "身世存疑", description: "正史中关于萧峰身世的记载颇多矛盾。一说他是辽国萧氏贵族后裔，自幼流落南朝；一说他本是汉人，被辽人收养。真相已湮没于历史尘埃中。", location: "史书" },
          { title: "雁门关之盟", description: "宋哲宗年间，辽帝耶律洪基亲率大军南侵，于雁门关外被萧峰所阻。萧峰胁迫辽帝折箭为誓，换取两国和平。此事《辽史》讳莫如深，《宋史》则记载简略。", age: "约三十三岁", location: "雁门关" },
          { title: "身后之名", description: "萧峰死后，宋人感其恩德，于雁门关立祠祭祀；辽人则视其为叛国之臣，削去一切封号。民间关于他的传说更是众说纷纭，真假难辨。", location: "后世" },
        ],
      },
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
    destinyForks: [
      {
        id: "gj-fork-1",
        title: "成吉思汗赐婚",
        description: "郭靖随成吉思汗西征，屡建奇功，被封为「金刀驸马」，将与华筝公主成婚。此时他收到母亲李萍的信，命他南下寻找杀父仇人——",
        age: "约二十岁",
        location: "蒙古大营",
        canonChoiceId: "gj-fork-1-a",
        choices: [
          {
            id: "gj-fork-1-a",
            label: "奉母命南下，辞别草原",
            isCanon: true,
            summary: "原著路线：郭靖谨遵母命，辞别成吉思汗与华筝，踏上南下中原之旅。",
            outcomes: [
              { title: "张家口初遇", description: "郭靖初入中原，在张家口遇扮作小乞丐的黄蓉，以诚相待，倾囊相助", consequence: "一见如故，开启一段江湖传奇，得黄蓉此生相伴，成为他最大的幸运", mood: "peaceful" },
              { title: "拜师洪七公", description: "黄蓉以美食诱洪七公，郭靖得授降龙十八掌，武功大进", consequence: "从一个资质愚钝的少年，成长为可以纵横江湖的高手", mood: "glorious" },
              { title: "华山论剑", description: "第二次华山论剑，与黄药师、洪七公各拆三百招，并列天下五绝之「北侠」", consequence: "武功冠绝天下，更重要的是领悟了「侠之大者，为国为民」的真谛", mood: "glorious" },
            ],
          },
          {
            id: "gj-fork-1-b",
            label: "留在蒙古，与华筝成婚",
            isCanon: false,
            summary: "郭靖感念成吉思汗的知遇之恩，留在蒙古成为金刀驸马，辅佐铁木真。",
            outcomes: [
              { title: "蒙古大将", description: "郭靖与华筝成婚，成为蒙古帝国开国功臣，随铁木真横扫欧亚", consequence: "立下赫赫战功，封王拜相，但双手沾满无数无辜者的鲜血，午夜梦回，难以心安", mood: "bittersweet" },
              { title: "母子诀别", description: "李萍见儿子不肯南下，自缢于蒙古包中，留遗书命他勿忘国仇家恨", consequence: "郭靖抱着母亲尸首嚎啕大哭，却已无法回头，从此心中再无快乐", mood: "tragic" },
              { title: "攻宋先锋", description: "蒙古伐宋，郭靖被任命为南路军统帅，率军攻破襄阳", consequence: "亲手毁灭了自己汉人的家国，成为历史上最具争议的人物之一，名裂身后", mood: "tragic" },
            ],
          },
          {
            id: "gj-fork-1-c",
            label: "带母亲悄然离去",
            isCanon: false,
            summary: "郭靖既不想背叛成吉思汗，也不愿攻宋，于是带着母亲秘密离开蒙古。",
            outcomes: [
              { title: "西域隐居", description: "郭靖带着李萍逃到西域昆仑山，隐姓埋名，以放牧为生", consequence: "一生未再踏足中原，也从未报过杀父之仇，临终前对郭啸天的牌位叩首请罪", mood: "mundane" },
              { title: "追兵赶到", description: "成吉思汗发现郭靖逃走，派哲别率军追捕，李萍为掩护儿子中箭身亡", consequence: "郭靖悲愤之下与哲别恩断义绝，单人独骑冲入中原，从此性情大变，冷酷寡言", mood: "tragic" },
            ],
          },
        ],
      },
      {
        id: "gj-fork-2",
        title: "华筝与黄蓉",
        description: "郭靖与黄蓉情根深种，却发现自己与华筝早有婚约。一边是草原旧约，一边是此生挚爱，他该如何抉择？",
        age: "约二十岁",
        location: "桃花岛",
        canonChoiceId: "gj-fork-2-a",
        choices: [
          {
            id: "gj-fork-2-a",
            label: "坚守真爱，华筝成全",
            isCanon: true,
            summary: "原著路线：华筝深明大义，主动取消婚约，成全郭靖与黄蓉。",
            outcomes: [
              { title: "桃花岛大婚", description: "黄药师许亲，郭靖与黄蓉在桃花岛结为连理，夫妻情深，相守一生", consequence: "此生得黄蓉相助，无论是武功兵法，还是家国天下，都成就了一番伟业", mood: "peaceful" },
              { title: "郭氏三姐弟", description: "婚后育有郭芙、郭襄、郭破虏一女二子，阖家欢乐", consequence: "郭襄开创峨眉派，郭芙耶律齐相守，郭破虏继承屠龙刀，各有归宿", mood: "peaceful" },
              { title: "镇守襄阳", description: "夫妻同心，镇守襄阳数十年，抵御蒙古铁骑，鞠躬尽瘁", consequence: "襄阳城虽最终告破，但「郭大侠」之名永载史册，成为武侠精神的象征", mood: "glorious" },
            ],
          },
          {
            id: "gj-fork-2-b",
            label: "信守旧约，迎娶华筝",
            isCanon: false,
            summary: "郭靖一诺千金，认为既然有婚约在先，便不能负了华筝。",
            outcomes: [
              { title: "黄蓉黯然离去", description: "黄蓉心痛欲绝，留书一封，飘然远去，从此绝迹江湖", consequence: "郭靖虽与华筝相敬如宾，却终生思念黄蓉，夜深时独饮苦酒，郁郁寡欢", mood: "tragic" },
              { title: "再无北侠", description: "失去黄蓉的辅助与点化，郭靖虽武功高强，却始终未能领悟「侠之大者」", consequence: "一生镇守蒙古边境，成为一代名将，却非一代大侠，格局迥然不同", mood: "bittersweet" },
              { title: "再见陌路", description: "三十年后，郭靖于集市偶遇黄衫女子（黄蓉之女），方知黄蓉另嫁他人，儿孙满堂", consequence: "二人擦肩而过，未发一言。郭靖归家后大病一场，不久辞世", mood: "tragic" },
            ],
          },
          {
            id: "gj-fork-2-c",
            label: "二女共事一夫",
            isCanon: false,
            summary: "华筝主动提出愿与黄蓉姐妹相称，共侍郭靖。",
            outcomes: [
              { title: "黄药师震怒", description: "黄药师见女儿要与人共侍一夫，拂袖而去，与郭靖断绝翁婿关系", consequence: "黄蓉虽留了下来，却终生与父亲不相往来，心中有憾", mood: "bittersweet" },
              { title: "家庭和睦", description: "华筝善骑射，黄蓉通谋略，二女一主外一主内，相安无事", consequence: "郭靖有两位贤妻相助，人生圆满，只是华筝之子与黄蓉之子为继承家产明争暗斗，家无宁日", mood: "bittersweet" },
            ],
          },
        ],
      },
      {
        id: "gj-fork-3",
        title: "襄阳城破前夜",
        description: "蒙古大军围城十年，襄阳弹尽粮绝，城破在即。郭靖召集家人于城头，商议最后关头的去向——",
        age: "约六七十岁",
        location: "襄阳城头",
        canonChoiceId: "gj-fork-3-a",
        choices: [
          {
            id: "gj-fork-3-a",
            label: "与城共存亡，以身殉国",
            isCanon: true,
            summary: "原著路线：郭靖黄蓉决定与襄阳共存亡，城破之日双双殉国。",
            outcomes: [
              { title: "城破殉国", description: "襄阳城破，郭靖黄蓉持兵刃冲下城头，与蒙古军血战至最后一刻", consequence: "夫妻二人双双战死，以身殉道，成就「侠之大者」的千古美名", mood: "glorious" },
              { title: "倚天屠龙", description: "破城前已将倚天剑交郭襄、屠龙刀交郭破虏，兵法与秘籍藏于刀剑之中", consequence: "百余年后，刀剑秘密被揭，张无忌以武穆遗书兵法驱逐鞑虏，恢复中华，终遂郭靖遗愿", mood: "glorious" },
            ],
          },
          {
            id: "gj-fork-3-b",
            label: "率众突围，退守蜀中",
            isCanon: false,
            summary: "郭靖听从黄蓉建议，趁夜率残部突围，保存实力，以图后举。",
            outcomes: [
              { title: "退守四川", description: "郭靖率郭家军突围至蜀地，以剑阁天险继续抵抗蒙古", consequence: "坚守蜀地十年，终因寡不敌众，病死军中，未能北定中原，含恨而终", mood: "bittersweet" },
              { title: "子孙抗元", description: "郭靖之子郭破虏继承父志，率义军转战南北，最终战死沙场", consequence: "郭家三代抗元，满门忠烈，百年后明太祖朱元璋追封郭靖为「忠武王」", mood: "glorious" },
            ],
          },
          {
            id: "gj-fork-3-c",
            label: "挂冠归隐，远走海外",
            isCanon: false,
            summary: "黄蓉劝说郭靖：天下大势已定，非人力可回，不如保全家人，远走他乡。",
            outcomes: [
              { title: "远走桃花岛", description: "郭靖一家连夜离开襄阳，乘船返回桃花岛，从此不问世事", consequence: "一生虽得善终，却每每遥望北方，痛哭失声。晚年著《襄阳守城录》，将毕生兵法传与后世", mood: "bittersweet" },
              { title: "郭襄出家", description: "郭襄念念不忘杨过，又恨父亲弃襄阳军民而去，终于四十岁那年出家为尼，开创峨眉派", consequence: "父女之间隔阂至深，郭襄临终遗言，峨眉弟子永远不得踏入桃花岛一步", mood: "tragic" },
            ],
          },
        ],
      },
    ],
    perspectives: {
      bystander: {
        overview: "江湖人眼中的郭靖",
        description: "郭大侠是我们襄阳百姓的守护神。他忠厚老实，武功盖世，更难得的是心怀天下。二十年来，他与郭夫人镇守襄阳，不知打退了多少次蒙古大军。襄阳城能守住，全靠郭大侠夫妻。江湖上谁不敬佩郭大侠？他是真正的侠之大者。",
        keyEvents: [
          { title: "华山论剑", description: "第二次华山论剑，郭大侠与黄药师、洪七公各拆三百招，不落下风，从此名列天下五绝之北侠。", age: "约二十岁", location: "华山" },
          { title: "镇守襄阳", description: "郭大侠与郭夫人镇守襄阳数十年，蒙古铁骑屡次南下都被他击退。襄阳城能屹立不倒，全靠郭大侠。", age: "中年起", location: "襄阳" },
          { title: "侠名远播", description: "郭大侠侠名传遍天下，江湖上谁提起郭大侠不竖起大拇指？他是真正的大侠典范。", location: "江湖" },
        ],
      },
      enemy: {
        overview: "蒙古人眼中的郭靖",
        description: "郭靖乃我大蒙古国的叛徒！他本是成吉思汗的金刀驸马，深受大汗恩宠，却不思报恩，反而助南宋镇守襄阳，与我大蒙古为敌。他精通武穆遗书兵法，是我军南下的最大障碍。若能生擒郭靖，大汗必有重赏。",
        keyEvents: [
          { title: "金刀驸马", description: "郭靖早年在蒙古长大，被成吉思汗封为金刀驸马，随我大军西征花剌子模，立下赫赫战功。", age: "约二十岁", location: "蒙古" },
          { title: "叛逃归宋", description: "郭靖不念大汗恩情，竟然背叛我大蒙古，携妻子南下助宋，成为我军南下的最大障碍。", age: "约二十多岁", location: "襄阳" },
          { title: "襄阳顽抗", description: "郭靖镇守襄阳数十年，我蒙古大军屡次强攻都损兵折将。他是我大蒙古的头号敌人。", age: "中年起", location: "襄阳" },
        ],
      },
      lover: {
        overview: "黄蓉眼中的郭靖",
        description: "靖哥哥虽然性子迟钝，却有一颗世上最真诚的心。我聪明伶俐，他却憨厚老实，这也许就是天意。他说要守襄阳，我便陪他守；他说要殉国，我便陪他死。这一生，能嫁给靖哥哥，是我黄蓉最大的幸运。",
        keyEvents: [
          { title: "张家口初遇", description: "我扮成小乞丐，靖哥哥却以诚相待，把身上的银子、甚至汗血宝马都给了我。那一刻我就知道，这个傻小子值得托付终身。", age: "约十五六岁", location: "张家口" },
          { title: "桃花岛定亲", description: "靖哥哥上桃花岛求亲，虽然差点被爹爹赶走，但他的真诚最终打动了爹爹。", age: "约十六岁", location: "桃花岛" },
          { title: "襄阳殉国", description: "靖哥哥说要与襄阳共存亡，我笑着说好。靖哥哥在哪里，我就在哪里。", age: "约六七十岁", location: "襄阳" },
        ],
      },
      history: {
        overview: "史书记载中的郭靖",
        description: "据《宋史·忠义传》所载，郭靖为南宋义士，于襄阳城破时与妻黄蓉、子郭破虏一同殉国。其女郭襄携倚天剑突围，后创立峨眉派。郭靖镇守襄阳之事，正史记载简略，然其「侠之大者，为国为民」的精神，为后世传颂。",
        keyEvents: [
          { title: "襄阳城破", description: "南宋咸淳九年，襄阳城破，郭靖与妻黄蓉、子郭破虏一同殉国。屠龙刀从此失落江湖。", age: "约六七十岁", location: "襄阳" },
          { title: "倚天屠龙", description: "郭靖与黄蓉破城前将武穆遗书与九阴真经藏于倚天剑、屠龙刀之中，留下「武林至尊，宝刀屠龙」的传说。", location: "襄阳" },
          { title: "身后之名", description: "《宋史》将郭靖列入忠义传，民间更是将他奉为侠客典范。后世百年间，郭大侠之名无人不晓。", location: "后世" },
        ],
      },
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
    destinyForks: [
      {
        id: "yg-fork-1",
        title: "断臂之后",
        description: "郭芙一剑斩断杨过右臂，杨过在血泊中醒来，剧痛与屈辱交织。是去是留？是复仇还是放下？一个被斩断的手臂，和一条被斩断的人生。",
        age: "约二十岁",
        location: "襄阳城外茅屋",
        canonChoiceId: "yg-fork-1-a",
        choices: [
          {
            id: "yg-fork-1-a",
            label: "忍辱负重，独自离去",
            isCanon: true,
            summary: "原著路线：杨过断臂后，独自离去，偶遇神雕，入剑冢。",
            outcomes: [
              { title: "神雕引路", description: "杨过重伤濒死之际，神雕将他引至独孤求败剑冢，与神雕为友", consequence: "因祸得福，结识神雕，踏入剑道新境", mood: "bittersweet" },
              { title: "玄铁重剑", description: "于剑冢中得独孤求败玄铁重剑，练就重剑无锋、大巧不工的境界", consequence: "断臂反而激发了他武学上的大彻大悟，武功更胜从前", mood: "glorious" },
              { title: "神雕大侠", description: "携神雕行走江湖，行侠仗义，被百姓尊为「神雕侠」", consequence: "虽失一臂，却以一己之力，成就一代大侠之名", mood: "glorious" },
            ],
          },
          {
            id: "yg-fork-1-b",
            label: "折返襄阳，手刃郭芙",
            isCanon: false,
            summary: "杨过怒火中烧，折返襄阳，要以郭芙之血祭奠自己的断臂。",
            outcomes: [
              { title: "血溅芙蓉", description: "杨过深夜潜入郭芙房中，一剑刺穿她的胸膛", consequence: "杀了郭芙，与郭靖黄蓉彻底决裂，从此再无人能约束他，心性大变，成为江湖人闻之色变的「剑魔」", mood: "tragic" },
              { title: "追杀千里", description: "郭靖携黄蓉千里追杀杨过，终在绝情谷将其围堵", consequence: "杨过虽武功大成，却终究不是郭靖对手，被降龙十八掌震碎心脉，死于断肠崖前", mood: "tragic" },
            ],
          },
          {
            id: "yg-fork-1-c",
            label: "废去武功，遁入空门",
            isCanon: false,
            summary: "杨过万念俱灰，自废武功，到少林寺出家为僧。",
            outcomes: [
              { title: "少林扫地", description: "杨过在少林寺扫地诵经，法号「忘尘」，不问世事", consequence: "二十年后，觉远大师圆寂，杨过继承其部分九阳神功，成为一代高僧，佛法精深，度化无数世人", mood: "peaceful" },
              { title: "再遇故人", description: "郭襄十六岁上少林寺找杨过，二人终见最后一面，杨过赠她玄铁重剑", consequence: "郭襄携重剑下山，此后四十岁出家，开创峨眉。杨过终生未出少林寺一步，圆寂时含笑而终", mood: "bittersweet" },
            ],
          },
        ],
      },
      {
        id: "yg-fork-2",
        title: "绝情谷断肠崖",
        description: "小龙女身中情花剧毒，无药可解。她为让杨过有活下去的希望，于断肠崖上写下「十六年后，在此重会」，纵身跃下深潭。",
        age: "约二十岁",
        location: "绝情谷断肠崖",
        canonChoiceId: "yg-fork-2-a",
        choices: [
          {
            id: "yg-fork-2-a",
            label: "信守约定，苦等十六年",
            isCanon: true,
            summary: "原著路线：杨过信守约定，苦等小龙女一十六年，十六年之约到期才跳下。",
            outcomes: [
              { title: "十六年苦候", description: "杨过信守约定，在江湖上行侠仗义，将思念化作黯然销魂掌", consequence: "自创黯然销魂掌，名震江湖，行侠仗义十六年，「神雕侠」之名响彻天下", mood: "bittersweet" },
              { title: "谷底重逢", description: "十六年之约到期，杨过于断肠崖跳下殉情，竟在绝情谷底与小龙女重逢", consequence: "有情人终成眷属，十六年的相思化作千言万语，化作一个眼神，一个拥抱", mood: "peaceful" },
              { title: "襄阳大战", description: "杨过小龙女重出江湖，于万军之中击毙蒙古大汗蒙哥，解襄阳之围", consequence: "立下不世奇功，被推为新五绝之「西狂」，随后归隐江湖，绝迹江湖", mood: "glorious" },
            ],
          },
          {
            id: "yg-fork-2-b",
            label: "不信鬼神，当即跳下",
            isCanon: false,
            summary: "杨过不相信什么十六年之约，认为小龙女已死，当即纵身跳下断肠崖。",
            outcomes: [
              { title: "同归于尽", description: "杨过跳下断肠崖，落入深潭，与小龙女在潭底相遇，但二人皆身受重伤", consequence: "小龙女毒性未解，杨过亦中寒毒，二人相拥着在潭底度过最后的时光，含笑而终", mood: "tragic" },
              { title: "白鱼解毒", description: "潭中白鱼与玉蜂浆竟可解情花毒，二人得以团聚", consequence: "提前十六年重逢，但杨过未能自创黯然销魂掌，武功稍逊原著，不过夫妻相伴，何憾之有？", mood: "peaceful" },
            ],
          },
          {
            id: "yg-fork-2-c",
            label: "不信约定，另娶他人",
            isCanon: false,
            summary: "杨过认定小龙女已死，十年后，在众女的追求中，选择与程英或陆无双相伴一生。",
            outcomes: [
              { title: "程英相伴", description: "杨过与程英结为夫妇，隐居太湖", consequence: "程英温婉贤淑，夫妻相敬如宾，但杨过心中永远有一个影子，一个不可触碰的名字。一生平淡而幸福", mood: "bittersweet" },
              { title: "郭襄执念", description: "郭襄二十岁时仍念念不忘杨过，千山万水来找他，杨过终于被她的痴情感动", consequence: "杨过在小龙女的墓前立誓，收郭襄为义妹。郭襄四十岁那年大彻大悟，开创峨眉派。杨过与程英相守终老", mood: "bittersweet" },
            ],
          },
        ],
      },
      {
        id: "yg-fork-3",
        title: "襄阳城下的抉择",
        description: "蒙古大军围攻襄阳，杨过携小龙女赶到。金轮法王挟持郭襄于高台之上，要挟郭靖投降。杨过面临抉择——",
        age: "约三十六岁",
        location: "襄阳城头",
        canonChoiceId: "yg-fork-3-a",
        choices: [
          {
            id: "yg-fork-3-a",
            label: "救郭襄，击毙蒙哥",
            isCanon: true,
            summary: "原著路线：杨过冲上高台救郭襄，于万军之中击毙蒙古大汗蒙哥。",
            outcomes: [
              { title: "高台救美", description: "杨过冲上高台，以黯然销魂掌击败金轮法王，救下郭襄", consequence: "郭襄对他的爱慕更深一层，「风陵渡口初相遇，一见杨过误终身」成为谶语", mood: "glorious" },
              { title: "击毙蒙哥", description: "杨过单骑冲入蒙古大军，于万军之中以飞石击毙蒙古大汗蒙哥", consequence: "蒙古大军群龙无首，退兵而去，襄阳之围暂解，杨过立下不世奇功", mood: "glorious" },
              { title: "西狂归隐", description: "华山三论后，被推为「西狂」，携小龙女与神雕飘然而去", consequence: "从此绝迹江湖，唯留神雕侠侣的传说，为后人津津乐道", mood: "peaceful" },
            ],
          },
          {
            id: "yg-fork-3-b",
            label: "事不关己，转身离去",
            isCanon: false,
            summary: "杨过想起郭芙断他一臂、郭靖夫妇送他入全真教受苦，心中有怨，袖手旁观。",
            outcomes: [
              { title: "襄阳城破", description: "杨过携小龙女离去，襄阳孤立无援，城破之日郭靖黄蓉殉国", consequence: "郭襄被金轮法王烧死在高台上，杨过听闻死讯后大悲，虽然后来创立黯然销魂掌，却永远活在愧疚中", mood: "tragic" },
              { title: "剑魔再世", description: "杨过虽武功盖世，却因坐视襄阳城破，被天下人唾骂为「剑魔」，再无大侠之名", consequence: "他与小龙女虽然相守一生，午夜梦回，却总能听见襄阳城头郭襄撕心裂肺的呼救声，夜夜难眠", mood: "tragic" },
            ],
          },
          {
            id: "yg-fork-3-c",
            label: "以此要挟，以郭芙换郭襄",
            isCanon: false,
            summary: "杨过要求郭靖黄蓉自断郭芙一臂偿他断臂之仇，他便救郭襄。",
            outcomes: [
              { title: "母女断臂", description: "黄蓉含泪砍下郭芙左臂，递与杨过", consequence: "杨过看着郭芙的断臂，忽然觉得空虚无比，大仇得报，却并未有半分快意。他救下郭襄，与小龙女飘然远去，终生不再踏足襄阳", mood: "tragic" },
              { title: "郭芙之死", description: "郭芙不堪受辱，拔剑自刎", consequence: "耶律齐叛宋降蒙，率蒙古先锋攻破襄阳，郭靖黄蓉战死。杨过闻之，将玄铁重剑沉入长江，与小龙女隐居古墓，永不出世", mood: "tragic" },
            ],
          },
        ],
      },
    ],
    perspectives: {
      bystander: {
        overview: "江湖人眼中的杨过",
        description: "杨过杨大侠，行事亦正亦邪，却有一副侠义心肠。他虽断了一臂，武功却深不可测。这些年他行走江湖，不知做了多少行侠仗义的好事。老百姓都尊称他为「神雕侠」。只是他与小龙女的师徒之恋，在江湖上颇有非议。",
        keyEvents: [
          { title: "神雕侠名", description: "杨过携神雕行走江湖，行侠仗义，锄强扶弱，被百姓尊称为神雕侠。", age: "约二十岁后", location: "江湖" },
          { title: "襄阳解围", description: "蒙古大军围攻襄阳，杨过于万军之中击毙大汗蒙哥，解了襄阳之围，立下不世奇功。", age: "约三十六岁", location: "襄阳" },
          { title: "西狂归隐", description: "第三次华山论剑，杨过被推为西狂，位列新五绝。随后携小龙女与神雕飘然而去，绝迹江湖。", age: "约三十六岁", location: "华山" },
        ],
      },
      enemy: {
        overview: "敌人眼中的杨过",
        description: "杨过这个小畜生，心狠手辣，诡计多端。他父亲杨康认贼作父，他也好不到哪里去。当年在全真教，他就目无尊长，反出师门。后来又与师父小龙女苟合，真是寡廉鲜耻。这种人，早该死了！",
        keyEvents: [
          { title: "反出全真", description: "杨过在全真教不守清规，打伤师叔，反出师门，投入古墓派，与正道为敌。", age: "约十四岁", location: "终南山" },
          { title: "师徒乱伦", description: "杨过与师父小龙女结为夫妻，违反伦常，实在是武林中的奇耻大辱。", age: "约二十岁", location: "江湖" },
          { title: "击毙蒙哥", description: "杨过击毙蒙古大汗蒙哥，坏了我大蒙古国一统天下的大计。此仇不共戴天！", age: "约三十六岁", location: "襄阳" },
        ],
      },
      lover: {
        overview: "小龙女眼中的杨过",
        description: "过儿是我这一生唯一的爱。古墓之中，他是我的徒弟，更是我的命。十六年断肠崖之约，我在谷底日日思念，幸好老天有眼，让我们重逢。过儿，此生能与你相守，龙儿死而无憾。",
        keyEvents: [
          { title: "古墓朝夕", description: "过儿刚入古墓时，还是个调皮的孩子。我们一起练玉女心经，渐渐情意暗生。", age: "约十八岁", location: "古墓" },
          { title: "断肠崖约", description: "我身中情花剧毒，无药可解。为让过儿活下去，我在断肠崖刻下十六年之约，纵身跃下。", age: "约二十岁", location: "绝情谷" },
          { title: "谷底重逢", description: "十六年后，过儿也跳下断肠崖。我们在谷底重逢，那一刻，我知道这一生都不会再分开。", age: "约三十六岁", location: "绝情谷底" },
        ],
      },
      history: {
        overview: "史书记载中的杨过",
        description: "杨过，字改之，南宋末年人。据《宋史·艺文志》及民间野史记载，杨过曾于襄阳大战中击毙蒙古大汗蒙哥，延缓了南宋的灭亡。后归隐，不知所终。其与小龙女的爱情故事，在民间广为流传，成为后世戏曲小说的重要题材。",
        keyEvents: [
          { title: "击毙蒙哥", description: "南宋开庆元年，蒙古大汗蒙哥率军围攻襄阳，杨过于阵前击毙蒙哥，蒙古大军被迫撤退。此事正史记载简略，野史则言之凿凿。", age: "约三十六岁", location: "襄阳" },
          { title: "新五绝", description: "第三次华山论剑，杨过与黄药师、郭靖、一灯大师、周伯通并列为新五绝，号西狂。", age: "约三十六岁", location: "华山" },
          { title: "归隐之谜", description: "杨过归隐后，再无人见过他与小龙女。后世有传说他们隐居于终南山古墓，也有说他们远赴海外。真相如何，已成千古之谜。", location: "江湖" },
        ],
      },
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
    destinyForks: [
      {
        id: "lhc-fork-1",
        title: "被逐出师门",
        description: "岳不群当众宣布令狐冲偷辟邪剑谱、结交魔教，将他逐出师门。此刻，令狐冲面临人生最大的选择——",
        age: "约二十六岁",
        location: "华山",
        canonChoiceId: "lhc-fork-1-a",
        choices: [
          {
            id: "lhc-fork-1-a",
            label: "一笑置之，浪迹江湖",
            isCanon: true,
            summary: "原著路线：令狐冲被逐出师门，心中虽痛，却未作辩解，从此浪迹江湖。",
            outcomes: [
              { title: "洛阳绿竹巷", description: "心灰意冷来到洛阳，于绿竹巷邂逅任盈盈，琴箫合奏，互生情愫", consequence: "得遇此生知己，虽然前路多舛，却有任盈盈相伴，苦亦甜", mood: "bittersweet" },
              { title: "恒山掌门", description: "受定闲师太临终托孤，接任恒山派掌门，成为第一位男掌门", consequence: "虽非所愿，却担起了恒山一派的安危，亦师亦父，守护一众女弟子", mood: "glorious" },
              { title: "笑傲江湖", description: "历经千难万险，终与任盈盈归隐西湖梅庄，琴箫合奏《笑傲江湖》", consequence: "功成名遂身退，逍遥自在，成为江湖中少有的圆满结局", mood: "peaceful" },
            ],
          },
          {
            id: "lhc-fork-1-b",
            label: "据理力争，揭露伪善",
            isCanon: false,
            summary: "令狐冲当众揭露岳不群的伪善面目，拿出辟邪剑谱的证据。",
            outcomes: [
              { title: "师徒反目", description: "岳不群恼羞成怒，使出辟邪剑法欲杀令狐冲灭口", consequence: "令狐冲以独孤九剑险胜，刺瞎岳不群双眼，从此华山派分为两派，内讧不断", mood: "tragic" },
              { title: "正邪不容", description: "虽然揭穿了岳不群，但正派人士皆不信他，魔教亦不信任他", consequence: "令狐冲孤身一人行走江湖，正邪皆不容，郁郁而终，临终前将独孤九剑剑谱刻于思过崖石壁", mood: "tragic" },
            ],
          },
          {
            id: "lhc-fork-1-c",
            label: "低头认错，重回师门",
            isCanon: false,
            summary: "令狐冲跪下向师父师娘认错，发誓永不再与魔教中人来往，求重归华山门下。",
            outcomes: [
              { title: "重回华山", description: "岳不群假意原谅，实则暗中监视令狐冲，想从他口中套出独孤九剑的秘密", consequence: "令狐冲在华山度日如年，被当作工具使用，后发现师娘宁中则自尽，令狐冲终于觉醒，手刃岳不群后远走天涯", mood: "tragic" },
              { title: "沦为棋子", description: "岳不群利用令狐冲的独孤九剑，扫清异己，一统五岳剑派", consequence: "令狐冲成为岳不群手中的一把刀，双手沾满鲜血，最终在五岳并派大典上被岳不群以毒酒赐死", mood: "tragic" },
            ],
          },
        ],
      },
      {
        id: "lhc-fork-2",
        title: "任我行邀他入教",
        description: "任我行脱困后，力邀令狐冲加入日月神教，许以副教主之位，要他协助自己一统江湖。",
        age: "约二十六岁",
        location: "西湖梅庄",
        canonChoiceId: "lhc-fork-2-a",
        choices: [
          {
            id: "lhc-fork-2-a",
            label: "婉言谢绝，不愿入教",
            isCanon: true,
            summary: "原著路线：令狐冲婉拒任我行的邀请，不愿被权势束缚，选择自由。",
            outcomes: [
              { title: "任我行暴毙", description: "任我行雄心勃勃欲一统江湖，却在华山之巅突然暴毙而亡", consequence: "日月神教大权旁落，向问天接任教主，江湖风波暂息，令狐冲如释重负", mood: "bittersweet" },
              { title: "盈盈让位", description: "任盈盈将教主之位让与向问天，与令狐冲共结连理", consequence: "二人归隐西湖梅庄，每日琴箫合奏，不理江湖恩怨，逍遥自在", mood: "peaceful" },
            ],
          },
          {
            id: "lhc-fork-2-b",
            label: "接受邀请，出任副教主",
            isCanon: false,
            summary: "令狐冲接受任我行的邀请，成为日月神教副教主。",
            outcomes: [
              { title: "魔教圣主", description: "令狐冲协助任我行扫平五岳剑派与少林武当，日月神教一统江湖", consequence: "任我行死后，令狐冲接任教主，成为武林至尊，却发现高处不胜寒，身边再无可信之人，纵有天下，又有何趣？", mood: "bittersweet" },
              { title: "功高震主", description: "任我行忌惮令狐冲的武功与威望，在食物中下了三尸脑神丹", consequence: "令狐冲中毒后，任盈盈为救他，以死相逼任我行交出解药。父女反目，令狐冲与任盈盈双双殉情于梅庄地牢", mood: "tragic" },
            ],
          },
          {
            id: "lhc-fork-2-c",
            label: "假意答应，伺机反叛",
            isCanon: false,
            summary: "令狐冲假意答应当副教主，暗中联络正道人士，欲里应外合覆灭日月神教。",
            outcomes: [
              { title: "两败俱伤", description: "令狐冲在黑木崖发难，与任我行决战，两败俱伤，同归于尽", consequence: "日月神教与正道两败俱伤，江湖陷入百年大乱，直到百余年后方兴未艾", mood: "tragic" },
              { title: "任盈盈之死", description: "任盈盈发现令狐冲的阴谋，在决战之时挡在父亲与恋人之间，死于独孤九剑之下", consequence: "令狐冲抱着任盈盈的尸首跳下黑木崖，向问天收敛二人尸骨，将《笑傲江湖》曲谱埋于二人墓前", mood: "tragic" },
            ],
          },
        ],
      },
    ],
    perspectives: {
      bystander: {
        overview: "江湖人眼中的令狐冲",
        description: "令狐冲大师哥是个豪爽汉子，嗜酒如命，重情重义。虽然被华山派逐出师门，又结交了魔教妖人，但谁不知道他是被冤枉的？他的独孤九剑天下无双，后来还做了恒山派的掌门。可惜啊，好好一个正道弟子，最后还是跟魔教圣姑走了。",
        keyEvents: [
          { title: "独孤九剑", description: "令狐冲在思过崖面壁，得遇风清扬太师叔，传以独孤九剑，从此剑法大进。", age: "约二十五岁", location: "华山思过崖" },
          { title: "蒙冤被逐", description: "被师父岳不群诬陷偷辟邪剑谱、结交魔教，逐出师门，成为武林公敌。", age: "约二十六岁", location: "华山" },
          { title: "恒山掌门", description: "受定闲师太临终托孤，接任恒山派掌门，成为恒山创派以来第一位男掌门。", age: "约二十六岁", location: "恒山" },
          { title: "笑傲江湖", description: "与任盈盈结为夫妇，归隐西湖梅庄，从此逍遥自在，不问江湖事。", age: "约二十八岁", location: "西湖梅庄" },
        ],
      },
      enemy: {
        overview: "岳不群眼中的令狐冲",
        description: "令狐冲这个逆徒！我辛辛苦苦将他养大，传他武功，他却不思报恩，反而偷我辟邪剑谱，结交魔教妖人，败坏我华山派的名声。若不是我深谋远虑，险些被他坏了大事。这种欺师灭祖之徒，人人得而诛之！",
        keyEvents: [
          { title: "偷辟邪剑谱", description: "令狐冲在林家老宅偷得辟邪剑谱，却谎称是在令狐冲身上搜到的，真是贼喊捉贼！", age: "约二十六岁", location: "福州" },
          { title: "结交魔教", description: "令狐冲与日月神教妖女任盈盈勾结，还做了魔教的坐上宾，早已忘了正邪之分。", age: "约二十六岁", location: "洛阳" },
          { title: "背叛师门", description: "我将他逐出师门，他非但不思悔改，反而当上了恒山派掌门，与我华山派作对。", age: "约二十六岁", location: "恒山" },
        ],
      },
      lover: {
        overview: "任盈盈眼中的令狐冲",
        description: "令狐冲是个傻孩子，看起来洒脱不羁，其实心里比谁都苦。师父冤枉他，小师妹不爱他，他都笑着扛过来了。他的箫吹得真好，我们第一次在绿竹巷合奏《笑傲江湖》时，我就知道，他是我这辈子要等的人。",
        keyEvents: [
          { title: "绿竹知音", description: "令狐冲在绿竹巷听我弹琴，我们合奏《笑傲江湖》，那一刻，我就动心了。", age: "约十八岁", location: "洛阳绿竹巷" },
          { title: "少林舍身", description: "令狐冲身受重伤，我背着他上少林寺，愿以我一命换他一命。", age: "约十八岁", location: "少林寺" },
          { title: "梅庄归隐", description: "我们在西湖梅庄成婚，每日琴箫合奏，再也不问江湖恩怨。", age: "约二十岁", location: "西湖梅庄" },
        ],
      },
      history: {
        overview: "史书记载中的令狐冲",
        description: "令狐冲，明万历年间人，华山派首徒，后为恒山派掌门。正史中关于他的记载不多，多见于文人笔记与武侠小说。据《明史·艺文志》载，令狐冲精通音律，尤擅吹箫，曾与任氏合著《笑傲江湖》曲谱，传于后世。",
        keyEvents: [
          { title: "独孤九剑", description: "令狐冲得遇风清扬，传以独孤九剑。此剑法号称破尽天下武功，后世失传。", age: "约二十五岁", location: "华山" },
          { title: "恒山掌门", description: "令狐冲以男子之身接任恒山派掌门，一时轰动武林。他整顿教务，使恒山派声名重振。", age: "约二十六岁", location: "恒山" },
          { title: "《笑傲江湖》", description: "令狐冲与任盈盈归隐后，共创《笑傲江湖》曲谱，成为千古名曲。今传世之《笑傲江湖》，据说便是源自他们二人。", location: "西湖梅庄" },
        ],
      },
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
    destinyForks: [
      {
        id: "zwj-fork-1",
        title: "四女同舟何所望",
        description: "灵蛇岛上，张无忌与赵敏、周芷若、小昭、殷离四女同舟。波涛汹涌之间，他心中暗问自己——此生究竟情归何处？",
        age: "约二十一岁",
        location: "东海灵蛇岛",
        canonChoiceId: "zwj-fork-1-a",
        choices: [
          {
            id: "zwj-fork-1-a",
            label: "随遇而安，听天由命",
            isCanon: true,
            summary: "原著路线：张无忌性格优柔寡断，不愿伤害任何一人，最终选择了赵敏。",
            outcomes: [
              { title: "小昭远走", description: "小昭为救众人，被迫远赴波斯，成为波斯明教总教教主，二人永诀", consequence: "失去了最温柔体贴的小昭，成为张无忌心中永远的遗憾", mood: "bittersweet" },
              { title: "濠州婚礼", description: "与周芷若于濠州大婚，婚礼之上赵敏以谢逊下落为由将他带走", consequence: "周芷若震怒，张敏二人从此势不两立，张无忌夹在中间左右为难", mood: "bittersweet" },
              { title: "归隐蒙古", description: "一切尘埃落定后，终于承认自己心中最爱是赵敏，传位杨逍，与她归隐蒙古草原", consequence: "最终得了一人心，却也辜负了另外三人，此生再无相见", mood: "peaceful" },
            ],
          },
          {
            id: "zwj-fork-1-b",
            label: "舍不下芷若，与她成婚",
            isCanon: false,
            summary: "张无忌感念汉水一饭之恩，又有义父谢逊之命，毅然选择周芷若为妻。",
            outcomes: [
              { title: "芷若黑化", description: "周芷若虽与张无忌成婚，但内心始终不安，怕他念及赵敏，暗中加害", consequence: "赵敏被周芷若设计害死，张无忌得知真相后悲痛欲绝，与芷若恩断义绝，终生不娶", mood: "tragic" },
              { title: "白头偕老", description: "周芷若放下心中执念，与张无忌相守一生，夫妻和睦", consequence: "张无忌成为一代明君，周芷若为皇后，二人育有三子，皆成大器。然张无忌晚年仍会想起草原上的那个蒙古少女，一声叹息", mood: "bittersweet" },
            ],
          },
          {
            id: "zwj-fork-1-c",
            label: "携四女归隐，一夫多妻",
            isCanon: false,
            summary: "张无忌效仿古人，纳四女为妻妾，一同归隐。",
            outcomes: [
              { title: "家宅不宁", description: "赵敏聪慧、周芷若深沉、小昭温柔、殷离痴情，四女争风吃醋，家无宁日", consequence: "张无忌每日周旋于四女之间，心力交瘁，终于三十岁那年悄然离家，不知所终，留下四女和一群孩子", mood: "tragic" },
              { title: "其乐融融", description: "四女各安其位，赵敏主外事、周芷若主内、小昭主医、殷离主武，一家人和和美美", consequence: "张无忌成为人生赢家，十个儿女长大成人，开创武林张家，成为江湖第一大家族", mood: "peaceful" },
            ],
          },
        ],
      },
      {
        id: "zwj-fork-2",
        title: "明教教主与天下",
        description: "张无忌率领明教群雄，已成气候，麾下百万之众，足以推翻元朝，自立为帝。他站在濠州城头，望着城下旌旗猎猎——",
        age: "约二十二岁",
        location: "濠州",
        canonChoiceId: "zwj-fork-2-a",
        choices: [
          {
            id: "zwj-fork-2-a",
            label: "传位杨逍，功成身退",
            isCanon: true,
            summary: "原著路线：张无忌不愿做皇帝，将教主之位传与杨逍，与赵敏归隐。",
            outcomes: [
              { title: "朱元障开国", description: "张无忌归隐后，朱元障逐渐掌握实权，推翻元朝，建立大明，登基为帝", consequence: "明朝建立，汉人江山恢复，而张无忌之名逐渐被淡忘，唯留明教中人记得那少年教主", mood: "bittersweet" },
              { title: "兔死狗烹", description: "朱元璋登基后，忌惮明教旧部，大肆屠戮，明教逐渐式微", consequence: "张无忌在蒙古闻之，虽有心相救，却已无力回天，唯有一声长叹", mood: "tragic" },
            ],
          },
          {
            id: "zwj-fork-2-b",
            label: "登基为帝，建立新朝",
            isCanon: false,
            summary: "张无忌在众人拥戴下，自立为帝，国号「明」。",
            outcomes: [
              { title: "汉家河山", description: "张无忌登基为帝，以赵敏为皇后，恢复汉家衣冠，轻徭薄赋，与民休息", consequence: "开创三十年盛世，史称「明武中兴」，张无忌成为一代明君，名垂青史", mood: "glorious" },
              { title: "后宫干政", description: "赵敏以蒙古皇后之尊干政，重用蒙古旧部，朝中汉蒙两党纷争不断", consequence: "张无忌左右为难，朝政日非，在位十年后心力交瘁，禅位给太子，携赵敏归隐，不知所终", mood: "bittersweet" },
            ],
          },
          {
            id: "zwj-fork-2-c",
            label: "扶持明教，宗教治国",
            isCanon: false,
            summary: "张无忌将明教定为国教，以明教教义治理天下。",
            outcomes: [
              { title: "政教合一", description: "明教成为国教，张无忌既是皇帝又是教主，大权独揽", consequence: "然而宗教治国带来无穷弊端，反对者此起彼伏，终在张无忌死后天下大乱，明王朝只延续了三代便告灭亡", mood: "tragic" },
              { title: "少林武当反目", description: "少林武当等名门正派不服明教治国，发动「灭魔之战」，江湖腥风血雨", consequence: "张无忌亲自率军攻上武当山，亲手击杀了太师叔祖张三丰，终在张三丰的尸体前大彻大悟，自刎而亡", mood: "tragic" },
            ],
          },
        ],
      },
    ],
    perspectives: {
      bystander: {
        overview: "江湖人眼中的张无忌",
        description: "张教主年纪轻轻，武功却深不可测。九阳神功、乾坤大挪移、太极剑法，当世无人能及。他不仅武功高，人也宽厚仁慈，从不滥杀无辜。只可惜啊，他在四个女人之间犹犹豫豫，终究成不了大事。",
        keyEvents: [
          { title: "光明顶一役", description: "张无忌于光明顶一役中，独败六大派高手，挽救明教于水火之中，从此名震天下。", age: "约二十岁", location: "光明顶" },
          { title: "明教教主", description: "张无忌被推举为明教第三十四代教主，统领群雄，抗元大业如火如荼。", age: "约二十岁", location: "光明顶" },
          { title: "归隐江湖", description: "张无忌将教主之位传与杨逍，与赵敏归隐蒙古，从此不问江湖事。", age: "约二十二岁", location: "蒙古草原" },
        ],
      },
      enemy: {
        overview: "元朝朝廷眼中的张无忌",
        description: "张无忌乃明教匪首，聚众作乱，妄图颠覆我大元江山。此人武功高强，诡计多端，多次击败我大元军队。若能擒获张无忌，必当凌迟处死，以儆效尤！",
        keyEvents: [
          { title: "光明顶之乱", description: "张无忌于光明顶挫败六大派，统一明教，从此成为我大元的心腹大患。", age: "约二十岁", location: "光明顶" },
          { title: "濠州起事", description: "张无忌率群雄于濠州起事，攻城略地，震动天下。", age: "约二十一岁", location: "濠州" },
          { title: "朝廷通缉", description: "朝廷悬赏黄金万两，通缉张无忌。此人一日不除，我大元一日不安。", location: "大都" },
        ],
      },
      lover: {
        overview: "赵敏眼中的张无忌",
        description: "无忌哥哥看起来优柔寡断，其实他的心比谁都软，也比谁都真。他不懂得争权夺利，也不懂得甜言蜜语，但他会用行动证明他的爱。为了他，我愿意放弃郡主之尊，与他归隐草原，过着简单的日子。",
        keyEvents: [
          { title: "绿柳庄初遇", description: "我在绿柳庄设下圈套，想试试他的武功。没想到他那么傻，那么可爱。", age: "约二十岁", location: "绿柳庄" },
          { title: "濠州抢婚", description: "他与周芷若大婚那天，我冒险出现，以谢逊下落为由将他带走。那一刻，我知道他心里有我。", age: "约二十二岁", location: "濠州" },
          { title: "草原归隐", description: "我们归隐蒙古草原，牧马放羊，再也不问江湖恩怨。这样的日子，真好。", age: "约二十二岁", location: "蒙古草原" },
        ],
      },
      history: {
        overview: "史书记载中的张无忌",
        description: "据《元史》《明史》所载，张无忌为元末明教领袖，曾率众抗元。后将大权交与朱元璋，归隐不知所终。朱元璋建立明朝后，忌惮明教势力，大肆屠戮明教旧部，明教遂逐渐式微。张无忌的生平，正史记载简略，民间传说则丰富多彩。",
        keyEvents: [
          { title: "明教教主", description: "张无忌于元末乱世中成为明教教主，整合各路义军，掀起抗元浪潮。", age: "约二十岁", location: "光明顶" },
          { title: "传位归隐", description: "张无忌将兵权交与朱元璋，归隐江湖。朱元璋后来建立明朝，登基为帝。", age: "约二十二岁", location: "濠州" },
          { title: "明教式微", description: "明朝建立后，朱元璋下令剿灭明教，明教逐渐消亡。张无忌的下落，成为历史谜团。", location: "明初" },
        ],
      },
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
    perspectives: {
      bystander: {
        overview: "江湖人眼中的段誉",
        description: "段公子是大理国王子，为人谦和有礼，一副书呆子模样。谁能想到他身负北冥神功与六脉神剑两大绝学，武功之高，当世罕有。他对王姑娘的痴情，更是令人动容。可惜啊，好好一个皇子，偏偏不爱江山爱美人。",
        keyEvents: [
          { title: "琅嬛福地", description: "段誉跌入无量山琅嬛福地，得遇神仙姐姐玉像，磕首千遍，获北冥神功与凌波微步。", age: "约十八岁", location: "无量山" },
          { title: "六脉神剑", description: "段誉于天龙寺中，情急之下练成六脉神剑，成为大理段氏数百年来唯一练成六脉齐发之人。", age: "约十九岁", location: "天龙寺" },
          { title: "结义金兰", description: "段誉与乔峰、虚竹在松鹤楼结为异姓兄弟，三人笑傲江湖，成为武林佳话。", age: "约十九岁", location: "无锡松鹤楼" },
          { title: "大理国君", description: "段誉父亲段正淳传位，他成为大理国皇帝，勤政爱民，深得人心。", age: "约二十岁", location: "大理" },
        ],
      },
      enemy: {
        overview: "四大恶人眼中的段誉",
        description: "段誉这小崽子，坏我延庆太子的大事！他本来是我的儿子，却认贼作父，当上了大理国君。若不是刀白凤那贱人说出真相，我延庆太子岂能认他？此子武功怪异，北冥神功专吸人内力，六脉神剑更是防不胜防，是我复国大业的最大障碍。",
        keyEvents: [
          { title: "万劫谷遇险", description: "我将段誉与木婉清困在万劫谷，欲让他们兄妹乱伦，败坏段氏名声。可惜被黄眉僧坏了大事。", age: "约十八岁", location: "万劫谷" },
          { title: "天龙寺夺谱", description: "我上天龙寺抢夺六脉神剑谱，却被段誉的六脉神剑击退，真是奇耻大辱！", age: "约十九岁", location: "天龙寺" },
          { title: "曼陀山庄揭秘", description: "曼陀山庄中，刀白凤说出段誉是我儿子的真相。我虽得儿子，却失去了复仇的意义。", age: "约二十岁", location: "曼陀山庄" },
        ],
      },
      lover: {
        overview: "王语嫣眼中的段誉",
        description: "段公子看起来傻头傻脑，却有一颗最真挚的心。他为了我，不知吃了多少苦，受了多少委屈。表哥心中只有复国大业，只有段公子，把我放在心上。经历了那么多事，我终于明白，谁才是真正值得托付终身的人。",
        keyEvents: [
          { title: "曼陀初遇", description: "我在曼陀山庄第一次见到段公子，他一副书呆子模样，却口口声声叫我神仙姐姐。", age: "约十八岁", location: "曼陀山庄" },
          { title: "西夏招亲", description: "西夏公主招驸马，段公子也去了。他说他只想陪在我身边，当驸马不是他所愿。", age: "约二十岁", location: "西夏" },
          { title: "枯井定情", description: "我被慕容复推下枯井，段公子也跳了下来。在井底，我们终于坦诚相对，互诉衷肠。", age: "约二十岁", location: "西夏枯井" },
        ],
      },
      history: {
        overview: "史书记载中的段誉",
        description: "据《滇史》《大理国史》所载，段誉（后改名段正严）为大理国第十六代皇帝，在位三十九年，是大理国在位时间最长的皇帝。他勤政爱民，与宋朝保持友好关系，深受百姓爱戴。晚年避位为僧，传位于子段智兴。",
        keyEvents: [
          { title: "大理皇帝", description: "段正严于北宋徽宗大观二年继位，改年号日新，成为大理国皇帝。", age: "约二十岁", location: "大理" },
          { title: "勤政爱民", description: "段正严在位期间，轻徭薄赋，与民休息，大理国经济繁荣，百姓安居乐业。", location: "大理" },
          { title: "避位为僧", description: "段正严晚年避位为僧，传位于子段智兴（一灯大师），自己则出家为僧，法名广弘。", location: "大理" },
        ],
      },
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
    perspectives: {
      bystander: {
        overview: "江湖人眼中的黄蓉",
        description: "黄帮主是桃花岛主黄药师的千金，聪明伶俐，智计无双。她辅佐郭大侠镇守襄阳，运筹帷幄，决胜千里，是真正的女中豪杰。可惜啊，她性子太傲，对杨过又太过苛责，否则杨过也不会吃那么多苦。",
        keyEvents: [
          { title: "丐帮帮主", description: "黄蓉接任丐帮帮主，成为丐帮第十九代帮主，也是丐帮历史上第一位女帮主。", age: "约十六岁", location: "君山" },
          { title: "镇守襄阳", description: "黄蓉辅佐郭靖镇守襄阳数十年，运筹帷幄，多次击退蒙古大军。", age: "中年起", location: "襄阳" },
          { title: "巾帼英雄", description: "黄蓉智计百出，是江湖上公认的女中诸葛，不知多少英雄好汉栽在她手里。", location: "江湖" },
        ],
      },
      enemy: {
        overview: "欧阳锋眼中的黄蓉",
        description: "黄蓉这小丫头片子，诡计多端，心狠手辣。若不是她，我欧阳锋何至于落到这般田地？她骗我九阴真经，害我疯疯癫癫十几年。此仇不共戴天！总有一天，我要让她尝到我西毒的厉害！",
        keyEvents: [
          { title: "桃花岛求亲", description: "我带克儿上桃花岛求亲，却被黄蓉这小丫头设计，克儿后来更是死在她手里。此仇必报！", age: "约十六岁", location: "桃花岛" },
          { title: "荒岛设计", description: "明霞岛上，黄蓉设计害我，还骗我九阴真经假经文，害我走火入魔。", age: "约十八岁", location: "明霞岛" },
          { title: "华山疯癫", description: "第二次华山论剑，我虽然武功天下第一，却被黄蓉这丫头说得疯疯癫癫，不省人事。", age: "约二十岁", location: "华山" },
        ],
      },
      lover: {
        overview: "郭靖眼中的黄蓉",
        description: "蓉儿是我这一生最大的福气。我笨手笨脚，她却聪明伶俐；我性子耿直，她却八面玲珑。没有蓉儿，就没有我郭靖的今天。蓉儿说要陪我守襄阳，我便守；蓉儿说要陪我死，我便死。能娶到蓉儿，是我郭靖三生有幸。",
        keyEvents: [
          { title: "张家口初遇", description: "我在张家口遇到扮成小乞丐的蓉儿，她要什么我都给她。那时候我就知道，这姑娘是我命中注定的人。", age: "约十五六岁", location: "张家口" },
          { title: "桃花岛定亲", description: "我上桃花岛求亲，虽然差点被岳父赶走，但蓉儿始终站在我这边。", age: "约十六岁", location: "桃花岛" },
          { title: "襄阳殉国", description: "蓉儿说要与襄阳共存亡，我便与她一起守城。城破之日，我们夫妻二人一同殉国。", age: "约六七十岁", location: "襄阳" },
        ],
      },
      history: {
        overview: "史书记载中的黄蓉",
        description: "据《宋史·列女传》所载，黄蓉为郭靖之妻，辅佐夫君镇守襄阳数十年。襄阳城破时，与郭靖、子郭破虏一同殉国。其智计过人，精通奇门遁甲、五行八卦，是中国历史上著名的巾帼英雄之一。",
        keyEvents: [
          { title: "丐帮第一位女帮主", description: "黄蓉接任丐帮帮主，成为丐帮历史上第一位女帮主，此举在当时可谓惊世骇俗。", age: "约十六岁", location: "君山" },
          { title: "镇守襄阳", description: "黄蓉与郭靖镇守襄阳数十年，期间屡出奇计，击退蒙古大军无数次进攻。", age: "中年起", location: "襄阳" },
          { title: "倚天屠龙计划", description: "襄阳城破前，黄蓉策划倚天剑屠龙刀方案，将武穆遗书与九阴真经藏于刀剑之中，为后世抗元留下伏笔。", age: "城破前夕", location: "襄阳" },
        ],
      },
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
    perspectives: {
      bystander: {
        overview: "江湖人眼中的小龙女",
        description: "龙姑娘是古墓派传人，貌若天仙，武功高强，只可惜性子太冷，不近人情。她与杨过的师徒之恋，在江湖上闹得沸沸扬扬，有人说他们是真情，也有人说他们是乱伦。不管怎么说，他们十六年后重逢，也算是一段佳话了。",
        keyEvents: [
          { title: "古墓仙子", description: "小龙女自幼居于古墓，清冷淡然，不谙世事，江湖人称她为古墓仙子。", age: "少年时期", location: "终南山古墓" },
          { title: "师徒之恋", description: "小龙女与杨过师徒相恋，惊世骇俗，遭到整个江湖的反对。", age: "约十八岁", location: "古墓" },
          { title: "十六年之约", description: "小龙女为救杨过，在断肠崖刻下十六年之约，纵身跃下。", age: "约二十岁", location: "绝情谷" },
          { title: "谷底重逢", description: "十六年后，小龙女与杨过在绝情谷底重逢，有情人终成眷属。", age: "约三十六岁", location: "绝情谷底" },
        ],
      },
      enemy: {
        overview: "李莫愁眼中的小龙女",
        description: "小龙女这个小贱人！师父偏心，将玉女心经传给她，却不传给我。她勾引徒弟杨过，败坏我古墓派门风。若不是她，我何至于被逐出古墓？若不是她，何至于死在绝情谷中？此仇不共戴天！",
        keyEvents: [
          { title: "逐出师门", description: "我李莫愁因为违背门规，被师父逐出古墓。小龙女这个小贱人，什么都没做，却继承了古墓派！", age: "少女时期", location: "终南山古墓" },
          { title: "玉女心经", description: "小龙女与杨过一起练玉女心经，这等下流功夫，亏她做得出来！", age: "约十八岁", location: "古墓" },
          { title: "绝情谷身死", description: "我中了情花剧毒，又被小龙女这小贱人暗算，最终葬身于绝情谷大火之中。此仇不报，我李莫愁死不瞑目！", age: "约三十多岁", location: "绝情谷" },
        ],
      },
      lover: {
        overview: "杨过眼中的小龙女",
        description: "龙儿是我师父，也是我妻子。她看起来冷冰冰的，其实比谁都善良。古墓之中，她教我武功，给我温暖；江湖之中，她为我牺牲，为我等待。十六年的等待，没有白费。龙儿，这一生，能与你相守，我杨过死而无憾。",
        keyEvents: [
          { title: "古墓拜师", description: "我逃出全真教，误入古墓，龙儿收留了我，收我为徒。那一刻，我知道，她就是我这一生要守护的人。", age: "约十四岁", location: "终南山古墓" },
          { title: "洞房花烛", description: "我与龙儿在重阳宫祖师像前拜堂成亲。虽然那天我们都身受重伤，但那是我一生最幸福的日子。", age: "约二十岁", location: "重阳宫" },
          { title: "谷底重逢", description: "十六年后，我跳下断肠崖，以为要与龙儿同死。没想到在谷底见到了她。那一刻，什么江湖恩怨、什么国仇家恨，都不重要了。", age: "约三十六岁", location: "绝情谷底" },
        ],
      },
      history: {
        overview: "史书记载中的小龙女",
        description: "小龙女，南宋末年人，古墓派传人。正史中关于她的记载极少，多见于野史与民间传说。据《武林旧事》等书记载，她与杨过的爱情故事在南宋末年广为流传，成为后世文学艺术的重要题材。",
        keyEvents: [
          { title: "古墓派传人", description: "小龙女为古墓派第三代掌门人，精通玉女心经、玉女素心剑法等绝学。", location: "终南山古墓" },
          { title: "襄阳助战", description: "小龙女与杨过助守襄阳，双剑合璧，屡建奇功。", age: "约三十六岁", location: "襄阳" },
          { title: "归隐江湖", description: "第三次华山论剑后，小龙女与杨过归隐，从此绝迹江湖。后世关于他们的传说，层出不穷。", age: "约三十六岁", location: "华山" },
        ],
      },
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
    perspectives: {
      bystander: {
        overview: "江湖人眼中的韦小宝",
        description: "韦大人那可是个传奇人物！出身扬州丽春院，却成了康熙皇帝眼前的红人、天地会青木堂香主、神龙教白龙使、一等鹿鼎公。他不会武功，却把整个江湖玩得团团转。七位夫人个个貌美如花，真是羡煞旁人！",
        keyEvents: [
          { title: "扬州丽春院", description: "韦小宝出身扬州丽春院，母亲韦春花是妓女。他从小在市井摸爬滚打，练就了一身机灵本事。", age: "少年时期", location: "扬州丽春院" },
          { title: "宫中奇遇", description: "韦小宝被抓入宫，假扮小桂子，与小皇帝康熙摔跤结识，从此平步青云。", age: "约十三四岁", location: "皇宫" },
          { title: "智擒鳌拜", description: "韦小宝协助康熙智擒鳌拜，立下大功，被康熙重用。", age: "约十四岁", location: "皇宫布库房" },
          { title: "鹿鼎公", description: "韦小宝屡建奇功，被康熙封为一等鹿鼎公，位极人臣。", age: "约十八九岁", location: "北京" },
        ],
      },
      enemy: {
        overview: "郑克塽眼中的韦小宝",
        description: "韦小宝这个小混混，地痞流氓！他不过是运气好，讨得了康熙的欢心，才爬到今天的位置。他害死了我师父陈近南，抢了我的阿珂，此仇不共戴天！若不是我无能，早就将他碎尸万段了！",
        keyEvents: [
          { title: "杀师之仇", description: "韦小宝害死了我师父陈近南，天地会总舵主。此仇不共戴天！", age: "约二十岁", location: "通吃岛" },
          { title: "夺妻之恨", description: "阿珂本来是我的未婚妻，却被韦小宝这小混混抢走。我郑克塽有何面目见人！", age: "约二十岁", location: "扬州丽春院" },
          { title: "兵败被擒", description: "我郑氏台湾被康熙攻破，我被活捉到北京，还被韦小宝这小人羞辱。此仇不报，我死不瞑目！", age: "约二十多岁", location: "北京" },
        ],
      },
      lover: {
        overview: "双儿眼中的韦小宝",
        description: "相公是天下最好的人。他虽然油嘴滑舌，喜欢漂亮姑娘，但对我是真心的。他为了我，可以不顾性命；我为了他，也可以做任何事。相公那么多夫人，我不嫉妒，只要能待在相公身边，我就心满意足了。",
        keyEvents: [
          { title: "庄家赠奴", description: "庄家三少奶奶将我送给相公。第一次见相公，他还是个小太监，却对我彬彬有礼。", age: "约十五岁", location: "庄家" },
          { title: "五台山上", description: "相公被人追杀，我背着他逃到五台山上。那是我第一次觉得，我可以保护相公。", age: "约十五岁", location: "五台山" },
          { title: "通吃岛隐居", description: "相公带我们七位夫人到通吃岛隐居。虽然远离中原，但相公在身边，哪里都是家。", age: "约二十岁", location: "通吃岛" },
        ],
      },
      history: {
        overview: "史书记载中的韦小宝",
        description: "据《清史稿》《清稗类钞》等书记载，韦小宝为康熙年间人，曾协助康熙智擒鳌拜，后官至一等鹿鼎公。其生平事迹多有争议，正史记载简略，野史笔记则记载颇丰。史学界普遍认为，韦小宝的故事多为民间传说，并非完全真实。",
        keyEvents: [
          { title: "智擒鳌拜", description: "据野史记载，康熙八年，康熙与韦小宝等人设计擒拿鳌拜，清除了亲政道路上的最大障碍。", age: "约十四岁", location: "北京" },
          { title: "签订尼布楚条约", description: "据《中俄尼布楚条约》记载，中方代表中有韦小宝其人，代表清政府与沙俄签订了《尼布楚条约》。", age: "约十八岁", location: "尼布楚" },
          { title: "归隐之谜", description: "韦小宝后来携七位夫人归隐，不知所终。民间有传说他隐居于云南，也有说他去了南洋。真相如何，已成千古之谜。", location: "清康熙年间" },
        ],
      },
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
    perspectives: {
      bystander: {
        overview: "江湖人眼中的任盈盈",
        description: "任大小姐是日月神教圣姑，武功高强，容貌绝美，更难得的是精通音律。她虽身处魔教，却行事正派，对令狐冲一往情深，甘愿舍弃圣姑之尊，与令狐冲归隐江湖。这样的奇女子，真是世间少有。",
        keyEvents: [
          { title: "绿竹巷隐居", description: "任盈盈厌倦黑木崖的权谋斗争，以婆婆身份隐居洛阳绿竹巷，抚琴度日。", age: "约十七八岁", location: "洛阳绿竹巷" },
          { title: "少林舍身", description: "任盈盈背令狐冲上少林寺，愿以自己一命换方证大师传令狐冲易筋经。", age: "约十八岁", location: "少林寺" },
          { title: "助父复位", description: "任盈盈救出任我行，助他重夺日月神教教主之位，父女团聚。", age: "约十八岁", location: "梅庄" },
          { title: "归隐梅庄", description: "任盈盈与令狐冲在西湖梅庄成婚，从此琴箫合奏，笑傲江湖。", age: "约二十岁", location: "西湖梅庄" },
        ],
      },
      enemy: {
        overview: "岳不群眼中的任盈盈",
        description: "任盈盈这妖女，身为魔教圣姑，却处处与我作对。她勾引令狐冲，让他背离正道，投入魔教。若不是她，令狐冲何至于落到今天这般田地？此女不除，我华山派永无宁日！",
        keyEvents: [
          { title: "勾结令狐冲", description: "任盈盈与令狐冲勾结在一起，败坏我华山派名声。我这个徒弟，算是白养了！", age: "约十八岁", location: "洛阳" },
          { title: "救出任我行", description: "任盈盈救出任我行这个大魔头，让日月神教死灰复燃，武林从此多事。", age: "约十八岁", location: "梅庄" },
          { title: "封禅台阻我", description: "五岳并派大典上，任盈盈处处与我作对，坏我大事。此仇必报！", age: "约十九岁", location: "嵩山封禅台" },
        ],
      },
      lover: {
        overview: "令狐冲眼中的任盈盈",
        description: "盈盈是我令狐冲这辈子最对不起的人，也是最爱的人。她为我付出了那么多，我却让她等了那么久。她像一朵出淤泥而不染的莲花，身在魔教，却心性高洁。能娶到盈盈，是我令狐冲几辈子修来的福气。",
        keyEvents: [
          { title: "绿竹巷知音", description: "我在绿竹巷听婆婆弹琴，合奏《笑傲江湖》。那时候我不知道婆婆就是盈盈，但我知道，她是我的知音。", age: "约十八岁", location: "洛阳绿竹巷" },
          { title: "五霸岗相会", description: "五霸冈上，我第一次见到盈盈的真面目。那一刻，我就知道，我这辈子都离不开她了。", age: "约十八岁", location: "五霸冈" },
          { title: "梅庄大婚", description: "我和盈盈在西湖梅庄成婚。新婚之夜，我们琴箫合奏《笑傲江湖》。那一刻，我觉得自己是天下最幸福的人。", age: "约二十岁", location: "西湖梅庄" },
        ],
      },
      history: {
        overview: "史书记载中的任盈盈",
        description: "任盈盈，明万历年间人，日月神教教主任我行之女。正史中关于她的记载极少，多见于文人笔记与武侠小说。据《明史·艺文志》载，任盈盈精通音律，尤擅古琴，曾与令狐冲合著《笑傲江湖》曲谱，传于后世。",
        keyEvents: [
          { title: "日月神教圣姑", description: "任盈盈为日月神教圣姑，在教中地位尊崇，仅次于教主与东方不败。", location: "黑木崖" },
          { title: "《笑傲江湖》曲谱", description: "任盈盈与令狐冲归隐后，共创《笑傲江湖》曲谱，成为千古名曲。", location: "西湖梅庄" },
          { title: "归隐江湖", description: "任盈盈与令狐冲归隐后，再无人见过他们。传说他们在西湖梅庄住了一辈子，也有说他们云游四海去了。", location: "西湖梅庄" },
        ],
      },
    },
  },
];
