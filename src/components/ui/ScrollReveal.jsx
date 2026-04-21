import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const VARIANTS = {
  hidden:  { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0  },
}

/**
 * Wraps children in a Framer Motion div that fades + slides in when scrolled into view.
 *
 * @param {object} props
 * @param {React.ReactNode} props.children
 * @param {number}  [props.delay=0]       - Stagger delay in seconds
 * @param {string}  [props.className]     - Extra Tailwind classes
 * @param {number}  [props.threshold=0.2] - Viewport visibility threshold
 */
export default function ScrollReveal({
  children,
  delay = 0,
  className = '',
  threshold = 0.2,
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: threshold })

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={VARIANTS}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  )
}
