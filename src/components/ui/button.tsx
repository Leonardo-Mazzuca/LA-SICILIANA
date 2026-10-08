import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

const variants = {
  primary: 'bg-brand text-white hover:bg-brand-dark',
  secondary: 'bg-transparent text-ink ring-1 ring-ink/15 hover:ring-brand hover:text-brand',
  light: 'bg-white text-ink hover:bg-cream',
  lightOutline: 'bg-transparent text-white ring-1 ring-white/75 hover:bg-white/10',
}

type ButtonLinkProps = {
  href: string
  children: ReactNode
  variant?: keyof typeof variants
  className?: string
  external?: boolean
  onClick?: () => void
}

export function ButtonLink({
  href,
  children,
  variant = 'primary',
  className,
  external = false,
  onClick,
}: ButtonLinkProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={cn(
        'inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-medium tracking-wide transition-colors',
        variants[variant],
        className,
      )}
      {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
    >
      {children}
    </a>
  )
}
