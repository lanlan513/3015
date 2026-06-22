import { Character } from "@/data/characters";

interface CompassProps {
  characters: Character[];
  onSelect: (character: Character) => void;
}

export default function Compass({ characters, onSelect }: CompassProps) {
  const characterCount = characters.length;
  const radius = 260;

  const getPosition = (index: number) => {
    const angle = (index / characterCount) * 2 * Math.PI - Math.PI / 2;
    return {
      x: Math.cos(angle) * radius,
      y: Math.sin(angle) * radius,
      angleDeg: (angle * 180) / Math.PI,
    };
  };

  const directions = [
    "北", "东北", "东", "东南",
    "南", "西南", "西", "西北",
  ];

  return (
    <div className="relative w-full h-[600px] md:h-[680px] flex items-center justify-center">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="absolute w-[520px] h-[520px] md:w-[600px] md:h-[600px] rounded-full compass-ring opacity-60" />
        <div className="absolute w-[400px] h-[400px] md:w-[460px] md:h-[460px] rounded-full border border-mist/10" />
        <div className="absolute w-[300px] h-[300px] md:w-[360px] md:h-[360px] rounded-full border border-cinnabar/15" />
        <div className="absolute w-[180px] h-[180px] md:w-[220px] md:h-[220px] rounded-full border border-gold/20" />
      </div>

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {directions.map((dir, i) => {
          const angle = (i / 8) * 360 - 90;
          const rad = (angle * Math.PI) / 180;
          const x = Math.cos(rad) * 310;
          const y = Math.sin(rad) * 310;
          return (
            <span
              key={dir}
              className="absolute font-brush text-gold/60 text-sm"
              style={{
                transform: `translate(${x}px, ${y}px)`,
              }}
            >
              {dir}
            </span>
          );
        })}
      </div>

      <div className="relative compass-slow-spin w-[520px] h-[520px] md:w-[600px] md:h-[600px]">
        {characters.map((char, index) => {
          const { x, y } = getPosition(index);
          return (
            <div
              key={char.id}
              className="absolute left-1/2 top-1/2 compass-item-counter cursor-pointer group"
              style={{
                transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
              }}
              onClick={() => onSelect(char)}
            >
              <div className="relative">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-mist/30 group-hover:border-cinnabar/60 transition-all duration-500 overflow-hidden bg-ink/80 backdrop-blur-sm group-hover:scale-110 transform group-hover:shadow-lg group-hover:shadow-cinnabar/20">
                  <img
                    src={char.image}
                    alt={char.name}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                  />
                </div>
                <div className="absolute inset-0 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-cinnabar/20 backdrop-blur-[2px]">
                  <span className="font-brush text-rice text-lg md:text-xl ink-text-glow">
                    {char.name}
                  </span>
                </div>
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap opacity-80 group-hover:opacity-100 transition-opacity">
                  <span className="font-song text-xs md:text-sm text-mist/80 group-hover:text-cinnabar transition-colors">
                    {char.name}
                  </span>
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-cinnabar/60 opacity-0 group-hover:opacity-100 transition-opacity animate-pulse" />
              </div>
            </div>
          );
        })}
      </div>

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="compass-center-gate w-[120px] h-[120px] md:w-[160px] md:h-[160px] rounded-full flex items-center justify-center animate-pulse-glow">
          <div className="relative">
            <div className="font-brush text-4xl md:text-5xl text-cinnabar ink-text-glow">
              江湖
            </div>
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-cinnabar/60 to-transparent" />
          </div>
        </div>
      </div>

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-cinnabar/10 to-transparent absolute" />
        <div className="w-px h-full bg-gradient-to-b from-transparent via-cinnabar/10 to-transparent absolute" />
        <div
          className="w-full h-px bg-gradient-to-r from-transparent via-indigo/10 to-transparent absolute"
          style={{ transform: "rotate(45deg)" }}
        />
        <div
          className="w-full h-px bg-gradient-to-r from-transparent via-indigo/10 to-transparent absolute"
          style={{ transform: "rotate(-45deg)" }}
        />
      </div>
    </div>
  );
}
