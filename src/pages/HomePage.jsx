import React, { Fragment } from 'react'
import { NavbarComponent } from '../Components/NavbarComponent'
import HeroSection from './sections/HeroSection'




const HomePage = () => {
  return (
    <Fragment>
      <div className="bg-[url('/images/background.png')] cursor-normal bg-no-repeat bg-cover" >
        <NavbarComponent/>
        <HeroSection/>
      </div >


    </Fragment>

  )
}

export default HomePage