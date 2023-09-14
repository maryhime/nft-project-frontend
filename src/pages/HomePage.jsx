import React, { Fragment, useState } from 'react'
import { NavbarComponent } from '../Components/NavbarComponent'
import HeroSection from './sections/HeroSection'
import PartnersSection from './sections/PartnersSection';
import ServicesSection from './sections/ServicesSection';
import CharactersSection from './sections/CharactersSection';
import FAQsSection from './sections/FAQsSection';
import { CTABannerComponent } from '../Components/CTABannerComponent'
import { FooterComponent } from '../Components/FooterComponent'






const HomePage = () => {

  return (
      <div className="bg-[url('/images/background.png')] pointer-events-auto cursor-normal bg-no-repeat overflow-x-hidden " >
        <NavbarComponent/>
        <HeroSection/>
        <PartnersSection/>
        <ServicesSection/>
        <CharactersSection/>
        <FAQsSection/>
        <CTABannerComponent/>
        <FooterComponent/>
      </div >

  )
}

export default HomePage