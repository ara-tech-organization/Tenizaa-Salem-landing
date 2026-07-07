import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhyChooseUs from './components/WhyChooseUs'
import Programs from './components/Programs'
import BodyAnalysis from './components/BodyAnalysis'
import Benefits from './components/Benefits'
import LocalTrust from './components/LocalTrust'
import Journey from './components/Journey'
import Testimonials from './components/Testimonials'
import Faq from './components/Faq'
import FinalCta from './components/FinalCta'
import Footer from './components/Footer'
import FloatingSocial from './components/FloatingSocial'
import ThankYou from './components/ThankYou'
import LeadPopup from './components/LeadPopup'
import './App.css'

function Home() {
  return (
    <main>
      <Hero />
      <WhyChooseUs />
      <Programs />
      <BodyAnalysis />
      <Benefits />
      <LocalTrust />
      <Journey />
      <Testimonials />
      <Faq />
      <FinalCta />
    </main>
  )
}

const SECTION_IDS = ['top', 'why-us', 'programs', 'bca', 'journey', 'faq', 'lead-form']

function ScrollToSection() {
  const { pathname } = useLocation()

  useEffect(() => {
    const section = pathname.replace(/^\/+/, '')
    const id = SECTION_IDS.includes(section) ? section : 'top'
    let cancelled = false

    const scrollToTarget = () => {
      const target = document.getElementById(id)
      if (target && !cancelled) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }

    const raf = requestAnimationFrame(scrollToTarget)
    return () => {
      cancelled = true
      cancelAnimationFrame(raf)
    }
  }, [pathname])

  return null
}

function App() {
  return (
    <>
      <Navbar />
      <FloatingSocial />
      <LeadPopup />
      <ScrollToSection />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/:section" element={<Home />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
