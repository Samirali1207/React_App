import React from 'react'
import Navbar from '../components/Navbar'
import UpperNav from '../components/UpperNav'
import Footer from '../components/Footer'
import AboutCards from '../components/AboutCards'
import Cadsheader from '../components/Cadsheader'
import AboutTiltCard from '../components/AboutTiltCard'
import AboutCards2 from '../components/AboutCards2'


const About = () => {

  return (
    <>
      <UpperNav />
      <Navbar />
      <Cadsheader />
      <AboutCards />
      <AboutTiltCard />
      <AboutCards2 />
      <Footer />
    </>
  )
}

export default About