import { useState } from 'react'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { CTA } from './components/CTA'
import { Footer } from './components/Footer'
import { Gallery } from './components/Gallery'
import { Hero } from './components/Hero'
import { Highlights } from './components/Highlights'
import { Menu } from './components/Menu'
import { MobileBar } from './components/MobileBar'
import { Navbar } from './components/Navbar'
import { Reviews } from './components/Reviews'
import { buildSchema } from './data/schema'

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildSchema()).replace(/</g, '\\u003c') }}
      />
      <a
        href="#inicio"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[80] focus:rounded-full focus:bg-paper focus:px-4 focus:py-2"
      >
        Ir para o conteúdo
      </a>
      <Navbar open={menuOpen} setOpen={setMenuOpen} />
      <main>
        <Hero />
        <Highlights />
        <Menu />
        <About />
        <Reviews />
        <Gallery />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <MobileBar hidden={menuOpen} />
    </>
  )
}
