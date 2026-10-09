import juliano from '../../imgs/juliano.png'
import { Reveal } from './Reveal'

export function Experience() {
  return (
    <section id="experiencia" className="px-4 py-20 sm:px-6 md:py-28" aria-labelledby="experiencia-titulo">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <img
            src={juliano}
            alt="Juliano, responsável pela La Siciliana, na cozinha"
            width={640}
            height={640}
            loading="lazy"
            decoding="async"
            className="aspect-[4/5] w-full rounded-[2rem] object-cover object-[center_18%] shadow-card sm:aspect-[5/4] lg:aspect-[4/5]"
          />
        </Reveal>
        <Reveal delay={0.08}>
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-gold">A experiência</p>
          <h2 id="experiencia-titulo" className="mt-3 font-serif text-4xl leading-[1.08] text-ink sm:text-5xl">
            Ciao a tutti
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-mute sm:text-lg">
            <p>O responsável pela La Siciliana é o Juliano.</p>
            <p>
              É um apaixonado pela cultura italiana, e sobretudo pela Gastronomia Italiana, atuando
              profissionalmente desde 2005 com experiência em cozinhas na Itália, Espanha, Alemanha e Brasil.
            </p>
            <p>
              Os primeiros passos foram em Milão, onde descobriu a cozinha. Na Europa, ainda passou por
              Barcelona e Munich, porém sempre com cozinha italiana. No Brasil chefiou cozinhas em São Paulo,
              Salvador e Balneário Camboriú.
            </p>
            <p>
              Desde 2024 se dedica à La Siciliana, uma pequena Confeitaria Italiana, onde produz Doces típicos
              Italianos, Antepastos, Massas e molhos, seguindo receitas clássicas italianas.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
