import { Users, Zap, Landmark, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import HeroSection from '@/components/HeroSection';
import Carousel from '@/components/Carousel';
import { characters } from '@/data/characters';
import Footer from '@/components/Footer';

const navCards = [
  { to: '/characters', icon: Users, title: '人物图鉴', desc: '英雄豪杰，各领风骚', accent: 'cinnabar' },
  { to: '/martial-arts', icon: Zap, title: '武功秘籍', desc: '绝学神功，威力无穷', accent: 'gold' },
  { to: '/sects', icon: Landmark, title: '门派总览', desc: '正邪纷争，各据一方', accent: 'indigo' },
  { to: '/stories', icon: BookOpen, title: '剧情回顾', desc: '恩怨情仇，荡气回肠', accent: 'mist' },
] as const;

const accentColorMap: Record<string, string> = {
  cinnabar: 'text-cinnabar',
  gold: 'text-gold',
  indigo: 'text-indigo',
  mist: 'text-mist',
};

const accentBgMap: Record<string, string> = {
  cinnabar: 'bg-cinnabar',
  gold: 'bg-gold',
  indigo: 'bg-indigo',
  mist: 'bg-mist',
};

export default function Home() {
  return (
    <div>
      <HeroSection />

      <Carousel characters={characters.slice(0, 5)} />

      <section id="explore" className="relative py-24 px-4">
        <div className="absolute top-20 -left-20 w-72 h-72 bg-cinnabar/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 -right-20 w-72 h-72 bg-indigo/5 rounded-full blur-3xl" />

        <h2 className="font-brush text-4xl text-rice text-center mb-2">步入江湖</h2>
        <p className="font-song text-mist/60 text-center mb-16">选择你的江湖路</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {navCards.map((card) => {
            const Icon = card.icon;
            return (
              <Link
                key={card.to}
                to={card.to}
                className="ink-card p-8 text-center group cursor-pointer"
              >
                <Icon className={`w-12 h-12 mx-auto mb-4 ${accentColorMap[card.accent]} group-hover:scale-110 transition-transform duration-300`} />
                <h3 className="font-brush text-2xl text-rice">{card.title}</h3>
                <p className="font-song text-sm text-mist/60 mt-2">{card.desc}</p>
                <div className={`w-0 group-hover:w-12 h-0.5 ${accentBgMap[card.accent]} transition-all duration-500 mx-auto mt-4`} />
              </Link>
            );
          })}
        </div>
      </section>

      <section className="relative py-24 px-4 text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cinnabar/5 rounded-full blur-3xl" />
        <span className="absolute top-8 left-1/2 -translate-x-1/2 font-brush text-cinnabar/20 text-9xl leading-none select-none">「</span>
        <blockquote className="relative z-10">
          <p className="font-brush text-4xl md:text-5xl text-rice ink-text-glow">侠之大者，为国为民</p>
          <cite className="block font-song text-gold text-lg mt-6 not-italic">—— 郭靖</cite>
          <div className="text-mist/40 text-sm mt-8 space-y-1">
            <p>问世间情为何物</p>
            <p>风陵渡口初相遇</p>
          </div>
        </blockquote>
      </section>

      <Footer />
    </div>
  );
}
