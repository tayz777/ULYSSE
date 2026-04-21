import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import ScrollReveal from '../ui/ScrollReveal'

const MENUS = [
  {
    id: 'decouverte',
    label: 'Menu Découverte',
    price: '59 €',
    subtitle: 'Entrée, plat et dessert au choix',
    items: [
      { heading: 'Entrée', lines: ['Assortiment de 8 entrées / mezzés froids et chauds'] },
      {
        heading: 'Un plat',
        lines: [
          'Volaille fermière',
          'Bœuf de qualité',
          'Risotto de saison',
          'Pâtes fraîches aux saveurs du moment',
        ],
      },
      { heading: null, lines: ['Un accompagnement'] },
      { heading: null, lines: ['Un dessert'] },
      { heading: null, lines: ['Café ou thé'] },
      { heading: null, lines: ['Sélection de pains'] },
    ],
  },
  {
    id: 'signature',
    label: 'Menu Signature',
    price: '69 €',
    subtitle: 'Entrée, plat et dessert au choix',
    items: [
      { heading: 'Entrée', lines: ['Assortiment de 9 entrées / mezzés froids et chauds'] },
      {
        heading: 'Un plat',
        lines: [
          'Viandes sélectionnées (Volaille fermière, bœuf de qualité, agneau de Sisteron)',
          'Poisson frais selon arrivage',
          'Risotto de saison',
          'Pâtes fraîches aux saveurs du moment',
        ],
      },
      { heading: null, lines: ['Un accompagnement'] },
      { heading: null, lines: ['Un dessert'] },
      { heading: null, lines: ['Café ou thé'] },
      { heading: null, lines: ['Sélection de pains'] },
    ],
  },
  {
    id: 'prestige',
    label: 'Menu Prestige',
    price: '79 €',
    subtitle: 'Entrée, plat et dessert au choix',
    items: [
      { heading: 'Entrée', lines: ['Assortiment de 10 entrées / mezzés froids et chauds'] },
      {
        heading: 'Un plat',
        lines: [
          'Pièces de viande d\'exception',
          'Poisson frais selon arrivage',
          'Risotto aux truffes ou morilles',
          'Pâtes aux fruits de mer',
        ],
      },
      { heading: null, lines: ['Un accompagnement'] },
      { heading: null, lines: ['Un dessert'] },
      { heading: null, lines: ['Café ou thé'] },
      { heading: null, lines: ['Sélection de pains'] },
    ],
  },
]

/**
 * "Menu" — tabbed menu section with animated content switching.
 */
export default function Menu() {
  const [idx, setIdx] = useState(0)
  const [dir, setDir] = useState(1) // 1 = forward, -1 = backward

  const menu = MENUS[idx]

  const go = (d) => {
    setDir(d)
    setIdx((prev) => (prev + d + MENUS.length) % MENUS.length)
  }

  return (
    <section
      id="menu"
      aria-label="Menus traiteur à domicile Cannes — Menu Découverte, Signature et Prestige"
      className="relative py-28 md:py-40 px-8 md:px-16 overflow-hidden"
      style={{ backgroundColor: '#043e91' }}
    >
      {/* Top wave */}
      <div className="absolute top-0 left-0 right-0 pointer-events-none select-none z-20" aria-hidden="true">
        <svg viewBox="0 0 1440 90" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: '90px' }} xmlns="http://www.w3.org/2000/svg">
          <path d="M0,0 L0,55 Q180,90 360,48 Q540,8 720,52 Q900,88 1080,42 Q1260,0 1440,50 L1440,0 Z" fill="#FFFAF1"/>
        </svg>
      </div>
      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none select-none z-20" aria-hidden="true">
        <svg viewBox="0 0 1440 90" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: '90px' }} xmlns="http://www.w3.org/2000/svg">
          <path d="M0,45 Q180,8 360,48 Q540,82 720,38 Q900,0 1080,44 Q1260,82 1440,35 L1440,90 L0,90 Z" fill="#FFFAF1"/>
        </svg>
      </div>
      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(to bottom, rgba(4,62,145,0.93) 0%, rgba(4,62,145,0.88) 50%, rgba(4,62,145,0.95) 100%)' }}
        aria-hidden="true"
      />

      {/* Layered wave backgrounds */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
        <svg viewBox="0 0 1440 600" preserveAspectRatio="none" style={{ position: 'absolute', top: '-10%', left: '-5%', width: '110%', height: '70%', opacity: 0.25 }}>
          <path d="M-20,200 Q200,80 460,220 T920,150 T1460,280 L1460,600 L-20,600 Z" fill="#032e6d" />
        </svg>
        <svg viewBox="0 0 1440 600" preserveAspectRatio="none" style={{ position: 'absolute', top: '15%', left: '0', width: '100%', height: '75%', opacity: 0.18 }}>
          <path d="M-20,300 Q300,120 600,260 T1200,180 T1460,310 L1460,600 L-20,600 Z" fill="#1a5bb5" />
        </svg>
        <svg viewBox="0 0 1440 600" preserveAspectRatio="none" style={{ position: 'absolute', bottom: '0', left: '-5%', width: '110%', height: '60%', opacity: 0.12 }}>
          <path d="M-20,250 Q350,380 700,220 T1460,340 L1460,600 L-20,600 Z" fill="#2d7bd4" />
        </svg>
        <svg viewBox="0 0 1440 400" preserveAspectRatio="none" style={{ position: 'absolute', top: '5%', right: '-5%', width: '100%', height: '50%', opacity: 0.20 }}>
          <path d="M1460,100 Q1100,250 800,130 T200,200 T-20,80 L-20,0 L1460,0 Z" fill="#021d4f" />
        </svg>
      </div>

      {/* Wordmark */}
      <div className="absolute top-[100px] right-8 md:top-12 md:right-16 z-30 pointer-events-none select-none flex flex-col items-end">
        <span style={{
          fontFamily: '"Cinzel", "Trajan Pro", Georgia, serif',
          fontSize: 'clamp(1.1rem, 1.6vw, 1.3rem)',
          fontWeight: 700,
          color: '#FFFAF1',
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          lineHeight: 1,
        }}>
          ULYΣSE
        </span>
        <span style={{
          fontFamily: '"Cormorant Garamond", Georgia, serif',
          fontSize: 'clamp(0.55rem, 1vw, 0.6rem)',
          fontStyle: 'italic',
          color: '#FFFAF1',
          letterSpacing: '0.18em',
          opacity: 0.6,
          marginTop: '4px',
        }}>
          Le Voyage des Saveurs
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <ScrollReveal>
            <p className="text-xs font-medium tracking-[0.25em] uppercase mb-4 opacity-60" style={{ color: '#FFFAF1' }}>
              Menu
            </p>
            <h2 style={{
              fontFamily: '"Cormorant Garamond", Georgia, serif',
              fontSize: 'clamp(2.8rem, 6vw, 5.5rem)',
              fontWeight: 400,
              lineHeight: 0.95,
              letterSpacing: '-0.02em',
              color: '#FFFAF1',
            }}>
              Les Menus
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-xs leading-relaxed opacity-50 md:max-w-xs" style={{ color: '#FFFAF1' }}>
              Renouvelée chaque trimestre en suivant les arrivages et les saisons, la carte est toujours discutée sur-mesure avec vous.
            </p>
          </ScrollReveal>
        </div>

        {/* Divider */}
        <div className="h-px mb-12" style={{ backgroundColor: 'rgba(255,250,241,0.12)' }} />

        {/* Navigation arrows + menu label */}
        <div className="flex items-center justify-between mb-10">
          <button
            onClick={() => go(-1)}
            className="flex items-center gap-2 cursor-pointer group"
            style={{ background: 'none', border: 'none', color: '#FFFAF1' }}
            aria-label="Menu précédent"
          >
            <ChevronLeft size={20} className="opacity-50 group-hover:opacity-100 transition-opacity" />
            <span className="text-[10px] tracking-[0.2em] uppercase opacity-40 group-hover:opacity-70 transition-opacity hidden sm:inline">
              Précédent
            </span>
          </button>

          {/* Center — dots indicator */}
          <div className="flex items-center gap-3">
            {MENUS.map((m, i) => (
              <button
                key={m.id}
                onClick={() => { setDir(i > idx ? 1 : -1); setIdx(i) }}
                className="cursor-pointer"
                style={{ background: 'none', border: 'none', padding: '4px' }}
                aria-label={m.label}
              >
                <div
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: i === idx ? '24px' : '6px',
                    height: '6px',
                    backgroundColor: '#FFFAF1',
                    opacity: i === idx ? 0.9 : 0.25,
                  }}
                />
              </button>
            ))}
          </div>

          <button
            onClick={() => go(1)}
            className="flex items-center gap-2 cursor-pointer group"
            style={{ background: 'none', border: 'none', color: '#FFFAF1' }}
            aria-label="Menu suivant"
          >
            <span className="text-[10px] tracking-[0.2em] uppercase opacity-40 group-hover:opacity-70 transition-opacity hidden sm:inline">
              Suivant
            </span>
            <ChevronRight size={20} className="opacity-50 group-hover:opacity-100 transition-opacity" />
          </button>
        </div>

        {/* Menu content — animated */}
        <AnimatePresence mode="wait" custom={dir}>
          <motion.div
            key={menu.id}
            custom={dir}
            initial={{ opacity: 0, x: dir * 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: dir * -60 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl mx-auto"
          >
            {/* Card */}
            <div
              className="relative rounded-sm px-8 py-10 sm:px-12 sm:py-14"
              style={{
                background: 'linear-gradient(135deg, rgba(255,250,241,0.06) 0%, rgba(255,250,241,0.02) 100%)',
                border: '1px solid rgba(255,250,241,0.10)',
                backdropFilter: 'blur(6px)',
              }}
            >
              {/* Menu name + price — centered */}
              <div className="text-center mb-3">
                <h3 style={{
                  fontFamily: '"Cormorant Garamond", Georgia, serif',
                  fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
                  fontWeight: 400,
                  fontStyle: 'italic',
                  color: '#FFFAF1',
                  lineHeight: 1.2,
                }}>
                  {menu.label}
                </h3>
              </div>

              <div className="text-center mb-2">
                <span style={{
                  fontFamily: '"Cinzel", Georgia, serif',
                  fontSize: 'clamp(1.6rem, 2.8vw, 2.2rem)',
                  fontWeight: 300,
                  color: '#FFFAF1',
                  opacity: 0.75,
                  letterSpacing: '0.08em',
                }}>
                  {menu.price}
                </span>
              </div>

              <p className="text-center text-xs tracking-[0.15em] uppercase opacity-40 mb-8" style={{ color: '#FFFAF1', fontFamily: '"Cormorant Garamond", Georgia, serif', fontStyle: 'italic', fontSize: '0.8rem' }}>
                {menu.subtitle}
              </p>

              {/* Decorative divider */}
              <div className="flex items-center justify-center gap-3 mb-10">
                <div className="h-px flex-1" style={{ backgroundColor: 'rgba(255,250,241,0.12)' }} />
                <span style={{ color: '#FFFAF1', opacity: 0.3, fontSize: '0.6rem' }}>✦</span>
                <div className="h-px flex-1" style={{ backgroundColor: 'rgba(255,250,241,0.12)' }} />
              </div>

              {/* Items */}
              <div className="space-y-7">
                {menu.items.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.06, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  >
                    {item.heading ? (
                      /* Section with heading (Entrée, Un plat) */
                      <div className="text-center">
                        <p className="tracking-[0.3em] uppercase mb-4" style={{
                          color: '#FFFAF1',
                          opacity: 0.55,
                          fontSize: '0.65rem',
                          fontWeight: 500,
                          letterSpacing: '0.3em',
                        }}>
                          — {item.heading} —
                        </p>
                        {item.lines.length === 1 ? (
                          <p style={{
                            fontFamily: '"Cormorant Garamond", Georgia, serif',
                            fontSize: 'clamp(1.05rem, 1.4vw, 1.2rem)',
                            color: '#FFFAF1',
                            opacity: 0.85,
                            lineHeight: 1.6,
                            fontStyle: 'italic',
                          }}>
                            {item.lines[0]}
                          </p>
                        ) : (
                          <div className="space-y-1.5">
                            {item.lines.map((line, j) => (
                              <p
                                key={j}
                                style={{
                                  fontFamily: '"Cormorant Garamond", Georgia, serif',
                                  fontSize: 'clamp(1rem, 1.3vw, 1.15rem)',
                                  color: '#FFFAF1',
                                  opacity: 0.8,
                                  lineHeight: 1.55,
                                }}
                              >
                                {line}
                              </p>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      /* Simple line item (Un accompagnement, Un dessert, etc.) */
                      <p className="text-center" style={{
                        fontFamily: '"Cormorant Garamond", Georgia, serif',
                        fontSize: 'clamp(1.05rem, 1.4vw, 1.2rem)',
                        color: '#FFFAF1',
                        opacity: 0.7,
                        lineHeight: 1.5,
                      }}>
                        {item.lines[0]}
                      </p>
                    )}

                    {/* Mini divider between sections (not after last) */}
                    {i < menu.items.length - 1 && (
                      <div className="flex justify-center mt-6">
                        <span style={{ color: '#FFFAF1', opacity: 0.15, fontSize: '0.4rem', letterSpacing: '0.5em' }}>· · ·</span>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Bottom ornament */}
              <div className="flex items-center justify-center gap-3 mt-10">
                <div className="h-px flex-1" style={{ backgroundColor: 'rgba(255,250,241,0.12)' }} />
                <span style={{ color: '#FFFAF1', opacity: 0.3, fontSize: '0.6rem' }}>✦</span>
                <div className="h-px flex-1" style={{ backgroundColor: 'rgba(255,250,241,0.12)' }} />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Notes */}
        <ScrollReveal delay={0.3} className="mt-14 space-y-2">
          <p className="text-[11px] opacity-35 leading-relaxed italic" style={{ color: '#FFFAF1', fontFamily: '"Cormorant Garamond", Georgia, serif' }}>
            * Je suis attentif aux allergènes et me tiens à votre disposition pour toute adaptation.
          </p>
          <p className="text-[11px] opacity-35 leading-relaxed italic" style={{ color: '#FFFAF1', fontFamily: '"Cormorant Garamond", Georgia, serif' }}>
            * Je peux adapter chaque plat selon vos préférences végétariennes, végan et halal.
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}