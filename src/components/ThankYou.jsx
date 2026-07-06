import { Link } from 'react-router-dom'
import { CheckCircle2, Home, Phone } from 'lucide-react'
import logo from '../assets/tenzia logo.png'

export default function ThankYou() {
  return (
    <section className="thank-you">
      <div className="thank-you-blob thank-you-blob-a" aria-hidden="true" />
      <div className="thank-you-blob thank-you-blob-b" aria-hidden="true" />

      <div className="container thank-you-inner">
        <img src={logo} alt="Tenziaa Wellness Clinic" className="thank-you-logo" />

        <div className="thank-you-icon">
          <CheckCircle2 size={48} strokeWidth={2} />
        </div>

        <h1>Thank You for Booking Your Consultation!</h1>
        <p>
          We&apos;ve received your details. One of our wellness experts will call you shortly to confirm your
          appointment and guide you through the next steps of your weight loss journey.
        </p>

        <div className="thank-you-actions">
          <Link to="/" className="btn btn-primary">
            <Home size={18} /> Back to Home
          </Link>
          <a href="tel:+916383837363" className="btn btn-outline">
            <Phone size={18} /> Call Us Now
          </a>
        </div>
      </div>
    </section>
  )
}
