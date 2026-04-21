import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, CheckCircle, ChevronDown } from 'lucide-react'
import emailjs from '@emailjs/browser'
import SectionTitle from '../ui/SectionTitle'
import ScrollReveal from '../ui/ScrollReveal'
import Button from '../ui/Button'

const EMAILJS_SERVICE_ID  = 'service_0w277gn'
const EMAILJS_TEMPLATE_ID = 'template_x9i289w'
const EMAILJS_PUBLIC_KEY  = 'j0Al5ibizUJNxFSGn'

const INITIAL_FORM = { name: '', email: '', event: '', message: '' }

const EVENT_TYPES = [
  'Mariage',
  'Réception privée',
  'Événement corporate',
  'Dîner prestige',
  'Autre',
]

/**
 * Shared input / textarea style props.
 */
function fieldStyle(isFocused) {
  return {
    borderBottom: `1px solid rgba(4,62,145,${isFocused ? 0.8 : 0.35})`,
    transition: 'border-color 0.3s ease',
  }
}

/**
 * "Contact" — minimal form + contact details.
 */
export default function Contact() {
  const [form, setForm]           = useState(INITIAL_FORM)
  const [focused, setFocused]     = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending]     = useState(false)
  const [error, setError]         = useState('')
  const [eventOpen, setEventOpen] = useState(false)
  const eventRef                  = useRef(null)

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e) => {
      if (eventRef.current && !eventRef.current.contains(e.target)) {
        setEventOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)
    setError('')
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        { name: form.name, email: form.email, event: form.event, message: form.message },
        EMAILJS_PUBLIC_KEY,
      )
      setSubmitted(true)
    } catch {
      setError('Une erreur est survenue. Veuillez réessayer.')
    } finally {
      setSending(false)
    }
  }

  return (
    <section
      id="contact"
      aria-label="Contacter le traiteur Ulysse — Cannes & Côte d'Azur"
      className="py-28 md:py-40 px-8 md:px-16"
      style={{ backgroundColor: '#FFFAF1' }}
    >
      <div className="max-w-7xl mx-auto">

        <ScrollReveal>
          <div className="h-px mb-20" style={{ backgroundColor: 'rgba(4,62,145,0.12)' }} />
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">

          {/* Left — Info */}
          <div>
            <SectionTitle
              eyebrow=""
              title={<>Contact<br /></>}
              subtitle=""
            />

            <ScrollReveal delay={0.3} className="mt-14 space-y-6">
              {[
                { label: 'Email', value: ' aldo@ulysse-saveurs.com' },
                { label: 'Téléphone', value: '+33 6 26 97 50 72' },
                { label: 'Zone', value: 'Cannes & Côte d\'Azur' },
              ].map(({ label, value }) => (
                <div key={label} className="flex items-start gap-6 py-4 border-b" style={{ borderColor: 'rgba(4,62,145,0.10)' }}>
                  <span className="text-[10px] uppercase tracking-[0.25em] opacity-40 pt-0.5 w-20 shrink-0" style={{ color: '#043e91' }}>
                    {label}
                  </span>
                  <span className="text-sm opacity-70" style={{ color: '#043e91' }}>
                    {value}
                  </span>
                </div>
              ))}
            </ScrollReveal>

            {/* Ambient decorative block */}
            <div className="mt-16 select-none pointer-events-none" aria-hidden="true">
              <div
                style={{
                  fontFamily: '"Cormorant Garamond", Georgia, serif',
                  fontSize: 'clamp(3rem, 8vw, 5.5rem)',
                  fontWeight: 300,
                  fontStyle: 'italic',
                  color: 'rgba(4,62,145,0.07)',
                  lineHeight: 1,
                  letterSpacing: '-0.02em',
                }}
              >
                Méditerranée
              </div>
              <div
                style={{
                  height: '1px',
                  width: '48px',
                  backgroundColor: 'rgba(4,62,145,0.12)',
                  margin: '14px 0',
                }}
              />
              <p
                style={{
                  fontFamily: '"Cinzel", Georgia, serif',
                  fontSize: '0.6rem',
                  letterSpacing: '0.3em',
                  color: 'rgba(4,62,145,0.20)',
                  textTransform: 'uppercase',
                }}
              >
                Le Voyage des Saveurs
              </p>
            </div>
          </div>

          {/* Right — Form */}
          <ScrollReveal delay={0.2}>
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col items-start justify-center h-full gap-6 py-20"
                >
                  <CheckCircle size={40} className="opacity-60" style={{ color: '#043e91' }} />
                  <h3
                    style={{
                      fontFamily: '"Cormorant Garamond", Georgia, serif',
                      fontSize: '2.2rem',
                      color: '#043e91',
                      fontWeight: 500,
                    }}
                  >
                    Message envoyé !
                  </h3>
                  <p className="text-sm opacity-60" style={{ color: '#043e91' }}>
                    Merci pour votre message. Je vous recontacte très prochainement.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm(INITIAL_FORM) }}
                    className="text-xs underline opacity-40 hover:opacity-70 transition-opacity mt-2 cursor-pointer"
                    style={{ color: '#043e91', background: 'none', border: 'none' }}
                  >
                    Envoyer un autre message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="space-y-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {/* Name */}
                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.25em] opacity-60 mb-3" style={{ color: '#043e91' }}>
                      Votre nom
                    </label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      onFocus={() => setFocused('name')}
                      onBlur={() => setFocused('')}
                      required
                      placeholder="Jean Dupont"
                      className="w-full bg-transparent py-3 text-sm outline-none placeholder:opacity-35"
                      style={{ ...fieldStyle(focused === 'name'), color: '#043e91' }}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.25em] opacity-60 mb-3" style={{ color: '#043e91' }}>
                      Email
                    </label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      onFocus={() => setFocused('email')}
                      onBlur={() => setFocused('')}
                      required
                      placeholder="jean@example.fr"
                      className="w-full bg-transparent py-3 text-sm outline-none placeholder:opacity-35"
                      style={{ ...fieldStyle(focused === 'email'), color: '#043e91' }}
                    />
                  </div>

                  {/* Event type — custom dropdown */}
                  <div ref={eventRef}>
                    <label className="block text-[10px] uppercase tracking-[0.25em] opacity-60 mb-3" style={{ color: '#043e91' }}>
                      Type d'événement
                    </label>
                    <button
                      type="button"
                      onClick={() => setEventOpen((v) => !v)}
                      className="w-full flex items-center justify-between py-3 text-sm outline-none cursor-pointer bg-transparent"
                      style={{
                        ...fieldStyle(eventOpen),
                        color: '#043e91',
                        opacity: form.event ? 1 : 0.55,
                        border: 'none',
                        borderBottom: `1px solid rgba(4,62,145,${eventOpen ? 0.8 : 0.35})`,

                        transition: 'border-color 0.3s ease',
                        padding: '12px 0',
                      }}
                    >
                      <span>{form.event || 'Sélectionner…'}</span>
                      <motion.span
                        animate={{ rotate: eventOpen ? 180 : 0 }}
                        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                        style={{ display: 'flex', opacity: 0.5 }}
                      >
                        <ChevronDown size={14} />
                      </motion.span>
                    </button>

                    <AnimatePresence initial={false}>
                      {eventOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                          style={{ overflow: 'hidden' }}
                        >
                          <ul
                            style={{
                              backgroundColor: '#FFFAF1',
                              listStyle: 'none',
                              margin: 0,
                              padding: '4px 0',
                            }}
                          >
                            {EVENT_TYPES.map((t, i) => (
                              <motion.li
                                key={t}
                                initial={{ opacity: 0, x: -8 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.04, duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                              >
                              <button
                                type="button"
                                onClick={() => {
                                  setForm((prev) => ({ ...prev, event: t }))
                                  setEventOpen(false)
                                }}
                                className="w-full text-left px-5 py-3.5 text-sm cursor-pointer"
                                style={{
                                  background: form.event === t ? 'rgba(4,62,145,0.06)' : 'transparent',
                                  color: '#043e91',
                                  fontWeight: form.event === t ? 600 : 400,
                                  borderBottom: i < EVENT_TYPES.length - 1 ? '1px solid rgba(4,62,145,0.07)' : 'none',
                                  letterSpacing: '0.02em',
                                  transition: 'background 0.15s ease',
                                  border: 'none',
                                  borderBottom: i < EVENT_TYPES.length - 1 ? '1px solid rgba(4,62,145,0.07)' : 'none',
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(4,62,145,0.06)'}
                                onMouseLeave={(e) => e.currentTarget.style.background = form.event === t ? 'rgba(4,62,145,0.06)' : 'transparent'}
                              >
                                {t}
                              </button>
                            </motion.li>
                          ))}
                        </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.25em] opacity-60 mb-3" style={{ color: '#043e91' }}>
                      Parlez-moi de votre projet
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      onFocus={() => setFocused('message')}
                      onBlur={() => setFocused('')}
                      required
                      rows={4}
                      placeholder="Date, nombre de convives, lieu, envies particulières…"
                      className="w-full bg-transparent py-3 text-sm outline-none resize-none placeholder:opacity-35"
                      style={{ ...fieldStyle(focused === 'message'), color: '#043e91' }}
                    />
                  </div>

                  {/* Submit */}
                  {error && (
                    <p className="text-xs opacity-70" style={{ color: '#c0392b' }}>{error}</p>
                  )}
                  <Button type="submit" variant="primary" disabled={sending}>
                    {sending ? 'Envoi…' : 'Envoyer ma demande'}
                    {!sending && <Send size={14} />}
                  </Button>
                </motion.form>
              )}
            </AnimatePresence>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
