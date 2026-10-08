import type { ReactNode } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { cn } from '@/lib/utils'

type BackgroundGradientProps = {
  children: ReactNode
  className?: string
  containerClassName?: string
  animate?: boolean
}

export function BackgroundGradient({
  children,
  className,
  containerClassName,
  animate = true,
}: BackgroundGradientProps) {
  const reduce = useReducedMotion()
  const shouldAnimate = animate && !reduce

  return (
    <div className={cn('relative p-[3px]', containerClassName)}>
      <motion.div
        initial={{ backgroundPosition: '0% 50%' }}
        animate={
          shouldAnimate ? { backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] } : undefined
        }
        transition={
          shouldAnimate ? { duration: 10, repeat: Infinity, repeatType: 'reverse', ease: 'linear' } : undefined
        }
        style={{ backgroundSize: '280% 280%' }}
        className="absolute inset-0 rounded-[1.7rem] bg-[radial-gradient(circle_farthest-side_at_0_100%,#C6A15B,transparent),radial-gradient(circle_farthest-side_at_100%_0,#A3202C,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#E7D7B1,transparent),radial-gradient(circle_farthest-side_at_0_0,#6E2428,#F4F0E8)]"
      />
      <div className={cn('relative z-10', className)}>{children}</div>
    </div>
  )
}
