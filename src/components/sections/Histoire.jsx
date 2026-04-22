import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import SectionTitle from '../ui/SectionTitle'
import ScrollReveal from '../ui/ScrollReveal'
import chefPhoto from '../../assets/chef.jpg'

export default function Histoire() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const imageY = useTransform(scrollYProgress, [0, 1], [-60, 60])

  const prestations = [
    'Dîners privés',
    'Événements à domicile',
    'Expériences culinaires personnalisées',
  ]
  const engagements = [
    'Produits frais et de saison',
    'Cuisine entièrement faite maison',
    'Respect des saveurs et des traditions',
    'Adaptation aux régimes : halal, végétarien, végan, sans gluten',
    'Discrétion et professionnalisme',
  ]

  return (
    <section
      id="histoire"
      ref={sectionRef}
      aria-label="Mon histoire — Chef Aldo, traiteur à domicile Cannes"
      className="py-28 md:py-40 overflow-hidden"
      style={{ backgroundColor: '#FFFAF1' }}
    >
      <div className="max-w-7xl mx-auto px-8 md:px-16">

        <ScrollReveal className="mb-20">
          <div className="h-px mb-8" style={{ backgroundColor: 'rgba(4,62,145,0.12)' }} />
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Image column */}
          <div className="relative overflow-hidden rounded-sm" style={{ aspectRatio: '3/4' }}>
            <motion.div style={{ y: imageY }} className="absolute inset-0 w-full h-full">
              <img
                src={chefPhoto}
                alt="Aldo, Chef Ulysse"
                className="w-full h-full object-contain object-bottom"
                style={{ backgroundColor: '#FFFAF1' }}
              />
            </motion.div>

            <ScrollReveal
              delay={0.4}
              className="absolute bottom-8 right-[-2rem] md:right-[-4rem] max-w-[16rem] bg-[#043e91] p-6 shadow-2xl"
            >
            </ScrollReveal>
          </div>

          {/* Text column */}
          <div>
            <SectionTitle
              eyebrow="Mon Histoire"
              title={<>Une passion,<br />une vocation.</>}
            />

            <ScrollReveal delay={0.2} className="mt-8 space-y-8">

              {/* Qui suis-je */}
              <div>
                <p className="text-[10px] tracking-[0.25em] uppercase mb-3 opacity-40" style={{ color: '#043e91' }}>Qui suis-je ?</p>
                <p className="text-sm leading-[1.9] opacity-70" style={{ color: '#043e91' }}>
                  Je suis Aldo, chef cuisinier d’origine méditerranéenne, né à Antakya (Antioche), de père grec et de mère libanaise.
                  Mon parcours est celui d’un voyage à travers les cultures et les saveurs : Turquie, Syrie, Liban, Allemagne et Italie (Genève/Genova), où j’ai vécu plus de 20 ans.
                </p>
                <p className="text-sm leading-[1.9] opacity-70 mt-3" style={{ color: '#043e91' }}>
                  À Paris, j’ai travaillé dans des maisons de référence comme Guy Savoy, le traiteur libanais Noura et le Grand Hôtel Intercontinental.
                  Entrepreneur, j’ai ensuite créé et dirigé 6 établissements à Gênes, sous le nom « Orient Express ».
                  J’ai poursuivi mon chemin en France sur la Côte d’Azur où j’ai eu l’opportunité de mettre mon savoir-faire au service d’établissements prestigieux comme le Martinez, le Carlton et le Majestic avant d’être de nouveau gérant et chef cuisinier d’Akdeniz Traiteur.
                </p>
                <p className="text-sm leading-[1.9] opacity-70 mt-3" style={{ color: '#043e91' }}>
                  Aujourd’hui, j’ai décidé de venir directement chez vous et de proposer une cuisine sincère, raffinée et profondément humaine.
                </p>
              </div>

              {/* Mon univers culinaire */}
              <div>
                <p className="text-[10px] tracking-[0.25em] uppercase mb-3 opacity-40" style={{ color: '#043e91' }}>Mon univers culinaire</p>
                <p className="text-sm leading-[1.9] opacity-70" style={{ color: '#043e91' }}>
                  Ma cuisine est le reflet de mon histoire et de mes voyages.
                  Une cuisine méditerranéenne authentique, inspirée des traditions : italienne, grecque, turque et libanaise.
                  Je propose également des créations en fusion, mêlant harmonieusement ces cultures pour offrir une expérience unique, équilibrée et moderne.
                  Chaque plat raconte une histoire. Chaque repas devient un moment de partage.
                </p>
              </div>

              {/* Prestations */}
              <div>
                <p className="text-[10px] tracking-[0.25em] uppercase mb-3 opacity-40" style={{ color: '#043e91' }}>Prestations</p>
                <p className="text-sm opacity-70 mb-2" style={{ color: '#043e91' }}>Je propose des expériences de chef à domicile sur mesure :</p>
                <ul className="text-sm opacity-70 space-y-1" style={{ color: '#043e91' }}>
                  {prestations.map(item => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full shrink-0" style={{ backgroundColor: 'rgba(4,62,145,0.4)' }} />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-sm leading-[1.9] opacity-70 mt-3" style={{ color: '#043e91' }}>
                  Chaque prestation est adaptée aux attentes du client, avec une attention particulière portée aux détails.
                </p>
              </div>

              {/* Engagement */}
              <div>
                <p className="text-[10px] tracking-[0.25em] uppercase mb-3 opacity-40" style={{ color: '#043e91' }}>Engagement</p>
                <ul className="text-sm opacity-70 space-y-1" style={{ color: '#043e91' }}>
                  {engagements.map(item => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full shrink-0" style={{ backgroundColor: 'rgba(4,62,145,0.4)' }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Zone d'intervention */}
              <div className="pt-2 border-t" style={{ borderColor: 'rgba(4,62,145,0.10)' }}>
                <p className="text-[10px] tracking-[0.25em] uppercase mb-1 opacity-40" style={{ color: '#043e91' }}>Zone d’intervention</p>
                <p className="text-sm opacity-70" style={{ color: '#043e91' }}>Côte d’Azur – de Menton à Saint-Tropez</p>
              </div>

              <div className="pt-2 border-t" style={{ borderColor: 'rgba(4,62,145,0.10)' }}>
                <p className="text-[10px] tracking-[0.25em] uppercase mb-1 opacity-40" style={{ color: '#043e91' }}>Signature</p>
                <p className="text-sm opacity-70" style={{ color: '#043e91' }}>Ulysse - Le Voyage des Saveurs</p> 
                <p className="text-sm opacity-70" style={{ color: '#043e91' }}>Une cuisine née du voyage, au croisement des cultures méditerranéennes</p>
              </div>

            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
