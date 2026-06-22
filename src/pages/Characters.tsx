import { useState, useMemo } from 'react';
import { characters, Character, destinyFates, DestinyFateType } from '@/data/characters';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DestinyScroll from '@/components/DestinyScroll';
import CharacterCompare from '@/components/CharacterCompare';
import { GitCompare, Compass as CompassIcon, X, Check, Users, BarChart3, Filter, Sparkles } from 'lucide-react';

type ViewMode = "single" | "compare" | "fate";

export default function Characters() {
  const [viewMode, setViewMode] = useState<ViewMode>("single");
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);
  const [compareFirst, setCompareFirst] = useState<Character | null>(null);
  const [compareSecond, setCompareSecond] = useState<Character | null>(null);
  const [selectedFateTypes, setSelectedFateTypes] = useState<DestinyFateType[]>([]);

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
    if (viewMode === "fate") {
      setSelectedCharacter(char);
      return;
    }
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

  const filteredCharacters = useMemo(() => {
    if (selectedFateTypes.length === 0) return characters;
    return characters.filter((c) => selectedFateTypes.includes(c.destinyFate));
  }, [selectedFateTypes]);

  const fateDistribution = useMemo(() => {
    const dist = {} as Record<DestinyFateType, number>;
    for (const fateType of Object.keys(destinyFates) as DestinyFateType[]) {
      dist[fateType] = characters.filter((c) => c.destinyFate === fateType).length;
    }
    return dist;
  }, []);

  const toggleFateFilter = (type: DestinyFateType) => {
    setSelectedFateTypes((prev) =>
      prev.includes(type)
        ? prev.filter((t) => t !== type)
        : [...prev, type]
    );
  };

  const clearFateFilter = () => {
    setSelectedFateTypes([]);
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
            {viewMode === "fate" ? "命运分类学" : "江湖罗盘"}
          </h1>
          <p className="font-song text-mist/60 mt-3 text-base md:text-lg">
            {viewMode === "single"
              ? "点击罗盘上的人物，翻阅其命运卷轴"
              : viewMode === "compare"
                ? compareFirst
                  ? `已选「${compareFirst.name}」，再选一人开启宿命对照`
                  : "选择两位人物，开启宿命对照卷轴"
                : "查看江湖中各色命格分布，筛选命运分类学视角下的江湖众生相"}
          </p>
          <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-cinnabar/60 to-transparent mx-auto mt-6" />
        </div>

        <div className="relative mt-6 flex flex-wrap justify-center gap-3">
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
          <button
            onClick={() => {
              setViewMode("fate");
              setCompareFirst(null);
              setCompareSecond(null);
            }}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-sm transition-all duration-300 ${
              viewMode === "fate"
                ? "bg-indigo/20 border border-indigo/50 text-indigo-400 shadow-lg shadow-indigo/10"
                : "bg-ink/40 border border-mist/15 text-mist/60 hover:border-indigo/30 hover:text-indigo-300/80"
            }`}
          >
            <BarChart3 size={16} />
            <span className="font-brush text-base md:text-lg">命运分类</span>
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

      {viewMode === "fate" ? (
        <FateTaxonomyView
          characters={filteredCharacters}
          fateDistribution={fateDistribution}
          selectedFateTypes={selectedFateTypes}
          onToggleFate={toggleFateFilter}
          onClearFate={clearFateFilter}
          onSelectCharacter={(char) => setSelectedCharacter(char)}
        />
      ) : (
        <section className="relative pb-12">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(26,26,46,0.8)_100%)]" />
          </div>
          <CompassWithState
            characters={filteredCharacters}
            onSelect={handleCompassSelect}
            viewMode={viewMode}
            compareFirst={compareFirst}
            compareSecond={compareSecond}
          />
        </section>
      )}

      {viewMode !== "fate" && (
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
      )}

      <Footer />
    </div>
  );
}

interface FateTaxonomyViewProps {
  characters: Character[];
  fateDistribution: Record<DestinyFateType, number>;
  selectedFateTypes: DestinyFateType[];
  onToggleFate: (type: DestinyFateType) => void;
  onClearFate: () => void;
  onSelectCharacter: (char: Character) => void;
}

function FateTaxonomyView({
  characters,
  fateDistribution,
  selectedFateTypes,
  onToggleFate,
  onClearFate,
  onSelectCharacter,
}: FateTaxonomyViewProps) {
  const totalCharacters = characters.length;
  const allFateTypes = Object.keys(destinyFates) as DestinyFateType[];

  return (
    <section className="max-w-7xl mx-auto px-4 pb-20">
      <div className="mb-8">
        <div className="flex items-center justify-center gap-2 mb-6">
          <Filter size={18} className="text-indigo-400" />
          <h3 className="font-brush text-xl text-indigo-300">命格筛选器</h3>
          {selectedFateTypes.length > 0 && (
            <button
              onClick={onClearFate}
              className="text-xs text-mist/50 hover:text-cinnabar transition-colors font-song"
            >
              清除筛选
            </button>
          )}
        </div>

        <div className="flex flex-wrap justify-center gap-2 md:gap-3">
          {allFateTypes.map((type) => {
            const fate = destinyFates[type];
            const isSelected = selectedFateTypes.includes(type);
            const count = fateDistribution[type];
            if (count === 0) return null;
            return (
              <button
                key={type}
                onClick={() => onToggleFate(type)}
                className={`relative flex items-center gap-2 px-4 py-3 rounded-sm transition-all duration-300 hover:-translate-y-0.5 ${
                  isSelected ? "shadow-xl" : ""
                }`}
                style={{
                  background: isSelected ? fate.bgColor : "rgba(26,26,46,0.6)",
                  border: `2px solid ${isSelected ? fate.borderColor : "rgba(139,90,43,0.2)"}`,
                }}
              >
                <div className="text-2xl md:text-3xl">{fate.icon}</div>
                <div className="text-left">
                  <div
                    className="font-brush text-lg md:text-xl leading-none"
                    style={{ color: isSelected ? fate.color : "#f5f0e8" }}
                  >
                    {fate.name}
                  </div>
                  <div
                    className="text-[10px] md:text-xs font-song mt-0.5 leading-none"
                    style={{ color: isSelected ? fate.color : "rgba(139,139,139,0.6)" }}
                  >
                    {count} 人 · {fate.keywords.slice(0, 2).join("·")}
                  </div>
                </div>
                {isSelected && (
                  <div
                    className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: fate.color }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-10">
        {allFateTypes.map((type) => {
          const fate = destinyFates[type];
          const chars = characters.filter((c) => c.destinyFate === type);
          if (chars.length === 0) return null;
          return (
            <div
              key={type}
              className="ink-card p-5 md:p-6 rounded-sm relative overflow-hidden"
              style={{
                borderLeft: `4px solid ${fate.color}`,
                background: `linear-gradient(135deg, ${fate.bgColor}, rgba(26,26,46,0.6))`,
              }}
            >
              <div className="absolute top-2 right-3 opacity-15">
                <Sparkles size={32} style={{ color: fate.color }} />
              </div>
              <div className="flex items-start gap-3 mb-4">
                <div
                  className="w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center text-2xl md:text-3xl"
                  style={{
                    background: fate.bgColor,
                    border: `2px solid ${fate.borderColor}`,
                  }}
                >
                  {fate.icon}
                </div>
                <div className="flex-1">
                  <h4
                    className="font-brush text-2xl md:text-3xl tracking-wider"
                    style={{ color: fate.color }}
                  >
                    {fate.name}
                  </h4>
                  <div className="font-song text-xs md:text-sm text-mist/60 mt-0.5">
                    {chars.length} 人 · 占比 {Math.round((chars.length / 10) * 100)}%
                  </div>
                </div>
              </div>

              <p className="font-song text-sm md:text-base text-rice/80 mb-4 leading-loose">
                {fate.description}
              </p>

              <div className="mb-3">
                <div className="flex items-center gap-1 mb-2">
                  <div
                    className="text-xs font-brush tracking-wider"
                    style={{ color: fate.color }}
                  >
                    ◇ 故事倾向
                  </div>
                  <div className="flex-1 h-px" style={{ background: `${fate.color}30` }} />
                </div>
                <p className="text-xs md:text-sm text-mist/70 leading-relaxed">
                  {fate.storyTendency}
                </p>
              </div>

              <div className="mb-4">
                <div className="flex items-center gap-1 mb-2">
                  <div
                    className="text-xs font-brush tracking-wider"
                    style={{ color: fate.color }}
                  >
                    ◇ 关系演化
                  </div>
                  <div className="flex-1 h-px" style={{ background: `${fate.color}30` }} />
                </div>
                <p className="text-xs md:text-sm text-mist/70 leading-relaxed">
                  {fate.relationEvolution}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {fate.keywords.map((kw) => (
                  <span
                    key={kw}
                    className="text-xs px-2 py-1 rounded"
                    style={{
                      background: fate.bgColor,
                      border: `1px solid ${fate.borderColor}`,
                      color: fate.color,
                    }}
                  >
                    #{kw}
                  </span>
                ))}
              </div>

              <div>
                <div className="flex items-center gap-1 mb-3">
                  <div
                    className="text-xs font-brush tracking-wider"
                    style={{ color: fate.color }}
                  >
                    ◇ 命中之人
                  </div>
                  <div className="flex-1 h-px" style={{ background: `${fate.color}30` }} />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {chars.map((char) => (
                    <div
                      key={char.id}
                      onClick={() => onSelectCharacter(char)}
                      className="flex items-center gap-2 p-2 rounded cursor-pointer hover:bg-rice/5 transition-all duration-300 group"
                    >
                      <div
                        className="w-10 h-10 rounded-full overflow-hidden border-2"
                        style={{ borderColor: `${fate.color}60` }}
                      >
                        <img
                          src={char.image}
                          alt={char.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-brush text-base text-rice group-hover:text-cinnabar transition-colors truncate">
                          {char.name}
                        </div>
                        <div className="font-song text-xs text-mist/50 truncate">
                          {char.alias} · {char.novel}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-10 ink-card p-6 md:p-8 rounded-sm">
        <div className="text-center mb-6">
          <h3 className="font-brush text-2xl md:text-3xl text-rice mb-2">江湖命格分布总览</h3>
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-indigo/40 to-transparent mx-auto mt-3" />
          <p className="font-song text-xs md:text-sm text-mist/60 mt-2">
            共 {totalCharacters} 位江湖人物 · {allFateTypes.filter((t) => fateDistribution[t] > 0).length} 种命格类型
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {allFateTypes.map((type) => {
            const fate = destinyFates[type];
            const count = fateDistribution[type];
            if (count === 0) return null;
            const percentage = Math.round((count / 10) * 100);
            return (
              <div
                key={type}
                className="p-4 rounded-sm text-center"
                style={{
                  background: fate.bgColor,
                  border: `1px solid ${fate.borderColor}30`,
                }}
              >
                <div className="text-3xl md:text-4xl mb-2">{fate.icon}</div>
                <div
                  className="font-brush text-lg mb-1"
                  style={{ color: fate.color }}
                >
                  {fate.name}
                </div>
                <div className="font-brush text-3xl md:text-4xl text-rice/90 mb-2">
                  {count}
                </div>
                <div className="w-full h-2 rounded-full bg-rice/10 overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-1000"
                    style={{
                      width: `${percentage}%`,
                      background: fate.color,
                    }}
                  />
                </div>
                <div className="font-song text-xs text-mist/50 mt-2">
                  {percentage}%
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
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

  if (characterCount === 0) {
    return (
      <div className="relative w-full h-[640px] md:h-[720px] flex items-center justify-center">
        <div className="text-center">
          <div className="font-brush text-3xl md:text-4xl text-mist/40 mb-4">暂无人物</div>
          <div className="font-song text-sm text-mist/30">请选择其他命格筛选条件</div>
        </div>
      </div>
    );
  }

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
          const fate = destinyFates[char.destinyFate];

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
                  className={`absolute inset-0 rounded-full flex items-center justify-center transition-opacity duration-500 backdrop-blur-[2px] pointer-events-none ${
                    isSelected ? "opacity-0" : "opacity-0 group-hover:opacity-100"
                  }`}
                  style={{ backgroundColor: `${fate.color}25` }}
                >
                  <span className="text-2xl md:text-3xl">{fate.icon}</span>
                </div>
                <div className="absolute -bottom-9 left-1/2 -translate-x-1/2 whitespace-nowrap pointer-events-none text-center">
                  <span
                    className={`font-song text-xs md:text-sm transition-colors block ${
                      isFirst
                        ? "text-cinnabar font-bold"
                        : isSecond
                        ? "text-indigo-400 font-bold"
                        : "text-mist/80 group-hover:text-cinnabar"
                    }`}
                  >
                    {char.name}
                  </span>
                  <span
                    className="text-[10px] md:text-xs font-song transition-colors block mt-0.5"
                    style={{ color: fate.color }}
                  >
                    {fate.icon} {fate.name}
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
                  style={{
                    backgroundColor: isSecond
                      ? undefined
                      : isFirst
                      ? undefined
                      : fate.color,
                  }}
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
            ) : viewMode === "fate" ? (
              <>
                <div className="font-brush text-4xl md:text-5xl text-indigo-400 ink-text-glow leading-tight">
                  命格
                </div>
                <div className="mt-1 flex items-center justify-center gap-1">
                  <div className="w-6 h-px bg-indigo-400/50" />
                  <span className="font-brush text-xs text-gold/60">分类</span>
                  <div className="w-6 h-px bg-indigo-400/50" />
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