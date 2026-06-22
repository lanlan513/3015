import { Character, CharacterJourney, TimelineEvent } from "@/data/characters";

interface HelixEvent {
  event: TimelineEvent;
  side: "left" | "right";
  phase: number;
  category: keyof CharacterJourney;
  index: number;
}

interface DoubleHelixTimelineProps {
  charA: Character;
  charB: Character;
}

const categoryOrder: (keyof CharacterJourney)[] = [
  "origin",
  "destiny",
  "emotion",
  "martial",
  "ending",
];

const categoryNames: Record<keyof CharacterJourney, string> = {
  origin: "出身",
  destiny: "机缘",
  emotion: "情感",
  martial: "武学",
  ending: "结局",
};

function parseAgeToNumber(age?: string): number {
  if (!age) return 999;
  if (age.includes("襁褓") || age.includes("婴儿") || age.includes("出生")) return 0;
  if (age.includes("幼年")) return 4;
  if (age.includes("七岁")) return 7;
  if (age.includes("六岁")) return 6;
  if (age.includes("九岁")) return 9;
  if (age.includes("十四岁")) return 14;
  if (age.includes("十八岁")) return 18;
  if (age.includes("约二十")) return 20;
  if (age.includes("二十岁")) return 20;
  if (age.includes("青年时期")) return 22;
  if (age.includes("而立之年")) return 30;
  if (age.includes("约三十")) return 30;
  if (age.includes("三十岁")) return 30;
  if (age.includes("约三十一")) return 31;
  if (age.includes("三十二岁")) return 32;
  if (age.includes("约三十三")) return 33;
  if (age.includes("约三十六")) return 36;
  if (age.includes("中年")) return 40;
  if (age.includes("少年时期")) return 15;
  if (age.includes("少年")) return 16;
  if (age.includes("约二十五")) return 25;
  if (age.includes("约二十六")) return 26;
  if (age.includes("约二十七")) return 27;
  if (age.includes("约二十八")) return 28;
  if (age.includes("二十六岁")) return 26;
  if (age.includes("二十七岁")) return 27;
  if (age.includes("未出生")) return -1;
  if (age.includes("身后") || age.includes("同日")) return 100;
  if (age.includes("城破前夕")) return 70;
  if (age.includes("约六七十岁")) return 65;
  if (age.includes("三十六岁")) return 36;
  if (age.includes("四十岁")) return 40;
  if (age.includes("七岁起")) return 7;
  const match = age.match(/\d+/);
  return match ? parseInt(match[0], 10) : 50;
}

function buildMergedEvents(charA: Character, charB: Character): HelixEvent[] {
  const events: HelixEvent[] = [];

  categoryOrder.forEach((cat, phase) => {
    charA.journey[cat].forEach((event, idx) => {
      events.push({
        event,
        side: "left",
        phase,
        category: cat,
        index: idx,
      });
    });
    charB.journey[cat].forEach((event, idx) => {
      events.push({
        event,
        side: "right",
        phase,
        category: cat,
        index: idx,
      });
    });
  });

  events.sort((a, b) => {
    const ageA = parseAgeToNumber(a.event.age);
    const ageB = parseAgeToNumber(b.event.age);
    if (ageA !== ageB) return ageA - ageB;
    if (a.phase !== b.phase) return a.phase - b.phase;
    return a.side === "left" ? -1 : 1;
  });

  return events;
}

function getIntersectionType(
  a: HelixEvent | undefined,
  b: HelixEvent | undefined
): "parallel" | "intersect" | "diverge" | "none" {
  if (!a || !b) return "none";
  const ageA = parseAgeToNumber(a.event.age);
  const ageB = parseAgeToNumber(b.event.age);
  const ageDiff = Math.abs(ageA - ageB);
  if (a.category === b.category && ageDiff <= 3) return "intersect";
  if (a.category === b.category) return "parallel";
  if (ageDiff <= 5) return "diverge";
  return "none";
}

export default function DoubleHelixTimeline({
  charA,
  charB,
}: DoubleHelixTimelineProps) {
  const mergedEvents = buildMergedEvents(charA, charB);

  const helixEvents = mergedEvents.reduce<{
    leftEvents: HelixEvent[];
    rightEvents: HelixEvent[];
  }>(
    (acc, evt) => {
      if (evt.side === "left") {
        acc.leftEvents.push(evt);
      } else {
        acc.rightEvents.push(evt);
      }
      return acc;
    },
    { leftEvents: [], rightEvents: [] }
  );

  const maxLen = Math.max(
    helixEvents.leftEvents.length,
    helixEvents.rightEvents.length
  );

  const rows = Array.from({ length: maxLen }).map((_, i) => {
    const left = helixEvents.leftEvents[i];
    const right = helixEvents.rightEvents[i];
    return {
      left, right,
      relation: getIntersectionType(left, right),
    };
  });

  return (
    <div className="relative py-6">
      <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2" />

      {rows.map((row, rowIndex) => {
        const { left, right, relation } = row;
        const isIntersect = relation === "intersect" || relation === "parallel";

        return (
          <div
            key={rowIndex}
            className="relative flex items-stretch gap-3 md:gap-6 py-4 md:py-6 animate-fade-in-up"
            style={{ animationDelay: `${rowIndex * 0.1}s`, opacity: 0 }}
          >
            <div
              className={`flex-1 ${left ? "" : "invisible"}`}
            >
              {left && (
                <div className="relative group">
                  <div className="flex items-start justify-end gap-3">
                    <div className="flex-1 text-right">
                      {left.phase !== undefined && (
                        <div className="mb-1.5">
                          <span
                            className="inline-block text-[10px] md:text-xs px-2 py-0.5 rounded-sm font-song"
                            style={{
                              background: "rgba(194,54,22,0.1)",
                              color: "#c23616",
                              border: "1px solid rgba(194,54,22,0.3)",
                            }}
                          >
                            {categoryNames[left.category]}
                          </span>
                        </div>
                      )}
                      <h4 className="font-brush text-lg md:text-xl" style={{ color: "#c23616" }}>
                        {left.event.title}
                      </h4>
                      <div className="flex flex-wrap justify-end gap-1.5 mt-1 mb-1.5">
                        {left.event.age && (
                          <span
                            className="text-[10px] md:text-xs px-2 py-0.5 rounded font-song whitespace-nowrap"
                            style={{
                              background: "rgba(44,62,107,0.08)",
                              border: "1px solid rgba(44,62,107,0.2)",
                              color: "#2c3e6b",
                            }}
                          >
                            {left.event.age}
                          </span>
                        )}
                        {left.event.location && (
                          <span
                            className="text-[10px] md:text-xs px-2 py-0.5 rounded font-song whitespace-nowrap"
                            style={{
                              background: "rgba(184,134,11,0.08)",
                              border: "1px solid rgba(184,134,11,0.3)",
                              color: "#8b6914",
                            }}
                          >
                              📍 {left.event.location}
                            </span>
                        )}
                      </div>
                      <p
                        className="font-song text-xs md:text-sm leading-relaxed"
                        style={{ color: "rgba(50,40,30,0.7)" }}
                      >
                        {left.event.description}
                      </p>
                    </div>
                    <div className="flex flex-col items-center pt-1 relative">
                      <div className="relative w-4 h-4 md:w-5 md:h-5 flex-shrink-0">
                        <div
                          className="absolute inset-0 rounded-full border-2 z-10"
                          style={{
                            borderColor: "rgba(194,54,22,0.5)",
                            background: "#f5f0e8",
                          }}
                        />
                        <div
                          className="absolute inset-0.5 md:inset-1 rounded-full z-20"
                          style={{ background: "#c23616" }}
                        />
                        {isIntersect && (
                          <div
                            className="absolute -inset-1 md:-inset-1.5 rounded-full animate-ping z-0"
                            style={{
                              background: "rgba(194,54,22,0.2)",
                              animationDuration: "3s",
                            }}
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="relative w-12 md:w-20 flex-shrink-0 flex items-center justify-center">
              <div className="relative w-full h-full">
                <svg
                  className="absolute inset-0 w-full h-full overflow-visible"
                  viewBox="0 0 80 100"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient id={`helixGrad-${rowIndex}`} x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#c23616" stopOpacity="0.6" />
                      <stop offset="50%" stopColor="#8b6914" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#2c3e6b" stopOpacity="0.6" />
                    </linearGradient>
                  </defs>
                  {isIntersect ? (
                    <g>
                      <path
                        d={`M 10 50 Q 40 10, 70 50 Q 40 90, 10 50 Z`}
                        fill={`url(#helixGrad-${rowIndex})`}
                        opacity="0.15"
                      />
                      <path
                        d="M 10 50 Q 40 10, 70 50"
                        fill="none"
                        stroke="url(#helixGrad-0)"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M 70 50 Q 40 90, 10 50"
                        fill="none"
                        stroke="url(#helixGrad-0)"
                        strokeWidth="1.5"
                      />
                    </g>
                  ) : relation === "diverge" ? (
                    <g>
                      <path
                        d="M 15 20 Q 40 50, 65 20"
                        fill="none"
                        stroke="rgba(139,90,43,0.4)"
                        strokeWidth="1"
                        strokeDasharray="4 2"
                      />
                      <path
                        d="M 15 80 Q 40 50, 65 80"
                        fill="none"
                        stroke="rgba(139,90,43,0.4)"
                        strokeWidth="1"
                        strokeDasharray="4 2"
                      />
                    </g>
                  ) : (
                    <g>
                      <path
                        d="M 20 30 Q 40 50, 20 70"
                        fill="none"
                        stroke="rgba(194,54,22,0.25)"
                        strokeWidth="1"
                      />
                      <path
                        d="M 60 30 Q 40 50, 60 70"
                        fill="none"
                        stroke="rgba(44,62,107,0.25)"
                        strokeWidth="1"
                      />
                    </g>
                  )}
                  <circle
                    cx="40"
                    cy="50"
                    r="3"
                    fill={isIntersect ? "#8b6914" : "rgba(139,105,20,0.5)"}
                    opacity={isIntersect ? 1 : 0.5}
                  />
                </svg>
                {isIntersect && (
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                    <div
                      className="w-3 h-3 md:w-4 md:h-4 rounded-full animate-ping"
                      style={{ background: "rgba(139,105,20,0.3)" }}
                    />
                  </div>
                )}
              </div>
            </div>

            <div
              className={`flex-1 ${right ? "" : "invisible"}`}
            >
              {right && (
                <div className="relative group">
                  <div className="flex items-start gap-3">
                    <div className="flex flex-col items-center pt-1 relative">
                      <div className="relative w-4 h-4 md:w-5 md:h-5 flex-shrink-0">
                        <div
                          className="absolute inset-0 rounded-full border-2 z-10"
                          style={{
                            borderColor: "rgba(44,62,107,0.5)",
                            background: "#f5f0e8",
                          }}
                        />
                        <div
                          className="absolute inset-0.5 md:inset-1 rounded-full z-20"
                          style={{ background: "#2c3e6b" }}
                        />
                        {isIntersect && (
                          <div
                            className="absolute -inset-1 md:-inset-1.5 rounded-full animate-ping z-0"
                            style={{
                              background: "rgba(44,62,107,0.2)",
                              animationDuration: "3s",
                              animationDelay: "0.5s",
                            }}
                          />
                        )}
                      </div>
                    </div>
                    <div className="flex-1">
                      {right.phase !== undefined && (
                        <div className="mb-1.5">
                          <span
                            className="inline-block text-[10px] md:text-xs px-2 py-0.5 rounded-sm font-song"
                            style={{
                              background: "rgba(44,62,107,0.1)",
                              color: "#2c3e6b",
                              border: "1px solid rgba(44,62,107,0.3)",
                            }}
                          >
                            {categoryNames[right.category]}
                          </span>
                        </div>
                      )}
                      <h4 className="font-brush text-lg md:text-xl" style={{ color: "#2c3e6b" }}>
                        {right.event.title}
                      </h4>
                      <div className="flex flex-wrap gap-1.5 mt-1 mb-1.5">
                        {right.event.age && (
                          <span
                            className="text-[10px] md:text-xs px-2 py-0.5 rounded font-song whitespace-nowrap"
                            style={{
                              background: "rgba(44,62,107,0.08)",
                              border: "1px solid rgba(44,62,107,0.2)",
                              color: "#2c3e6b",
                            }}
                          >
                            {right.event.age}
                          </span>
                        )}
                        {right.event.location && (
                          <span
                            className="text-[10px] md:text-xs px-2 py-0.5 rounded font-song whitespace-nowrap"
                            style={{
                              background: "rgba(184,134,11,0.08)",
                              border: "1px solid rgba(184,134,11,0.3)",
                              color: "#8b6914",
                            }}
                          >
                            📍 {right.event.location}
                          </span>
                        )}
                      </div>
                      <p
                        className="font-song text-xs md:text-sm leading-relaxed"
                        style={{ color: "rgba(50,40,30,0.7)" }}
                      >
                        {right.event.description}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        );
      })}

      <div className="flex items-center justify-between pt-8 mt-4" style={{ borderTop: "1px dashed rgba(139,90,43,0.3)" }}>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full" style={{ background: "#c23616" }} />
          <span className="font-song text-xs md:text-sm" style={{ color: "rgba(50,40,30,0.7)" }}>
            {charA.name}
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span className="font-brush text-sm" style={{ color: "#8b6914" }}>
            ╳ 宿命交织 ╳
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-song text-xs md:text-sm" style={{ color: "rgba(50,40,30,0.7)" }}>
            {charB.name}
          </span>
          <div className="w-3 h-3 rounded-full" style={{ background: "#2c3e6b" }} />
        </div>
      </div>
    </div>
  );
}
