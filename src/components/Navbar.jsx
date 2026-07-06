import { useEffect, useState } from 'react'
import { Menu, Phone, X } from 'lucide-react'
import logo from '../assets/tenzia logo.png'

const LINKS = [
  { href: '#why-us', label: 'Why Us' },
  { href: '#programs', label: 'Programs' },
  { href: '#bca', label: 'Body Analysis' },
  { href: '#journey', label: 'Journey' },
  { href: '#faq', label: 'FAQ' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`navbar ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container navbar-inner">
        <a href="/#top" className="navbar-logo">
          <img src={logo} alt="Tenziaa Wellness and Aesthetic Clinic" />
        </a>

        <nav className="navbar-links">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="navbar-actions">
          <a href="tel:+916383837363" className="navbar-call">
            <Phone size={16} strokeWidth={2.4} />
            <span>+91 63838 37363</span>
          </a>
          <a href="/#lead-form" className="btn btn-primary navbar-cta">
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
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a href="tel:+916383837363" className="navbar-mobile-call">
            <Phone size={16} strokeWidth={2.4} /> +91 63838 37363
          </a>
          <a href="/#lead-form" className="btn btn-primary" onClick={() => setOpen(false)}>
            Book Consultation
          </a>
        </div>
      )}
    </header>
  )
}
