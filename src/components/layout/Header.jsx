import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { NAV_ITEMS } from '../../constants/nav'
import { useActiveSection } from '../../hooks/useActiveSection'
import logoUlysse from '../../assets/logo-ulysse.png'

const sectionIds = NAV_ITEMS.map((n) => n.id)

/**
 * Fixed header with transparent-to-frosted-glass transition on scroll.
 * Desktop: inline nav — Mobile: slide-in drawer.
 */
export default function Header() {
  const [scrolled, setScrolled]     = useState(false)
  const [menuOpen, setMenuOpen]     = useState(false)
  const activeId                    = useActiveSection(sectionIds, 0.35)

  // Track scroll to change header background
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Prevent body scroll while mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const scrollTo = (id) => {
    setMenuOpen(false)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-16 transition-all duration-500"
        style={{
          height: scrolled ? '64px' : '80px',
          backgroundColor: scrolled ? 'rgba(255,250,241,0.90)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(4,62,145,0.08)' : 'none',
        }}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Logo / Wordmark */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex flex-col leading-none cursor-pointer select-none"
          style={{ background: 'none', border: 'none', padding: 0 }}
        >
          <span
            style={{
              fontFamily: '"Cinzel", "Trajan Pro", Georgia, serif',
              fontSize: 'clamp(1.15rem, 2vw, 1.45rem)',
              fontWeight: 700,
              color: '#043e91',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
            }}
          >
            ULYΣSE
          </span>
          <span
            style={{
              fontFamily: '"Cormorant Garamond", Georgia, serif',
              fontSize: '0.6rem',
              fontStyle: 'italic',
              fontWeight: 400,
              color: '#043e91',
              letterSpacing: '0.22em',
              opacity: 0.55,
              marginTop: '1px',
            }}
          >
            Le Voyage des Saveurs
          </span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-10">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="cursor-pointer group"
              style={{ background: 'none', border: 'none', padding: 0 }}
            >
              <span
                className="relative inline-block"
                style={{
                  fontFamily: '"Cormorant Garamond", Georgia, serif',
                  fontSize: 'clamp(0.95rem, 1.1vw, 1.15rem)',
                  fontStyle: 'italic',
                  letterSpacing: '0.04em',
                  color: '#043e91',
                  opacity: activeId === item.id ? 1 : 0.5,
                  transition: 'opacity 0.25s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = '1'
                  e.currentTarget.querySelector('.underline-bar').style.transform = 'scaleX(1)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = activeId === item.id ? '1' : '0.5'
                  e.currentTarget.querySelector('.underline-bar').style.transform = activeId === item.id ? 'scaleX(1)' : 'scaleX(0)'
                }}
              >
                {item.label}
                <span
                  className="underline-bar"
                  style={{
                    display: 'block',
                    height: '1px',
                    background: '#043e91',
                    transform: activeId === item.id ? 'scaleX(1)' : 'scaleX(0)',
                    transformOrigin: 'left',
                    transition: 'transform 0.3s ease',
                    marginTop: '1px',
                    opacity: 0.4,
                  }}
                />
              </span>
            </button>
          ))}
        </nav>

        {/* Mobile burger */}
        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="md:hidden p-2 cursor-pointer"
          aria-label="Toggle menu"
          style={{ background: 'none', border: 'none', color: '#043e91' }}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col justify-center items-center"
            style={{ backgroundColor: '#FFFAF1' }}
            initial={{ opacity: 0, clipPath: 'circle(0% at calc(100% - 40px) 40px)' }}
            animate={{ opacity: 1, clipPath: 'circle(150% at calc(100% - 40px) 40px)' }}
            exit={{ opacity: 0, clipPath: 'circle(0% at calc(100% - 40px) 40px)' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <nav className="flex flex-col items-center gap-8">
              {NAV_ITEMS.map((item, i) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="cursor-pointer"
                  style={{
                    fontFamily: '"Cormorant Garamond", Georgia, serif',
                    fontSize: 'clamp(2.2rem, 8vw, 3.5rem)',
                    fontWeight: 400,
                    color: '#043e91',
                    background: 'none',
                    border: 'none',
                    letterSpacing: '0.04em',
                    opacity: activeId === item.id ? 1 : 0.4,
                  }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: activeId === item.id ? 1 : 0.4, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.07, ease: [0.16, 1, 0.3, 1], duration: 0.6 }}
                >
                  {item.label}
                </motion.button>
              ))}
            </nav>

            {/* Logo at bottom of drawer */}
            <motion.img
              src={logoUlysse}
              alt="Ulysse"
              className="absolute bottom-12"
              style={{ height: '140px', width: '140px', objectFit: 'contain', borderRadius: '50%', opacity: 0.35 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.35 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
