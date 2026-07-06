import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Phone, X } from 'lucide-react'
import logo from '../assets/tenzia logo.png'

const LINKS = [
  { to: '/why-us', id: 'why-us', label: 'Why Us' },
  { to: '/programs', id: 'programs', label: 'Programs' },
  { to: '/bca', id: 'bca', label: 'Body Analysis' },
  { to: '/journey', id: 'journey', label: 'Journey' },
  { to: '/faq', id: 'faq', label: 'FAQ' },
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
        <Link to="/top" className="navbar-logo">
          <img src={logo} alt="Tenziaa Wellness and Aesthetic Clinic" />
        </Link>

        <nav className="navbar-links">
          {LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={active === link.id ? 'is-active' : ''}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="navbar-actions">
          <a href="tel:+916383837363" className="navbar-call">
            <Phone size={16} strokeWidth={2.4} />
            <span>+91 63838 37363</span>
          </a>
          <Link to="/lead-form" className="btn btn-primary navbar-cta">
            Book Consultation
          </Link>
        </div>

        <button className="navbar-toggle" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="navbar-mobile">
          {LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={active === link.id ? 'is-active' : ''}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a href="tel:+916383837363" className="navbar-mobile-call">
            <Phone size={16} strokeWidth={2.4} /> +91 63838 37363
          </a>
          <Link to="/lead-form" className="btn btn-primary" onClick={() => setOpen(false)}>
            Book Consultation
          </Link>
        </div>
      )}
    </header>
  )
}
