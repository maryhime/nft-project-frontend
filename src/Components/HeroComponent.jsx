import React from 'react'
import heroImage from '../assets/hero-img.svg';
import OutlinedButton from '../GenericComponent.jsx/OutlinedButton';
import FilledButton from '../GenericComponent.jsx/FilledButton';

const HeroComponent = () => {
  return (
    <div className="flex flex-row px-[100px]  bg-transparent mb-[-800px] items-center">
      {/* heading */}
      <div className="flex flex-col gap-[16px]">
        <h1 className="font-heading text-white text-[96px] font-[400] leading-[112.03px]">
          <section className="text-secondary">Discover</section> and collect super rare NFTs
        </h1>
        <p className="font-sans text-[300] text-[20px] text-white">
          Digital marketplace for crypto collectibles and NFTs. Buy, sell, and discover exclusive digital assets today.
        </p>

        <div className="flex flex-row gap-[24px]">
          <OutlinedButton title='Buy Now' />
          <FilledButton title='Connect Wallet' />
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