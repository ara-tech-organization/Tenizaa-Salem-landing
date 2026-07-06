import { Link } from 'react-router-dom'
import { CalendarCheck2, PhoneCall } from 'lucide-react'
import Reveal from './Reveal'

export default function FinalCta() {
  return (
    <section className="final-cta">
      <div className="final-cta-blob" aria-hidden="true" />
      <div className="container final-cta-inner">
        <Reveal>
          <h2>Ready to Begin Your Weight Loss Journey?</h2>
          <p>
            Take the first step toward a healthier lifestyle with expert guidance from Tenziaa Wellness
            Clinic. Book your consultation today and discover a personalized weight loss program designed
            around your body, lifestyle, and long-term wellness goals.
          </p>
          <div className="final-cta-actions">
            <Link to="/lead-form" className="btn btn-primary">
              <CalendarCheck2 size={18} /> Book Your Consultation
            </Link>
            <a href="tel:+916383837363" className="btn btn-ghost-dark">
              <PhoneCall size={18} /> Talk to Our Wellness Expert Today
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
