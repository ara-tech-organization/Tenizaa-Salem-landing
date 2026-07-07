import { Link } from 'react-router-dom'
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
            <a href="https://wa.me/919344709090" target="_blank" rel="noreferrer" aria-label="WhatsApp">
              <WhatsappIcon size={18} />
            </a>
          </div>
        </div>

        <div className="footer-col">
          <h4>Explore</h4>
          <Link to="/why-us">Why Us</Link>
          <Link to="/programs">Programs</Link>
          <Link to="/bca">Body Analysis</Link>
          <Link to="/journey">Journey</Link>
          <Link to="/faq">FAQ</Link>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <a href="tel:+919344709090">
            <Phone size={16} /> +91 93447 09090
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
        <div className="container footer-bottom-inner">
          <p>&copy; {new Date().getFullYear()} Tenziaa Wellness and Aesthetic Clinic. All rights reserved.</p>
          <p className="footer-credit">
          <span aria-hidden="true">❤️</span>
            Crafted by{' '}
            <a href="https://discovertechnologies.co/" target="_blank" rel="noreferrer">
              Ara Discover Technology
            </a>{' '}
            
          </p>
        </div>
      </div>
    </footer>
  )
}
