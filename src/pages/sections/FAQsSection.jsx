import React from 'react'
import { QUESTIONS } from '../../data'
import { Accordion } from 'flowbite-react'
import { PlusIcon } from '@heroicons/react/24/solid'


export const FAQsSection = () => {
  return (
    <div className="flex flex-col lg:flex-row 2xl:gap-64 px-main-sides-phone md:px-main-sides-tablet 2xl:px-main-sides-desktop py-[5%] w-full">
      <h2 className="text-white text-phone-main-heading md:text-tab-main-heading 2xl:text-main-heading uppercase">
        Your <span className='text-secondary'> Questions, </span>
        answered.
      </h2>
      <Accordion  className=" flex flex-col gap-24 w-full text-white font-body">
        {QUESTIONS.map((value, index) =>
          <Accordion.Panel key={index}>
            <Accordion.Title arrowIcon={PlusIcon} className='hover:cursor-pointer justify-between text-accordion-heading border-primary  border-2 rounded-accordion open:rounded-accordion-open px-24 py-[20px]'>
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
