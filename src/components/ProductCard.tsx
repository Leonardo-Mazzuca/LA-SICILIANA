import { formatPrice, type MenuItem } from '@/data/menu'
import { cn } from '@/lib/utils'

type ProductCardProps = {
  item: MenuItem
  category: string
  featured?: boolean
}

export function ProductCard({ item, category, featured = false }: ProductCardProps) {
  if (!item.image || !item.imageAlt) return null

  return (
    <article
      className={cn(
        'group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-paper shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-lg',
        featured && 'sm:col-span-2',
      )}
    >
      <div className={cn('overflow-hidden', featured ? 'aspect-[4/5] sm:aspect-[16/10]' : 'aspect-[4/5]')}>
        <img
          src={item.image}
          alt={item.imageAlt}
          width={1080}
          height={1350}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
        />
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-gold">{category}</p>
        <h3 className="mt-2 font-serif text-3xl leading-none text-ink">{item.name}</h3>
        {item.description ? <p className="mt-3 text-sm leading-relaxed text-mute">{item.description}</p> : null}
        <p className="mt-auto pt-4 font-serif text-2xl text-ink">
          {formatPrice(item.price)}
          {item.note ? <span className="ml-2 font-sans text-sm text-mute">{item.note}</span> : null}
        </p>
      </div>
    </article>
  )
}
