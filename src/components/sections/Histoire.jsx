import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import SectionTitle from '../ui/SectionTitle'
import ScrollReveal from '../ui/ScrollReveal'
import chefPhoto from '../../assets/chef.jpg'

const MILESTONES = [
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
              Ulysse – Le Voyage des SaveursChef à domicile – Cuisine méditerranéenne d’exceptionUne expérience culinaire privée, née d’un parcours entre Orient et Méditerranée.
              Qui suis-je ?Je suis Aldo, chef cuisinier d’origine méditerranéenne, né à Antakya (Antioche), de père grec et de mère libanaise.Mon parcours est celui d’un voyage à travers les cultures et les saveurs : Turquie, Syrie, Liban, Allemagne et Italie, où j’ai vécu plus de 20 ans.
              </p>
              <p className="text-sm leading-[1.9] opacity-70" style={{ color: '#043e91' }}>
                À Paris, j’ai travaillé dans des maisons de référence comme Guy Savoy, le traiteur libanais Noura et le Grand Hôtel Intercontinental.Entrepreneur, j’ai ensuite créé et dirigé 6 établissements à Gênes, sous le nom "Orient Express". J'ai poursuivi mon chemin en France sur la Côte d’Azur où j'ai eu l'opportunité de mettre mon savoir faire au service d' établissements prestigieux comme le Martinez, le Carlton et le Majestic avant d'être de nouveau gérant et chef cuisinier d'Akdeniz Traiteur.Aujourd’hui, j'ai décidé de venir directement chez vous et de proposer une cuisine sincère, raffinée et profondément humaine.
              </p>
              <p className="text-sm leading-[1.9] opacity-70" style={{ color: '#043e91' }}>
                Mon univers culinaireMa cuisine est le reflet de mon histoire et de mes voyages.Une cuisine méditerranéenne authentique, inspirée des traditions : italienne, grecque, turque et libanaise.Je propose également des créations en fusion, mêlant harmonieusement ces cultures pour offrir une expérience unique, équilibrée et moderne.Chaque plat raconte une histoire. Chaque repas devient un moment de partage.PrestationsJe propose des expériences de chef à domicile sur mesure :- Dîners privés- Événements à domicile- Expériences culinaires personnaliséesChaque prestation est adaptée aux attentes du client, avec une attention particulière portée aux détails.
              </p>
              <p className="text-sm leading-[1.9] opacity-70" style={{ color: '#043e91' }}>
                Engagement- Produits frais et de saison- Cuisine entièrement faite maison- Respect des saveurs et des traditions- Adaptation aux régimes : halal, végétarien, végan, sans gluten- Discrétion et professionnalismeZone d’interventionCôte d’Azur – de Menton à Saint-TropezSignatureUlysse - Le Voyage des SaveursUne cuisine née du voyage, au croisement des cultures méditerranéennes
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
