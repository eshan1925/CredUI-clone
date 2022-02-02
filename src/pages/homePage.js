import React from 'react';
import BrandsLove from '../components/BrandsLove';
import Header from '../components/common/Header';
import CredExperience from '../components/CredExperience';
import FeelSpecial from '../components/FeelSpecial';
import HeroSection from '../components/HeroSection';
import MobileScroll from '../components/MobileScroll';
import ProductShowcase from '../components/ProductShowcase';
import SecurityComponent from '../components/SecurityComponent';
import WindowPeak from '../components/WindowPeak';

const HomePage = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <ProductShowcase />
      <FeelSpecial />
      <BrandsLove />
      <CredExperience />
      <MobileScroll />
      <div className='non-mobile'>
      <WindowPeak />
      </div>
      <SecurityComponent />
    </>
  );
};

export default HomePage;
