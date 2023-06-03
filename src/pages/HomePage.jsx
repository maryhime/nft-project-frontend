import React from 'react'
import NavbarComponent from '../components/NavbarComponent';
import backgroundImage from '../assets/background.svg';
import HeroComponent from '../Components/HeroComponent';
const HomePage = () => {
  return (
    <>
    <div className="  bg-[#171217">
      <div className="relative z-[1000] ">
        <NavbarComponent />
      </div>
      <div className="relative z-40">
        <HeroComponent />
      </div>
      <div className="absolute -z-[100] mt-[-180px] h-[100vh] w-full">
        <img className=' w-[100%]' src={backgroundImage} alt="background image" />

      </div>
      
    </div>
     
     
    </>

  )
}

export default HomePage