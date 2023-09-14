import React from 'react'
import { QUESTIONS } from '../../data'
import { Accordion } from 'flowbite-react'


const FAQsSection = () => {
  return (
    <div className="flex flex-col lg:flex-row 2xl:gap-64 px-main-sides-phone md:px-main-sides-tablet 2xl:px-main-sides-desktop py-[10%] w-full gap-48">
      <h2 className="w-full text-white text-phone-main-heading md:text-tab-main-heading 2xl:text-main-heading uppercase">
        Your <span className='text-secondary'> Questions, </span>
        answered.
      </h2>
      <Accordion collapseAll className=" flex flex-col gap-24 w-full text-white font-body">
        {QUESTIONS.map((value, index) =>
          <Accordion.Panel key={index}>
            <Accordion.Title className='hover:cursor-pointer justify-between text-body-text font-[600] lg:text-accordion-heading border-secondary  border-2 rounded-accordion p-[16px] lg:px-24 lg:py-[20px]'>
              {value.question}
            </Accordion.Title>
            <Accordion.Content className='px-24'>
              {value.answer}
            </Accordion.Content>
          </Accordion.Panel>
          
        )}
      </Accordion>
    </div>
  )
}
export default FAQsSection
