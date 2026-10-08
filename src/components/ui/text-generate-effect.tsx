import { motion, useReducedMotion } from 'framer-motion'
import { cn } from '@/lib/utils'

type TextGenerateEffectProps = {
  words: string
  className?: string
  duration?: number
}

export function TextGenerateEffect({ words, className, duration = 0.35 }: TextGenerateEffectProps) {
  const reduce = useReducedMotion()
  const wordsArray = words.split(' ')

  if (reduce) {
    return <h1 className={cn('font-serif text-balance', className)}>{words}</h1>
  }

  return (
    <h1 className={cn('font-serif text-balance', className)}>
      {wordsArray.map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          className="inline-block"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration, delay: index * 0.045, ease: [0.22, 1, 0.36, 1] }}
        >
          {word}
          {index < wordsArray.length - 1 ? '\u00A0' : ''}
        </motion.span>
      ))}
    </h1>
  )
}
