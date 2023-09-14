import React, { Fragment, useState } from 'react'
import { Bars3Icon } from '@heroicons/react/24/solid'
import { ButtonComponent } from './GenericComponent.jsx/ButtonComponent';
import { NAVIGATION } from '../data';
import { MobileMenuComponent } from './MobileMenuComponent';

export const NavbarComponent = () => {
  const [openNav, setOpenNav] = useState(false);
  

  return (
    <Fragment>
      <div className="flex flex-row gap-48 px-main-sides-phone md:px-main-sides-tablet 2xl:px-main-sides-desktop py-16 w-full backdrop-blur-sm sticky top-0 z-50">
        <div className="flex items-center">
          <img src="images/logo.svg" className='w-[200px]' alt="logo" />
        </div>
        <div className=" text-white w-full flex items-center justify-end gap-48">
          <ul className='hidden text-b font-body md:flex flex-row gap-24 text-nav-item '>
            {NAVIGATION.map((value, index) =>
              <li key={index} className='hover:text-primary hover:cursor-pointer'>
                <a href=""></a>  {value}
              </li>
            )}
          </ul>
          <Bars3Icon onClick={()=>setOpenNav(true)} className='md:hidden h-[32px] w-[32px]' />

          <div className="hidden md:block">
            <ButtonComponent title={'Buy Now'} variant={'filled'} />
          </div>
        </div>
      </div >

      {openNav == true && <MobileMenuComponent close={() => setOpenNav(false)} />}
     
    </Fragment>
  )
}
