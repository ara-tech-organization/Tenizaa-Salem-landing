import { Calendar, MapPin, Smartphone, User } from 'lucide-react'

export default function LeadFormFields() {
  return (
    <>
      <label className="hero-form-field">
        <User size={18} className="hero-form-field-icon" />
        <input type="text" name="name" placeholder="Full Name" aria-label="Full Name" required />
      </label>
      <label className="hero-form-field">
        <Smartphone size={18} className="hero-form-field-icon" />
        <input type="tel" name="mobile" placeholder="Mobile Number" aria-label="Mobile Number" required />
      </label>
      <label className="hero-form-field">
        <MapPin size={18} className="hero-form-field-icon" />
        <input
          type="text"
          name="city"
          placeholder="City"
          aria-label="City"
          pattern="[A-Za-z ]+"
          title="City should only contain letters"
          required
        />
      </label>
      <label className="hero-form-field">
        <Calendar size={18} className="hero-form-field-icon" />
        <input type="date" name="date" aria-label="Preferred Date" required />
      </label>
    </>
  )
}
