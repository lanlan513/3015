import { ChevronDown } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-ink">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(44,62,107,0.2),transparent_60%),radial-gradient(ellipse_at_bottom,rgba(26,26,46,0.9),transparent_70%)]" />

      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-indigo/5 blur-3xl" />
      <div className="absolute -right-48 top-1/4 h-[500px] w-[500px] rounded-full bg-cinnabar/5 blur-3xl" />
      <div className="absolute -bottom-24 left-1/3 h-80 w-80 rounded-full bg-indigo/5 blur-3xl" />
      <div className="absolute right-1/4 top-2/3 h-64 w-64 rounded-full bg-cinnabar/5 blur-3xl" />

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-ink to-transparent" />

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4">
        <div className="animate-fadeIn mx-auto mb-6 h-0.5 w-16 bg-cinnabar/60" />

        <h1 className="font-brush text-7xl text-rice md:text-8xl ink-text-glow animate-inkSpread">
          江湖百科
        </h1>

        <p className="font-song mt-4 text-xl text-mist/70 md:text-2xl animate-fadeIn [animation-delay:0.4s] opacity-0">
          刀光剑影，快意恩仇
        </p>

        <span className="absolute left-8 top-1/2 -translate-y-1/2 font-brush text-[12rem] text-cinnabar/10 select-none md:left-16">
          侠
        </span>
        <span className="absolute right-8 top-1/2 -translate-y-1/2 font-brush text-[12rem] text-cinnabar/10 select-none md:right-16">
          义
        </span>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-mist/40">
        <ChevronDown className="h-6 w-6" />
      </div>
    </section>
  )
}
