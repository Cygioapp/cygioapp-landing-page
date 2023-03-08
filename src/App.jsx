import { Container } from 'reactstrap'
import './App.css'
import Footer from './LandingPage/Footer'
import Header from './LandingPage/Header'
import HeroSection from './LandingPage/HeroSection'
import Section1 from './LandingPage/Section1'
import Section2 from './LandingPage/Section2'
import Section3 from './LandingPage/Section3'
import SectionDivider from './LandingPage/SectionDivider'
import TrustedSection from './LandingPage/TrustedSection'

function App() {
  return (
    <>
      <HeroSection />
      <Section1 />
      <Section2 />
      <TrustedSection />
      <Section3 />
      <SectionDivider />
      <Footer />
    </>
  )
}

export default App
