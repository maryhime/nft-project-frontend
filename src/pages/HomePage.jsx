import React from 'react'
import NavbarComponent from '../Components/NavbarComponent';
import HeroComponent from '../Components/HeroComponent';
import PartnersComponent from '../Components/PartnersComponent';
import ServicesComponent from '../Components/ServicesComponent';
import CharactersComponent from '../Components/CharactersComponent';

const HomePage = () => {
  return (
    <>
      <div className="bg-[#171217] h-fit" >
        <div className="relative z-50">
          <NavbarComponent />
        </div>

        <HeroComponent />
        <PartnersComponent />
        <ServicesComponent />
        <CharactersComponent />

        <div className="absolute top-[-185px] left-[500px]">
          <svg width="958" height="961" viewBox="0 0 958 961" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.5" filter="url(#filter0_f_125_4661)">
              <circle cx="791.5" cy="169.5" r="215.5" stroke="#00B6FF" stroke-width="278" />
            </g>
            <defs>
              <filter id="filter0_f_125_4661" x="0" y="-622" width="1583" height="1583" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="218.5" result="effect1_foregroundBlur_125_4661" />
              </filter>
            </defs>
          </svg>
        </div>
        <div className="absolute top-[400px] left-[-200px]">
          <svg width="793" height="1583" viewBox="0 0 793 1583" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.5" filter="url(#filter0_f_125_4690)">
              <circle cx="1.5" cy="791.5" r="215.5" stroke="#FF00E8" stroke-width="278" />
            </g>
            <defs>
              <filter id="filter0_f_125_4690" x="-790" y="0" width="1583" height="1583" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="218.5" result="effect1_foregroundBlur_125_4690" />
              </filter>
            </defs>
          </svg>

        </div>
        <div className="absolute top-[1800px] left-[700px]">
          <svg width="1112" height="1583" viewBox="0 0 1112 1583" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.5" filter="url(#filter0_f_125_4689)">
              <circle cx="791.5" cy="791.5" r="215.5" stroke="#00B6FF" stroke-width="278" />
            </g>
            <defs>
              <filter id="filter0_f_125_4689" x="0" y="0" width="1583" height="1583" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="218.5" result="effect1_foregroundBlur_125_4689" />
              </filter>
            </defs>
          </svg>

        </div>



        {/* <div className="absolute -z-[100] mt-[-180px] h-[100vh] w-full">
        <img className=' w-[100%]' src={backgroundImage} alt="background image" />

      </div> */}

      </div >


    </>

  )
}

export default HomePage