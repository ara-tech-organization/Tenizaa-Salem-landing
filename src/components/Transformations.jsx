import { ArrowRight } from 'lucide-react'
import Reveal from './Reveal'
import before1 from '../assets/Before1.png'
import after1 from '../assets/After1.png'
import before2 from '../assets/Before2.png'
import after2 from '../assets/After2.png'
import before3 from '../assets/Before3.png'
import after3 from '../assets/After3.png'

const TRANSFORMATIONS = [
  { before: before1, after: after1 },
  { before: before2, after: after2 },
  { before: before3, after: after3 },
]

export default function Transformations() {
  return (
    <section className="transformations">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Real Results</span>
          <h2>Transformation Stories</h2>
          <p>Real clients, real progress — see the change our personalized programs deliver.</p>
        </Reveal>
      </div>

      <div className="container container-wide">
        <div className="transformation-row">
          {TRANSFORMATIONS.map((item, index) => (
            <Reveal
              as="article"
              key={index}
              delay={index + 1}
              className="transformation-card"
            >
              <div className="transformation-images">
                <div className="transformation-image">
                  <img src={item.before} alt="Before transformation" loading="lazy" />
                  <span className="transformation-tag transformation-tag-before">Before</span>
                </div>
                <div className="transformation-arrow">
                  <ArrowRight size={18} />
                </div>
                <div className="transformation-image">
                  <img src={item.after} alt="After transformation" loading="lazy" />
                  <span className="transformation-tag transformation-tag-after">After</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
