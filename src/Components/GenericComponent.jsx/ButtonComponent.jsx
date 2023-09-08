import React, { useState } from 'react'

export const ButtonComponent = ({ title, variant, style }) => {

  const buttonVariant = () => {
    switch (variant) {
      case 'filled':
        return <button className={`hover:cursor-pointer px-24 rounded-button py-16 uppercase text-button font-body w-full text-white bg-primary hover:bg-secondary ${style}`} >
          {title}
        </button>;
      case 'outlined' :
        return <button className={`hover:cursor-pointer px-24 py-16 uppercase border-secondary border-[1px] rounded-button font-body w-full text-secondary ${style}`}>
          {title}
        </button>;
    }
  }
  return (

    <a href={'https://mary-therese.vercel.app/'} target='_blank' rel='noreferrer' className='no-underline '>
      {buttonVariant()}
    </a>

  )
}
