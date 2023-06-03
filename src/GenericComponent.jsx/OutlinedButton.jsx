import React from 'react'

const OutlinedButton = ({ title }) => {
  return (
    <button className='h-[56px] w-fit rounded-[5px] bg-transparent text-secondary py-[15px] px-[24px] text-[18px] font-[700] whitespace-pre uppercase border-secondary border-[1px] hover:text-primary font-sans'>
      {title}
    </button>

  );
}

export default OutlinedButton