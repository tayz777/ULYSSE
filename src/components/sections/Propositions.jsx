import { motion } from 'framer-motion'
import SectionTitle from '../ui/SectionTitle'
import ScrollReveal from '../ui/ScrollReveal'
import Button from '../ui/Button'

const INFLUENCES = ['Italienne', 'Grecque', 'Turque', 'Libanaise']

const POINTS = [
  'Menus en fusion méditerranéenne',
  'Chef à domicile, sur mesure',
  'Expérience conviviale',
  'Halal · végétarien · végan · sans gluten',
  'Produits frais & de saison',
]

/**
 * "Mes Propositions" — cuisine méditerranéenne authentique.
 */
export default function Propositions() {
  return (
    <section
      id="propositions"
      aria-label="Propositions traiteur à domicile — cuisine méditerranéenne Cannes & Côte d'Azur"
      className="relative py-28 md:py-40 px-8 md:px-16 overflow-hidden"
      style={{ backgroundColor: '#FFFAF1' }}
    >
      <div className="max-w-7xl mx-auto">

        {/* Header + intro */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <SectionTitle
            eyebrow="Mes Propositions"
            title={<>Ce que<br />je propose</>}
          />
          <ScrollReveal delay={0.3} className="md:max-w-sm">
            <p
              className="leading-relaxed opacity-70"
              style={{ color: '#043e91', fontSize: 'clamp(0.95rem, 1.2vw, 1.05rem)' }}
            >
              Une cuisine méditerranéenne authentique aux influences italiennes, grecques, turques et libanaises — pensée pour chaque occasion.
            </p>
          </ScrollReveal>
        </div>

        {/* Influences — 4 pillars */}
        <ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 border-t border-b" style={{ borderColor: 'rgba(4,62,145,0.12)' }}>
            {INFLUENCES.map((name, i) => (
              <motion.div
                key={name}
                className="relative py-8 px-6 flex flex-col items-center gap-4 border-r last:border-r-0 overflow-hidden"
                style={{ borderColor: 'rgba(4,62,145,0.12)' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              >
                <span
                  className="text-[10px] tracking-[0.3em] uppercase self-start z-[1]"
                  style={{ color: '#043e91', opacity: 0.35 }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span
                  className="z-[1]"
                  style={{
                    fontFamily: '"Cormorant Garamond", Georgia, serif',
                    fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
                    fontWeight: 500,
                    color: '#043e91',
                    lineHeight: 1,
                  }}
                >
                  {name}
                </span>
                {/* Cultural icon — mobile: below text, desktop: background watermark */}
                <div
                  className="mt-4 md:mt-0 md:absolute md:inset-0 md:flex md:items-center md:justify-center md:pointer-events-none opacity-[0.35] md:opacity-[0.12]"
                >
                  {/* Italie — Colisée */}
                  {i === 0 && (
                    <svg viewBox="0 0 80 60" className="w-14 md:w-[50%] md:max-w-[90px]" fill="none" stroke="rgba(4,62,145,1)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                      {/* base */}
                      <line x1="4" y1="56" x2="76" y2="56"/>
                      <line x1="6" y1="52" x2="74" y2="52"/>
                      {/* tier 1 — ground level arches */}
                      <line x1="8" y1="52" x2="8" y2="38"/>
                      <line x1="72" y1="52" x2="72" y2="38"/>
                      <path d="M 14,52 L 14,42 Q 20,38 26,42 L 26,52"/>
                      <path d="M 30,52 L 30,42 Q 36,38 42,42 L 42,52"/>
                      <path d="M 46,52 L 46,42 Q 52,38 58,42 L 58,52"/>
                      <line x1="6" y1="38" x2="74" y2="38"/>
                      {/* tier 2 — middle arches */}
                      <line x1="10" y1="38" x2="10" y2="24"/>
                      <line x1="70" y1="38" x2="70" y2="24"/>
                      <path d="M 16,38 L 16,28 Q 22,24 28,28 L 28,38"/>
                      <path d="M 32,38 L 32,28 Q 38,24 44,28 L 44,38"/>
                      <path d="M 48,38 L 48,28 Q 54,24 60,28 L 60,38"/>
                      <line x1="8" y1="24" x2="72" y2="24"/>
                      {/* tier 3 — top, partially ruined */}
                      <line x1="12" y1="24" x2="12" y2="14"/>
                      <line x1="68" y1="24" x2="68" y2="16"/>
                      <path d="M 18,24 L 18,16 Q 24,12 30,16 L 30,24"/>
                      <path d="M 34,24 L 34,16 Q 40,12 46,16 L 46,24"/>
                      <path d="M 50,24 L 50,17 Q 54,14 58,17 L 58,24"/>
                      {/* ruined top edge */}
                      <path d="M 12,14 Q 16,10 22,12 Q 30,10 38,8 Q 46,10 54,12 Q 60,14 68,16"/>
                    </svg>
                  )}
                  {/* Grèce — colonne ionique */}
                  {i === 1 && (
                    <svg viewBox="0 0 64 80" className="w-12 md:w-[45%] md:max-w-[80px]" fill="none" stroke="rgba(4,62,145,1)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="12" y1="76" x2="52" y2="76"/>
                      <line x1="16" y1="72" x2="48" y2="72"/>
                      <line x1="20" y1="72" x2="22" y2="18"/>
                      <line x1="44" y1="72" x2="42" y2="18"/>
                      <line x1="28" y1="72" x2="29" y2="18"/>
                      <line x1="36" y1="72" x2="35" y2="18"/>
                      <line x1="18" y1="18" x2="46" y2="18"/>
                      <path d="M 18,18 Q 14,14 12,8"/>
                      <path d="M 46,18 Q 50,14 52,8"/>
                      <path d="M 12,8 Q 16,10 20,8 Q 24,6 28,8 Q 32,10 36,8 Q 40,6 44,8 Q 48,10 52,8"/>
                      <rect x="10" y="2" width="44" height="5" rx="1"/>
                    </svg>
                  )}
                  {/* Turquie — mosquée */}
                  {i === 2 && (
                    <svg viewBox="0 0 64 80" className="w-12 md:w-[45%] md:max-w-[80px]" fill="none" stroke="rgba(4,62,145,1)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M 12,40 Q 12,14 32,8 Q 52,14 52,40"/>
                      <line x1="32" y1="8" x2="32" y2="2"/>
                      <path d="M 30,2 Q 28,-2 32,-2 Q 34,0 32,2"/>
                      <line x1="10" y1="40" x2="54" y2="40"/>
                      <path d="M 16,40 Q 16,28 24,24"/>
                      <path d="M 48,40 Q 48,28 40,24"/>
                      <path d="M 24,40 L 24,28 Q 28,24 32,24 Q 36,24 40,28 L 40,40"/>
                      <line x1="10" y1="40" x2="10" y2="66"/>
                      <line x1="54" y1="40" x2="54" y2="66"/>
                      <line x1="10" y1="56" x2="54" y2="56"/>
                      <path d="M 18,56 L 22,48 L 26,56"/>
                      <path d="M 30,56 L 34,48 L 38,56"/>
                      <path d="M 42,56 L 46,48 L 50,56"/>
                      <line x1="8" y1="66" x2="56" y2="66"/>
                      <line x1="14" y1="72" x2="50" y2="72"/>
                      <line x1="14" y1="66" x2="14" y2="72"/>
                      <line x1="50" y1="66" x2="50" y2="72"/>
                    </svg>
                  )}
                  {/* Liban — cèdre */}
                  {i === 3 && (
                    <svg viewBox="0 0 64 76" className="w-14 md:w-[50%] md:max-w-[90px]" fill="none" stroke="rgba(4,62,145,1)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="32" y1="72" x2="32" y2="28"/>
                      <line x1="28" y1="72" x2="28" y2="56"/>
                      <line x1="36" y1="72" x2="36" y2="56"/>
                      <line x1="20" y1="72" x2="44" y2="72"/>
                      <path d="M 2,58 Q 16,50 32,46 Q 48,50 62,58"/>
                      <line x1="2" y1="58" x2="62" y2="58"/>
                      <path d="M 8,46 Q 20,38 32,34 Q 44,38 56,46"/>
                      <line x1="8" y1="46" x2="56" y2="46"/>
                      <path d="M 14,34 Q 22,26 32,22 Q 42,26 50,34"/>
                      <line x1="14" y1="34" x2="50" y2="34"/>
                      <path d="M 20,22 Q 26,14 32,10 Q 38,14 44,22"/>
                      <line x1="20" y1="22" x2="44" y2="22"/>
                      <path d="M 26,10 Q 32,2 38,10"/>
                    </svg>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>

        {/* Points forts — horizontal flow */}
        <ScrollReveal delay={0.15}>
          <div
            className="mt-16 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 py-6"
            style={{ borderTop: '1px solid rgba(4,62,145,0.10)', borderBottom: '1px solid rgba(4,62,145,0.10)' }}
          >
            {POINTS.map((text, i) => (
              <span key={i} className="flex items-center gap-3">
                <span
                  style={{
                    fontFamily: '"Cormorant Garamond", Georgia, serif',
                    fontSize: 'clamp(0.9rem, 1.2vw, 1.05rem)',
                    fontStyle: 'italic',
                    color: '#043e91',
                    opacity: 0.6,
                  }}
                >
                  {text}
                </span>
                {i < POINTS.length - 1 && (
                  <span style={{ color: '#043e91', opacity: 0.2, fontSize: '0.6rem' }}>◆</span>
                )}
              </span>
            ))}
          </div>
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal delay={0.2} className="mt-14 flex justify-start">
          <Button
            variant="outline"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Contactez-moi
          </Button>
        </ScrollReveal>
      </div>
    </section>
  )
}
