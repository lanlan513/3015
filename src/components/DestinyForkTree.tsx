import { useState } from "react";
import { DestinyFork, ForkChoice, ForkOutcome } from "@/data/characters";
import {
  GitBranch,
  Star,
  Cloud,
  Sunset,
  ChevronRight,
  RotateCcw,
  Sparkles,
  Crown,
  Skull,
  Coffee,
  BookOpen,
  ArrowRight,
  TreeDeciduous,
} from "lucide-react";

interface DestinyForkTreeProps {
  forks: DestinyFork[];
  characterName: string;
}

const moodConfig = {
  tragic: {
    icon: Skull,
    label: "悲情",
    color: "text-[#7a1808]",
    bg: "bg-[#8b2010]/12",
    border: "border-[#8b2010]/40",
    glow: "shadow-[#8b2010]/20",
  },
  bittersweet: {
    icon: Sunset,
    label: "苦乐参半",
    color: "text-[#6b5010]",
    bg: "bg-[#b8860b]/15",
    border: "border-[#b8860b]/45",
    glow: "shadow-[#b8860b]/20",
  },
  peaceful: {
    icon: Cloud,
    label: "归隐",
    color: "text-[#1a3f6b]",
    bg: "bg-[#2c3e6b]/12",
    border: "border-[#2c3e6b]/40",
    glow: "shadow-[#2c3e6b]/20",
  },
  glorious: {
    icon: Crown,
    label: "辉煌",
    color: "text-[#6b4508]",
    bg: "bg-[#b8860b]/20",
    border: "border-[#b8860b]/55",
    glow: "shadow-[#b8860b]/30",
  },
  mundane: {
    icon: Coffee,
    label: "平淡",
    color: "text-[#3d3d3d]",
    bg: "bg-[#5a5a5a]/12",
    border: "border-[#5a5a5a]/40",
    glow: "shadow-[#5a5a5a]/20",
  },
};

type MoodKey = keyof typeof moodConfig;

function ForkNode({
  fork,
  isActive,
  isCanon,
  onClick,
  position,
}: {
  fork: ForkChoice;
  isActive: boolean;
  isCanon: boolean;
  onClick: () => void;
  position: "left" | "center" | "right";
}) {
  const positionClasses = {
    left: "md:translate-x-0 md:mr-auto",
    center: "md:mx-auto",
    right: "md:translate-x-0 md:ml-auto",
  };

  return (
    <button
      onClick={onClick}
      className={`relative w-full md:w-[calc(33.333%-1rem)] p-4 rounded-lg border-2 transition-all duration-500 text-left ${
        isActive
          ? "border-[#c23616] bg-[#fff0eb] shadow-lg shadow-[#c23616]/25 -translate-y-1"
          : "border-[#8b5a2b]/50 bg-[#faf5eb] hover:border-[#c23616]/60 hover:bg-[#fdf8f2]"
      } ${positionClasses[position]} group`}
    >
      {isCanon && (
        <div className="absolute -top-2 -right-2">
          <div className="cinnabar-seal w-8 h-8 rounded-full flex items-center justify-center text-[10px] text-rice font-brush">
            原著
          </div>
        </div>
      )}
      <div className="flex items-start gap-3">
        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
            isActive ? "bg-[#c23616]/20" : "bg-[#8b5a2b]/15"
          }`}
        >
          <GitBranch
            size={20}
            className={isActive ? "text-[#a02a10]" : "text-[#6b4a20]"}
          />
        </div>
        <div className="flex-1 min-w-0">
          <h4
            className={`font-brush text-lg mb-1 ${
              isActive ? "text-[#a02a10]" : "text-[#1a0f08]"
            }`}
          >
            {fork.label}
          </h4>
          <p className="font-song text-xs text-[#3d2817] line-clamp-2">
            {fork.summary}
          </p>
        </div>
        <ChevronRight
          size={16}
          className={`flex-shrink-0 mt-1 transition-transform ${
            isActive
              ? "text-[#c23616] translate-x-1"
              : "text-[#8b5a2b]/50 group-hover:translate-x-1"
          }`}
        />
      </div>
    </button>
  );
}

function OutcomeCard({ outcome }: { outcome: ForkOutcome }) {
  const mood = moodConfig[outcome.mood as MoodKey];
  const MoodIcon = mood.icon;

  return (
    <div
      className={`p-4 rounded-lg border-2 ${mood.bg} ${mood.border} animate-fade-in-up`}
      style={{ animationDelay: "0.1s" }}
    >
      <div className="flex items-center gap-2 mb-3">
        <div
          className={`w-8 h-8 rounded-full ${mood.bg} flex items-center justify-center`}
        >
          <MoodIcon size={16} className={mood.color} />
        </div>
        <div>
          <h5 className="font-brush text-base text-[#1a0f08]">
            {outcome.title}
          </h5>
          <span className={`text-[10px] font-song font-semibold ${mood.color}`}>
            {mood.label}
          </span>
        </div>
        {outcome.age && (
          <span className="ml-auto text-[10px] px-2 py-0.5 rounded bg-[#2c3e6b]/15 text-[#1a2540] font-song font-medium">
            {outcome.age}
          </span>
        )}
      </div>
      <p className="font-song text-sm text-[#2c1810] leading-relaxed mb-3">
        {outcome.description}
      </p>
      <div className="pt-3 border-t border-[#8b5a2b]/30">
        <div className="flex items-start gap-2">
          <span className="text-xs text-[#a02a10] font-brush font-bold">代价：</span>
          <p className="font-song text-xs text-[#3d2817] italic">
            {outcome.consequence}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function DestinyForkTree({
  forks,
  characterName,
}: DestinyForkTreeProps) {
  const [currentForkIndex, setCurrentForkIndex] = useState(0);
  const [selectedChoiceId, setSelectedChoiceId] = useState<string | null>(null);
  const [pathHistory, setPathHistory] = useState<
    { forkId: string; choiceId: string; choiceLabel: string }[]
  >([]);

  const currentFork = forks[currentForkIndex];
  const selectedChoice = currentFork.choices.find(
    (c) => c.id === selectedChoiceId
  );

  const handleChoiceSelect = (choice: ForkChoice) => {
    setSelectedChoiceId(choice.id);
  };

  const handleNextFork = () => {
    if (selectedChoice && currentForkIndex < forks.length - 1) {
      setPathHistory((prev) => [
        ...prev,
        {
          forkId: currentFork.id,
          choiceId: selectedChoice.id,
          choiceLabel: selectedChoice.label,
        },
      ]);
      setCurrentForkIndex((i) => i + 1);
      setSelectedChoiceId(null);
    }
  };

  const handlePrevFork = () => {
    if (currentForkIndex > 0) {
      const prev = pathHistory[pathHistory.length - 1];
      setPathHistory((p) => p.slice(0, -1));
      setCurrentForkIndex((i) => i - 1);
      setSelectedChoiceId(prev.choiceId);
    }
  };

  const handleReset = () => {
    setCurrentForkIndex(0);
    setSelectedChoiceId(null);
    setPathHistory([]);
  };

  const handleShowCanon = () => {
    const canonHistory = [];
    for (let i = 0; i < currentForkIndex; i++) {
      const fork = forks[i];
      const canonChoice = fork.choices.find((c) => c.id === fork.canonChoiceId);
      if (canonChoice) {
        canonHistory.push({
          forkId: fork.id,
          choiceId: canonChoice.id,
          choiceLabel: canonChoice.label,
        });
      }
    }
    setPathHistory(canonHistory);
    setSelectedChoiceId(currentFork.canonChoiceId);
  };

  const isFirstFork = currentForkIndex === 0;
  const isLastFork = currentForkIndex === forks.length - 1;

  return (
    <div className="relative">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <TreeDeciduous size={20} className="text-[#a02a10]" />
          <h3 className="font-brush text-2xl md:text-3xl text-[#1a0f08]">命运分叉</h3>
          <span className="text-sm text-[#5a3d10] font-song font-medium">
            第 {currentForkIndex + 1} / {forks.length} 个抉择
          </span>
        </div>
        <div className="flex gap-2">
          <button
            onClick={handleShowCanon}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs border border-[#c23616]/40 text-[#c23616] rounded hover:bg-[#c23616]/10 transition-colors font-song"
          >
            <BookOpen size={14} />
            原著路线
          </button>
          <button
            onClick={handleReset}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs border border-[#8b5a2b]/40 text-[#8b5a2b] rounded hover:bg-[#8b5a2b]/10 transition-colors font-song"
          >
            <RotateCcw size={14} />
            重新选择
          </button>
        </div>
      </div>

      {pathHistory.length > 0 && (
        <div className="mb-4 p-3 bg-[#fff8e7] border border-[#b8860b]/35 rounded-lg">
          <div className="flex items-center gap-2 text-xs font-song text-[#3d2817] flex-wrap">
            <span className="text-[#6b4508] font-semibold">已选路径：</span>
            {pathHistory.map((item, idx) => (
              <span key={idx} className="flex items-center gap-1">
                <span className="text-[#5a3d10] font-medium">{item.choiceLabel}</span>
                {idx < pathHistory.length - 1 && (
                  <ArrowRight size={12} className="text-[#8b5a2b]/60" />
                )}
              </span>
            ))}
          </div>
        </div>
      )}

      <div className="relative mb-6 p-5 md:p-6 bg-[#faf5eb] rounded-lg border-2 border-[#8b5a2b]/40">
        <div className="absolute -top-3 left-4 px-2 bg-[#faf5eb]">
          <span className="font-brush text-sm text-[#a02a10] font-semibold">
            第 {currentForkIndex + 1} 难
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <h4 className="font-brush text-xl md:text-2xl text-[#1a0f08]">
            {currentFork.title}
          </h4>
          {currentFork.age && (
            <span className="text-[10px] md:text-xs px-2 py-0.5 rounded border border-[#2c3e6b]/40 bg-[#2c3e6b]/10 text-[#1a2540] font-song font-medium">
              {currentFork.age}
            </span>
          )}
          {currentFork.location && (
            <span className="text-[10px] md:text-xs px-2 py-0.5 rounded border border-[#b8860b]/50 bg-[#b8860b]/10 text-[#6b4508] font-song font-medium">
              📍 {currentFork.location}
            </span>
          )}
        </div>
        <p className="font-song text-sm md:text-base text-[#2c1810] leading-relaxed">
          {currentFork.description}
        </p>
      </div>

      <div className="mb-6">
        <div className="flex items-center gap-2 mb-3">
          <GitBranch size={16} className="text-[#6b4a20]" />
          <span className="font-brush text-lg text-[#1a0f08]">
            命运分支
          </span>
          <span className="text-xs text-[#5a3d10] font-song">
            点击选择一条人生道路
          </span>
        </div>
        <div className="flex flex-col md:flex-row gap-3 md:gap-4">
          {currentFork.choices.map((choice, idx) => {
            const positions: ("left" | "center" | "right")[] = [
              "left",
              "center",
              "right",
            ];
            return (
              <ForkNode
                key={choice.id}
                fork={choice}
                isActive={selectedChoiceId === choice.id}
                isCanon={choice.isCanon}
                onClick={() => handleChoiceSelect(choice)}
                position={positions[idx % 3]}
              />
            );
          })}
        </div>
      </div>

      {selectedChoice && (
        <div className="mb-6 animate-fade-in-up">
          <div className="flex items-center gap-2 mb-3">
            <Sparkles size={16} className="text-[#c23616]" />
            <span className="font-brush text-lg text-[#1a0f08]">
              此路结局
            </span>
            <span className="text-xs text-[#5a3d10] font-song">
              — {selectedChoice.label} 的人生走向 —
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {selectedChoice.outcomes.map((outcome, idx) => (
              <OutcomeCard key={idx} outcome={outcome} />
            ))}
          </div>
        </div>
      )}

      <div className="flex items-center justify-between pt-4 border-t border-[#8b5a2b]/20">
        <button
          onClick={handlePrevFork}
          disabled={isFirstFork}
          className={`flex items-center gap-1.5 px-4 py-2 rounded text-sm font-song transition-all ${
            isFirstFork
              ? "text-[#8b5a2b]/30 cursor-not-allowed"
              : "text-[#8b5a2b] hover:bg-[#8b5a2b]/10 hover:text-[#c23616]"
          }`}
        >
          <ChevronRight size={16} className="rotate-180" />
          上一抉择
        </button>

        <div className="flex items-center gap-1.5">
          {forks.map((_, idx) => (
            <div
              key={idx}
              className={`w-2 h-2 rounded-full transition-all ${
                idx === currentForkIndex
                  ? "bg-[#c23616] w-6"
                  : idx < currentForkIndex
                  ? "bg-[#c23616]/50"
                  : "bg-[#8b5a2b]/30"
              }`}
            />
          ))}
        </div>

        <button
          onClick={handleNextFork}
          disabled={isLastFork || !selectedChoiceId}
          className={`flex items-center gap-1.5 px-4 py-2 rounded text-sm font-song transition-all ${
            isLastFork || !selectedChoiceId
              ? "text-[#8b5a2b]/30 cursor-not-allowed"
              : "bg-[#c23616] text-rice hover:bg-[#a02a10] shadow-md shadow-[#c23616]/20"
          }`}
        >
          下一抉择
          <ChevronRight size={16} />
        </button>
      </div>

      {isLastFork && selectedChoiceId && (
        <div className="mt-6 p-5 bg-[#fff8e7] border-2 border-[#b8860b]/50 rounded-lg text-center animate-fade-in-up shadow-md shadow-[#b8860b]/10">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Star size={22} className="text-[#8b5a0b] fill-[#b8860b]/20" />
            <span className="font-brush text-2xl text-[#6b4a08]">
              人生终局
            </span>
            <Star size={22} className="text-[#8b5a0b] fill-[#b8860b]/20" />
          </div>
          <p className="font-song text-sm md:text-base text-[#2c1810] leading-relaxed">
            此乃<span className="text-[#8b5a0b] font-bold">{characterName}</span>
            选择「<span className="text-[#a02a10] font-brush">{selectedChoice?.label}</span>」后的人生归宿。江湖路远，每一个选择，都铸就了不同的命运。
          </p>
        </div>
      )}
    </div>
  );
}
