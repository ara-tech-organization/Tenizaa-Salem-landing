import { useState } from 'react'
import { Minus, Plus } from 'lucide-react'
import Reveal from './Reveal'

const FAQS = [
  {
    q: 'Which is the best weight loss clinic in Salem?',
    a: 'Tenziaa Wellness Clinic offers personalized weight loss programs, expert diet consultation, body composition analysis, and non-surgical wellness solutions designed around your individual health goals.',
  },
  {
    q: 'Do you provide personalized diet plans?',
    a: 'Yes. Every client receives a customized nutrition plan based on their body composition, lifestyle, food preferences, and weight loss objectives.',
  },
  {
    q: 'Are your weight loss programs non-surgical?',
    a: 'Yes. Our weight loss and wellness programs use non-surgical, non-invasive approaches that support healthy fat reduction and sustainable weight management.',
  },
  {
    q: 'What is Body Composition Analysis (BCA)?',
    a: 'Body Composition Analysis measures important health indicators such as body fat percentage, muscle mass, BMI, and hydration levels. This information helps us create a personalized weight loss plan.',
  },
  {
    q: 'Can I reduce belly fat through your programs?',
    a: 'Our personalized wellness programs are designed to support overall fat loss. Combined with nutrition guidance and lifestyle coaching, they help improve body composition and reduce excess body fat over time.',
  },
  {
    q: 'How long does a weight loss program take?',
    a: 'The duration depends on your body composition, health condition, and personal goals. Our wellness experts will recommend a program suited to your individual needs during your consultation.',
  },
  {
    q: 'Do you provide ongoing support during the program?',
    a: 'Yes. We offer continuous progress monitoring, nutrition guidance, and regular follow-ups to help you stay on track throughout your weight loss journey.',
  },
  {
    q: 'Who can join the weight loss program?',
    a: 'Our personalized weight loss programs are suitable for adults looking to manage their weight, improve their lifestyle, and work toward healthier long-term wellness goals. During your consultation, our experts will recommend the most appropriate program based on your individual assessment.',
  },
  {
    q: 'Why choose Tenziaa Wellness Clinic in Salem?',
    a: 'Tenziaa combines personalized weight loss programs, expert nutrition guidance, body composition analysis, and ongoing wellness support to help you achieve healthy, sustainable results with confidence.',
  },
]

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="faq">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Got Questions?</span>
          <h2>Frequently Asked Questions</h2>
        </Reveal>

        <div className="faq-grid">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <Reveal
                as="div"
                key={faq.q}
                delay={(index % 4) + 1}
                className={`faq-card ${isOpen ? 'is-open' : ''}`}
              >
                <button
                  className="faq-question"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                >
                  <span>{faq.q}</span>
                  <span className="faq-toggle">
                    {isOpen ? <Minus size={16} strokeWidth={2.4} /> : <Plus size={16} strokeWidth={2.4} />}
                  </span>
                </button>
                <div className="faq-answer" style={{ maxHeight: isOpen ? '220px' : '0px' }}>
                  <p>{faq.a}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
