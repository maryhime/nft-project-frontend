import React from 'react'
import { QUESTIONS } from '../../data'

export const FAQsSection = () => {
  return (
    <div className="flex flex-col lg:flex-row 2xl:gap-64 px-main-sides-phone md:px-main-sides-tablet 2xl:px-main-sides-desktop py-[5%] w-full">
      <h2 className="text-white text-phone-main-heading md:text-tab-main-heading 2xl:text-main-heading uppercase">
        Your <span className='text-secondary'> Questions, </span>
        answered.
      </h2>
      {QUESTIONS.map((value, index) =>
        <div key={index} className="rounded-accordion px-24 py-[20px] text-white">

        </div>
      )}



    </div>
  )
}
