import React from 'react'
import JohanAdvantages from './Components/JohanAdvantages/JohanAdvantages'
import JohanProductItem from './Components/JohanProductItem/JohanProductItem'
import JohanProductSlider from './Components/JohanProductSlider/JohanProductSlider'
import JohanPartners from './Components/JohanPartners/JohanPartners'
import './JohanContent.scss'

function JohanContent() {
  return (
    <section className='johan-content'>
      <div className="johan-content__wrapper">
        <JohanProductItem />
        <JohanProductSlider />
        <JohanPartners />
        <JohanAdvantages />
      </div>
    </section>
  )
}

export default JohanContent
