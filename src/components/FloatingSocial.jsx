import { Phone } from 'lucide-react'
import { WhatsappIcon } from './SocialIcons'

export default function FloatingSocial() {
  return (
    <>
      <a
        href="tel:+919344709090"
        className="floating-action floating-action-left floating-action-call"
        aria-label="Call Tenziaa Wellness Clinic"
      >
        <span className="floating-action-ring" aria-hidden="true" />
        <Phone size={22} strokeWidth={2.2} />
      </a>
      <a
        href="https://wa.me/919344709090"
        target="_blank"
        rel="noreferrer"
        className="floating-action floating-action-right floating-action-whatsapp"
        aria-label="Chat with us on WhatsApp"
      >
        <span className="floating-action-ring" aria-hidden="true" />
        <WhatsappIcon size={24} />
      </a>
    </>
  )
}
