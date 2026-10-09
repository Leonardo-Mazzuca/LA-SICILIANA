import { Instagram } from 'lucide-react'
import strudel from '../../imgs/shawarma.jpeg'
import { restaurant } from '@/data/restaurant'
import { ButtonLink } from './ui/button'

export function CTA() {
  return (
    <section className="px-4 py-20 sm:px-6 md:py-28" aria-labelledby="cta-titulo">
      <div className="mx-auto grid w-full max-w-7xl overflow-hidden rounded-[2rem] bg-paper shadow-card lg:grid-cols-2">
        <img
          src={strudel}
          alt="Strudel da La Siciliana"
          width={1080}
          height={1459}
          loading="lazy"
          decoding="async"
          className="aspect-[4/3] h-full w-full object-cover lg:aspect-auto lg:min-h-[32rem]"
        />
        <div className="flex flex-col justify-center px-6 py-10 sm:px-10 lg:py-14">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-gold">La Siciliana</p>
          <h2 id="cta-titulo" className="mt-4 font-serif text-4xl leading-[1.08] text-ink sm:text-5xl">
            Seu próximo sabor favorito está esperando por você.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-mute sm:text-lg">
            Canolli, pasta fresca e doces do cardápio. Passe na {restaurant.address} ou ligue para pedir.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ButtonLink href="#cardapio" className="w-full sm:w-auto">
              Ver cardápio
            </ButtonLink>
            <ButtonLink href={restaurant.instagramUrl} variant="secondary" external className="w-full gap-2 sm:w-auto">
              <Instagram className="h-4 w-4" aria-hidden="true" />
              Instagram
            </ButtonLink>
            <ButtonLink href={restaurant.whatsappUrl} variant="secondary" external className="w-full sm:w-auto">
              WhatsApp
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  )
}
