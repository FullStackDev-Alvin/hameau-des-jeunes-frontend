import React from 'react';
import { Helmet } from 'react-helmet';
// import Carousel from '../Components/Carousel'
import WhoWeAre from '../Components/WhoWeAre';
import QuickLinks from '../Components/QuickLinks';
// import Footer from '../Components/Footer'
import HeroSection from '../Components/HeroSection';
import Section3 from '../Components/Section3';
import MissionAndVision from '../Components/MissionAndVision';
import SADSection from '../Components/SADSection';
import StructuredData from '../Components/StructuredData';

const Home = () => {
  return (
    <>
      <StructuredData />
      <Helmet>
        <title>Hameau des Jeunes | ETSK Musha</title>
        <meta
          name="description"
          content="Hameau des Jeunes is an organisation with a  learning hub ETSK Musha School, fostering creativity and technology skills in Musha, Rwanda."
        />
        <meta
          name="keywords"
          content="hameau, hameaus, kizito, etsk, esk, musha, musha school, youth innovation, technology hub"
        />
        <link rel="canonical" href="https://yourdomain.com/" />
      </Helmet>

      <div className=''>
        <HeroSection />
        <WhoWeAre />
        <MissionAndVision />
        <SADSection />
        <Section3 />
        <QuickLinks />
      </div>
    </>
  );
};

export default Home;
