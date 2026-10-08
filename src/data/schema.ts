import { categories } from './menu'
import { hours, restaurant } from './restaurant'

const schemaDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

export function buildSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Bakery',
    name: restaurant.name,
    description:
      'Pasticceria com antipasti, molhos, focaccia, pasta fresca e dolci. Rua Itaipu, 500.',
    telephone: restaurant.phoneSchema,
    servesCuisine: ['Italiana', 'Siciliana'],
    currenciesAccepted: 'BRL',
    address: {
      '@type': 'PostalAddress',
      streetAddress: restaurant.address,
      addressCountry: 'BR',
    },
    sameAs: [restaurant.instagramUrl],
    openingHoursSpecification: hours
      .filter((entry) => entry.opens && entry.closes)
      .map((entry) => ({
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: schemaDays[entry.dayIndex],
        opens: entry.opens,
        closes: entry.closes,
      })),
    hasMenu: {
      '@type': 'Menu',
      name: 'Cardápio La Siciliana',
      description: restaurant.portionNote,
      hasMenuSection: categories.map((category) => ({
        '@type': 'MenuSection',
        name: category.title,
        hasMenuItem: category.items.map((item) => ({
          '@type': 'MenuItem',
          name: item.name,
          ...(item.description || item.note
            ? { description: [item.note, item.description].filter(Boolean).join('. ') }
            : {}),
          offers: {
            '@type': 'Offer',
            price: item.price.replace(',', '.'),
            priceCurrency: 'BRL',
          },
        })),
      })),
    },
  }
}
