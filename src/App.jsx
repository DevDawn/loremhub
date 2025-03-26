import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import AboutUs from './Components/AboutUs'
import Team from './Components/Team'
import History from './Components/History'
import Services from './Components/Services'
import CallToAction from './Components/CallToAction'
import Events from './Components/Events'
import Testimonials from './Components/Testimonials'
import SuccessStories from './Components/SucessStories'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutUs />
      <Team />
      <History />
      <Services />
      <CallToAction />
      <Events />
      <Testimonials />
      <SuccessStories />
      <Footer />
    </div>
  )
}

export default App
