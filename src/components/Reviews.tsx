import { googleRating, reviews } from '@/data/reviews'
import { restaurant } from '@/data/restaurant'
import { ReviewCard } from './ReviewCard'
import { SectionHeading } from './SectionHeading'
import { ButtonLink } from './ui/button'

export function Reviews() {
  return (
    <section id="avaliacoes" className="px-4 py-20 sm:px-6 md:py-28" aria-labelledby="avaliacoes-titulo">
      <div className="mx-auto w-full max-w-7xl">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Google"
            title="Quem prova, recomenda."
            id="avaliacoes-titulo"
            text={`${googleRating.score} de 5, em ${googleRating.count} avaliações no Google.`}
          />
          <ButtonLink href={restaurant.mapsUrl} variant="secondary" external className="shrink-0">
            Ver no Google
          </ButtonLink>
        </div>

        <div className="mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 md:grid md:grid-cols-2 md:overflow-visible lg:grid-cols-3">
          {reviews.map((review) => (
            <div key={review.id} className="w-[min(85vw,22rem)] shrink-0 snap-start md:w-auto">
              <ReviewCard review={review} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
