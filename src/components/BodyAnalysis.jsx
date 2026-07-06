import { Droplets, Gauge, HeartPulse, PersonStanding } from 'lucide-react'
import Reveal from './Reveal'

const METRICS = [
  { icon: PersonStanding, label: 'Body Fat %', value: 82 },
  { icon: Gauge, label: 'Muscle Mass', value: 68 },
  { icon: HeartPulse, label: 'BMI Index', value: 74 },
  { icon: Droplets, label: 'Hydration Level', value: 90 },
]

export default function BodyAnalysis() {
  return (
    <section id="bca" className="bca">
      <div className="container bca-grid">
        <Reveal className="bca-copy">
          <span className="eyebrow eyebrow-dark">Precision Assessment</span>
          <h2>Body Composition Analysis (BCA)</h2>
          <p>
            Every personalized weight loss program begins with a detailed body assessment that evaluates:
          </p>
          <ul className="bca-list">
            <li>Body Fat Percentage</li>
            <li>Muscle Mass</li>
            <li>BMI</li>
            <li>Metabolic Health Indicators</li>
            <li>Hydration Levels</li>
          </ul>
          <p className="bca-copy-note">
            These insights help our wellness experts develop a program tailored specifically to your
            body&apos;s needs.
          </p>
        </Reveal>

        <Reveal delay={2} className="bca-metrics">
          {METRICS.map((metric) => {
            const Icon = metric.icon
            return (
              <div key={metric.label} className="bca-metric-card">
                <div className="bca-metric-top">
                  <Icon size={20} strokeWidth={2} />
                  <span>{metric.label}</span>
                </div>
                <div className="bca-metric-bar">
                  <div className="bca-metric-fill" style={{ width: `${metric.value}%` }} />
                </div>
              </div>
            )
          })}
        </Reveal>
      </div>
    </section>
  )
}
