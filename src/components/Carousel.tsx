import { useState, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface Character {
  id: number
  name: string
  alias: string
  novel: string
  description: string
  quote: string
  image: string
}

interface CarouselProps {
  characters: Character[]
}

export default function Carousel({ characters }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const goNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % characters.length)
  }, [characters.length])

  const goPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + characters.length) % characters.length)
  }, [characters.length])

  useEffect(() => {
    if (!isAutoPlaying) return
    const timer = setInterval(goNext, 5000)
    return () => clearInterval(timer)
  }, [isAutoPlaying, goNext])

  const character = characters[currentIndex]

  return (
    <section className="px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-2 text-center font-brush text-4xl text-rice">
          江湖群侠
        </h2>
        <p className="mb-12 text-center font-song text-mist/60">
          武林豪杰，各领风骚
        </p>

        <div className="relative flex items-center gap-8">
          <button
            onClick={() => { goPrev(); setIsAutoPlaying(false) }}
            className="absolute -left-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-mist/20 bg-ink/60 text-mist transition hover:border-cinnabar/40 hover:bg-cinnabar/20"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div key={character.id} className="animate-fadeIn flex w-full items-stretch gap-8 rounded-sm border border-mist/20 bg-ink/80 backdrop-blur-sm">
            <img
              src={character.image}
              alt={character.name}
              className="ink-brush-border h-96 w-80 flex-shrink-0 rounded-sm object-cover"
            />

            <div className="flex flex-col justify-center py-6 pr-8">
              <h3 className="font-brush text-5xl text-cinnabar">
                {character.name}
              </h3>
              <span className="mt-1 font-song text-lg text-gold">
                {character.alias}
              </span>
              <span className="mt-3 inline-block w-fit rounded bg-indigo/30 px-3 py-1 font-song text-xs text-rice/80">
                {character.novel}
              </span>
              <p className="mt-4 font-song leading-relaxed text-mist/70">
                {character.description}
              </p>
              <p className="mt-4 font-song italic text-cinnabar/60">
                <span className="mr-1 text-2xl leading-none">「</span>
                {character.quote}
                <span className="ml-1 text-2xl leading-none">」</span>
              </p>
            </div>
          </div>

          <button
            onClick={() => { goNext(); setIsAutoPlaying(false) }}
            className="absolute -right-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-mist/20 bg-ink/60 text-mist transition hover:border-cinnabar/40 hover:bg-cinnabar/20"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {characters.map((_, idx) => (
            <button
              key={idx}
              onClick={() => { setCurrentIndex(idx); setIsAutoPlaying(false) }}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === currentIndex
                  ? 'w-8 bg-cinnabar'
                  : 'w-2 bg-mist/30'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
