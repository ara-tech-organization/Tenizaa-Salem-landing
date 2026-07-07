import { Quote, Star } from 'lucide-react'
import Reveal from './Reveal'

const TESTIMONIALS = [
  {
    quote:
      "The personalized diet plan suited my routine perfectly. The team's regular guidance and encouragement helped me stay consistent with my goals.",
    author: 'Kavitha, Salem',
    initial: 'K',
  },
  {
    quote:
      'The wellness experts explained every step clearly and created a program that was practical for my lifestyle. I felt supported throughout my journey.',
    author: 'Naveen Kumar, Salem',
    initial: 'N',
  },
]

export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Client Stories</span>
          <h2>What Our Clients Say</h2>
        </Reveal>

        <div className="testimonial-row">
          {TESTIMONIALS.map((item, index) => (
            <Reveal
              as="article"
              key={item.author + index}
              delay={index + 1}
              className="testimonial-card"
            >
              <Quote className="testimonial-card-quote" size={34} strokeWidth={1.5} />
              <div className="testimonial-stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <p className="testimonial-card-text">&ldquo;{item.quote}&rdquo;</p>
              <div className="testimonial-card-footer">
                <span className="testimonial-avatar">{item.initial}</span>
                <span className="testimonial-author">{item.author}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
