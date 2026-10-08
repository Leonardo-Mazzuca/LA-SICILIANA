import { Star } from 'lucide-react'
import type { Review } from '@/data/reviews'

type ReviewCardProps = {
  review: Review
}

export function ReviewCard({ review }: ReviewCardProps) {
  return (
    <figure className="flex h-full flex-col rounded-3xl border border-line bg-paper p-6 shadow-card">
      <div className="flex gap-0.5" aria-label={`${review.rating} de 5 estrelas no Google`}>
        {Array.from({ length: 5 }, (_, index) => (
          <Star
            key={index}
            className={index < review.rating ? 'h-4 w-4 fill-gold text-gold' : 'h-4 w-4 text-line'}
            aria-hidden="true"
          />
        ))}
      </div>
      <blockquote className="mt-4 flex-1 text-base leading-relaxed text-ink">“{review.text}”</blockquote>
      <figcaption className="mt-6 text-sm text-mute">
        <span className="font-medium text-ink">{review.name}</span>
        <span className="mt-1 block">Google</span>
      </figcaption>
    </figure>
  )
}
