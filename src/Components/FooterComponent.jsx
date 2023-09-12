import React from 'react'
import { NAVIGATION } from '../data'

export const FooterComponent = () => {
  return (
    <div className="flex flex-col px-main-sides-phone py-48 md:px-main-sides-tablet 2xl:px-main-sides-desktop bg-[#171217] items-center w-full gap-48">
      <div className="flex flex-col gap-48">
        <img className='w-[358px]' src="images/logo.svg" alt="" />
        <ul className='hidden text-body-text font-body md:flex flex-row items-center justify-center gap-24  text-white '>
          {NAVIGATION.map((value, index) =>
            <li key={index} className='hover:text-primary hover:cursor-pointer'>
              <a href=""></a>  {value}
            </li>
          )}
        </ul>
      </div>
      <div className="flex border-t-[1px] border-white pt-48 text-white text-[14px] font-[300] font-body w-full justify-between">
        <p>2022 Superare. All right reserved.</p>
        <div className="flex gap-24 underline">
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
          <p>Cookies Settings</p>
        </div>
      </div>

    </div>
  )
}
