import { galleryImages } from '@/data/gallery'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function Gallery() {
  return (
    <section id="galeria" className="px-4 py-20 sm:px-6 md:py-28" aria-labelledby="galeria-titulo">
      <div className="mx-auto w-full max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow="Galeria"
            title="Uma experiência que começa pelos olhos."
            id="galeria-titulo"
          />
        </Reveal>
        <div className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3">
          {galleryImages.map((image) => (
            <figure key={image.alt} className="mb-4 break-inside-avoid">
              <div className="overflow-hidden rounded-3xl bg-paper shadow-card">
                <img
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  loading="lazy"
                  decoding="async"
                  className="w-full object-cover transition-transform duration-500 ease-out hover:scale-[1.03]"
                />
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
