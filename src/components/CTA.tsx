import strudel from '../../imgs/shawarma.jpeg'
import { restaurant } from '@/data/restaurant'
import { ButtonLink } from './ui/button'

export function CTA() {
  return (
    <section className="relative isolate overflow-hidden px-4 py-20 sm:px-6 md:py-28" aria-labelledby="cta-titulo">
      <img
        src={strudel}
        alt=""
        width={1080}
        height={1459}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-ink/78" />
      <div className="mx-auto w-full max-w-3xl text-center">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-gold-soft">La Siciliana</p>
        <h2 id="cta-titulo" className="mt-4 font-serif text-4xl leading-[1.08] text-white sm:text-6xl">
          Seu próximo sabor favorito está esperando por você.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
          Canolli, pasta fresca e doces do cardápio. Passe na {restaurant.address} ou ligue para pedir.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <ButtonLink href="#cardapio" className="w-full sm:w-auto">
            Ver cardápio
          </ButtonLink>
          <ButtonLink href={restaurant.phoneHref} variant="lightOutline" className="w-full sm:w-auto">
            Entrar em contato
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
