import { Instagram } from 'lucide-react'
import logo from '@/assets/logo.png'
import { navItems, restaurant } from '@/data/restaurant'

export function Footer() {
  return (
    <footer className="border-t border-line bg-paper px-4 pb-28 pt-10 sm:px-6 md:pb-10">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <a href="#inicio" className="flex items-center gap-3">
          <img src={logo} alt="" width={362} height={372} className="h-12 w-12 object-contain" />
          <span>
            <span className="block font-serif text-lg tracking-[0.14em]">LA SICILIANA</span>
            <span className="mt-1 block text-xs uppercase tracking-[0.22em] text-mute">Pasticceria</span>
          </span>
        </a>

        <nav className="flex flex-wrap gap-x-6 gap-y-2" aria-label="Rodapé">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-mute hover:text-brand">
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={restaurant.instagramUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-sm text-ink hover:text-brand"
        >
          <Instagram className="h-4 w-4" aria-hidden="true" />
          {restaurant.instagramHandle}
        </a>
      </div>
      <p className="mx-auto mt-8 w-full max-w-7xl text-sm text-mute">
        © {new Date().getFullYear()} La Siciliana. {restaurant.address}.
      </p>
    </footer>
  )
}
