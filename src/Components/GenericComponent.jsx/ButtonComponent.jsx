import React from 'react'

export const ButtonComponent = ({ title, variant, onClick, link }) => {
  const buttonVariant = () => {
    switch (variant) {
      case 'filled':
        return <button className={`hover:cursor-pointer px-24 rounded-button py-16 uppercase text-button font-body w-full text-white bg-primary hover:bg-secondary`} onClick={onClick}>
          {title}
        </button>;
      case 'outlined' :
        return <button className={`hover:cursor-pointer px-24 py-16 uppercase border-secondary font-body w-full text-secondary`} onClick={onClick}>
          {title}
        </button>;
    }
  }

  return (

    <a href={link} className='no-underline '>
      {buttonVariant()}
    </a>

  )
}
