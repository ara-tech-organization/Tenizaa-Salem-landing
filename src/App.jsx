import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { idForPath, scrollToId } from './lib/sectionNav'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhyChooseUs from './components/WhyChooseUs'
import Programs from './components/Programs'
import BodyAnalysis from './components/BodyAnalysis'
import Benefits from './components/Benefits'
import LocalTrust from './components/LocalTrust'
import Journey from './components/Journey'
import Transformations from './components/Transformations'
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
      <Transformations />
      <Testimonials />
      <Faq />
      <FinalCta />
    </main>
  )
}

function ScrollToSection() {
  const { pathname } = useLocation()
  const isThankYou = pathname.replace(/\/+$/, '') === '/thank-you'

  useEffect(() => {
    if (isThankYou) return undefined

    const id = idForPath(window.location.pathname)
    let raf
    if (id !== 'top') {
      raf = requestAnimationFrame(() => scrollToId(id, { replace: true, smooth: false }))
    }

    const onPopState = () => {
      scrollToId(idForPath(window.location.pathname), { replace: true, smooth: false })
    }
    window.addEventListener('popstate', onPopState)
    return () => {
      if (raf) cancelAnimationFrame(raf)
      window.removeEventListener('popstate', onPopState)
    }
  }, [isThankYou])

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
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/:section?" element={<Home />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
