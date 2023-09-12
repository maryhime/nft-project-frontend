import React, { Fragment } from 'react'
import { NavbarComponent } from '../Components/NavbarComponent'
import HeroSection from './sections/HeroSection'
import { PartnersSection } from './sections/PartnersSection'
import { ServicesSection } from './sections/ServicesSection'
import { CharactersSection } from './sections/CharactersSection'
import { FAQsSection } from './sections/FAQsSection'




const HomePage = () => {
  return (
    <Fragment>
      <div className="bg-[url('/images/background.png')] pointer-events-auto cursor-normal bg-no-repeat " >
        <NavbarComponent/>
        <HeroSection/>
        <PartnersSection/>
        <ServicesSection/>
        <CharactersSection/>
        <FAQsSection/>
      </div >


    </Fragment>

  )
}

export default HomePage