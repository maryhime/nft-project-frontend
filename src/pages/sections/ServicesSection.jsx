import React from 'react'
import { SERVICES } from '../../data'

const ServicesSection = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-48 2xl:gap-64 px-main-sides-phone md:px-main-sides-tablet 2xl:px-main-sides-desktop py-[5%] w-full ">

      {/* section heading */}
      <div className="flex flex-col gap-24 lg:gap-48 text-white w-full">
        <h2 className="text-phone-main-heading md:text-tab-main-heading 2xl:text-main-heading uppercase">
          A new wave of <span className='text-secondary'> Collectibles </span> is about to hit the <span className='text-primary'> Blockchain </span>
        </h2>
        <img src="images/line.svg" className='w-[20%]' />
        <p className="text-body-text font-body">
          Characterised by soft lighting, vintage colour schemes and quirky costumes, these generative 3D TinyFaces are the addition to your NFT collection you’ve been waiting for.
        </p>
      </div>

      {/* services */}
      <div className="flex flex-col gap-48">
        {SERVICES.map((value, index) =>
          <div key={index} className="text-white flex flex-col gap-24">
            <h3 className="text-white text-heading">
              {value.heading}
            </h3>
            <img src="images/line.svg" className='w-[10%]' />
            <p className="text-body-text font-body">
              {value.description}
            </p>
          </div>
        )}


      </div>

    </div>
  )
}
export default ServicesSection