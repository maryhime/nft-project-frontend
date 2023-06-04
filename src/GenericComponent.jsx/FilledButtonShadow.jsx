import React from 'react'

const FilledButtonShadow = ({title}) => {
  return (
    <button className='h-[56px] w-fit rounded-[5px] bg-primary text-white py-[15px] px-[24px] text-[18px] font-[700] whitespace-pre uppercase drop-shadow-[0_0_50px_rgba(255,0,232,.9)]  font-sans hover:bg-secondary '>
      {title}
    </button>
  )
}

export default FilledButtonShadow