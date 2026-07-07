import { useEffect, useRef, useState } from 'react'
import { Clock } from 'lucide-react'

const HOUR_MARKS = Array.from({ length: 12 }, (_, i) => (i === 0 ? 12 : i))
const MINUTE_MARKS = Array.from({ length: 12 }, (_, i) => i * 5)
const RADIUS = 78

function markPosition(index) {
  const angle = (index * 30 - 90) * (Math.PI / 180)
  return {
    left: `calc(50% + ${RADIUS * Math.cos(angle)}px)`,
    top: `calc(50% + ${RADIUS * Math.sin(angle)}px)`,
  }
}

export default function TimePicker({ name, required }) {
  const [open, setOpen] = useState(false)
  const [step, setStep] = useState('hour')
  const [hour, setHour] = useState(null)
  const [minute, setMinute] = useState(null)
  const [period, setPeriod] = useState('AM')
  const wrapRef = useRef(null)

  useEffect(() => {
    if (!open) return undefined
    const handleClickOutside = (event) => {
      if (wrapRef.current && !wrapRef.current.contains(event.target)) {
        setOpen(false)
        setStep('hour')
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [open])

  const hasValue = hour !== null && minute !== null

  const value24 = hasValue
    ? `${String(period === 'PM' ? (hour % 12) + 12 : hour % 12).padStart(2, '0')}:${String(minute).padStart(2, '0')}`
    : ''

  const display = hasValue ? `${hour}:${String(minute).padStart(2, '0')} ${period}` : ''

  const handleMarkClick = (mark) => {
    if (step === 'hour') {
      setHour(mark)
      setStep('minute')
    } else {
      setMinute(mark)
      setOpen(false)
      setStep('hour')
    }
  }

  const marks = step === 'hour' ? HOUR_MARKS : MINUTE_MARKS
  const selected = step === 'hour' ? hour : minute

  return (
    <div className="clock-picker" ref={wrapRef}>
      <input type="hidden" name={name} value={value24} required={required} />
      <button type="button" className="clock-picker-trigger" onClick={() => setOpen((prev) => !prev)}>
        <Clock size={18} className="hero-form-field-icon clock-picker-icon" />
        <span className={display ? '' : 'is-placeholder'}>{display || 'Preferred Time'}</span>
        <span className="clock-picker-badge">
          <Clock size={16} />
        </span>
      </button>

      {open && (
        <div className="clock-picker-pop">
          <div className="clock-picker-head">
            <div className="clock-picker-readout">
              <button type="button" className={step === 'hour' ? 'is-active' : ''} onClick={() => setStep('hour')}>
                {hour ?? '--'}
              </button>
              <span>:</span>
              <button type="button" className={step === 'minute' ? 'is-active' : ''} onClick={() => setStep('minute')}>
                {minute !== null ? String(minute).padStart(2, '0') : '--'}
              </button>
            </div>
            <div className="clock-picker-period">
              <button type="button" className={period === 'AM' ? 'is-active' : ''} onClick={() => setPeriod('AM')}>
                AM
              </button>
              <button type="button" className={period === 'PM' ? 'is-active' : ''} onClick={() => setPeriod('PM')}>
                PM
              </button>
            </div>
          </div>

          <div className="clock-picker-face">
            <div className="clock-picker-center" />
            {marks.map((mark, index) => (
              <button
                type="button"
                key={mark}
                className={`clock-picker-mark ${selected === mark ? 'is-selected' : ''}`}
                style={markPosition(index)}
                onClick={() => handleMarkClick(mark)}
              >
                {step === 'minute' ? String(mark).padStart(2, '0') : mark}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
