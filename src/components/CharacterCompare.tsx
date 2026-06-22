import { useState, useRef, useEffect } from "react";
import { Character, CharacterJourney } from "@/data/characters";
import { ArrowLeft, Star, Heart, Swords, ScrollText, Infinity, GitMerge, ArrowRightLeft } from "lucide-react";
import DoubleHelixTimeline from "@/components/DoubleHelixTimeline";

interface CharacterCompareProps {
  charA: Character;
  charB: Character;
  onBack: () => void;
  onSwap: () => void;
}

type CompareDimension = "origin" | "emotion" | "martial" | "ending" | "timeline";

const compareDimensions: {
  key: CompareDimension;
  label: string;
  icon: typeof Star;
  description: string;
}[] = [
  { key: "origin", label: "成长环境", icon: Star, description: "家世渊源" },
  { key: "emotion", label: "感情经历", icon: Heart, description: "爱恨纠缠" },
  { key: "martial", label: "武学道路", icon: Swords, description: "绝技留名" },
  { key: "ending", label: "人生结局", icon: ScrollText, description: "功过留名" },
  { key: "timeline", label: "双螺旋", icon: Infinity, description: "命运交织" },
];

const dimensionMapping: Record<"origin" | "emotion" | "martial" | "ending", keyof CharacterJourney> = {
  origin: "origin",
  emotion: "emotion",
  martial: "martial",
  ending: "ending",
};

const dimensionAnalysis: Record<CompareDimension, (a: Character, b: Character) => {
  similarities: string[];
  differences: string[];
  verdict: string;
}> = {
  origin: (a, b) => {
    const similarities: string[] = [];
    const differences: string[] = [];
    const aOrigins = a.journey.origin;
    const bOrigins = b.journey.origin;
    const aOrphan = aOrigins.some(o => o.description.includes("孤儿") || o.description.includes("亡") || o.description.includes("双亡"));
    const bOrphan = bOrigins.some(o => o.description.includes("孤儿") || o.description.includes("亡") || o.description.includes("双亡"));
    const aAdopt = aOrigins.some(o => o.description.includes("养") || o.description.includes("收养") || o.description.includes("寄养") || o.description.includes("拜"));
    const bAdopt = bOrigins.some(o => o.description.includes("养") || o.description.includes("收养") || o.description.includes("寄养") || o.description.includes("拜"));
    if (aOrphan && bOrphan) similarities.push("两人皆少年失亲，早年命运坎坷");
    else if (aOrphan || bOrphan) differences.push(`${aOrphan ? a.name : b.name}少年孤苦，${bOrphan ? a.name : b.name}则有亲眷照料`);
    if (aAdopt && bAdopt) similarities.push("皆蒙师长/义父养育之恩，非原生家庭成长");
    const aNovel = a.novel;
    const bNovel = b.novel;
    if (aNovel === bNovel) {
      similarities.push(`同出《${aNovel}》一书，故事时代背景相同`);
    } else {
      differences.push(`${a.name}出自《${aNovel}》，${b.name}出自《${bNovel}》，时代各异`);
    }
    let verdict = "";
    if (similarities.length > differences.length) {
      verdict = "同源殊途，皆以非寻常之出身踏入江湖，命途虽异，根骨相似";
    } else if (differences.length > similarities.length) {
      verdict = "出身迥异，一天一地，却终以各自之姿立于武林之巅";
    } else {
      verdict = "出身有同有异，正是江湖百态、造化弄人之写照";
    }
    return { similarities, differences, verdict };
  },
  emotion: (a, b) => {
    const similarities: string[] = [];
    const differences: string[] = [];
    const aLoves = a.journey.emotion.length;
    const bLoves = b.journey.emotion.length;
    const aTragic = a.journey.emotion.some(e => e.description.includes("死") || e.description.includes("殉") || e.description.includes("悲剧") || e.description.includes("误毙"));
    const bTragic = b.journey.emotion.some(e => e.description.includes("死") || e.description.includes("殉") || e.description.includes("悲剧") || e.description.includes("误毙"));
    if (aLoves >= 3 && bLoves >= 3) similarities.push("两人感情线皆曲折丰富，历经多段刻骨铭心");
    if (aTragic && bTragic) {
      similarities.push("情路皆带悲情色彩，挚爱之人或死或散，令人扼腕");
    } else if (aTragic || bTragic) {
      differences.push(`${aTragic ? a.name : b.name}情路悲苦，${bTragic ? a.name : b.name}则得有情人终成眷属`);
    }
    const aMarry = a.journey.emotion.some(e => e.description.includes("结") || e.description.includes("夫妻") || e.description.includes("大婚") || e.description.includes("连"));
    const bMarry = b.journey.emotion.some(e => e.description.includes("结") || e.description.includes("夫妻") || e.description.includes("大婚") || e.description.includes("连"));
    if (aMarry && bMarry) similarities.push("皆得良缘，与挚爱结为连理");
    let verdict = "";
    if (similarities.length > differences.length) {
      verdict = "情路相似，皆经爱别离、求不得之苦，方知情之一字最是磨人";
    } else if (differences.length > similarities.length) {
      verdict = "一悲一喜，一离一合，情爱之途正如江湖之险，吉凶难料";
    } else {
      verdict = "情关难过，英雄亦如是，唯其真性情，方显英雄本色";
    }
    return { similarities, differences, verdict };
  },
  martial: (a, b) => {
    const similarities: string[] = [];
    const differences: string[] = [];
    const aArts = a.martialArts;
    const bArts = b.martialArts;
    const commonArts = aArts.filter(art => bArts.includes(art));
    if (commonArts.length > 0) {
      similarities.push(`共同精擅：${commonArts.join("、")}`);
    }
    const aMany = aArts.length >= 3;
    const bMany = bArts.length >= 3;
    if (aMany && bMany) similarities.push("两人皆博采众长，身兼数家绝技");
    const aCreate = a.journey.martial.some(m => m.title.includes("创") || m.description.includes("创"));
    const bCreate = b.journey.martial.some(m => m.title.includes("创") || m.description.includes("创"));
    if (aCreate && bCreate) {
      similarities.push("皆不囿于成法，自创武功，开一代之先河");
    } else if (aCreate || bCreate) {
      differences.push(`${aCreate ? a.name : b.name}自创武功，${bCreate ? a.name : b.name}则以继承前贤绝学为主`);
    }
    let verdict = "";
    if (commonArts.length > 0) {
      verdict = "武学同源，各有精妙，若能切磋印证，必是武林千古佳话";
    } else if (similarities.length > differences.length) {
      verdict = "武道虽殊途，然皆臻至化境，可谓天下武功，同归一致";
    } else {
      verdict = "武学道路迥异，一刚一柔，一正一奇，恰如阴阳互补，各有千秋";
    }
    return { similarities, differences, verdict };
  },
  ending: (a, b) => {
    const similarities: string[] = [];
    const differences: string[] = [];
    const aDie = a.journey.ending.some(e => e.description.includes("死") || e.description.includes("殉") || e.description.includes("末路") || e.description.includes("破"));
    const bDie = b.journey.ending.some(e => e.description.includes("死") || e.description.includes("殉") || e.description.includes("末路") || e.description.includes("破"));
    const aRetire = a.journey.ending.some(e => e.description.includes("隐") || e.description.includes("归") || e.description.includes("笑傲"));
    const bRetire = b.journey.ending.some(e => e.description.includes("隐") || e.description.includes("归") || e.description.includes("笑傲"));
    if (aDie && bDie) {
      similarities.push("两人结局皆以身殉道，虽死犹荣，千古留名");
    } else if (aRetire && bRetire) {
      similarities.push("皆功成身退，归隐江湖，留传说于后世");
    } else {
      differences.push(`${aDie ? a.name : b.name}慷慨赴死，${bDie ? a.name : b.name}功成身退，结局一悲一喜`);
    }
    const aLegend = a.journey.ending.some(e => e.description.includes("传说") || e.description.includes("流芳") || e.description.includes("载") || e.description.includes("敬仰"));
    const bLegend = b.journey.ending.some(e => e.description.includes("传说") || e.description.includes("流芳") || e.description.includes("载") || e.description.includes("敬仰"));
    if (aLegend && bLegend) similarities.push("无论生死，皆为后世传颂，英名不泯");
    let verdict = "";
    if (aDie && bDie) {
      verdict = "生当作人杰，死亦为鬼雄。二人皆以身殉道，可谓武侠之魂";
    } else if (aRetire && bRetire) {
      verdict = "功遂身退，天之道也。二人皆参透江湖真谛，得享逍遥";
    } else {
      verdict = "人生结局虽异，然皆不负平生，是为不负江湖不负心";
    }
    return { similarities, differences, verdict };
  },
  timeline: () => {
    return {
      similarities: ["双螺旋时间轴上可见两人人生轨迹在相似阶段产生共振", "关键节点的命运抉择虽异，然其性格底色决定了各自的走向"],
      differences: ["具体年份与经历各异，正如世上无两片相同之叶", "一人的高光时刻恰是另一人的蛰伏之期，形成奇妙的命运错峰"],
      verdict: "双螺旋盘旋上升，时而交织时而分离，正如两条人生的河流，各自奔流，终入江湖之海",
    };
  },
};

function ScrollRod({ position }: { position: "left" | "right" }) {
  const isLeft = position === "left";
  return (
    <div
      className={`absolute top-0 bottom-0 w-6 md:w-8 flex flex-col items-center z-30 ${
        isLeft ? "-left-6 md:-left-8" : "-right-6 md:-right-8"
      }`}
    >
      <div className="w-full h-8 md:h-10 -mt-1">
        <div className="w-full h-full scroll-rod rounded-t-sm" />
      </div>
      <div className={`absolute -top-2 ${isLeft ? "-left-3 md:-left-4" : "-right-3 md:-right-4"}`}>
        <div className="w-10 md:w-12 h-10 md:h-12 scroll-rod-cap rounded-full" />
      </div>
      <div className="flex-1 w-full scroll-rod" />
      <div className={`absolute -bottom-2 ${isLeft ? "-left-3 md:-left-4" : "-right-3 md:-right-4"}`}>
        <div className="w-10 md:w-12 h-10 md:h-12 scroll-rod-cap rounded-full" />
      </div>
      <div className="w-full h-8 md:h-10 -mb-1">
        <div className="w-full h-full scroll-rod rounded-b-sm" />
      </div>
    </div>
  );
}

export default function CharacterCompare({
  charA,
  charB,
  onBack,
  onSwap,
}: CharacterCompareProps) {
  const [activeDim, setActiveDim] = useState<CompareDimension>("origin");
  const [pageKey, setPageKey] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setPageKey(k => k + 1);
    if (contentRef.current) {
      contentRef.current.scrollTop = 0;
    }
  }, [activeDim]);

  const currentDim = compareDimensions.find(d => d.key === activeDim)!;
  const DimIcon = currentDim.icon;
  const analysis = dimensionAnalysis[activeDim](charA, charB);
  const isTimeline = activeDim === "timeline";

  const mappedKey = dimensionMapping[activeDim as Exclude<CompareDimension, "timeline">];
  const eventsA = !isTimeline ? charA.journey[mappedKey] : [];
  const eventsB = !isTimeline ? charB.journey[mappedKey] : [];

  return (
    <div className="min-h-screen py-8 md:py-12 px-2 md:px-4 relative">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-[#c23616]/3 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-[#2c3e6b]/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#b8860b]/3 rounded-full blur-3xl opacity-20" />
      </div>

      <div className="max-w-6xl mx-auto relative">
        <div className="flex justify-between items-center mb-6 md:mb-8 px-2">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-rice/70 hover:text-cinnabar transition-colors group bg-ink/40 backdrop-blur-sm px-4 py-2 rounded border border-mist/10 hover:border-cinnabar/40"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-song text-sm">返回选择</span>
          </button>
          <div className="flex items-center gap-3">
            <div className="font-brush text-rice/50 text-sm md:text-base tracking-widest">
              宿 · 命 · 对 · 照
            </div>
            <button
              onClick={onSwap}
              className="flex items-center gap-1.5 text-mist/60 hover:text-gold transition-colors px-3 py-1.5 rounded border border-mist/10 hover:border-gold/30"
              title="交换左右位置"
            >
              <ArrowRightLeft size={14} />
              <span className="font-song text-xs">换位</span>
            </button>
          </div>
          <div className="w-[104px]" />
        </div>

        <div className="relative">
          <ScrollRod position="left" />
          <ScrollRod position="right" />

          <div className="relative scroll-paper rounded-sm overflow-hidden mx-2 md:mx-4">
            <div className="absolute inset-x-0 top-0 h-16 scroll-paper-edge-top z-10 pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 h-20 scroll-paper-edge-bottom z-10 pointer-events-none" />
            <div className="absolute inset-y-0 left-0 w-16 scroll-paper-edge-left z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-16 scroll-paper-edge-right z-10 pointer-events-none" />

            <div className="relative px-6 md:px-12 lg:px-16 py-10 md:py-14">
              <div className="absolute top-4 right-6 md:top-8 md:right-10 z-20">
                <div className="cinnabar-seal w-12 h-12 md:w-16 md:h-16 rounded-sm flex items-center justify-center -rotate-6 opacity-90">
                  <div className="text-center">
                    <div className="font-brush text-rice text-xs md:text-sm leading-none">宿命</div>
                    <div className="font-brush text-rice text-xs md:text-sm leading-none mt-0.5">对照</div>
                  </div>
                </div>
              </div>

              <header className="mb-8 md:mb-12 pb-8 border-b border-[#8b5a2b]/20">
                <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-6 md:gap-4">
                  <div className="text-center md:text-right">
                    <div className="relative inline-flex flex-col items-center md:items-end">
                      <div className="relative w-24 h-24 md:w-32 md:h-32">
                        <div className="absolute inset-0 rounded-full border-4 border-[#c23616]/40 shadow-xl overflow-hidden">
                          <img
                            src={charA.image}
                            alt={charA.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-[#f5f0e8] px-3 py-0.5 border-2 border-[#c23616]/50 rounded-sm shadow-md">
                          <span className="font-brush text-[#c23616] text-xs whitespace-nowrap">
                            {charA.novel}
                          </span>
                        </div>
                      </div>
                      <div className="mt-4 md:mt-5 text-center md:text-right">
                        <h2 className="font-brush text-3xl md:text-5xl" style={{ color: "#c23616" }}>
                          {charA.name}
                        </h2>
                        <p className="font-song text-sm md:text-base mt-1" style={{ color: "#8b5a2b" }}>
                          · {charA.alias} ·
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-center justify-center py-4">
                    <div className="relative">
                      <GitMerge size={32} className="text-[#8b6914]" strokeWidth={1.5} />
                      <div className="absolute -inset-2 rounded-full border border-[#8b6914]/20 animate-ping" style={{ animationDuration: "3s" }} />
                    </div>
                    <div className="mt-3 font-brush text-2xl md:text-3xl tracking-widest" style={{ color: "#8b6914" }}>
                      VS
                    </div>
                    <div className="mt-2 font-song text-xs md:text-sm" style={{ color: "rgba(139,105,20,0.7)" }}>
                      宿命对照
                    </div>
                  </div>

                  <div className="text-center md:text-left">
                    <div className="relative inline-flex flex-col items-center md:items-start">
                      <div className="relative w-24 h-24 md:w-32 md:h-32">
                        <div className="absolute inset-0 rounded-full border-4 border-[#2c3e6b]/40 shadow-xl overflow-hidden">
                          <img
                            src={charB.image}
                            alt={charB.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-[#f5f0e8] px-3 py-0.5 border-2 border-[#2c3e6b]/50 rounded-sm shadow-md">
                          <span className="font-brush text-[#2c3e6b] text-xs whitespace-nowrap">
                            {charB.novel}
                          </span>
                        </div>
                      </div>
                      <div className="mt-4 md:mt-5 text-center md:text-left">
                        <h2 className="font-brush text-3xl md:text-5xl" style={{ color: "#2c3e6b" }}>
                          {charB.name}
                        </h2>
                        <p className="font-song text-sm md:text-base mt-1" style={{ color: "#8b5a2b" }}>
                          · {charB.alias} ·
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 md:mt-10 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div
                    className="p-4 rounded-sm relative overflow-hidden"
                    style={{
                      background: "rgba(194,54,22,0.04)",
                      borderLeft: "3px solid rgba(194,54,22,0.4)",
                      borderTop: "1px solid rgba(194,54,22,0.1)",
                      borderBottom: "1px solid rgba(194,54,22,0.1)",
                    }}
                  >
                    <div className="flex items-start gap-2">
                      <div
                        className="font-brush text-xs md:text-sm flex-shrink-0"
                        style={{ color: "#c23616" }}
                      >
                        「
                      </div>
                      <p
                        className="font-song text-xs md:text-sm italic leading-relaxed"
                        style={{ color: "rgba(50,40,30,0.75)" }}
                      >
                        {charA.quote}
                      </p>
                      <div
                        className="font-brush text-xs md:text-sm flex-shrink-0 self-end"
                        style={{ color: "#c23616" }}
                      >
                        」
                      </div>
                    </div>
                  </div>
                  <div
                    className="p-4 rounded-sm relative overflow-hidden"
                    style={{
                      background: "rgba(44,62,107,0.04)",
                      borderRight: "3px solid rgba(44,62,107,0.4)",
                      borderTop: "1px solid rgba(44,62,107,0.1)",
                      borderBottom: "1px solid rgba(44,62,107,0.1)",
                    }}
                  >
                    <div className="flex items-start gap-2">
                      <div
                        className="font-brush text-xs md:text-sm flex-shrink-0"
                        style={{ color: "#2c3e6b" }}
                      >
                        「
                      </div>
                      <p
                        className="font-song text-xs md:text-sm italic leading-relaxed"
                        style={{ color: "rgba(50,40,30,0.75)" }}
                      >
                        {charB.quote}
                      </p>
                      <div
                        className="font-brush text-xs md:text-sm flex-shrink-0 self-end"
                        style={{ color: "#2c3e6b" }}
                      >
                        」
                      </div>
                    </div>
                  </div>
                </div>
              </header>

              <div className="mb-8">
                <div className="flex flex-wrap gap-2 md:gap-3 justify-center">
                  {compareDimensions.map((dim) => {
                    const DIcon = dim.icon;
                    const isActive = dim.key === activeDim;
                    return (
                      <button
                        key={dim.key}
                        onClick={() => setActiveDim(dim.key)}
                        className={`relative flex items-center gap-2 px-4 md:px-5 py-2.5 md:py-3 rounded-sm transition-all duration-300 ${
                          isActive
                            ? "dimension-pill-active -translate-y-0.5"
                            : "dimension-pill hover:-translate-y-0.5 hover:shadow-md"
                        }`}
                      >
                        <DIcon
                          size={16}
                          className={isActive ? "text-[#c23616]" : "text-[#8b5a2b]"}
                        />
                        <div className="text-left">
                          <div
                            className={`font-brush text-base md:text-lg leading-none ${
                              isActive ? "text-[#c23616]" : "ink-title-on-paper"
                            }`}
                          >
                            {dim.label}
                          </div>
                          <div
                            className={`text-[10px] md:text-xs font-song mt-0.5 leading-none ${
                              isActive ? "text-[#c23616]/70" : "ink-text-on-paper/50"
                            }`}
                          >
                            {dim.description}
                          </div>
                        </div>
                        {isActive && (
                          <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full cinnabar-seal" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="page-turn-in overflow-hidden" key={pageKey}>
                <div
                  ref={contentRef}
                  className="max-h-[65vh] overflow-y-auto pr-2 scrollbar-hide"
                >
                  <div className="flex items-center gap-3 mb-6 pb-3 border-b-2 border-double border-[#8b5a2b]/30">
                    <div className="relative">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full dimension-pill-active flex items-center justify-center">
                        <DimIcon size={20} className="text-[#c23616]" />
                      </div>
                    </div>
                    <div>
                      <h2 className="font-brush text-3xl md:text-4xl ink-title-on-paper tracking-wider">
                        {currentDim.label}对照
                      </h2>
                      <div className="font-song text-xs md:text-sm ink-text-on-paper/50 mt-0.5">
                        ─── {currentDim.description} · 宿命评鉴 ───
                      </div>
                    </div>
                  </div>

                  <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    <div
                      className="p-4 md:p-5 rounded-sm relative"
                      style={{
                        background: "rgba(194,54,22,0.03)",
                        border: "1px solid rgba(194,54,22,0.2)",
                      }}
                    >
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-2 h-2 rounded-full" style={{ background: "#c23616" }} />
                        <h3 className="font-brush text-lg md:text-xl" style={{ color: "#c23616" }}>
                          相似之处
                        </h3>
                      </div>
                      {analysis.similarities.length > 0 ? (
                        <ul className="space-y-2">
                          {analysis.similarities.map((s, i) => (
                            <li
                              key={i}
                              className="font-song text-xs md:text-sm leading-relaxed flex gap-2"
                              style={{ color: "rgba(50,40,30,0.75)" }}
                            >
                              <span style={{ color: "#c23616" }}>✦</span>
                              <span>{s}</span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="font-song text-xs md:text-sm" style={{ color: "rgba(139,90,43,0.5)" }}>
                          此维度两人各有千秋，鲜有相似
                        </p>
                      )}
                    </div>

                    <div
                      className="p-4 md:p-5 rounded-sm relative"
                      style={{
                        background: "rgba(44,62,107,0.03)",
                        border: "1px solid rgba(44,62,107,0.2)",
                      }}
                    >
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-2 h-2 rounded-full" style={{ background: "#2c3e6b" }} />
                        <h3 className="font-brush text-lg md:text-xl" style={{ color: "#2c3e6b" }}>
                          差异之分
                        </h3>
                      </div>
                      {analysis.differences.length > 0 ? (
                        <ul className="space-y-2">
                          {analysis.differences.map((d, i) => (
                            <li
                              key={i}
                              className="font-song text-xs md:text-sm leading-relaxed flex gap-2"
                              style={{ color: "rgba(50,40,30,0.75)" }}
                            >
                              <span style={{ color: "#2c3e6b" }}>✧</span>
                              <span>{d}</span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="font-song text-xs md:text-sm" style={{ color: "rgba(139,90,43,0.5)" }}>
                          此维度两人境遇相似，殊途同归
                        </p>
                      )}
                    </div>
                  </div>

                  <div
                    className="mb-8 p-5 md:p-6 rounded-sm text-center relative overflow-hidden"
                    style={{
                      background: "linear-gradient(135deg, rgba(139,105,20,0.08) 0%, rgba(139,90,43,0.05) 100%)",
                      border: "1px dashed rgba(139,105,20,0.4)",
                    }}
                  >
                    <div className="absolute top-2 left-2 opacity-20">
                      <Infinity size={24} style={{ color: "#8b6914" }} />
                    </div>
                    <div className="absolute bottom-2 right-2 opacity-20">
                      <Infinity size={24} style={{ color: "#8b6914" }} />
                    </div>
                    <div className="font-brush text-xs md:text-sm tracking-widest mb-2" style={{ color: "#8b6914" }}>
                      ◇ 宿 命 评 ◇
                    </div>
                    <p className="font-brush text-lg md:text-2xl leading-relaxed" style={{ color: "#6b4f14" }}>
                      {analysis.verdict}
                    </p>
                  </div>

                  {isTimeline ? (
                    <DoubleHelixTimeline charA={charA} charB={charB} />
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                      <div>
                        <div
                          className="flex items-center gap-2 mb-4 pb-2"
                          style={{ borderBottom: "2px solid rgba(194,54,22,0.2)" }}
                        >
                          <div className="w-3 h-3 rounded-full" style={{ background: "#c23616" }} />
                          <h3 className="font-brush text-xl md:text-2xl" style={{ color: "#c23616" }}>
                            {charA.name}
                          </h3>
                          <span className="font-song text-xs text-[#8b5a2b]/60">
                            · {eventsA.length} 事
                          </span>
                        </div>
                        <div className="space-y-0 pl-2">
                          {eventsA.map((evt, idx) => (
                            <div
                              key={idx}
                              className="relative flex gap-3 pb-5 animate-fade-in-left"
                              style={{ animationDelay: `${idx * 0.1}s`, opacity: 0 }}
                            >
                              <div className="flex flex-col items-center flex-shrink-0 pt-1">
                                <div className="relative w-4 h-4">
                                  <div
                                    className="absolute inset-0 rounded-full border-2 z-10"
                                    style={{
                                      borderColor: "rgba(194,54,22,0.4)",
                                      background: "#f5f0e8",
                                    }}
                                  />
                                  <div
                                    className="absolute inset-0.5 rounded-full z-20"
                                    style={{ background: "#c23616" }}
                                  />
                                </div>
                                {idx < eventsA.length - 1 && (
                                  <div
                                    className="w-0.5 flex-1 min-h-[40px] mt-1"
                                    style={{
                                      background:
                                        "linear-gradient(to bottom, rgba(194,54,22,0.4), transparent)",
                                    }}
                                  />
                                )}
                              </div>
                              <div className="flex-1 pb-1">
                                <div className="flex flex-wrap items-center gap-1.5 mb-1">
                                  <h4 className="font-brush text-base md:text-lg" style={{ color: "#c23616" }}>
                                    {evt.title}
                                  </h4>
                                  {evt.age && (
                                    <span
                                      className="text-[10px] md:text-xs px-1.5 py-0.5 rounded font-song whitespace-nowrap"
                                      style={{
                                        background: "rgba(44,62,107,0.08)",
                                        color: "#2c3e6b",
                                      }}
                                    >
                                      {evt.age}
                                    </span>
                                  )}
                                </div>
                                <p
                                  className="font-song text-xs md:text-sm leading-relaxed"
                                  style={{ color: "rgba(50,40,30,0.7)" }}
                                >
                                  {evt.description}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <div
                          className="flex items-center gap-2 mb-4 pb-2"
                          style={{ borderBottom: "2px solid rgba(44,62,107,0.2)" }}
                        >
                          <div className="w-3 h-3 rounded-full" style={{ background: "#2c3e6b" }} />
                          <h3 className="font-brush text-xl md:text-2xl" style={{ color: "#2c3e6b" }}>
                            {charB.name}
                          </h3>
                          <span className="font-song text-xs text-[#8b5a2b]/60">
                            · {eventsB.length} 事
                          </span>
                        </div>
                        <div className="space-y-0 pl-2">
                          {eventsB.map((evt, idx) => (
                            <div
                              key={idx}
                              className="relative flex gap-3 pb-5 animate-fade-in-right"
                              style={{ animationDelay: `${idx * 0.1}s`, opacity: 0 }}
                            >
                              <div className="flex flex-col items-center flex-shrink-0 pt-1">
                                <div className="relative w-4 h-4">
                                  <div
                                    className="absolute inset-0 rounded-full border-2 z-10"
                                    style={{
                                      borderColor: "rgba(44,62,107,0.4)",
                                      background: "#f5f0e8",
                                    }}
                                  />
                                  <div
                                    className="absolute inset-0.5 rounded-full z-20"
                                    style={{ background: "#2c3e6b" }}
                                  />
                                </div>
                                {idx < eventsB.length - 1 && (
                                  <div
                                    className="w-0.5 flex-1 min-h-[40px] mt-1"
                                    style={{
                                      background:
                                        "linear-gradient(to bottom, rgba(44,62,107,0.4), transparent)",
                                    }}
                                  />
                                )}
                              </div>
                              <div className="flex-1 pb-1">
                                <div className="flex flex-wrap items-center gap-1.5 mb-1">
                                  <h4 className="font-brush text-base md:text-lg" style={{ color: "#2c3e6b" }}>
                                    {evt.title}
                                  </h4>
                                  {evt.age && (
                                    <span
                                      className="text-[10px] md:text-xs px-1.5 py-0.5 rounded font-song whitespace-nowrap"
                                      style={{
                                        background: "rgba(44,62,107,0.08)",
                                        color: "#2c3e6b",
                                      }}
                                    >
                                      {evt.age}
                                    </span>
                                  )}
                                </div>
                                <p
                                  className="font-song text-xs md:text-sm leading-relaxed"
                                  style={{ color: "rgba(50,40,30,0.7)" }}
                                >
                                  {evt.description}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <footer className="mt-10 pt-6 border-t border-[#8b5a2b]/20">
                <div className="flex items-center justify-between text-xs md:text-sm">
                  <div className="flex items-center gap-2 ink-text-on-paper/40 font-song">
                    <span>📜</span>
                    <span>宿命对照卷轴</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-8 md:w-12 h-px bg-gradient-to-r from-transparent to-[#8b5a2b]/50" />
                    <span className="font-brush text-[#8b5a2b]/70 text-base md:text-lg">
                      江 湖 录
                    </span>
                    <div className="w-8 md:w-12 h-px bg-gradient-to-l from-transparent to-[#8b5a2b]/50" />
                  </div>
                  <div className="flex items-center gap-2 ink-text-on-paper/40 font-song">
                    <span>卷末</span>
                    <button
                      onClick={onBack}
                      className="text-[#c23616]/70 hover:text-[#c23616] transition-colors"
                    >
                      合上
                    </button>
                  </div>
                </div>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
