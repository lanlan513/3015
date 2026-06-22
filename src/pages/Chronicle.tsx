import { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Swords, Scroll } from 'lucide-react';
import { timelineEvents, classicBattles } from '@/data/chronicle';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const dynastyColors: Record<string, string> = {
  '春秋': 'border-gold/60 text-gold',
  '北宋': 'border-indigo/60 text-indigo',
  '南宋': 'border-cinnabar/60 text-cinnabar',
  '元末': 'border-gold/60 text-gold',
  '明朝': 'border-indigo/60 text-indigo',
  '明末': 'border-indigo/60 text-indigo',
  '清初': 'border-cinnabar/60 text-cinnabar',
  '清朝': 'border-mist/60 text-mist',
};

const dynastyBg: Record<string, string> = {
  '春秋': 'bg-gold/10',
  '北宋': 'bg-indigo/10',
  '南宋': 'bg-cinnabar/10',
  '元末': 'bg-gold/10',
  '明朝': 'bg-indigo/10',
  '明末': 'bg-indigo/10',
  '清初': 'bg-cinnabar/10',
  '清朝': 'bg-mist/10',
};

function InkReveal({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`ink-reveal ${visible ? 'ink-reveal-visible' : ''} ${className}`}
    >
      {children}
    </div>
  );
}

function TimelineSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener('scroll', checkScroll);
    return () => el.removeEventListener('scroll', checkScroll);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: direction === 'left' ? -400 : 400, behavior: 'smooth' });
  };

  let lastDynasty = '';

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <InkReveal>
          <div className="text-center mb-14">
            <div className="w-16 h-0.5 bg-cinnabar/60 mx-auto mb-6" />
            <h2 className="font-brush text-4xl md:text-5xl text-rice ink-text-glow">编年史</h2>
            <p className="font-song text-mist/60 mt-3">千年江湖，一脉相承</p>
          </div>
        </InkReveal>

        <div className="relative">
          {canScrollLeft && (
            <button
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-ink/90 border border-mist/20 rounded-sm flex items-center justify-center text-mist hover:text-cinnabar hover:border-cinnabar/40 transition-all duration-300"
            >
              <ChevronLeft size={24} />
            </button>
          )}
          {canScrollRight && (
            <button
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-ink/90 border border-mist/20 rounded-sm flex items-center justify-center text-mist hover:text-cinnabar hover:border-cinnabar/40 transition-all duration-300"
            >
              <ChevronRight size={24} />
            </button>
          )}

          <div
            ref={scrollRef}
            className="overflow-x-auto scrollbar-hide pb-8"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <div className="relative min-w-max px-8">
              <div className="absolute top-[3.5rem] left-8 right-8 h-px bg-gradient-to-r from-cinnabar/20 via-cinnabar/40 to-cinnabar/20" />

              {timelineEvents.map((event, idx) => {
                const isNewDynasty = event.dynasty !== lastDynasty;
                lastDynasty = event.dynasty;
                const isAbove = idx % 2 === 0;

                return (
                  <div key={event.id} className="inline-block align-top w-64 mx-2">
                    {isNewDynasty && (
                      <div className="flex items-center gap-2 mb-4 mt-2">
                        <span className={`text-xs px-2 py-0.5 rounded-sm border ${dynastyColors[event.dynasty] ?? 'border-mist/60 text-mist'} ${dynastyBg[event.dynasty] ?? 'bg-mist/10'} font-song`}>
                          {event.dynasty}
                        </span>
                        <span className="font-song text-xs text-mist/40">{event.novel}</span>
                      </div>
                    )}

                    <div className="relative">
                      <div className={`flex flex-col items-center ${isAbove ? '' : 'mt-[5.5rem]'}`}>
                        <div className="relative z-10">
                          <div className={`ink-timeline-node w-3 h-3 rounded-full border-2 ${dynastyColors[event.dynasty] ?? 'border-mist/60'} bg-ink mt-[2.8rem]`} style={{ animationDelay: `${idx * 0.1}s` }} />
                        </div>

                        <InkReveal>
                          <div className={`ink-card p-4 mt-3 w-56 group cursor-default ${isAbove ? '' : 'order-first mb-3'}`}>
                            <div className="flex items-center gap-2 mb-2">
                              <span className="font-song text-xs text-cinnabar/80">{event.year}</span>
                            </div>
                            <h3 className="font-brush text-lg text-rice group-hover:text-cinnabar transition-colors duration-300">
                              {event.title}
                            </h3>
                            <p className="font-song text-xs text-mist/60 mt-1.5 leading-relaxed line-clamp-3">
                              {event.description}
                            </p>
                          </div>
                        </InkReveal>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BattleCard({ battle, index }: { battle: typeof classicBattles[0]; index: number }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <InkReveal>
      <div
        className="ink-card ink-battle-card relative overflow-hidden group"
        style={{ animationDelay: `${index * 0.15}s` }}
      >
        <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-cinnabar/5 blur-2xl group-hover:bg-cinnabar/10 transition-all duration-700" />
        <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-indigo/5 blur-2xl group-hover:bg-indigo/10 transition-all duration-700" />

        <div className="relative z-10 p-8">
          <div className="flex flex-wrap items-start justify-between gap-3 mb-6">
            <div>
              <span className="font-song text-xs text-cinnabar/60">{battle.novel} · {battle.year}</span>
              <h3 className="font-brush text-3xl text-rice mt-1 group-hover:text-cinnabar transition-colors duration-500">
                {battle.name}
              </h3>
            </div>
            <div className="flex items-center gap-2 bg-cinnabar/10 border border-cinnabar/20 px-3 py-1.5 rounded-sm">
              <Swords size={14} className="text-cinnabar" />
              <span className="font-song text-xs text-cinnabar">{battle.highlight}</span>
            </div>
          </div>

          <div className="ink-divider mb-6" />

          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 mb-6">
            <div className="flex-1 text-center md:text-right">
              <div className="font-song text-xs text-mist/40 mb-1">对阵</div>
              <div className="font-brush text-xl text-rice">{battle.sideA}</div>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-12 h-12 border border-cinnabar/40 rounded-full flex items-center justify-center bg-cinnabar/10">
                <Swords size={20} className="text-cinnabar" />
              </div>
              <div className="font-song text-xs text-cinnabar mt-1 whitespace-nowrap">{battle.result}</div>
            </div>

            <div className="flex-1 text-center md:text-left">
              <div className="font-song text-xs text-mist/40 mb-1">迎战</div>
              <div className="font-brush text-xl text-rice">{battle.sideB}</div>
            </div>
          </div>

          <div className="ink-divider mb-6" />

          <div
            className={`overflow-hidden transition-all duration-700 ease-in-out ${expanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
          >
            <div className="relative pl-4 border-l-2 border-cinnabar/30">
              <p className="font-song text-sm text-mist/70 leading-loose">
                {battle.replay}
              </p>
            </div>
          </div>

          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-4 font-song text-xs text-cinnabar/70 hover:text-cinnabar transition-colors duration-300 flex items-center gap-1 group/btn"
          >
            <Scroll size={12} className={`transition-transform duration-500 ${expanded ? 'rotate-180' : ''}`} />
            {expanded ? '收起复盘' : '展开复盘'}
          </button>
        </div>
      </div>
    </InkReveal>
  );
}

function BattlesSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <InkReveal>
          <div className="text-center mb-14">
            <div className="w-16 h-0.5 bg-cinnabar/60 mx-auto mb-6" />
            <h2 className="font-brush text-4xl md:text-5xl text-rice ink-text-glow">经典战役</h2>
            <p className="font-song text-mist/60 mt-3">刀光剑影，千古留名</p>
          </div>
        </InkReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {classicBattles.map((battle, idx) => (
            <BattleCard key={battle.id} battle={battle} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

function InkTransitionDivider() {
  return (
    <div className="relative h-32 overflow-hidden">
      <div className="absolute inset-0 ink-wave-bg" />
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-ink to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-ink to-transparent" />
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1200 128"
        preserveAspectRatio="none"
      >
        <defs>
          <filter id="inkBlur">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
          </filter>
        </defs>
        <path
          d="M0 80 Q150 20 300 60 T600 40 T900 70 T1200 50 L1200 128 L0 128 Z"
          fill="rgba(44,62,107,0.15)"
          filter="url(#inkBlur)"
          className="ink-wave-path"
        />
        <path
          d="M0 90 Q200 40 400 70 T800 50 T1200 65 L1200 128 L0 128 Z"
          fill="rgba(194,54,22,0.08)"
          filter="url(#inkBlur)"
          className="ink-wave-path ink-wave-path-delay"
        />
      </svg>
    </div>
  );
}

export default function Chronicle() {
  return (
    <div className="min-h-screen bg-ink">
      <Navbar />

      <header className="pt-32 pb-8 px-4 text-center relative overflow-hidden">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-cinnabar/5 blur-3xl" />
        <div className="absolute -right-32 top-0 h-64 w-64 rounded-full bg-indigo/5 blur-3xl" />

        <div className="relative z-10">
          <InkReveal>
            <div className="w-16 h-0.5 bg-cinnabar/60 mx-auto mb-6" />
            <h1 className="font-brush text-5xl md:text-6xl text-rice ink-text-glow">金庸武侠编年史</h1>
            <p className="font-song text-mist/60 mt-3">春秋至清代，千年侠义长卷</p>
          </InkReveal>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cinnabar/30 to-transparent" />
      </header>

      <TimelineSection />

      <InkTransitionDivider />

      <BattlesSection />

      <Footer />
    </div>
  );
}
