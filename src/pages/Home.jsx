// Import React and other components
import React from 'react';
import HeroSection from './../components/HeroSection';
import Footer from '../components/Footer';
import Opinions from '../Opinie/Opinions'
import Banner from '../components/Banner';
import Map from '../components/Map';

// Home component definition
const Home = () => {
  return (
    <>
      <HeroSection />
      <Banner />
      <Opinions />
          <Map />
            <Footer />
    </>
  );
};

export default Home;
