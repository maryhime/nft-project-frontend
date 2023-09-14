import React from 'react'
import { CharacterSliderComponent } from '../../Components/CharacterSliderComponent'

const CharactersSection = () => {
  return (
    <div className=" py-[10%] flex flex-col gap-24 lg:gap-48 2xl:gap-56 items-center w-full">
      <h2 className="px-main-sides-phone md:px-main-sides-tablet 2xl:px-main-sides-desktop text-phone-main-heading md:text-tab-main-heading 2xl:text-main-heading uppercase text-white">
        Find your <span className='text-primary'> Favorite </span> Character
      </h2>
      <CharacterSliderComponent/>
      
    </div>
  )
}
export default CharactersSection