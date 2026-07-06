import { Quote } from 'lucide-react'
import Reveal from './Reveal'

export default function LocalTrust() {
  return (
    <section className="local-trust">
      <div className="container local-trust-inner">
        <Reveal className="local-trust-icon">
          <Quote size={36} strokeWidth={1.5} />
        </Reveal>
        <Reveal delay={1}>
          <h2>Looking for the Best Weight Loss Clinic in Salem?</h2>
          <p>
            If you&apos;re searching for the best weight loss clinic in Salem, weight management clinic,
            wellness clinic in Salem, or a trusted slimming centre in Salem, Tenziaa Wellness Clinic offers
            personalized solutions designed to help you achieve sustainable results.
          </p>
          <p>
            Our approach combines expert nutrition counselling, body composition analysis, lifestyle coaching,
            and non-surgical wellness solutions to support healthy weight loss. Every program is customized
            according to your body composition, health condition, and personal goals, helping you build
            healthier habits for lasting success.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
