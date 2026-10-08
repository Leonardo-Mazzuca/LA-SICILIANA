export const restaurant = {
  name: 'La Siciliana',
  kind: 'Pasticceria',
  phoneDisplay: '(11) 93483-3571',
  phoneHref: 'tel:+5511934833571',
  phoneSchema: '+55-11-93483-3571',
  address: 'Rua Itaipu 500',
  instagramUrl: 'https://www.instagram.com/lasiciliana25/',
  instagramHandle: '@lasiciliana25',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=La%20Siciliana%20Pasticceria%20Rua%20Itaipu%20500',
  portionNote: 'Massas 500 g / Molhos 500 g / Antepastos 200 g',
} as const

export type HoursEntry = {
  dayIndex: number
  day: string
  opens: string | null
  closes: string | null
  label: string
}

export const hours: HoursEntry[] = [
  { dayIndex: 1, day: 'Segunda-feira', opens: null, closes: null, label: 'Fechado' },
  { dayIndex: 2, day: 'Terça-feira', opens: '12:30', closes: '17:30', label: '12:30 às 17:30' },
  { dayIndex: 3, day: 'Quarta-feira', opens: '10:00', closes: '17:30', label: '10:00 às 17:30' },
  { dayIndex: 4, day: 'Quinta-feira', opens: '10:00', closes: '17:30', label: '10:00 às 17:30' },
  { dayIndex: 5, day: 'Sexta-feira', opens: '10:00', closes: '18:00', label: '10:00 às 18:00' },
  { dayIndex: 6, day: 'Sábado', opens: '09:00', closes: '17:00', label: '09:00 às 17:00' },
  { dayIndex: 0, day: 'Domingo', opens: '09:00', closes: '13:00', label: '09:00 às 13:00' },
]

const weekdayIndex: Record<string, number> = {
  Sun: 0,
  Mon: 1,
  Tue: 2,
  Wed: 3,
  Thu: 4,
  Fri: 5,
  Sat: 6,
}

export function getSaoPauloClock(date = new Date()) {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/Sao_Paulo',
    weekday: 'short',
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23',
  }).formatToParts(date)

  const weekday = parts.find((part) => part.type === 'weekday')?.value ?? 'Sun'
  const hour = Number(parts.find((part) => part.type === 'hour')?.value ?? '0')
  const minute = Number(parts.find((part) => part.type === 'minute')?.value ?? '0')

  return {
    dayIndex: weekdayIndex[weekday] ?? 0,
    minutes: (hour % 24) * 60 + minute,
  }
}

export function isOpenAt(dayIndex: number, minutes: number) {
  const today = hours.find((entry) => entry.dayIndex === dayIndex)
  if (!today?.opens || !today.closes) return false

  const [openHour, openMinute] = today.opens.split(':').map(Number)
  const [closeHour, closeMinute] = today.closes.split(':').map(Number)
  const start = openHour * 60 + openMinute
  const end = closeHour * 60 + closeMinute

  return minutes >= start && minutes < end
}

export const navItems = [
  { href: '#inicio', label: 'Início' },
  { href: '#cardapio', label: 'Cardápio' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#galeria', label: 'Galeria' },
  { href: '#contato', label: 'Contato' },
] as const
