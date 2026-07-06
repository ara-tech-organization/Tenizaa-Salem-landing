import { Activity, HeartHandshake, LineChart, ScanLine, ShieldCheck, UserCog } from 'lucide-react'
import Reveal from './Reveal'

const CARDS = [
  {
    icon: UserCog,
    title: 'Personalized Weight Loss Programs',
    desc: 'Every plan is tailored to your body composition, metabolism, lifestyle, and individual health goals.',
    big: true,
  },
  {
    icon: HeartHandshake,
    title: 'Experienced Dieticians & Wellness Experts',
    desc: 'Receive expert nutrition guidance and continuous support from professionals committed to helping you achieve lasting results.',
  },
  {
    icon: ShieldCheck,
    title: 'Safe Non-Surgical Fat Reduction',
    desc: 'Our wellness programs use non-invasive methods that support healthy fat reduction without surgery or downtime.',
  },
  {
    icon: ScanLine,
    title: 'Body Composition Analysis (BCA)',
    desc: 'Understand your body better through detailed analysis of body fat percentage, muscle mass, BMI, hydration levels, and other key health indicators.',
  },
  {
    icon: LineChart,
    title: 'Regular Progress Monitoring',
    desc: 'We continuously monitor your progress and adjust your personalized program to keep you moving towards your goals.',
  },
  {
    icon: Activity,
    title: 'Trusted Wellness Care',
    desc: 'Our structured approach combines professional guidance, personalized care, and long-term lifestyle improvements to help you maintain your results.',
  },
]

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="why-us">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Why Tenziaa</span>
          <h2>Why Choose Tenziaa Weight Loss Clinic in Salem?</h2>
          <p>
            Choosing the right Weight Loss Clinic in Salem is the first step towards achieving lasting results.
            At Tenziaa Wellness Clinic, we believe every weight loss journey should be personalized. Instead of
            one-size-fits-all solutions, we design customized wellness programs that focus on healthy,
            sustainable weight management.
          </p>
        </Reveal>

        <div className="bento-grid">
          {CARDS.map((card, index) => {
            const Icon = card.icon
            return (
              <Reveal
                key={card.title}
                delay={(index % 3) + 1}
                className={`bento-card ${card.big ? 'bento-card-big' : ''}`}
              >
                <div className="bento-icon">
                  <Icon size={22} strokeWidth={2} />
                </div>
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
