import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowRight, Sparkles, X } from 'lucide-react'
import LeadFormFields from './LeadFormFields'
import { submitLead } from '../lib/submitLead'

export default function LeadPopup() {
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 2500)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (!open) return undefined
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const close = () => setOpen(false)

  const handleSubmit = async (event) => {
    event.preventDefault()
    setSubmitting(true)
    try {
      await submitLead(event.target, 'Website Popup')
    } catch (error) {
      console.error('Lead popup submission failed:', error)
    } finally {
      setSubmitting(false)
      setOpen(false)
      navigate('/thank-you')
    }
  }

  if (!open) return null

  return (
    <div className="lead-popup-overlay" onClick={close}>
      <div className="lead-popup-card" onClick={(event) => event.stopPropagation()}>
        <button type="button" className="lead-popup-close" onClick={close} aria-label="Close">
          <X size={18} />
        </button>

        <span className="eyebrow eyebrow-wrap lead-popup-badge">
          <Sparkles size={14} /> Salem's Trusted Wellness Clinic
        </span>

        <h2>Start Your Weight Loss Journey Today</h2>
        <p>Leave your details and our wellness expert will call you back.</p>

        <form className="hero-form" onSubmit={handleSubmit}>
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
  )
}
