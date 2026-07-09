import { useEffect, useState } from 'react'
import { Menu, Phone, X } from 'lucide-react'
import { handleSectionNavClick, pathForId } from '../lib/sectionNav'
import logo from '../assets/tenzia logo.png'

const LINKS = [
  { id: 'why-us', label: 'Why Us' },
  { id: 'programs', label: 'Programs' },
  { id: 'bca', label: 'Body Analysis' },
  { id: 'journey', label: 'Journey' },
  { id: 'faq', label: 'FAQ' },
]

const SCROLL_SPY_IDS = ['top', 'why-us', 'programs', 'bca', 'journey', 'faq', 'lead-form']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = SCROLL_SPY_IDS.map((id) => document.getElementById(id)).filter(Boolean)
    if (!sections.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const id = entry.target.id
          setActive(id)

          const path = id === 'top' ? '/' : `/${id}`
          if (window.location.pathname !== path) {
            window.history.replaceState(null, '', path)
          }
        })
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <header className={`navbar ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container navbar-inner">
        <a href={pathForId('top')} className="navbar-logo" onClick={(e) => handleSectionNavClick(e, 'top')}>
          <img src={logo} alt="Tenziaa Wellness and Aesthetic Clinic" />
        </a>

        <nav className="navbar-links">
          {LINKS.map((link) => (
            <a
              key={link.id}
              href={pathForId(link.id)}
              className={active === link.id ? 'is-active' : ''}
              onClick={(e) => handleSectionNavClick(e, link.id)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="navbar-actions">
          <a href="tel:+919344709090" className="navbar-call">
            <Phone size={16} strokeWidth={2.4} />
            <span>+91 93447 09090</span>
          </a>
          <a
            href={pathForId('lead-form')}
            className="btn btn-primary navbar-cta"
            onClick={(e) => handleSectionNavClick(e, 'lead-form')}
          >
            Book Consultation
          </a>
        </div>

        <button className="navbar-toggle" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="navbar-mobile">
          {LINKS.map((link) => (
            <a
              key={link.id}
              href={pathForId(link.id)}
              className={active === link.id ? 'is-active' : ''}
              onClick={(e) => {
                handleSectionNavClick(e, link.id)
                setOpen(false)
              }}
            >
              {link.label}
            </a>
          ))}
          <a href="tel:+919344709090" className="navbar-mobile-call">
            <Phone size={16} strokeWidth={2.4} /> +91 93447 09090
          </a>
          <a
            href={pathForId('lead-form')}
            className="btn btn-primary"
            onClick={(e) => {
              handleSectionNavClick(e, 'lead-form')
              setOpen(false)
            }}
          >
            Book Consultation
          </a>
        </div>
      )}
    </header>
  )
}
