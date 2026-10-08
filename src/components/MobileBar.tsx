import { restaurant } from '@/data/restaurant'

type MobileBarProps = {
  hidden: boolean
}

export function MobileBar({ hidden }: MobileBarProps) {
  if (hidden) return null

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-paper/95 backdrop-blur md:hidden">
      <div className="grid grid-cols-2 gap-2 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
        <a
          href="#cardapio"
          className="inline-flex h-12 items-center justify-center rounded-full text-sm font-medium text-ink ring-1 ring-ink/15"
        >
          Ver cardápio
        </a>
        <a
          href={restaurant.phoneHref}
          className="inline-flex h-12 items-center justify-center rounded-full bg-brand text-sm font-medium text-white"
        >
          Ligar
        </a>
      </div>
    </div>
  )
}
