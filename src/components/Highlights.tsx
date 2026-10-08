import { Cake, Salad, Scale, Wheat } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

const highlights: { title: string; text: string; icon: LucideIcon }[] = [
  {
    title: 'Pasta fresca',
    text: 'Ravioli, cannelloni, tagliatelle, lasanha e outras massas do cardápio.',
    icon: Wheat,
  },
  {
    title: 'Pasticceria',
    text: 'Canolli, tiramisu, pastiera di grano, strudel e granita.',
    icon: Cake,
  },
  {
    title: 'Antipasti',
    text: 'Caponata, zucchini, sardela e outros antepastos.',
    icon: Salad,
  },
  {
    title: 'Porções do cardápio',
    text: 'Massas e molhos de 500 g. Antepastos de 200 g.',
    icon: Scale,
  },
]

export function Highlights() {
  return (
    <section className="px-4 py-20 sm:px-6 md:py-28" aria-labelledby="diferenciais-titulo">
      <div className="mx-auto w-full max-w-7xl">
        <Reveal>
          <SectionHeading eyebrow="A casa" title="Por que La Siciliana?" id="diferenciais-titulo" />
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.06}>
              <article className="h-full rounded-3xl border border-line bg-paper p-6 shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold-soft text-brand">
                  <item.icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-serif text-2xl text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mute">{item.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
