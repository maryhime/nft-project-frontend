import React from 'react'
import { ButtonComponent } from './GenericComponent.jsx/ButtonComponent'

export const CTABannerComponent = () => {
  return (
    <div className="bg-[url('/images/cta-bg.png')] bg-no-repeat bg-cover
 x-main-sides-phone md:px-main-sides-tablet 2xl:px-main-sides-desktop py-[10%] xl:pt-[10%] xl:pb-0 w-full px-main-sides-phone flex flex-col gap-56">
      <div className="flex flex-col gap-48">
        <div className="flex flex-col gap-16 text-white">
          <h2 className="text-white text-center text-phone-main-heading md:text-tab-main-heading 2xl:text-main-heading uppercase">
            Join the <span className='text-primary'> community </span>
          </h2>
          <p className="text-center text-sub-heading font-body">
            Join our Discord channel or follow us on Twitter keep up to date with our latest work and announcements.
          </p>
        </div>

        <div className="flex flex-col-reverse sm:flex-row gap-24 justify-center px-main-sides-phone md:px-main-sides-tablet">
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
      <div className="hidden xl:flex w-full  justify-center relative 2xl:h-[700px] items-end">
        <img className='h-[300px] 2xl:h-[500px]' src="images/characters/character-6.png" alt="" />
        <img className='h-[400px] 2xl:h-[600px]' src="images/characters/character-2.png" alt="" />
        <img className='h-[300px] 2xl:h-[500px]' src="images/characters/character-1.png" alt="" />
      </div>
    </div>
  )
}
