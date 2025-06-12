import React from 'react'
import Carousel from '../Components/Carousel'
import WhoWeAre from '../Components/WhoWeAre'
import QuickLinks from '../Components/QuickLinks'
import Footer from '../Components/Footer'
import HeroSection from '../Components/HeroSection'
import Section2 from '../Components/section2'
import Section3 from '../Components/Section3'
import MissionAndVision from '../Components/MissionAndVision'

const Home = () => {
  return (
    <div className=''>
        <HeroSection/>
        <WhoWeAre/>
        <MissionAndVision/>
        <Section2/>
        <Section3/>
        <QuickLinks/>
    </div>

  )
}

export default Home