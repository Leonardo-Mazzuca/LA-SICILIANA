import { useEffect, useState } from 'react'
import { restaurant } from '@/data/restaurant'
import { BackgroundGradient } from './ui/background-gradient'
import { Spotlight } from './ui/spotlight'
import { TextGenerateEffect } from './ui/text-generate-effect'
import { ButtonLink } from './ui/button'
import canolli from '../../imgs/canole.jpeg'

function useDesktopMotion() {
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const query = window.matchMedia('(min-width: 1024px)')
    const update = () => setEnabled(query.matches)
    update()
    query.addEventListener('change', update)
    return () => query.removeEventListener('change', update)
  }, [])

  return enabled
}

export function Hero() {
  const animateFrame = useDesktopMotion()

  return (
    <section id="inicio" className="relative overflow-hidden px-4 pb-16 pt-24 sm:px-6 lg:pb-24 lg:pt-32">
      <Spotlight className="-left-24 -top-24 hidden lg:block" />
      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-gold">
            Sabor · tradição · experiência
          </p>
          <TextGenerateEffect
            words="O sabor da Sicília em cada detalhe."
            className="mt-4 max-w-xl text-[2.55rem] font-medium leading-[1.05] text-ink sm:text-6xl lg:text-7xl"
          />
          <p className="mt-6 max-w-md text-base leading-relaxed text-mute sm:text-lg">
            Pasticceria com massas frescas, antepastos, focaccia e doces. {restaurant.address}.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#cardapio" className="w-full sm:w-auto">
              Ver cardápio
            </ButtonLink>
            <ButtonLink href="#sobre" variant="secondary" className="w-full sm:w-auto">
              Conheça a La Siciliana
            </ButtonLink>
          </div>
        </div>

        <figure>
          <BackgroundGradient animate={animateFrame} className="overflow-hidden rounded-[1.55rem] bg-paper">
            <img
              src={canolli}
              alt="Canollis com creme e açúcar de confeiteiro"
              width={1080}
              height={1080}
              fetchPriority="high"
              decoding="async"
              className="aspect-[4/3] w-full object-cover lg:aspect-[4/5]"
            />
          </BackgroundGradient>
          <figcaption className="mt-3 text-sm text-mute">Canolli · R$ 11,90</figcaption>
        </figure>
      </div>
    </section>
  )
}
