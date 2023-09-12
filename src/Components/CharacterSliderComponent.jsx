import React, { Fragment } from 'react'
import { CHARACTERS } from '../data'
import { CharacterContainer } from './GenericComponent.jsx/CharacterContainer'

export const CharacterSliderComponent = () => {
  return (
    <Fragment>
      {/* slider */}
      <div className="hidden lg:flex flex-col gap-24">
        <div className="relative w-screen flex overflow-x-hidden md:h-[200px] lg:h-[280px] 2xl:h-[450px]" >
          <div className="absolute top-0 left-0 animate-slide grid grid-cols-6  gap-48">
            {CHARACTERS.map((values, index) =>
              <CharacterContainer key={index} image={values.image} style={values.width} blurredImage={values.blurredImage} />
            )}
          </div>
          <div className="absolute top-0 left-0 animate-slide2 grid grid-cols-6 gap-48 "  >
            {CHARACTERS.map((values, index) =>
              <CharacterContainer key={index} image={values.image} style={values.width} blurredImage={values.blurredImage} />
            )}
          </div>
        </div>
        <div className="relative w-screen  overflow-x-hidden md:h-[200px] lg:h-[280px] 2xl:h-[450px]" >
          <div className="absolute top-0 left-0 animate-slide-right grid grid-cols-6  gap-48">
            {CHARACTERS.map((values, index) =>
              <CharacterContainer key={index} image={values.image} style={values.width} blurredImage={values.blurredImage} />
            )}
          </div>
          <div className="absolute top-0 left-0 animate-slide-right2 grid grid-cols-6 gap-48 "  >
            {CHARACTERS.map((values, index) =>
              <CharacterContainer key={index} image={values.image} style={values.width} blurredImage={values.blurredImage} />
            )}
          </div>
        </div>
      </div>

      {/* grid only */}
      <div className="px-main-sides-phone py-[5%] md:px-main-sides-tablet 2xl:px-main-sides-desktop grid grid-cols-2 sm:grid-cols-3 gap-24 lg:hidden">
        {CHARACTERS.map((values, index) =>
          <CharacterContainer key={index} image={values.image} style={values.width} blurredImage={values.blurredImage} />
        )}
      </div>

    </Fragment>

  )
}
