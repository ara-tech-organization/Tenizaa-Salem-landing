import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ArrowRight, CalendarCheck2, CheckCircle2, Phone, Sparkles } from 'lucide-react'
import useReveal from '../hooks/useReveal'
import LeadFormFields from './LeadFormFields'
import { submitLead } from '../lib/submitLead'

const POINTS = [
  'Personalized Weight Loss Programs',
  'Expert Diet & Nutrition Guidance',
  'Non-Surgical Fat Reduction Solutions',
  'Body Composition Analysis (BCA)',
  'Customized Wellness Plans',
]

export default function Hero() {
  const revealRef = useReveal()
  const formRef = useReveal()
  const navigate = useNavigate()
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()
    setSubmitting(true)
    try {
      await submitLead(event.target, 'Website Hero Form')
    } catch (error) {
      console.error('Lead form submission failed:', error)
    } finally {
      setSubmitting(false)
      navigate('/thank-you')
    }
  }

  return (
    <section id="top" className="hero">
      <div className="hero-blob-mask" aria-hidden="true">
        <div className="hero-blob hero-blob-a" />
        <div className="hero-blob hero-blob-b" />
      </div>

      <div className="container hero-grid">
        <div ref={revealRef} className="reveal hero-copy">
          <span className="eyebrow eyebrow-wrap">
            <Sparkles size={14} /> Best Weight Loss Clinic in Salem for  Personalized Weight Loss &amp; Wellness
          </span>
          <h1>
            Achieve Your <span className="text-brand">Weight Loss Goals</span> with Expert Guidance
          </h1>
          <p className="hero-sub">
            Looking for a trusted Weight Loss Clinic in Salem? At Tenziaa Wellness Clinic, we help you achieve
            healthy and sustainable weight loss through personalized wellness programs designed around your
            body, lifestyle, and health goals.
          </p>

          <ul className="hero-points">
            {POINTS.map((point) => (
              <li key={point}>
                <CheckCircle2 size={18} strokeWidth={2.2} />
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <div className="hero-ctas">
            <Link to="/lead-form" className="btn btn-primary">
              <CalendarCheck2 size={18} /> Book Consultation
            </Link>
            <a href="tel:+919344709090" className="btn btn-outline">
              <Phone size={18} /> Call Our Wellness Experts
            </a>
          </div>
        </div>

        <div ref={formRef} className="reveal reveal-delay-2 hero-form-wrap">
          <div className="hero-form-card">
            <div className="hero-form-glow-mask" aria-hidden="true">
              <div className="hero-form-glow" />
            </div>
            <h2>Start Your Weight Loss Journey Today</h2>
            <p>
              Fill in your details and our wellness expert will contact you within 30 minutes during clinic
              hours.
            </p>

            <form id="lead-form" className="hero-form" onSubmit={handleSubmit}>
              <LeadFormFields />
              <button type="submit" className="btn btn-primary hero-form-submit" disabled={submitting}>
                {submitting ? 'Submitting…' : (
                  <>
                    Book Consultation <ArrowRight size={18} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
