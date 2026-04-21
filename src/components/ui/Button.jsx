import { motion } from 'framer-motion'

/**
 * Reusable button with two variants: 'primary' and 'outline'.
 *
 * @param {object}   props
 * @param {'primary'|'outline'} [props.variant='primary']
 * @param {string}   [props.className]
 * @param {Function} [props.onClick]
 * @param {React.ReactNode} props.children
 * @param {string}   [props.href]       - Renders as <a> when provided
 * @param {string}   [props.type]       - HTML button type
 */
export default function Button({
  children,
  variant = 'primary',
  className = '',
  onClick,
  href,
  type = 'button',
}) {
  const base =
    'inline-flex items-center gap-2 px-8 py-4 text-sm font-medium tracking-[0.15em] uppercase transition-all duration-300 cursor-pointer'

  const styles = {
    primary:
      `${base} bg-[#043e91] text-[#FFFAF1] hover:bg-[#022a61] ${className}`,
    outline:
      `${base} border border-[#043e91] text-[#043e91] hover:bg-[#043e91] hover:text-[#FFFAF1] ${className}`,
  }

  const Tag = href ? motion.a : motion.button

  return (
    <Tag
      href={href}
      type={href ? undefined : type}
      onClick={onClick}
      className={styles[variant]}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </Tag>
  )
}
