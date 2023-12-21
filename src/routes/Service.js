import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroImg2 from '../components/HeroImg2';
import Work from '../components/Work';

const Service = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="SERVICE" text="We Provide For Your Brand"/>
      <Work />
      <Footer/>
    </div>
  );
}

export default Service;