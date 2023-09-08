import React, { useState } from 'react'
import { Bars3Icon } from '@heroicons/react/24/solid'
import { ButtonComponent } from './GenericComponent.jsx/ButtonComponent';

export const NavbarComponent = () => {
  const NAVIGATION = Object.freeze([
    'Roadmap', 'Team', 'About', 'Wallet'
  ]);

  return (
    <div className="flex flex-row gap-48 px-main-sides-phone md:px-main-sides-tablet lg:px-main-sides-desktop py-16 w-full backdrop-blur-md sticky top-0 z-50">
      <div className="flex items-center">
        <img src="images/logo.svg" className='w-[200px]' alt="logo" />
      </div>
      <div className=" text-white w-full flex items-center justify-end gap-48">
        <ul className='hidden font-body lg:flex flex-row gap-24 text-nav-item '>
          {NAVIGATION.map((value, index) =>
            <li key={index} className='hover:text-primary hover:cursor-pointer'>
            <a href=""></a>  {value}
            </li>
          )}
        </ul>
        <Bars3Icon className='lg:hidden h-[32px] w-[32px] ' />
        <ButtonComponent title={'Buy Now'} variant={'filled'} />
      </div>
    </div >
  )
}
