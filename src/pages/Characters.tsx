import { useState } from 'react';
import { characters, Character } from '@/data/characters';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Compass from '@/components/Compass';
import DestinyScroll from '@/components/DestinyScroll';

export default function Characters() {
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);

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
            点击罗盘上的人物，翻阅其命运卷轴
          </p>
          <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-cinnabar/60 to-transparent mx-auto mt-6" />
        </div>
      </section>

      <section className="relative pb-12">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(26,26,46,0.8)_100%)]" />
        </div>
        <Compass
          characters={characters}
          onSelect={(char) => setSelectedCharacter(char)}
        />
      </section>

      <section className="max-w-4xl mx-auto px-4 pb-20">
        <div className="text-center mb-8">
          <h2 className="font-brush text-2xl text-rice/80 mb-3">卷轴指引</h2>
          <div className="w-16 h-px bg-cinnabar/30 mx-auto" />
        </div>
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
      </section>

      <Footer />
    </div>
  );
}
