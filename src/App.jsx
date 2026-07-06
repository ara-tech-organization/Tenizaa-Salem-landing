import { Route, Routes } from 'react-router-dom'
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

function App() {
  return (
    <>
      <Navbar />
      <FloatingSocial />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
