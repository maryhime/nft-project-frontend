import React from 'react'
import heroImage from '../assets/hero-img.svg';
import OutlineButtonShadow from '../GenericComponent.jsx/OutlineButtonShadow';
import FilledButtonShadow from '../GenericComponent.jsx/FilledButtonShadow';

const HeroComponent = () => {
  return (
    <div className="flex flex-row px-[100px] py-[100px] bg-transparent items-center">
      {/* heading */}
      <div className="flex flex-col gap-[16px]">
        <h1 className="font-heading text-white text-[96px] font-[400] leading-[112.03px]">
          <text className="text-secondary p-0 drop-shadow-[0_0_50px_rgba(0,182,255,0.9)] hover:text-primary">Discover</text> and <text className="text-primary p-0 drop-shadow-[0_0_50px_rgba(255,0,232,0.9)] hover:text-secondary"> collect </text>
          <text className='drop-shadow-[0_0_50px_rgba(255,0,232,0.9)]'>super rare NFTs</text>
        </h1>
        <p className="font-sans text-[300] text-[20px] text-white">
          Digital marketplace for crypto collectibles and NFTs. Buy, sell, and discover exclusive digital assets today.
        </p>
        {/* 0, 182, 255, 0.7 */}
        <div className="flex flex-row gap-[24px]">
          <OutlineButtonShadow title='Buy Now' />
          <FilledButtonShadow title='Connect Wallet' />
        </div>
      </div>
      {/* image */}
      <div className="w-full">
        <img src={heroImage} alt="" />
      </div>
    </div>
  )
}

export default HeroComponent