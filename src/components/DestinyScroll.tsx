import { useState, useEffect, useRef } from "react";
import { Character, CharacterJourney, TimelineEvent } from "@/data/characters";
import { ArrowLeft, Sparkles, Heart, Swords, Scroll as ScrollIcon, Star, X } from "lucide-react";

interface DestinyScrollProps {
  character: Character;
  onBack: () => void;
}

type DimensionKey = keyof CharacterJourney;

const dimensions: {
  key: DimensionKey;
  label: string;
  icon: typeof Sparkles;
  description: string;
}[] = [
  { key: "origin", label: "出身", icon: Star, description: "家世渊源" },
  { key: "destiny", label: "机缘", icon: Sparkles, description: "命运轮转" },
  { key: "emotion", label: "情感", icon: Heart, description: "爱恨纠缠" },
  { key: "martial", label: "武学", icon: Swords, description: "绝技留名" },
  { key: "ending", label: "结局", icon: ScrollIcon, description: "功过留名" },
];

function ScrollRod({ position }: { position: "left" | "right" }) {
  const isLeft = position === "left";
  return (
    <div
      className={`absolute top-0 bottom-0 w-6 md:w-8 flex flex-col items-center z-30 ${
        isLeft ? "scroll-rod-left-move -left-6 md:-left-8" : "scroll-rod-right-move -right-6 md:-right-8"
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

function TimelineNode({ event, index, total }: { event: TimelineEvent; index: number; total: number }) {
  const isLast = index === total - 1;
  const isEven = index % 2 === 0;
  return (
    <div
      className={`relative flex gap-3 md:gap-4 ${
        isEven ? "animate-fade-in-left" : "animate-fade-in-right"
      }`}
      style={{ animationDelay: `${0.4 + index * 0.12}s`, opacity: 0 }}
    >
      <div className="flex flex-col items-center flex-shrink-0 pt-1">
        <div className="relative w-5 h-5">
          <div className="absolute inset-0 rounded-full border-2 border-[#8b5a2b]/50 bg-[#f5f0e8] z-10" />
          <div className="absolute inset-1 rounded-full cinnabar-seal z-20" />
          <div className="absolute -inset-1 rounded-full bg-[#c23616]/20 animate-ping" style={{ animationDuration: "2.5s" }} />
        </div>
        {!isLast && (
          <div className="w-0.5 flex-1 min-h-[70px] bg-gradient-to-b from-[#c23616]/50 via-[#8b5a2b]/30 to-transparent mt-1" />
        )}
      </div>

      <div className="flex-1 pb-6 min-w-0">
        <div className="flex flex-wrap items-center gap-2 mb-1.5">
          <h4 className="font-brush text-xl md:text-2xl ink-title-on-paper tracking-wide">
            {event.title}
          </h4>
          {event.age && (
            <span className="text-[11px] md:text-xs px-2 py-0.5 rounded border border-[#2c3e6b]/30 bg-[#2c3e6b]/10 text-[#2c3e6b] font-song whitespace-nowrap">
              {event.age}
            </span>
          )}
          {event.location && (
            <span className="text-[11px] md:text-xs px-2 py-0.5 rounded border border-[#b8860b]/40 bg-[#b8860b]/10 text-[#8b6914] font-song whitespace-nowrap">
              📍 {event.location}
            </span>
          )}
        </div>
        <p className="font-song text-sm md:text-base ink-text-on-paper/80 leading-loose">
          {event.description}
        </p>
      </div>
    </div>
  );
}

export default function DestinyScroll({ character, onBack }: DestinyScrollProps) {
  const [activeDimension, setActiveDimension] = useState<DimensionKey>("origin");
  const [pageKey, setPageKey] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setPageKey((k) => k + 1);
    if (contentRef.current) {
      contentRef.current.scrollTop = 0;
    }
  }, [activeDimension]);

  const currentDim = dimensions.find((d) => d.key === activeDimension)!;
  const events = character.journey[activeDimension];
  const Icon = currentDim.icon;

  return (
    <div className="min-h-screen py-8 md:py-12 px-2 md:px-4 relative">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-[#c23616]/3 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-[#8b5a2b]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto relative">
        <div className="flex justify-between items-center mb-6 md:mb-8 px-2">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-rice/70 hover:text-cinnabar transition-colors group bg-ink/40 backdrop-blur-sm px-4 py-2 rounded border border-mist/10 hover:border-cinnabar/40"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-song text-sm">返回罗盘</span>
          </button>
          <div className="font-brush text-rice/50 text-sm md:text-base tracking-widest">
            命 · 运 · 卷 · 轴
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

            <div className="scroll-paper-reveal relative px-8 md:px-16 lg:px-20 py-10 md:py-14">
              <div className="absolute top-4 right-6 md:top-8 md:right-10 z-20">
                <div className="cinnabar-seal w-12 h-12 md:w-16 md:h-16 rounded-sm flex items-center justify-center rotate-6 opacity-90">
                  <div className="text-center">
                    <div className="font-brush text-rice text-xs md:text-sm leading-none">江湖</div>
                    <div className="font-brush text-rice text-xs md:text-sm leading-none mt-0.5">录</div>
                  </div>
                </div>
              </div>

              <header className="mb-10 md:mb-14 pb-8 border-b border-[#8b5a2b]/20 relative">
                <div className="absolute -left-2 md:-left-4 top-0 w-1 h-full bg-gradient-to-b from-transparent via-[#c23616]/40 to-transparent" />
                <div className="flex flex-col md:flex-row items-start md:items-center gap-5 md:gap-8">
                  <div className="relative flex-shrink-0 mx-auto md:mx-0">
                    <div className="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden border-4 border-[#8b5a2b]/60 shadow-xl">
                      <img
                        src={character.image}
                        alt={character.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-[#f5f0e8] px-3 py-0.5 border-2 border-[#c23616]/50 rounded-sm shadow-md">
                      <span className="font-brush text-[#c23616] text-xs md:text-sm whitespace-nowrap">
                        {character.novel}
                      </span>
                    </div>
                  </div>

                  <div className="flex-1 text-center md:text-left w-full">
                    <div className="flex items-end justify-center md:justify-start gap-2 md:gap-3 mb-3 flex-wrap">
                      <h1 className="font-brush text-5xl md:text-6xl lg:text-7xl ink-title-on-paper tracking-wider">
                        {character.name}
                      </h1>
                      <span className="text-[#8b5a2b] font-song text-lg md:text-xl mb-2">
                        · {character.alias} ·
                      </span>
                    </div>
                    <p className="font-song text-sm md:text-base ink-text-on-paper/75 leading-loose mb-4 max-w-2xl mx-auto md:mx-0">
                      {character.description}
                    </p>
                    <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                      {character.martialArts.map((art) => (
                        <span
                          key={art}
                          className="text-xs md:text-sm px-3 py-1 rounded-sm border border-[#2c3e6b]/40 bg-[#2c3e6b]/8 text-[#2c3e6b] font-song"
                        >
                          ✦ {art}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="relative mt-8 mx-auto md:mx-0 max-w-xl">
                  <div className="absolute -left-3 top-1/2 -translate-y-1/2 text-4xl md:text-5xl text-[#c23616]/40 font-brush">
                    「
                  </div>
                  <p className="font-brush text-xl md:text-2xl lg:text-3xl text-[#c23616]/90 italic leading-relaxed px-8 py-3 text-center">
                    {character.quote}
                  </p>
                  <div className="absolute -right-3 top-1/2 -translate-y-1/2 text-4xl md:text-5xl text-[#c23616]/40 font-brush">
                    」
                  </div>
                </div>
              </header>

              <div className="mb-8">
                <div className="flex flex-wrap gap-2 md:gap-3 justify-center">
                  {dimensions.map((dim, idx) => {
                    const DimIcon = dim.icon;
                    const isActive = dim.key === activeDimension;
                    return (
                      <button
                        key={dim.key}
                        onClick={() => setActiveDimension(dim.key)}
                        className={`relative flex items-center gap-2 px-4 md:px-5 py-2.5 md:py-3 rounded-sm transition-all duration-300 ${
                          isActive
                            ? "dimension-pill-active -translate-y-0.5"
                            : "dimension-pill hover:-translate-y-0.5 hover:shadow-md"
                        }`}
                      >
                        <DimIcon
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
                <div ref={contentRef} className="max-h-[60vh] overflow-y-auto pr-2 scrollbar-hide">
                  <div className="flex items-center gap-3 mb-6 pb-3 border-b-2 border-double border-[#8b5a2b]/30">
                    <div className="relative">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full dimension-pill-active flex items-center justify-center">
                        <Icon size={20} className="text-[#c23616]" />
                      </div>
                    </div>
                    <div>
                      <h2 className="font-brush text-3xl md:text-4xl ink-title-on-paper tracking-wider">
                        {currentDim.label}
                      </h2>
                      <div className="font-song text-xs md:text-sm ink-text-on-paper/50 mt-0.5">
                        ─── {currentDim.description} · 共 {events.length} 章 ───
                      </div>
                    </div>
                  </div>

                  <div className="space-y-0 pl-2 md:pl-4">
                    {events.map((event, index) => (
                      <TimelineNode
                        key={`${activeDimension}-${index}-${pageKey}`}
                        event={event}
                        index={index}
                        total={events.length}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <footer className="mt-10 pt-6 border-t border-[#8b5a2b]/20">
                <div className="flex items-center justify-between text-xs md:text-sm">
                  <div className="flex items-center gap-2 ink-text-on-paper/40 font-song">
                    <span>📜</span>
                    <span>命运卷轴</span>
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
                      className="text-[#c23616]/70 hover:text-[#c23616] transition-colors flex items-center gap-1"
                    >
                      <X size={12} />
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
