import { useState } from "react";
import { Character, CharacterJourney, TimelineEvent } from "@/data/characters";
import { ArrowLeft, Sparkles, Heart, Swords, Scroll, Star } from "lucide-react";

interface DestinyScrollProps {
  character: Character;
  onBack: () => void;
}

type DimensionKey = keyof CharacterJourney;

const dimensions: {
  key: DimensionKey;
  label: string;
  icon: typeof Sparkles;
  color: string;
  description: string;
}[] = [
  { key: "origin", label: "出身", icon: Star, color: "text-indigo", description: "家世渊源，生命之始" },
  { key: "destiny", label: "机缘", icon: Sparkles, color: "text-gold", description: "命运轮转，因缘际会" },
  { key: "emotion", label: "情感", icon: Heart, color: "text-cinnabar", description: "情深缘浅，爱恨纠缠" },
  { key: "martial", label: "武学", icon: Swords, color: "text-rice", description: "武功盖世，绝技留名" },
  { key: "ending", label: "结局", icon: Scroll, color: "text-mist", description: "尘埃落定，功过留名" },
];

function TimelineNode({ event, index, total }: { event: TimelineEvent; index: number; total: number }) {
  const isLast = index === total - 1;
  return (
    <div
      className="relative flex gap-4 md:gap-6 animate-fade-in-up"
      style={{ animationDelay: `${index * 0.15}s`, opacity: 0 }}
    >
      <div className="flex flex-col items-center">
        <div className="relative w-4 h-4 flex-shrink-0">
          <div className="absolute inset-0 rounded-full event-node animate-ink-spread" />
          <div className="absolute inset-1 rounded-full bg-cinnabar shadow-lg shadow-cinnabar/40" />
        </div>
        {!isLast && (
          <div className="w-0.5 flex-1 min-h-[80px] event-connector mt-1" />
        )}
      </div>

      <div className="flex-1 pb-8">
        <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-2">
          <h4 className="font-brush text-xl md:text-2xl text-rice">
            {event.title}
          </h4>
          {event.age && (
            <span className="text-xs px-2 py-0.5 bg-indigo/20 text-indigo/90 rounded border border-indigo/30 font-song">
              {event.age}
            </span>
          )}
          {event.location && (
            <span className="text-xs px-2 py-0.5 bg-gold/10 text-gold/80 rounded border border-gold/20 font-song">
              {event.location}
            </span>
          )}
        </div>
        <p className="font-song text-sm md:text-base text-mist/80 leading-relaxed">
          {event.description}
        </p>
      </div>
    </div>
  );
}

export default function DestinyScroll({ character, onBack }: DestinyScrollProps) {
  const [activeDimension, setActiveDimension] = useState<DimensionKey>("origin");

  const currentDim = dimensions.find((d) => d.key === activeDimension)!;
  const events = character.journey[activeDimension];
  const Icon = currentDim.icon;

  return (
    <div className="min-h-screen journey-scroll-bg animate-scroll-unroll origin-top">
      <div className="container mx-auto px-4 py-8 md:py-12 max-w-6xl">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-mist/70 hover:text-cinnabar transition-colors mb-8 group"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-song text-sm">返回江湖罗盘</span>
        </button>

        <header className="mb-10 md:mb-14 animate-fade-in-up">
          <div className="flex flex-col md:flex-row items-start md:items-end gap-6 mb-8">
            <div className="relative">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-cinnabar/40 shadow-2xl shadow-cinnabar/20">
                <img
                  src={character.image}
                  alt={character.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-ink border border-cinnabar/40 rounded-full px-3 py-1">
                <span className="font-brush text-cinnabar text-sm">{character.novel}</span>
              </div>
            </div>

            <div className="flex-1">
              <div className="flex items-end gap-3 mb-2">
                <h1 className="font-brush text-5xl md:text-6xl text-rice ink-text-glow">
                  {character.name}
                </h1>
                <span className="text-gold/80 font-song text-lg md:text-xl mb-2">
                  · {character.alias}
                </span>
              </div>
              <p className="text-mist/70 font-song text-sm md:text-base leading-relaxed max-w-2xl mb-4">
                {character.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {character.martialArts.map((art) => (
                  <span
                    key={art}
                    className="text-xs md:text-sm px-3 py-1 bg-cinnabar/10 text-cinnabar/80 rounded border border-cinnabar/20 font-song"
                  >
                    {art}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="relative pl-8 md:pl-12 py-4 border-l-2 border-cinnabar/30">
            <p className="font-brush text-xl md:text-2xl text-cinnabar/90 italic leading-relaxed">
              「{character.quote}」
            </p>
          </div>
        </header>

        <div className="flex flex-col md:flex-row gap-6 md:gap-10">
          <aside className="md:w-56 flex-shrink-0">
            <div className="sticky top-24 space-y-1">
              <div className="mb-4 pb-3 border-b border-mist/10">
                <h3 className="font-brush text-xl text-rice">命运维度</h3>
              </div>
              {dimensions.map((dim) => {
                const DimIcon = dim.icon;
                const isActive = dim.key === activeDimension;
                return (
                  <button
                    key={dim.key}
                    onClick={() => setActiveDimension(dim.key)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-r text-left transition-all duration-300 ${
                      isActive
                        ? "dimension-tab-active"
                        : "hover:bg-mist/5"
                    }`}
                  >
                    <DimIcon
                      size={18}
                      className={isActive ? dim.color : "text-mist/50"}
                    />
                    <div>
                      <div
                        className={`font-brush text-lg ${
                          isActive ? "text-rice" : "text-mist/70"
                        }`}
                      >
                        {dim.label}
                      </div>
                      <div
                        className={`text-xs font-song ${
                          isActive ? "text-mist/70" : "text-mist/40"
                        }`}
                      >
                        {dim.description}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </aside>

          <main className="flex-1 min-w-0">
            <div className="relative">
              <div className="absolute -left-10 top-0 opacity-20 pointer-events-none">
                <Icon size={120} className={currentDim.color} />
              </div>

              <div className="mb-8 pb-4 border-b border-mist/10">
                <div className="flex items-center gap-3 mb-2">
                  <Icon size={28} className={currentDim.color} />
                  <h2 className="font-brush text-3xl md:text-4xl text-rice">
                    {currentDim.label}
                  </h2>
                  <span className="text-mist/50 font-song text-sm">
                    · {currentDim.description}
                  </span>
                </div>
                <div className="w-24 h-0.5 bg-gradient-to-r from-cinnabar/60 via-cinnabar/30 to-transparent" />
              </div>

              <div className="space-y-0">
                {events.map((event, index) => (
                  <TimelineNode
                    key={`${activeDimension}-${index}`}
                    event={event}
                    index={index}
                    total={events.length}
                  />
                ))}
              </div>
            </div>
          </main>
        </div>

        <footer className="mt-16 pt-8 border-t border-mist/10 text-center">
          <div className="flex items-center justify-center gap-2 text-mist/40">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-mist/30" />
            <span className="font-brush text-sm">命运卷轴 · 江湖录</span>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-mist/30" />
          </div>
        </footer>
      </div>
    </div>
  );
}
