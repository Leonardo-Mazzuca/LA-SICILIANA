import { aboutImage } from '@/data/gallery'
import { restaurant } from '@/data/restaurant'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

const facts = [
  { label: 'Casa', value: restaurant.kind },
  { label: 'Endereço', value: restaurant.address },
  { label: 'Telefone', value: restaurant.phoneDisplay },
]

export function About() {
  return (
    <section id="sobre" className="px-4 py-20 sm:px-6 md:py-28" aria-labelledby="sobre-titulo">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <img
            src={aboutImage.src}
            alt={aboutImage.alt}
            width={aboutImage.width}
            height={aboutImage.height}
            loading="lazy"
            decoding="async"
            className="aspect-[4/5] w-full rounded-[2rem] object-cover shadow-card sm:aspect-[5/4] lg:aspect-[4/5]"
          />
        </Reveal>
        <Reveal delay={0.08}>
          <SectionHeading
            eyebrow="Sobre"
            title="Mais que uma refeição. Uma experiência."
            id="sobre-titulo"
            text="A La Siciliana é uma pasticceria na Rua Itaipu, 500. O cardápio reúne antipasti, molhos, focaccia, pasta fresca e dolci."
          />
          <dl className="mt-8 flex flex-wrap gap-3">
            {facts.map((fact) => (
              <div key={fact.label} className="min-w-[11rem] flex-1 rounded-2xl border border-line bg-paper px-4 py-4">
                <dt className="text-xs uppercase tracking-[0.16em] text-mute">{fact.label}</dt>
                <dd className="mt-2 whitespace-nowrap font-serif text-lg leading-tight text-ink">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  )
}
