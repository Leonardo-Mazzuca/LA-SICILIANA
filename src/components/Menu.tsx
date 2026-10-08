import { useEffect, useRef, useState } from 'react'
import { X } from 'lucide-react'
import { categories, featured, formatPrice, menuScanImage } from '@/data/menu'
import { restaurant } from '@/data/restaurant'
import { ProductCard } from './ProductCard'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

const categoryOf: Record<string, string> = {
  canolli: 'Dolci',
  strudel: 'Dolci',
  tiramisu: 'Dolci',
  'pastiera-di-grano': 'Dolci',
  caponata: 'Antipasti',
}

export function Menu() {
  const [open, setOpen] = useState(false)
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!open) return

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }

    closeRef.current?.focus()
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <section id="cardapio" className="px-4 py-20 sm:px-6 md:py-28" aria-labelledby="cardapio-titulo">
      <div className="mx-auto w-full max-w-7xl">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <Reveal>
            <SectionHeading
              eyebrow="Cardápio"
              title="Nossos sabores"
              id="cardapio-titulo"
              text="Preços e nomes como no cardápio da casa."
            />
          </Reveal>
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="inline-flex h-12 shrink-0 items-center justify-center rounded-full px-6 text-sm font-medium text-ink ring-1 ring-ink/15 transition-colors hover:text-brand hover:ring-brand"
          >
            Ver cardápio impresso
          </button>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((item, index) => (
            <Reveal key={item.id} delay={index * 0.04} className={index === 0 ? 'sm:col-span-2' : undefined}>
              <ProductCard item={item} category={categoryOf[item.id] ?? ''} featured={index === 0} />
            </Reveal>
          ))}
        </div>

        <nav aria-label="Categorias do cardápio" className="mt-16 max-w-full overflow-x-auto">
          <div className="flex w-max gap-2 pb-1">
            {categories.map((category) => (
              <a
                key={category.id}
                href={`#${category.id}`}
                className="inline-flex h-11 items-center rounded-full border border-line bg-paper px-4 text-sm text-ink transition-colors hover:border-brand hover:text-brand"
              >
                {category.title}
              </a>
            ))}
          </div>
        </nav>

        <div className="mt-10 grid gap-x-16 gap-y-14 lg:grid-cols-2">
          {categories.map((category) => (
            <div key={category.id} id={category.id} className="scroll-mt-28">
              <h3 className="font-serif text-3xl text-ink">{category.title}</h3>
              <ul className="mt-4">
                {category.items.map((item) => (
                  <li
                    key={item.id}
                    className="flex items-baseline justify-between gap-4 border-b border-line py-3.5"
                  >
                    <span className="text-base text-ink">
                      {item.name}
                      {item.note ? <span className="text-mute"> · {item.note}</span> : null}
                    </span>
                    <span className="shrink-0 whitespace-nowrap font-medium tabular-nums text-ink">
                      {formatPrice(item.price)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-8 text-sm text-mute">{restaurant.portionNote}</p>
      </div>

      {open ? (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-ink/80 p-4"
          onClick={() => setOpen(false)}
          role="presentation"
        >
          <button
            ref={closeRef}
            type="button"
            onClick={() => setOpen(false)}
            className="fixed right-4 top-4 inline-flex h-11 items-center gap-2 rounded-full bg-paper px-4 text-sm font-medium text-ink"
          >
            <X className="h-4 w-4" aria-hidden="true" />
            Fechar
          </button>
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Cardápio impresso da La Siciliana"
            className="max-h-[88vh] max-w-3xl overflow-auto rounded-2xl bg-paper"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={menuScanImage}
              alt="Cardápio impresso da La Siciliana Pasticceria, com preços"
              width={1161}
              height={1599}
              className="h-auto w-full"
            />
          </div>
        </div>
      ) : null}
    </section>
  )
}
