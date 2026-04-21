import { Camera, Globe, Mail } from 'lucide-react'
import { NAV_ITEMS } from '../../constants/nav'
import logoUlysse from '../../assets/logo-ulysse.png'

const scrollTo = (id) => {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

export default function Footer() {
  return (
    <footer
      className="relative px-8 md:px-16 overflow-hidden"
      style={{ backgroundColor: '#043e91' }}
    >
      {/* Large watermark text */}
      <div
        className="absolute bottom-[-0.15em] left-1/2 -translate-x-1/2 pointer-events-none select-none whitespace-nowrap hidden md:block"
        aria-hidden="true"
        style={{
          fontFamily: '"Cormorant Garamond", Georgia, serif',
          fontSize: 'clamp(6rem, 14vw, 13rem)',
          fontWeight: 300,
          fontStyle: 'italic',
          color: 'rgba(255,250,241,0.04)',
          lineHeight: 1,
          letterSpacing: '0.04em',
        }}
      >
        Le Voyage des Saveurs
      </div>
      {/* Mobile watermark — shorter, fits screen */}
      <div
        className="absolute bottom-[-0.1em] left-1/2 -translate-x-1/2 pointer-events-none select-none whitespace-nowrap md:hidden"
        aria-hidden="true"
        style={{
          fontFamily: '"Cormorant Garamond", Georgia, serif',
          fontSize: '3.5rem',
          fontWeight: 300,
          fontStyle: 'italic',
          color: 'rgba(255,250,241,0.05)',
          lineHeight: 1,
          letterSpacing: '0.04em',
        }}
      >
        Le Voyage des Saveurs
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto pt-20 pb-10">

        {/* Top row — Logo centered + nav */}
        <div className="flex flex-col items-center text-center mb-16">
          <p
            className="mt-4"
            style={{
              fontFamily: '"Cinzel", Georgia, serif',
              fontSize: 'clamp(0.8rem, 1.2vw, 1rem)',
              letterSpacing: '0.22em',
              color: '#FFFAF1',
              opacity: 0.8,
              textTransform: 'uppercase',
            }}
          >
            ULYΣSE
          </p>
          <p
            style={{
              fontFamily: '"Cormorant Garamond", Georgia, serif',
              fontSize: 'clamp(0.8rem, 1vw, 0.85rem)',
              fontStyle: 'italic',
              color: '#FFFAF1',
              opacity: 0.5,
              letterSpacing: '0.14em',
              marginTop: '4px',
            }}
          >
            Le Voyage des Saveurs
          </p>
        </div>

        {/* Navigation row — horizontal centered */}
        <nav className="flex flex-wrap justify-center gap-8 md:gap-12 mb-14">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="cursor-pointer"
              style={{
                background: 'none', border: 'none', padding: 0,
                fontFamily: '"Cormorant Garamond", Georgia, serif',
                fontSize: 'clamp(0.95rem, 1.1vw, 1.1rem)',
                fontStyle: 'italic',
                letterSpacing: '0.06em',
                color: '#FFFAF1',
                opacity: 0.5,
                transition: 'opacity 0.25s',
              }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
              onMouseLeave={(e) => e.currentTarget.style.opacity = '0.5'}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Thin divider */}
        <div className="max-w-md mx-auto h-px mb-14" style={{ backgroundColor: 'rgba(255,250,241,0.10)' }} />

        {/* Contact info — horizontal on desktop */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 mb-14">
          {[
            { label: 'Email', value: 'aldo@ulysse-saveurs.com' },
            { label: 'Tél', value: '+33 6 26 97 50 72' },
            { label: 'Zone', value: 'Cannes & Côte d\'Azur' },
          ].map(({ label, value }, i, arr) => (
            <div key={label} className="flex items-center gap-8 md:gap-16">
              <div className="flex flex-col items-center text-center">
                <span
                  style={{
                    fontSize: '0.55rem',
                    letterSpacing: '0.3em',
                    textTransform: 'uppercase',
                    color: '#FFFAF1',
                    opacity: 0.25,
                    marginBottom: '4px',
                  }}
                >
                  {label}
                </span>
                <span
                  style={{
                    fontFamily: '"Cormorant Garamond", Georgia, serif',
                    fontSize: '0.95rem',
                    color: '#FFFAF1',
                    opacity: 0.65,
                    letterSpacing: '0.02em',
                  }}
                >
                  {value}
                </span>
              </div>
              {i < arr.length - 1 && (
                <div className="hidden md:block w-px h-8" style={{ backgroundColor: 'rgba(255,250,241,0.10)' }} />
              )}
            </div>
          ))}
        </div>

        {/* Social icons */}
        <div className="flex justify-center gap-4 mb-16">
          {[
            { Icon: Camera, href: '#', label: 'Instagram' },
            { Icon: Globe, href: '#', label: 'Facebook' },
            { Icon: Mail, href: 'mailto:aldo@ulysse-saveurs.com', label: 'Email' },
          ].map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="flex items-center justify-center transition-all duration-200"
              style={{
                width: '38px', height: '38px',
                border: '1px solid rgba(255,250,241,0.15)',
                borderRadius: '50%',
                color: '#FFFAF1',
                opacity: 0.4,
              }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
              onMouseLeave={(e) => e.currentTarget.style.opacity = '0.4'}
            >
              <Icon size={14} />
            </a>
          ))}
        </div>

        {/* Logo seal */}
        <div className="flex justify-center mb-10">
          <img
            src={logoUlysse}
            alt="Ulysse"
            style={{ height: '250px', width: '250px', objectFit: 'contain', borderRadius: '50%', opacity: 0.7 }}
          />
        </div>

        {/* Bottom bar */}
        <div className="border-t pt-6 pb-2 flex flex-col md:flex-row items-center justify-center gap-4"
          style={{ borderColor: 'rgba(255,250,241,0.06)' }}
        >
          <p style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#FFFAF1', opacity: 0.20 }}>
            © {new Date().getFullYear()} ULYΣSE Traiteur — Tous droits réservés
          </p>
        </div>
      </div>
    </footer>
  )
}
