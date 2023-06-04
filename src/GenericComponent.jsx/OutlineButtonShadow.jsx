
import React from 'react'

const OutlineButtonShadow = ({title}) => {
  return (
    <button className='h-[56px] w-fit rounded-[5px] bg-transparent text-secondary py-[15px] px-[24px] text-[18px] font-[700] whitespace-pre uppercase border-secondary border-[1px] drop-shadow-[0_0_50px_rgba(0,182,255,1)] hover:text-primary hover:border-primary font-sans'>
      {title}
    </button>
  );
}

export default OutlineButtonShadow