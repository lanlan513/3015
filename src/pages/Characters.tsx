import { useState } from 'react';
import { characters, Character } from '@/data/characters';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Compass from '@/components/Compass';
import DestinyScroll from '@/components/DestinyScroll';
import CharacterCompare from '@/components/CharacterCompare';
import { GitCompare, Compass as CompassIcon, X, Check, Users } from 'lucide-react';

type ViewMode = "single" | "compare";

export default function Characters() {
  const [viewMode, setViewMode] = useState<ViewMode>("single");
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);
  const [compareFirst, setCompareFirst] = useState<Character | null>(null);
  const [compareSecond, setCompareSecond] = useState<Character | null>(null);

  if (selectedCharacter) {
    return (
      <div className="min-h-screen bg-ink">
        <Navbar />
        <div className="pt-20">
          <DestinyScroll
            character={selectedCharacter}
            onBack={() => setSelectedCharacter(null)}
          />
        </div>
      </div>
    );
  }

  if (compareFirst && compareSecond) {
    return (
      <div className="min-h-screen bg-ink">
        <Navbar />
        <div className="pt-20">
          <CharacterCompare
            charA={compareFirst}
            charB={compareSecond}
            onBack={() => {
              setCompareFirst(null);
              setCompareSecond(null);
            }}
            onSwap={() => {
              const tmp = compareFirst;
              setCompareFirst(compareSecond);
              setCompareSecond(tmp);
            }}
          />
        </div>
      </div>
    );
  }

  const handleCompassSelect = (char: Character) => {
    if (viewMode === "single") {
      setSelectedCharacter(char);
    } else {
      if (!compareFirst) {
        setCompareFirst(char);
      } else if (compareFirst.id === char.id) {
        setCompareFirst(null);
      } else {
        setCompareSecond(char);
      }
    }
  };

  const isCharSelectedForCompare = (char: Character) => {
    return compareFirst?.id === char.id || compareSecond?.id === char.id;
  };

  return (
    <div className="min-h-screen bg-ink overflow-hidden">
      <Navbar />

      <section className="pt-28 pb-8 px-4 text-center relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-1/4 w-72 h-72 bg-cinnabar/5 rounded-full blur-3xl" />
          <div className="absolute top-20 right-1/4 w-56 h-56 bg-indigo/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gold/3 rounded-full blur-3xl opacity-30" />
        </div>
        <div className="relative">
          <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-cinnabar/60 to-transparent mx-auto mb-6" />
          <h1 className="font-brush text-5xl md:text-6xl text-rice ink-text-glow mb-2">
            江湖罗盘
          </h1>
          <p className="font-song text-mist/60 mt-3 text-base md:text-lg">
            {viewMode === "single"
              ? "点击罗盘上的人物，翻阅其命运卷轴"
              : compareFirst
                ? `已选「${compareFirst.name}」，再选一人开启宿命对照`
                : "选择两位人物，开启宿命对照卷轴"}
          </p>
          <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-cinnabar/60 to-transparent mx-auto mt-6" />
        </div>

        <div className="relative mt-6 flex justify-center gap-3">
          <button
            onClick={() => {
              setViewMode("single");
              setCompareFirst(null);
              setCompareSecond(null);
            }}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-sm transition-all duration-300 ${
              viewMode === "single"
                ? "bg-cinnabar/20 border border-cinnabar/50 text-cinnabar shadow-lg shadow-cinnabar/10"
                : "bg-ink/40 border border-mist/15 text-mist/60 hover:border-cinnabar/30 hover:text-cinnabar/80"
            }`}
          >
            <CompassIcon size={16} />
            <span className="font-brush text-base md:text-lg">单人卷轴</span>
          </button>
          <button
            onClick={() => {
              setViewMode("compare");
              setCompareFirst(null);
              setCompareSecond(null);
            }}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-sm transition-all duration-300 ${
              viewMode === "compare"
                ? "bg-gold/15 border border-gold/50 text-gold shadow-lg shadow-gold/10"
                : "bg-ink/40 border border-mist/15 text-mist/60 hover:border-gold/30 hover:text-gold/80"
            }`}
          >
            <GitCompare size={16} />
            <span className="font-brush text-base md:text-lg">宿命对照</span>
          </button>
        </div>

        {viewMode === "compare" && (
          <div className="relative mt-5 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-3 md:gap-6">
              <div
                className={`relative flex items-center gap-2 px-4 py-2 rounded-sm transition-all duration-500 ${
                  compareFirst
                    ? "bg-cinnabar/10 border border-cinnabar/40"
                    : "bg-ink/30 border border-mist/10 border-dashed"
                }`}
              >
                {compareFirst ? (
                  <>
                    <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-cinnabar/40">
                      <img
                        src={compareFirst.image}
                        alt={compareFirst.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="font-brush text-cinnabar text-base">
                      {compareFirst.name}
                    </span>
                    <button
                      onClick={() => setCompareFirst(null)}
                      className="ml-1 text-cinnabar/50 hover:text-cinnabar transition-colors"
                    >
                      <X size={14} />
                    </button>
                  </>
                ) : (
                  <>
                    <Users size={14} className="text-mist/40" />
                    <span className="font-song text-xs md:text-sm text-mist/40">
                      选择人物甲
                    </span>
                  </>
                )}
              </div>

              <div className="font-brush text-gold/70 text-lg tracking-widest">
                ╳ VS ╳
              </div>

              <div
                className={`relative flex items-center gap-2 px-4 py-2 rounded-sm transition-all duration-500 ${
                  compareSecond
                    ? "bg-indigo/10 border border-indigo/40"
                    : compareFirst
                      ? "bg-ink/30 border border-gold/30 border-dashed animate-pulse"
                      : "bg-ink/30 border border-mist/10 border-dashed"
                }`}
              >
                {compareSecond ? (
                  <>
                    <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-indigo/40">
                      <img
                        src={compareSecond.image}
                        alt={compareSecond.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="font-brush text-indigo-400 text-base">
                      {compareSecond.name}
                    </span>
                    <button
                      onClick={() => setCompareSecond(null)}
                      className="ml-1 text-indigo-400/50 hover:text-indigo-400 transition-colors"
                    >
                      <X size={14} />
                    </button>
                  </>
                ) : (
                  <>
                    <Users size={14} className={compareFirst ? "text-gold/60" : "text-mist/40"} />
                    <span
                      className={`font-song text-xs md:text-sm ${
                        compareFirst ? "text-gold/60" : "text-mist/40"
                      }`}
                    >
                      {compareFirst ? "再选一人" : "选择人物乙"}
                    </span>
                  </>
                )}
              </div>
            </div>

            {compareFirst && !compareSecond && (
              <p className="mt-3 font-song text-xs md:text-sm text-gold/50 flex items-center justify-center gap-1">
                <Check size={12} />
                请在下方罗盘中点击第二位人物
              </p>
            )}
          </div>
        )}
      </section>

      <section className="relative pb-12">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(26,26,46,0.8)_100%)]" />
        </div>
        <CompassWithState
          characters={characters}
          onSelect={handleCompassSelect}
          viewMode={viewMode}
          compareFirst={compareFirst}
          compareSecond={compareSecond}
        />
      </section>

      <section className="max-w-4xl mx-auto px-4 pb-20">
        <div className="text-center mb-8">
          <h2 className="font-brush text-2xl text-rice/80 mb-3">
            {viewMode === "single" ? "卷轴指引" : "对照指引"}
          </h2>
          <div className="w-16 h-px bg-cinnabar/30 mx-auto" />
        </div>
        {viewMode === "single" ? (
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4">
            {[
              { label: "出身", desc: "家世渊源" },
              { label: "机缘", desc: "命运轮转" },
              { label: "情感", desc: "爱恨纠缠" },
              { label: "武学", desc: "绝技留名" },
              { label: "结局", desc: "功过留名" },
            ].map((item, i) => (
              <div
                key={item.label}
                className="ink-card p-4 text-center"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="font-brush text-xl text-cinnabar mb-1">{item.label}</div>
                <div className="font-song text-xs text-mist/60">{item.desc}</div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4">
            {[
              { label: "成长环境", desc: "出身对比" },
              { label: "感情经历", desc: "爱恨对照" },
              { label: "武学道路", desc: "高低相较" },
              { label: "人生结局", desc: "归宿异同" },
              { label: "双螺旋", desc: "命运交织" },
            ].map((item, i) => (
              <div
                key={item.label}
                className="ink-card p-4 text-center"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="font-brush text-xl text-gold/80 mb-1">{item.label}</div>
                <div className="font-song text-xs text-mist/60">{item.desc}</div>
              </div>
            ))}
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
}

interface CompassWithStateProps {
  characters: Character[];
  onSelect: (char: Character) => void;
  viewMode: ViewMode;
  compareFirst: Character | null;
  compareSecond: Character | null;
}

function CompassWithState({
  characters,
  onSelect,
  viewMode,
  compareFirst,
  compareSecond,
}: CompassWithStateProps) {
  const characterCount = characters.length;
  const radius = 280;

  const directions = [
    { label: "北", angle: -90 },
    { label: "东北", angle: -45 },
    { label: "东", angle: 0 },
    { label: "东南", angle: 45 },
    { label: "南", angle: 90 },
    { label: "西南", angle: 135 },
    { label: "西", angle: 180 },
    { label: "西北", angle: -135 },
  ];

  const getSelectedStatus = (char: Character) => {
    if (viewMode !== "compare") return null;
    if (compareFirst?.id === char.id) return "first";
    if (compareSecond?.id === char.id) return "second";
    return null;
  };

  return (
    <div className="relative w-full h-[640px] md:h-[720px] flex items-center justify-center">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="absolute w-[560px] h-[560px] md:w-[640px] md:h-[640px] rounded-full compass-ring opacity-60" />
      </div>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="compass-slow-spin w-[560px] h-[560px] md:w-[640px] md:h-[640px] absolute">
          <div className="absolute inset-0 rounded-full border-2 border-dashed border-cinnabar/15" />
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 640 640">
            {Array.from({ length: 64 }).map((_, i) => {
              const angle = (i / 64) * 360;
              const rad = (angle * Math.PI) / 180;
              const r1 = 310;
              const r2 = i % 8 === 0 ? 285 : 295;
              const x1 = 320 + Math.cos(rad) * r1;
              const y1 = 320 + Math.sin(rad) * r1;
              const x2 = 320 + Math.cos(rad) * r2;
              const y2 = 320 + Math.sin(rad) * r2;
              return (
                <line
                  key={i}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke={i % 8 === 0 ? "rgba(194,54,22,0.5)" : "rgba(139,139,139,0.25)"}
                  strokeWidth={i % 8 === 0 ? 2 : 1}
                />
              );
            })}
          </svg>
        </div>
      </div>

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="absolute w-[440px] h-[440px] md:w-[500px] md:h-[500px] rounded-full border border-mist/10" />
        <div className="absolute w-[320px] h-[320px] md:w-[380px] md:h-[380px] rounded-full border border-cinnabar/15" />
        <div className="absolute w-[200px] h-[200px] md:w-[240px] md:h-[240px] rounded-full border border-gold/20" />
      </div>

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {directions.map((dir, i) => {
          const rad = (dir.angle * Math.PI) / 180;
          const r = 340;
          const x = Math.cos(rad) * r;
          const y = Math.sin(rad) * r;
          return (
            <span
              key={dir.label}
              className="absolute font-brush text-gold/70 text-base md:text-lg"
              style={{ transform: `translate(${x}px, ${y}px)` }}
            >
              {dir.label}
            </span>
          );
        })}
      </div>

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <svg className="absolute w-[560px] h-[560px] md:w-[640px] md:h-[640px]" viewBox="0 0 640 640">
          <defs>
            <linearGradient id="axisGradV" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="rgba(194,54,22,0.2)" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
            <linearGradient id="axisGradH" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="rgba(194,54,22,0.2)" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
            <linearGradient id="axisGradD1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="rgba(44,62,107,0.15)" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
          <line x1="320" y1="20" x2="320" y2="620" stroke="url(#axisGradV)" strokeWidth="1" />
          <line x1="20" y1="320" x2="620" y2="320" stroke="url(#axisGradH)" strokeWidth="1" />
          <line x1="60" y1="60" x2="580" y2="580" stroke="url(#axisGradD1)" strokeWidth="1" />
          <line x1="580" y1="60" x2="60" y2="580" stroke="url(#axisGradD1)" strokeWidth="1" />
        </svg>
      </div>

      <div className="relative w-[560px] h-[560px] md:w-[640px] md:h-[640px]">
        {characters.map((char, index) => {
          const angle = (index / characterCount) * 2 * Math.PI - Math.PI / 2;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;
          const status = getSelectedStatus(char);
          const isSelected = status !== null;
          const isFirst = status === "first";
          const isSecond = status === "second";

          return (
            <div
              key={char.id}
              className="absolute left-1/2 top-1/2 cursor-pointer group z-10"
              style={{
                transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
              }}
              onClick={() => onSelect(char)}
            >
              <div className="relative">
                <div
                  className={`w-16 h-16 md:w-20 md:h-20 rounded-full border-2 transition-all duration-500 overflow-hidden bg-ink/80 backdrop-blur-sm group-hover:scale-110 transform group-hover:shadow-2xl ${
                    isFirst
                      ? "border-cinnabar shadow-lg shadow-cinnabar/40 scale-110 ring-2 ring-cinnabar/40 ring-offset-2 ring-offset-ink"
                      : isSecond
                      ? "border-indigo-400 shadow-lg shadow-indigo-400/40 scale-110 ring-2 ring-indigo-400/40 ring-offset-2 ring-offset-ink"
                      : "border-mist/30 group-hover:border-cinnabar/70 group-hover:shadow-cinnabar/30"
                  }`}
                >
                  <img
                    src={char.image}
                    alt={char.name}
                    className={`w-full h-full object-cover transition-opacity duration-500 ${
                      isSelected ? "opacity-100" : "opacity-85 group-hover:opacity-100"
                    }`}
                    draggable={false}
                  />
                  {isSelected && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-[1px]">
                      <span className="font-brush text-rice text-xl md:text-2xl ink-text-glow">
                        {isFirst ? "甲" : "乙"}
                      </span>
                    </div>
                  )}
                </div>
                <div
                  className={`absolute inset-0 rounded-full flex items-center justify-center transition-opacity duration-500 bg-cinnabar/25 backdrop-blur-[2px] pointer-events-none ${
                    isSelected ? "opacity-0" : "opacity-0 group-hover:opacity-100"
                  }`}
                >
                  <span className="font-brush text-rice text-base md:text-xl ink-text-glow">
                    {char.name}
                  </span>
                </div>
                <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap pointer-events-none">
                  <span
                    className={`font-song text-xs md:text-sm transition-colors ${
                      isFirst
                        ? "text-cinnabar font-bold"
                        : isSecond
                        ? "text-indigo-400 font-bold"
                        : "text-mist/80 group-hover:text-cinnabar"
                    }`}
                  >
                    {char.name}
                  </span>
                </div>
                <div
                  className={`absolute -top-1 -right-1 w-3 h-3 rounded-full transition-opacity animate-pulse pointer-events-none ${
                    isFirst
                      ? "bg-cinnabar opacity-100"
                      : isSecond
                      ? "bg-indigo-400 opacity-100"
                      : "bg-cinnabar/60 opacity-0 group-hover:opacity-100"
                  }`}
                />
                {isSelected && (
                  <div className="absolute inset-0 rounded-full pointer-events-none overflow-visible">
                    <div
                      className={`absolute inset-0 rounded-full border-2 animate-ping ${
                        isFirst ? "border-cinnabar/60" : "border-indigo-400/60"
                      }`}
                      style={{ animationDuration: "2s" }}
                    />
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className={`compass-center-gate w-[140px] h-[140px] md:w-[180px] md:h-[180px] rounded-full flex items-center justify-center ${
            viewMode === "compare" ? "" : "animate-pulse-glow"
          }`}
        >
          <div className="relative text-center">
            {viewMode === "compare" ? (
              <>
                <div className="font-brush text-3xl md:text-4xl text-gold ink-text-glow leading-tight">
                  宿命
                </div>
                <div className="mt-1 flex items-center justify-center gap-1">
                  <div className="w-6 h-px bg-gold/50" />
                  <span className="font-brush text-xs text-gold/60">对照</span>
                  <div className="w-6 h-px bg-gold/50" />
                </div>
              </>
            ) : (
              <>
                <div className="font-brush text-4xl md:text-5xl text-cinnabar ink-text-glow leading-tight">
                  江湖
                </div>
                <div className="mt-1 flex items-center justify-center gap-1">
                  <div className="w-6 h-px bg-cinnabar/50" />
                  <span className="font-brush text-xs text-gold/60">罗盘</span>
                  <div className="w-6 h-px bg-cinnabar/50" />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
