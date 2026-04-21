import ScrollReveal from './ScrollReveal'

/**
 * Consistent section title pattern used across all sections.
 *
 * @param {object}  props
 * @param {string}  props.eyebrow   - Small label above the title
 * @param {string}  props.title     - Main display heading
 * @param {string}  [props.subtitle]- Optional body copy below
 * @param {string}  [props.align]   - 'left' | 'center' (default 'left')
 */
export default function SectionTitle({ eyebrow, title, subtitle, align = 'left' }) {
  const isCenter = align === 'center'

  return (
    <div className={isCenter ? 'text-center' : ''}>
      <ScrollReveal>
        <p
          className="text-xs font-medium tracking-[0.25em] uppercase mb-4 opacity-60"
          style={{ color: '#043e91' }}
        >
          {eyebrow}
        </p>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <h2
          className="font-display leading-[0.95] tracking-tight"
          style={{
            fontFamily: '"Cormorant Garamond", Georgia, serif',
            fontSize: 'clamp(2.8rem, 6vw, 5.5rem)',
            color: '#043e91',
          }}
        >
          {title}
        </h2>
      </ScrollReveal>

      {subtitle && (
        <ScrollReveal delay={0.2}>
          <p
            className="mt-6 max-w-xl text-base leading-relaxed opacity-70"
            style={{ color: '#043e91' }}
          >
            {subtitle}
          </p>
        </ScrollReveal>
      )}
    </div>
  )
}
