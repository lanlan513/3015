import { useState } from 'react';
import { martialArts } from '@/data/martialArts';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const categories = ["全部", "掌法", "剑法", "内功", "轻功", "其他"] as const;

const categoryBadgeStyles: Record<string, string> = {
  "掌法": "bg-cinnabar/10 text-cinnabar",
  "剑法": "bg-indigo/10 text-indigo",
  "内功": "bg-gold/10 text-gold",
  "轻功": "bg-mist/10 text-mist",
  "其他": "bg-soot/10 text-soot",
};

export default function MartialArts() {
  const [activeCategory, setActiveCategory] = useState<string>("全部");

  const filtered = activeCategory === "全部"
    ? martialArts
    : martialArts.filter((ma) => ma.category === activeCategory);

  return (
    <div className="min-h-screen bg-ink">
      <Navbar />

      <section className="pt-32 pb-16 px-4 text-center relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-1/4 w-64 h-64 bg-cinnabar/5 rounded-full blur-3xl" />
          <div className="absolute top-32 right-1/4 w-48 h-48 bg-indigo/5 rounded-full blur-3xl" />
        </div>
        <div className="relative">
          <div className="w-16 h-0.5 bg-cinnabar/60 mx-auto mb-6" />
          <h1 className="font-brush text-5xl text-rice ink-text-glow">武功秘籍</h1>
          <p className="font-song text-mist/60 mt-3">绝学神功，威力无穷</p>
        </div>
      </section>

      <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto mt-8 mb-12 px-4">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`font-song text-sm px-5 py-2 rounded-sm transition-all ${
              activeCategory === cat
                ? "bg-cinnabar/20 text-cinnabar border border-cinnabar/40"
                : "bg-ink/50 text-mist/60 border border-mist/10 hover:border-mist/30"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <section className="max-w-6xl mx-auto px-4 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((ma) => (
            <div key={ma.id} className="ink-card p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 font-brush text-cinnabar/5 text-8xl -mt-4 -mr-2">
                {ma.category}
              </div>
              <div className={`text-xs px-2 py-0.5 rounded mb-3 ${categoryBadgeStyles[ma.category] || "bg-soot/10 text-soot"}`}>
                {ma.category}
              </div>
              <div className="font-brush text-2xl text-rice mb-2">{ma.name}</div>
              <div className="font-song text-xs text-mist/50">{ma.novel}</div>
              <div className="font-song text-sm text-mist/70 mt-3 leading-relaxed">
                {ma.description}
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                {ma.practitioners.map((p) => (
                  <span
                    key={p}
                    className="text-xs px-2 py-1 bg-rice/5 text-rice/60 rounded border border-rice/10"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
