import { Character } from "@/data/characters";

interface CompassProps {
  characters: Character[];
  onSelect: (character: Character) => void;
}

export default function Compass({ characters, onSelect }: CompassProps) {
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
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-mist/30 group-hover:border-cinnabar/70 transition-all duration-500 overflow-hidden bg-ink/80 backdrop-blur-sm group-hover:scale-110 transform group-hover:shadow-2xl group-hover:shadow-cinnabar/30">
                  <img
                    src={char.image}
                    alt={char.name}
                    className="w-full h-full object-cover opacity-85 group-hover:opacity-100 transition-opacity duration-500"
                    draggable={false}
                  />
                </div>
                <div className="absolute inset-0 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-cinnabar/25 backdrop-blur-[2px] pointer-events-none">
                  <span className="font-brush text-rice text-base md:text-xl ink-text-glow">
                    {char.name}
                  </span>
                </div>
                <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap pointer-events-none">
                  <span className="font-song text-xs md:text-sm text-mist/80 group-hover:text-cinnabar transition-colors">
                    {char.name}
                  </span>
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-cinnabar/60 opacity-0 group-hover:opacity-100 transition-opacity animate-pulse pointer-events-none" />
                <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 pointer-events-none">
                  <div className="absolute inset-0 rounded-full border-2 border-cinnabar/60 animate-ping" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="compass-center-gate w-[140px] h-[140px] md:w-[180px] md:h-[180px] rounded-full flex items-center justify-center animate-pulse-glow">
          <div className="relative text-center">
            <div className="font-brush text-4xl md:text-5xl text-cinnabar ink-text-glow leading-tight">
              江湖
            </div>
            <div className="mt-1 flex items-center justify-center gap-1">
              <div className="w-6 h-px bg-cinnabar/50" />
              <span className="font-brush text-xs text-gold/60">罗盘</span>
              <div className="w-6 h-px bg-cinnabar/50" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
