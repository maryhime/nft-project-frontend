import React from 'react'
import { PARTNERS } from '../../data'

export const PartnersSection = () => {
  return (
    <div className="flex flex-col w-full py-80 gap-24 md:gap-48 animate-pulse">
      <h6 className='text-button text-center text-secondary font-body'>Partners</h6>
      <div className="grid grid-cols-4 md:grid-cols-8 ">
        {PARTNERS.map((value, index)=>
          <img key={index} src={value} alt="brand-logo" />
        )}
      </div>
    </div>

  )
}
