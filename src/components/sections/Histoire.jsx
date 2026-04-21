import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import SectionTitle from '../ui/SectionTitle'
import ScrollReveal from '../ui/ScrollReveal'
import chefPhoto from '../../assets/chef.jpg'

const MILESTONES = [
  { year: '2012', label: '...' },
  { year: '2015', label: '...' },
  { year: '2018', label: '...' },
  { year: '2026', label: '...' },
]

/**
 * "Mon Histoire" — about section with a parallax image placeholder and timeline.
 */
export default function Histoire() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const imageY = useTransform(scrollYProgress, [0, 1], [-60, 60])

  return (
    <section
      id="histoire"
      ref={sectionRef}
      aria-label="Mon histoire — Chef Aldo, traiteur à domicile Cannes"
      className="py-28 md:py-40 overflow-hidden"
      style={{ backgroundColor: '#FFFAF1' }}
    >
      <div className="max-w-7xl mx-auto px-8 md:px-16">

        {/* Top label */}
        <ScrollReveal className="mb-20">
          <div className="h-px mb-8" style={{ backgroundColor: 'rgba(4,62,145,0.12)' }} />
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Image column — parallax */}
          <div className="relative overflow-hidden rounded-sm" style={{ aspectRatio: '3/4' }}>
            <motion.div style={{ y: imageY }} className="absolute inset-0 w-full h-full">
              <img
                src={chefPhoto}
                alt="Aldo, Chef Ulysse"
                className="w-full h-full object-contain object-bottom"
                style={{ backgroundColor: '#FFFAF1' }}
              />
            </motion.div>

            {/* Floating quote card */}
            <ScrollReveal
              delay={0.4}
              className="absolute bottom-8 right-[-2rem] md:right-[-4rem] max-w-[16rem] bg-[#043e91] p-6 shadow-2xl"
            >
              <p
                style={{
                  fontFamily: '"Cormorant Garamond", Georgia, serif',
                  fontSize: '1.15rem',
                  fontStyle: 'italic',
                  color: '#FFFAF1',
                  lineHeight: 1.5,
                }}
              >
                «&nbsp;La cuisine est un geste d'amour renouvelé à chaque assiette.&nbsp;»
              </p>
              <p className="mt-3 text-[10px] tracking-[0.2em] uppercase opacity-60" style={{ color: '#FFFAF1' }}>
                — test
              </p>
            </ScrollReveal>
          </div>

          {/* Text column */}
          <div>
            <SectionTitle
              eyebrow="Mon Histoire"
              title={<>Une passion,<br />une vocation.</>}
            />

            <ScrollReveal delay={0.2} className="mt-8 space-y-5">
              <p className="text-sm leading-[1.9] opacity-70" style={{ color: '#043e91' }}>
              Je suis Aldo, chef cuisinier passionné par les saveurs de la Méditerranée..
              Avec plus de 30 ans d’expérience, mon parcours m’a mené des plus grandes tables parisiennes (chez Guy Savoy, chez le traiteur Noura et Grand hôtel InterContinental ) à la création de six restaurants à Gênes, dont l’emblématique Orient Express.
              </p>
              <p className="text-sm leading-[1.9] opacity-70" style={{ color: '#043e91' }}>
                Sur la Côte d’Azur, j’ai officié au Martinez, au Carlton et au Majestic, puis comme gérant et chef cuisinier du traiteur Akdeniz. 
              </p>
              <p className="text-sm leading-[1.9] opacity-70" style={{ color: '#043e91' }}>
                Je m'engage à réaliser une cuisine maison avec passion, le respect des traditions et des saveurs authentiques. Discrétion et professionnalisme sont mes priorités, fléxibilité et adaptation pour faire de votre événement un moment inoubliable. 
              </p>
            </ScrollReveal>

            {/* Timeline */}
            <ScrollReveal delay={0.3} className="mt-14">
              <div className="space-y-0">
                {MILESTONES.map((m, i) => (
                  <motion.div
                    key={m.year}
                    className="flex items-start gap-6 py-5 border-b"
                    style={{ borderColor: 'rgba(4,62,145,0.10)' }}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <span
                      className="text-xs font-medium opacity-40 pt-0.5 w-10 shrink-0"
                      style={{ color: '#043e91' }}
                    >
                      {m.year}
                    </span>
                    <span className="text-sm opacity-70" style={{ color: '#043e91' }}>
                      {m.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
