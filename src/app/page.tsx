import Banner from '@/components/Banner/Banner'
import Benefits from '@/components/Benefit/Benefit'
import Contact from '@/components/Contact/Contact'
import Footer from '@/components/Footer/Footer'
import Hero from '@/components/Hero/Hero'
import Navbar from '@/components/Navbar/Navbar'
import Work from '@/components/Work/Work'
import React from 'react'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <Hero/>
      <Work/>
      <Benefits/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Home