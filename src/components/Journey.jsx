import { CalendarHeart, ClipboardList, ScanEye, TrendingUp } from 'lucide-react'
import Reveal from './Reveal'

const STEPS = [
  {
    icon: CalendarHeart,
    title: 'Consultation',
    desc: 'Meet with our wellness expert to discuss your health history, lifestyle, and weight loss goals.',
  },
  {
    icon: ScanEye,
    title: 'Body Composition Analysis',
    desc: 'Understand your body fat percentage, muscle mass, BMI, and overall body composition to create the right strategy.',
  },
  {
    icon: ClipboardList,
    title: 'Personalized Weight Loss Plan',
    desc: 'Receive a customized combination of nutrition guidance, wellness therapies, and lifestyle recommendations based on your assessment.',
  },
  {
    icon: TrendingUp,
    title: 'Ongoing Support',
    desc: 'Stay motivated with regular follow-ups, progress tracking, and personalized plan adjustments throughout your journey.',
  },
]

export default function Journey() {
  return (
    <section id="journey" className="journey">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">The Process</span>
          <h2>Your Weight Loss Journey</h2>
        </Reveal>

        <div className="journey-timeline">
          {STEPS.map((step, index) => {
            const Icon = step.icon
            return (
              <Reveal as="div" key={step.title} delay={index + 1} className="journey-step">
                <div className="journey-marker">
                  <span className="journey-number">{`0${index + 1}`}</span>
                  <div className="journey-icon">
                    <Icon size={22} strokeWidth={2} />
                  </div>
                </div>
                <div className="journey-content">
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
