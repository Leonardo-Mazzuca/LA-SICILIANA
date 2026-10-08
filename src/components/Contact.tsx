import { Clock, Instagram, MapPin, Phone, UtensilsCrossed } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import type { ReactNode } from 'react'
import { useMemo } from 'react'
import { getSaoPauloClock, hours, isOpenAt, restaurant } from '@/data/restaurant'
import { cn } from '@/lib/utils'
import { ButtonLink } from './ui/button'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

function InfoRow({ icon: Icon, label, children }: { icon: LucideIcon; label: string; children: ReactNode }) {
  return (
    <div className="flex gap-4">
      <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold-soft text-brand">
        <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
      </span>
      <div>
        <p className="text-xs font-medium uppercase tracking-[0.16em] text-mute">{label}</p>
        <div className="mt-1 text-base leading-relaxed text-ink">{children}</div>
      </div>
    </div>
  )
}

export function Contact() {
  const status = useMemo(() => {
    const clock = getSaoPauloClock()
    return {
      dayIndex: clock.dayIndex,
      open: isOpenAt(clock.dayIndex, clock.minutes),
    }
  }, [])

  return (
    <section id="contato" className="px-4 py-20 sm:px-6 md:py-28" aria-labelledby="contato-titulo">
      <div className="mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
        <Reveal>
          <SectionHeading eyebrow="Contato" title="Localização e contato" id="contato-titulo" />
          <div className="mt-8 space-y-6">
            <InfoRow icon={MapPin} label="Endereço">
              {restaurant.address}
            </InfoRow>
            <InfoRow icon={Phone} label="Telefone">
              <a href={restaurant.phoneHref} className="underline decoration-line underline-offset-4 hover:text-brand">
                {restaurant.phoneDisplay}
              </a>
            </InfoRow>
            <InfoRow icon={Instagram} label="Instagram">
              <a
                href={restaurant.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="underline decoration-line underline-offset-4 hover:text-brand"
              >
                {restaurant.instagramHandle}
              </a>
            </InfoRow>
            <InfoRow icon={UtensilsCrossed} label="Cardápio">
              <a href="#cardapio" className="underline decoration-line underline-offset-4 hover:text-brand">
                Ver cardápio
              </a>
            </InfoRow>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ButtonLink href={restaurant.phoneHref}>Ligar</ButtonLink>
            <ButtonLink href={restaurant.mapsUrl} variant="secondary" external>
              Como chegar
            </ButtonLink>
            <ButtonLink href={restaurant.instagramUrl} variant="secondary" external>
              Instagram
            </ButtonLink>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="rounded-3xl border border-line bg-paper p-6 shadow-card sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h3 className="flex items-center gap-2 font-serif text-3xl text-ink">
                <Clock className="h-6 w-6 text-brand" aria-hidden="true" />
                Horários
              </h3>
              <span
                className={cn(
                  'inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium',
                  status.open ? 'bg-gold-soft text-ink' : 'bg-ink/5 text-mute',
                )}
              >
                <span className={cn('h-1.5 w-1.5 rounded-full', status.open ? 'bg-brand' : 'bg-mute')} />
                {status.open ? 'Aberto agora' : 'Fechado agora'}
              </span>
            </div>
            <ul className="mt-6">
              {hours.map((entry) => {
                const today = entry.dayIndex === status.dayIndex
                return (
                  <li
                    key={entry.day}
                    className={cn(
                      'flex items-baseline justify-between gap-4 border-b border-line py-3 text-base',
                      today && 'font-medium',
                    )}
                  >
                    <span>
                      {entry.day}
                      {today ? <span className="ml-2 text-xs uppercase tracking-[0.14em] text-gold">Hoje</span> : null}
                    </span>
                    <span className="shrink-0 tabular-nums text-mute">{entry.label}</span>
                  </li>
                )
              })}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
