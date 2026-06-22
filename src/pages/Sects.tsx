import { MapPin, Crown } from 'lucide-react';
import { sects } from '@/data/sects';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const alignmentStyles: Record<string, string> = {
  '正派': 'bg-cinnabar/10 text-cinnabar border border-cinnabar/20',
  '邪派': 'bg-indigo/10 text-indigo border border-indigo/20',
  '亦正亦邪': 'bg-gold/10 text-gold border border-gold/20',
  '中立': 'bg-mist/10 text-mist border border-mist/20',
};

export default function Sects() {
  return (
    <div>
      <Navbar />

      <header className="pt-32 pb-16 px-4 text-center">
        <div className="w-16 h-0.5 bg-cinnabar/60 mx-auto mb-6" />
        <h1 className="font-brush text-5xl text-rice ink-text-glow">门派总览</h1>
        <p className="font-song text-mist/60 mt-3">正邪纷争，各据一方</p>
      </header>

      <section className="max-w-6xl mx-auto px-4 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {sects.map((sect) => (
            <div key={sect.id} className="ink-card p-8 relative overflow-hidden">
              <span className="absolute top-0 right-0 font-brush text-9xl text-cinnabar/3 select-none pointer-events-none">
                {sect.id % 2 === 0 ? '门' : '派'}
              </span>

              <div className="flex items-start justify-between">
                <h2 className="font-brush text-3xl text-rice">{sect.name}</h2>
                <span className={`text-xs px-3 py-1 rounded ${alignmentStyles[sect.alignment] ?? 'bg-mist/10 text-mist border border-mist/20'}`}>
                  {sect.alignment}
                </span>
              </div>

              <div className="mt-4 font-song text-sm space-y-1">
                <p className="text-mist/60">
                  <MapPin className="w-4 h-4 inline text-mist/40" /> {sect.location}
                </p>
                <p className="text-mist/60">
                  <Crown className="w-4 h-4 inline text-mist/40" /> {sect.leader}
                </p>
              </div>

              <p className="text-mist/70 text-sm mt-4 leading-relaxed">{sect.description}</p>

              <div className="flex flex-wrap gap-2 mt-4">
                {sect.specialties.map((spec) => (
                  <span key={spec} className="text-xs px-2 py-1 bg-indigo/10 text-indigo/70 rounded border border-indigo/20">
                    {spec}
                  </span>
                ))}
              </div>

              <div className="ink-divider mt-6" />
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
