import { Mail, MapPin, Phone } from 'lucide-react'
import logo from '../assets/tenzia logo.png'
import { FacebookIcon, InstagramIcon, WhatsappIcon } from './SocialIcons'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <img src={logo} alt="Tenziaa Wellness and Aesthetic Clinic" />
          <p className="footer-tagline">
            Personalized weight loss &amp; wellness programs in Salem, built around your body and lifestyle.
          </p>
          <div className="footer-social">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
              <FacebookIcon size={18} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
              <InstagramIcon size={18} />
            </a>
            <a href="https://wa.me/916383837363" target="_blank" rel="noreferrer" aria-label="WhatsApp">
              <WhatsappIcon size={18} />
            </a>
          </div>
        </div>

        <div className="footer-col">
          <h4>Explore</h4>
          <a href="/#why-us">Why Us</a>
          <a href="/#programs">Programs</a>
          <a href="/#bca">Body Analysis</a>
          <a href="/#journey">Journey</a>
          <a href="/#faq">FAQ</a>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <a href="tel:+916383837363">
            <Phone size={16} /> +91 63838 37363
          </a>
          <a href="mailto:tenziaasalem@gmail.com">
            <Mail size={16} /> tenziaasalem@gmail.com
          </a>
          <span className="footer-address">
            <MapPin size={16} />
            VJP Tower, Door No. 28/304, Second Floor, LIC Colony Road, Hotel Vasantham Street,
            Salem - 636 004. Opposite to New Bus Stand Reliance Trends, Opposite to Anitha Enterprises.
          </span>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Tenziaa Wellness and Aesthetic Clinic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
