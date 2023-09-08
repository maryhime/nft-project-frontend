import React from 'react'
import NavbarComponent from '../Components/NavbarComponent';
import HeroComponent from '../Components/HeroComponent';


const HomePage = () => {
  return (
    <>
      <div className="bg-[url('/images/background.png')]" >
        <div className="relative z-50">
          <NavbarComponent />
        </div>

        <HeroComponent />
        {/* <PartnersComponent />
        <ServicesComponent />
        <CharactersComponent /> */}

 
        {/* <div className="absolute -z-[100] mt-[-180px] h-[100vh] w-full">
        <img className=' w-[100%]' src={backgroundImage} alt="background image" />

      </div> */}

      </div >


    </>

  )
}

export default HomePage