import canolliImage from '../../imgs/canole-3.jpeg'
import strudelImage from '../../imgs/shawarma.jpeg'
import tiramisuImage from '../assets/tiramisu.jpg'
import pastieraImage from '../../imgs/torta.jpeg'
import caponataImage from '../assets/caponata.jpg'
import menuScan from '../../imgs/cardapio.jpeg'

export type MenuItem = {
  id: string
  name: string
  price: string
  note?: string
  description?: string
  image?: string
  imageAlt?: string
}

export type MenuCategory = {
  id: string
  title: string
  items: MenuItem[]
}

const canolli: MenuItem = {
  id: 'canolli',
  name: 'Canolli',
  price: '11,90',
  description: 'Massa frita com creme e açúcar de confeiteiro.',
  image: canolliImage,
  imageAlt: 'Canollis com creme, amêndoas e granulado, na caixa',
}

const strudel: MenuItem = {
  id: 'strudel',
  name: 'Strudel',
  price: '11,90',
  description: 'Massa folhada recheada, com uvas-passas.',
  image: strudelImage,
  imageAlt: 'Strudel cortado, com recheio e uvas-passas',
}

const tiramisu: MenuItem = {
  id: 'tiramisu',
  name: 'Tiramisu',
  price: '14,90',
  description: 'Creme e cacau, servido no pote.',
  image: tiramisuImage,
  imageAlt: 'Tiramisu no pote da La Siciliana, com cacau e colher',
}

const pastiera: MenuItem = {
  id: 'pastiera-di-grano',
  name: 'Pastiera di Grano',
  price: '12,90',
  note: 'Fatia',
  description: 'Com açúcar de confeiteiro e frutas cristalizadas.',
  image: pastieraImage,
  imageAlt: 'Pastiera di grano com açúcar de confeiteiro e frutas cristalizadas',
}

const caponata: MenuItem = {
  id: 'caponata',
  name: 'Caponata',
  price: '25,90',
  description: 'Antepasto de legumes.',
  image: caponataImage,
  imageAlt: 'Porções de caponata em potes da La Siciliana',
}

export const categories: MenuCategory[] = [
  {
    id: 'antipasti',
    title: 'Antipasti',
    items: [
      { id: 'alichella', name: 'Alichella', price: '31,90' },
      { id: 'sardela', name: 'Sardela', price: '31,90' },
      caponata,
      { id: 'zucchini', name: 'Zucchini', price: '25,90' },
      { id: 'quiche', name: 'Quiche', price: '45,90', note: '600 g' },
    ],
  },
  {
    id: 'molhos',
    title: 'Molhos',
    items: [
      { id: 'pomodoro-e-basilico', name: 'Pomodoro e Basilico', price: '39,90' },
      { id: 'bechamel', name: 'Bechamel', price: '29,90' },
      { id: 'ragu-bolognese', name: 'Ragu Bolognese', price: '49,90' },
      { id: 'ragu-linguica', name: 'Ragu Linguiça', price: '45,90' },
    ],
  },
  {
    id: 'focaccia',
    title: 'Focaccia',
    items: [
      { id: 'pomodorini', name: 'Pomodorini', price: '19,50' },
      { id: 'olive-nere', name: 'Olive Nere', price: '20,50' },
      { id: 'alecrim-e-sal', name: 'Alecrim e Sal', price: '15,90' },
    ],
  },
  {
    id: 'pasta-fresca',
    title: 'Pasta fresca',
    items: [
      { id: 'ravioli-ricota-espinafre', name: 'Ravioli Ricota e Espinafre', price: '42,00' },
      { id: 'ravioli-4-formaggi', name: 'Ravioli 4 Formaggi', price: '45,00' },
      { id: 'ravioli-mozzarela', name: 'Ravioli Mozzarela', price: '42,00' },
      { id: 'capeletti-carne', name: 'Capeletti Carne', price: '42,00' },
      { id: 'cannelloni-ricota-espinafre', name: 'Cannelloni Ricota e Espinafre', price: '42,00' },
      { id: 'girasole-bacalhau-batata', name: 'Girasole Bacalhau e Batata', price: '48,00' },
      { id: 'raviolone-salmao-ricota', name: 'Raviolone Salmão e Ricota', price: '48,00' },
      { id: 'rondelli-presunto-mozzarela', name: 'Rondelli Presunto Mozzarela', price: '45,90' },
      { id: 'lasanha-bolognese', name: 'Lasanha Bolognese', price: '79,90', note: '1 kg' },
      { id: 'pappardelle', name: 'Pappardelle', price: '32,00' },
      { id: 'tagliatelle', name: 'Tagliatelle', price: '32,00' },
    ],
  },
  {
    id: 'dolci',
    title: 'Dolci',
    items: [
      canolli,
      strudel,
      tiramisu,
      pastiera,
      { id: 'dolce-do-mes', name: 'Dolce do Mês', price: '14,90' },
      { id: 'granita', name: 'Granita', price: '14,90' },
    ],
  },
]

export const featured: MenuItem[] = [canolli, strudel, tiramisu, pastiera, caponata]

export const menuScanImage = menuScan

export function formatPrice(price: string) {
  return `R$\u00A0${price}`
}
