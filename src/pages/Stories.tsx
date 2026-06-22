import { stories } from '@/data/stories';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const novelGroups = stories.reduce<Record<string, typeof stories>>((acc, story) => {
  if (!acc[story.novel]) acc[story.novel] = [];
  acc[story.novel].push(story);
  return acc;
}, {});

const novelNames = Object.keys(novelGroups);

export default function Stories() {
  return (
    <div>
      <Navbar />

      <header className="pt-32 pb-16 px-4 text-center">
        <div className="w-16 h-0.5 bg-cinnabar/60 mx-auto mb-6" />
        <h1 className="font-brush text-5xl text-rice ink-text-glow">剧情回顾</h1>
        <p className="font-song text-mist/60 mt-3">恩怨情仇，荡气回肠</p>
      </header>

      <section className="max-w-4xl mx-auto px-4 pb-24">
        {novelNames.map((novel, ni) => (
          <div key={novel}>
            <h2 className="font-brush text-3xl text-gold mb-8">
              <span className="inline-block w-1 h-8 bg-gold/40 mr-3" />
              {novel}
            </h2>

            <div className="relative pl-8">
              <div className="absolute left-3 top-0 bottom-0 w-px bg-gradient-to-b from-cinnabar/40 via-gold/40 to-indigo/40" />

              {novelGroups[novel].map((story) => (
                <div key={story.id} className="relative mb-10">
                  <div className="absolute left-[-1.35rem] top-2 w-3 h-3 rounded-full bg-cinnabar border-2 border-ink z-10" />

                  <div className="ink-card p-6">
                    <h3 className="font-brush text-xl text-rice mb-2">{story.title}</h3>
                    <p className="font-song text-sm text-mist/70 leading-relaxed">{story.description}</p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {story.characters.map((char) => (
                        <span key={char} className="text-xs px-2 py-1 bg-cinnabar/5 text-cinnabar/60 rounded">
                          {char}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {ni < novelNames.length - 1 && <div className="ink-divider my-8" />}
          </div>
        ))}
      </section>

      <Footer />
    </div>
  );
}
