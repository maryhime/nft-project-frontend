import React from 'react'
import { ButtonComponent } from '../../Components/GenericComponent.jsx/ButtonComponent'
import { CardComponent } from '../../Components/GenericComponent.jsx/CardComponent'

const HeroSection = () => {
  return (
    <div className="px-main-sides-phone py-[5%] md:px-main-sides-tablet 2xl:px-main-sides-desktop flex flex-col-reverse lg:flex-row gap-48 2xl:gap-64 items-center w-full">
      <div className="flex flex-col gap-48">
        {/* heading and subheading */}
        <div className="flex flex-col gap-16 text-white">
          <h1 className="text-phone-main-heading md:text-tab-main-heading 2xl:text-main-heading uppercase  ">
            <text className='text-secondary drop-shadow-[0_0_50px_rgba(0,182,255,0.9)]'>Discover</text>  and <text className='text-primary drop-shadow-[0_0_50px_rgba(255,0,232,0.9)]'>collect </text>superare nfts
          </h1>
          <p className="text-sub-heading font-body">
            Digital marketplace for crypto collectibles and NFTs. Buy, sell, and discover exclusive digital assets today.
          </p>
        </div>

        {/* button group */}
        <div className="flex flex-col-reverse md:flex-row gap-24">
          <ButtonComponent
            variant={'outlined'}
            title={'Github Repository'}
            style={'shadow-blue w-[164px]'}
            link={'https://github.com/maryhime/nft-project-frontend'}
          />
          <ButtonComponent
            variant={'filled'}
            title={'View Portfolio'}
            style={'shadow-pink hover:shadow-blue'}
            link={'https://mary-therese.vercel.app/'}
          />
        </div>
      </div>

      {/* {CHARACTERS.map((values, index) =>
        <CardComponent key={index} image={values} />
      )} */}


   <CardComponent image='images/characters/character-1.png' />
       


    </div>
  )
}

export default HeroSection