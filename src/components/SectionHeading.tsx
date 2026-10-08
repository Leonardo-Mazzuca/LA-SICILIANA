type SectionHeadingProps = {
  eyebrow: string
  title: string
  id: string
  text?: string
}

export function SectionHeading({ eyebrow, title, id, text }: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      <p className="text-xs font-medium uppercase tracking-[0.22em] text-gold">{eyebrow}</p>
      <h2 id={id} className="mt-3 font-serif text-4xl leading-[1.08] text-ink sm:text-5xl">
        {title}
      </h2>
      {text ? <p className="mt-4 text-base leading-relaxed text-mute sm:text-lg">{text}</p> : null}
    </div>
  )
}
