import { Container } from 'reactstrap'
import './App.css'
import AnimeSection from './LandingPage/AnimeSection'
import CustomersReview from './LandingPage/CustomersReview'
import Footer from './LandingPage/Footer'
import Header from './LandingPage/Header'
import HeroSection from './LandingPage/HeroSection'
import Newsletter from './LandingPage/Newsletter'
import Section1 from './LandingPage/Section1'
import Section2 from './LandingPage/Section2'
import Section3 from './LandingPage/Section3'
import Section4 from './LandingPage/Section4'
import Section5 from './LandingPage/Section5'
import Section6 from './LandingPage/Section6'
import SectionDivider from './LandingPage/SectionDivider'
import TrustedSection from './LandingPage/TrustedSection'

function App() {
  return (
    <>
      <HeroSection />
      <AnimeSection/>
      <Section1 />
      <Section2 />
      <TrustedSection />
      <Section3 />
      <Section4 />
      <Section5/>
      <Section6/>
      <CustomersReview />
      <Newsletter />
      {/* <SectionDivider /> */}
      <Footer />
    </>
  )
}

export default App
