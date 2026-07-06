import { useState } from 'react'
import {
  Apple,
  Flame,
  Ruler,
  Scale,
  Sparkle,
  TrendingUp,
} from 'lucide-react'
import Reveal from './Reveal'

const PROGRAMS = [
  {
    icon: Scale,
    title: 'Personalized Weight Loss Program',
    desc: 'Our personalized weight loss programs are designed to help you lose weight safely while improving your overall health through nutrition guidance, wellness support, and sustainable lifestyle modifications.',
  },
  {
    icon: Flame,
    title: 'Fat Reduction Therapy',
    desc: 'Support your weight loss journey with non-surgical fat reduction therapies designed to target stubborn fat and complement your personalized wellness program.',
    tags: ['Belly Fat', 'Waist Fat', 'Arm Fat', 'Thigh Fat', 'Overall Body Fat Reduction'],
  },
  {
    icon: Ruler,
    title: 'Inch Loss Program',
    desc: 'Achieve visible inch loss and improve body shape through customized wellness programs focused on measurable progress and long-term results.',
  },
  {
    icon: TrendingUp,
    title: 'Weight Management Program',
    desc: 'Whether your goal is weight loss or maintaining your current progress, our structured weight management programs provide ongoing guidance and accountability.',
  },
  {
    icon: Apple,
    title: 'Diet & Nutrition Consultation',
    desc: 'Healthy weight loss begins with proper nutrition. Our experienced dieticians prepare personalized meal plans based on your: Lifestyle, Food Preferences, Daily Routine, Health Goals, Body Composition. No crash diets. No unrealistic restrictions. Just balanced nutrition and sustainable habits.',
  },
  {
    icon: Sparkle,
    title: 'Lifestyle Coaching',
    desc: 'Build healthier habits through practical lifestyle coaching that supports long-term weight management and overall wellness.',
  },
]

export default function Programs() {
  const [flipped, setFlipped] = useState(() => new Set())

  const toggleFlip = (index) => {
    setFlipped((prev) => {
      const next = new Set(prev)
      if (next.has(index)) {
        next.delete(index)
      } else {
        next.add(index)
      }
      return next
    })
  }

  return (
    <section id="programs" className="programs">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Our Offerings</span>
          <h2>Our Weight Loss &amp; Wellness Programs</h2>
        </Reveal>

        <div className="flip-grid">
          {PROGRAMS.map((program, index) => {
            const Icon = program.icon
            const isFlipped = flipped.has(index)
            return (
              <Reveal
                key={program.title}
                delay={(index % 3) + 1}
                className={`flip-card ${isFlipped ? 'is-flipped' : ''}`}
                onClick={() => toggleFlip(index)}
                role="button"
                tabIndex={0}
              >
                <div className="flip-card-inner">
                  <div className="flip-card-face flip-card-front">
                    <div className="flip-card-icon">
                      <Icon size={30} strokeWidth={1.8} />
                    </div>
                    <h3>{program.title}</h3>
                    <span className="flip-card-hint">Tap to explore</span>
                  </div>
                  <div className="flip-card-face flip-card-back">
                    <h3>{program.title}</h3>
                    <p>{program.desc}</p>
                    {program.tags && (
                      <ul className="program-tags">
                        {program.tags.map((tag) => (
                          <li key={tag}>{tag}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
