import { XMarkIcon } from '@heroicons/react/24/solid'
import React from 'react'
import { NAVIGATION } from '../data'
import { ButtonComponent } from './GenericComponent.jsx/ButtonComponent'

export const MobileMenuComponent = ({ close }) => {
  return (
    <div className="fixed z-50 top-0 w-screen bg-[#171217] h-full overflow-hidden px-main-sides-phone py-main-sides-tablet flex flex-col gap-24 ">
      <div className="flex justify-end">
        <XMarkIcon onClick={close} className='h-[32px] w-[32px] text-white' />
      </div>
      <div className="flex flex-col gap-48 h-full justify-center">
        <ul className='text-[20px] text-white font-body  uppercase flex flex-col justify-center gap-24 '>
          {NAVIGATION.map((value, index) =>
            <li key={index} className='hover:text-primary hover:cursor-pointer text-center'>
              <a href=""></a>  {value}
            </li>
          )}
        </ul>
        <div className="flex justify-center">
          <ButtonComponent title={'Buy Now'} variant={'filled'} style={'w-[180px]'} />
        </div>
      </div>


    </div>
  )
}
