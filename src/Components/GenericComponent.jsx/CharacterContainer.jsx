import React from 'react'

export const CharacterContainer = ({image, style, blurredImage}) => {
  return (
    <div className='border-2 border-primary relative rounded-[50px] h-full w-full hover:cursor-pointer'>
    <div className="border-2 border-secondary absolute -left-3 p-24 rounded-[50px] w-full h-full blur-sm">
    </div>


    <div className="relative flex justify-center">
      <img  className={`p-24 absolute top-0  h-full blur-sm  ${style}`} src={image} alt="" />
      <img className={`p-24 h-full backdrop-blur-sm  ${blurredImage}`} src={image} alt="" />
    </div>
    <div className="border-2 border-primary absolute left-5 p-24 top-0 rounded-[50px] w-full h-full blur-sm"></div>
    <div className="border-2 border-secondary absolute left-2 p-24 top-2 rounded-[50px] w-full h-full"> </div>
  </div>
  )
}
