import React from 'react'
import { ButtonComponent } from './GenericComponent.jsx/ButtonComponent'

export const CTABannerComponent = () => {
  return (
    <div className="bg-[url('/images/cta-bg.png')] bg-no-repeat bg-cover
 x-main-sides-phone md:px-main-sides-tablet 2xl:px-main-sides-desktop pt-[10%] w-full">
      <div className="flex flex-col gap-48">
        <div className="flex flex-col gap-16 text-white">
          <h2 className="text-white text-center text-phone-main-heading md:text-tab-main-heading 2xl:text-main-heading uppercase">
            Join the <span className='text-primary'> community </span>
          </h2>
          <p className="text-center text-sub-heading font-body">
            Join our Discord channel or follow us on Twitter keep up to date with our latest work and announcements.
          </p>
        </div>

        <div className="flex flex-col-reverse md:flex-row gap-24 justify-center">
          <ButtonComponent
            variant={'filled'}
            title={'View Portfolio'}
            style={'shadow-pink hover:shadow-blue'}
            link={'https://mary-therese.vercel.app/'}
          />
          <ButtonComponent
            variant={'outlined'}
            title={'Github Repository'}
            style={'shadow-blue w-[164px]'}
            link={'https://github.com/maryhime/nft-project-frontend'}
          />
        </div>
      </div>
      <div className="flex w-full  justify-center relative h-[700px] items-end">
        <img className='h-[500px]' src="images/characters/character-6.png" alt="" />
        <img className='h-[600px]' src="images/characters/character-2.png" alt="" />
        <img className=' h-[500px]' src="images/characters/character-1.png" alt="" />
      </div>
      
    </div>
  )
}
