import React, { Fragment } from 'react'
import { NavbarComponent } from '../Components/NavbarComponent'
import HeroSection from './sections/HeroSection'
import { PartnersSection } from './sections/PartnersSection'
import { ServicesSection } from './sections/ServicesSection'
import { CharactersSection } from './sections/CharactersSection'




const HomePage = () => {
  return (
    <Fragment>
      <div className="bg-[url('/images/background.png')] cursor-normal bg-no-repeat bg-cover" >
        <NavbarComponent/>
        <HeroSection/>
        <PartnersSection/>
        <ServicesSection/>
        <CharactersSection/>
      </div >


    </Fragment>

  )
}

export default HomePage