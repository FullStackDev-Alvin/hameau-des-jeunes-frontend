import React from 'react'
import Carousel from '../Components/Carousel'
import WhoWeAre from '../Components/WhoWeAre'
import QuickLinks from '../Components/QuickLinks'
import Footer from '../Components/Footer'
import HeroSection from '../Components/HeroSection'
import Section3 from '../Components/Section3'
import MissionAndVision from '../Components/MissionAndVision'
import SADSection from '../Components/section2'

const Home = () => {
  return (
    <div className=''>
        <HeroSection/>
        <WhoWeAre/>
        <MissionAndVision/>
        <SADSection/>
        <Section3/>
        <QuickLinks/>
    </div>

  )
}

export default Home