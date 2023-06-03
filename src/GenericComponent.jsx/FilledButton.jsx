import React from 'react'

const FilledButton = ({ title }) => {
  return (
    <button className='h-[56px] w-fit rounded-[5px] bg-[#FF00E8] text-white py-[15px] px-[24px] text-[18px] font-[700] whitespace-pre uppercase hover:bg-secondary font-sans'>
      {title}
    </button>
  )
}

export default FilledButton