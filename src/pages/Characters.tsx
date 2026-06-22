import { characters } from '@/data/characters';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Characters() {
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
          <h1 className="font-brush text-5xl text-rice ink-text-glow">人物图鉴</h1>
          <p className="font-song text-mist/60 mt-3">江湖豪杰，各领风骚</p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {characters.map((character) => (
            <div key={character.id} className="ink-card overflow-hidden group">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={character.image}
                  alt={character.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
                <div className="absolute bottom-4 left-4 font-brush text-3xl text-rice">
                  {character.name}
                </div>
                <div className="absolute top-4 right-4 bg-indigo/50 text-rice/80 text-xs px-2 py-1 rounded">
                  {character.novel}
                </div>
              </div>
              <div className="p-6">
                <div className="text-gold font-song text-sm">{character.alias}</div>
                <div className="text-mist/70 font-song text-sm mt-3 line-clamp-3">
                  {character.description}
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {character.martialArts.map((art) => (
                    <span
                      key={art}
                      className="text-xs px-2 py-1 bg-cinnabar/10 text-cinnabar/80 rounded border border-cinnabar/20"
                    >
                      {art}
                    </span>
                  ))}
                </div>
                <div className="text-cinnabar/50 font-song text-sm italic mt-4">
                  「{character.quote}」
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
