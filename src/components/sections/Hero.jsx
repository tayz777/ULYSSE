import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import Button from '../ui/Button'

const WORD_VARIANTS = {
  hidden:  { y: '110%', opacity: 0 },
  visible: (i) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.4 + i * 0.12,
      duration: 1,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
}

const TAGLINE = ['Cuisine', "méditerranéenne ", 'authentique ']

/**
 * Full-viewport hero section with parallax background text and animated headline.
 */
export default function Hero() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })

  // Parallax on the big background word
  const bgY   = useTransform(scrollYProgress, [0, 1], [0, 180])
  const fadeY = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  const scrollToNext = () => {
    document.getElementById('propositions')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      ref={sectionRef}
      id="accueil"
      aria-label="Ulysse Traiteur — Traiteur à domicile Cannes & Côte d'Azur"
      className="relative min-h-screen flex flex-col justify-end overflow-hidden"
      style={{ backgroundColor: '#FFFAF1' }}
    >
      {/* SEO — texte visible par Google, invisible visuellement */}
      <p
        style={{
          position: 'absolute',
          width: '1px',
          height: '1px',
          padding: 0,
          margin: '-1px',
          overflow: 'hidden',
          clip: 'rect(0,0,0,0)',
          whiteSpace: 'nowrap',
          border: 0,
        }}
      >
        Ulysse Traiteur — Traiteur à domicile à Cannes et sur la Côte d&apos;Azur. Chef Aldo propose une cuisine méditerranéenne authentique pour mariages, réceptions privées, événements corporate et dîners prestige. Zone d&apos;intervention : Cannes, Antibes, Nice, Mougins, Grasse, Monaco, Juan-les-Pins, Vallauris, Mandelieu, Le Cannet. Traiteur 06 — Alpes-Maritimes — PACA. Options halal, végétariennes, véganes et sans gluten disponibles. Devis gratuit au +33 6 26 97 50 72.
      </p>
      {/* Large background word — purely decorative */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        {/* Mobile: sized to fit the viewport */}
        <span
          className="block md:hidden"
          style={{
            fontFamily: '"Cinzel", "Trajan Pro", Georgia, serif',
            fontSize: 'clamp(3.8rem, 19vw, 6rem)',
            fontWeight: 700,
            color: 'rgba(4,62,145,0.09)',
            letterSpacing: '0.12em',
            whiteSpace: 'nowrap',
            lineHeight: 1,
            textTransform: 'uppercase',
          }}
        >
          ULYΣSE
        </span>
        {/* Desktop: large decorative */}
        <span
          className="hidden md:block"
          style={{
            fontFamily: '"Cinzel", "Trajan Pro", Georgia, serif',
            fontSize: 'clamp(10rem, 28vw, 26rem)',
            fontWeight: 700,
            color: 'rgba(4,62,145,0.04)',
            letterSpacing: '0.12em',
            whiteSpace: 'nowrap',
            lineHeight: 1,
            textTransform: 'uppercase',
          }}
        >
          ULYΣSE
        </span>
      </motion.div>

      {/* Thin horizontal line top */}
      <motion.div
        className="absolute top-0 left-0 h-px"
        style={{ backgroundColor: 'rgba(4,62,145,0.15)' }}
        initial={{ width: 0 }}
        animate={{ width: '100%' }}
        transition={{ duration: 1.4, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      />

      {/* Main content */}
      <motion.div
        className="relative z-10 px-8 md:px-16 pb-20 pt-40 max-w-7xl mx-auto w-full"
        style={{ opacity: fadeY }}
      >
        {/* Eyebrow */}
        <motion.p
          className="text-xs font-medium tracking-[0.3em] uppercase mb-10 opacity-50"
          style={{ color: '#043e91' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.5, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Chef à domicile — Cannes & Côte d'Azur
        </motion.p>

        {/* Animated headline */}
        <h1
          className="mb-12"
          style={{
            fontFamily: '"Cormorant Garamond", Georgia, serif',
            fontSize: 'clamp(3.8rem, 10vw, 9rem)',
            fontWeight: 400,
            lineHeight: 0.92,
            letterSpacing: '-0.02em',
            color: '#043e91',
            overflow: 'hidden',
          }}
        >
          {TAGLINE.map((word, i) => (
            <span
              key={i}
              className="block overflow-hidden"
            >
              <motion.span
                className="block"
                custom={i}
                variants={WORD_VARIANTS}
                initial="hidden"
                animate="visible"
              >
                {i === 1 ? (
                  <em style={{ fontStyle: 'italic', fontWeight: 300 }}>{word}</em>
                ) : (
                  word
                )}
              </motion.span>
            </span>
          ))}
        </h1>

        {/* Bottom row: CTA + scroll hint */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <Button
              variant="primary"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Demander un devis
            </Button>
          </motion.div>

          <motion.p
            className="text-xs opacity-40 leading-relaxed max-w-xs"
            style={{ color: '#043e91' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            Une cuisine née du voyage, au croisement des cultures méditerranéennes.
          </motion.p>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40 hover:opacity-80 transition-opacity duration-300 cursor-pointer"
        style={{ background: 'none', border: 'none', color: '#043e91' }}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 0.4, y: 0 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        aria-label="Scroll vers le bas"
      >
        <span className="text-[10px] tracking-[0.25em] uppercase">Découvrir</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={14} />
        </motion.div>
      </motion.button>

      {/* Bottom divider */}
      <motion.div
        className="absolute bottom-0 left-0 h-px"
        style={{ backgroundColor: 'rgba(4,62,145,0.12)' }}
        initial={{ width: 0 }}
        animate={{ width: '100%' }}
        transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
      />
    </section>
  )
}
