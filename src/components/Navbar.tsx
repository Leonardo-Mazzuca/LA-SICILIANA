import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import logo from '@/assets/logo.png'
import { navItems, restaurant } from '@/data/restaurant'
import { cn } from '@/lib/utils'
import { ButtonLink } from './ui/button'

type NavbarProps = {
  open: boolean
  setOpen: (open: boolean) => void
}

export function Navbar({ open, setOpen }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const next = window.scrollY > 8
      setScrolled((current) => (current === next ? current : next))
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false)
    }

    window.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
    }
  }, [setOpen])

  return (
    <>
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-300',
        scrolled || open ? 'border-b border-line bg-paper' : 'bg-transparent',
      )}
    >
      <div className="mx-auto flex h-[4.5rem] w-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#inicio" className="flex min-w-0 items-center gap-2.5" onClick={() => setOpen(false)}>
          <img
            src={logo}
            alt=""
            width={362}
            height={372}
            className="h-11 w-11 shrink-0 object-contain"
          />
          <span className="min-w-0">
            <span className="block truncate font-serif text-[1.05rem] leading-none tracking-[0.14em] text-ink">
              LA SICILIANA
            </span>
            <span className="mt-1 block text-[10px] font-medium uppercase tracking-[0.28em] text-mute">
              Pasticceria
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Seções">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-ink/80 transition-colors hover:text-brand"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ButtonLink href="#cardapio" className="hidden md:inline-flex">
            Ver cardápio
          </ButtonLink>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full text-ink md:hidden"
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      </header>
    {open ? (
      <div id="menu-mobile" className="fixed inset-x-0 bottom-0 top-[4.5rem] z-[60] overflow-y-auto bg-paper px-6 py-6 md:hidden">
        <nav className="flex flex-col" aria-label="Seções">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="border-b border-line py-4 font-serif text-3xl text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="mt-8 flex flex-col gap-3">
          <ButtonLink href="#cardapio" onClick={() => setOpen(false)}>
            Ver cardápio
          </ButtonLink>
          <ButtonLink href={restaurant.phoneHref} variant="secondary" onClick={() => setOpen(false)}>
            Ligar
          </ButtonLink>
        </div>
      </div>
    ) : null}
    </>
  )
}
