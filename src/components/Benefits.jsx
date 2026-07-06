import {
  Activity,
  CalendarClock,
  CircleGauge,
  ClipboardCheck,
  Compass,
  Leaf,
  Salad,
  ShieldPlus,
  Sparkles,
  UserCheck,
} from 'lucide-react'
import Reveal from './Reveal'

const BENEFITS = [
  { icon: ClipboardCheck, label: 'Personalized Weight Loss Assessment' },
  { icon: Compass, label: 'Customized Weight Loss Plans' },
  { icon: Salad, label: 'Expert Diet & Nutrition Guidance' },
  { icon: ShieldPlus, label: 'Non-Surgical Wellness Solutions' },
  { icon: CalendarClock, label: 'Flexible Appointment Scheduling' },
  { icon: UserCheck, label: 'Continuous Dietician Support' },
  { icon: CircleGauge, label: 'Regular Progress Reviews' },
  { icon: Activity, label: 'Body Composition Analysis' },
  { icon: Sparkles, label: 'Lifestyle Coaching' },
  { icon: Leaf, label: 'Sustainable Weight Management' },
]

export default function Benefits() {
  return (
    <section className="benefits">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">The Tenziaa Advantage</span>
          <h2>Benefits of Choosing Tenziaa</h2>
        </Reveal>

        <div className="benefits-grid">
          {BENEFITS.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <Reveal
                as="div"
                key={benefit.label}
                delay={(index % 5) + 1}
                className="benefit-chip"
              >
                <Icon size={18} strokeWidth={2.2} />
                <span>{benefit.label}</span>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
