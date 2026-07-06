import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CalendarCheck2, CheckCircle2, Phone, Sparkles } from 'lucide-react'
import useReveal from '../hooks/useReveal'
import TimePicker from './TimePicker'

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
    const form = event.target
    const now = new Date()

    setSubmitting(true)
    try {
      await fetch('https://tenziaa.com/api/email.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name.value,
          email: '',
          phone: form.mobile.value,
          date: now.toISOString().split('T')[0],
          time: form.time.value,
          treatment: '',
          message: '',
          source: 'Website Hero Form',
        }),
      })
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
          <span className="eyebrow">
            <Sparkles size={14} /> Best Weight Loss Clinic in Salem for Personalized Weight Loss &amp; Wellness
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
            <a href="/#lead-form" className="btn btn-primary">
              <CalendarCheck2 size={18} /> Book Your Consultation
            </a>
            <a href="tel:+916383837363" className="btn btn-outline">
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
              Book a consultation with our wellness experts and receive a personalized assessment based on
              your health goals, body composition, and lifestyle.
            </p>

            <form id="lead-form" className="hero-form" onSubmit={handleSubmit}>
              <label>
                <span>Full Name</span>
                <input type="text" name="name" placeholder="Enter your full name" required />
              </label>
              <label>
                <span>Mobile Number</span>
                <input type="tel" name="mobile" placeholder="Enter your mobile number" required />
              </label>
              <label>
                <span>Preferred Time to Call</span>
                <TimePicker name="time" required />
              </label>
              <button type="submit" className="btn btn-primary hero-form-submit" disabled={submitting}>
                {submitting ? 'Submitting…' : 'Book My Consultation'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
