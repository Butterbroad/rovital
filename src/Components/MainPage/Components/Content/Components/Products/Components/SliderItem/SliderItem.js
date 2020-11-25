import React from 'react'
import './SliderItem.scss'
import Btn from '../../../../../../../Btn/Btn'


function SliderItem({ logo, text }) {
  return (
    <div className="slider-products__slide slider-item">
      <div className="slider-item__logo">
        <img src={logo} alt="" />
      </div>
      <div className="slider-item__title">
        {text}
      </div>
      <Btn btnText="Подробнее" modClass="slider-item__btn btn_main" />
    </div>
  )
}

export default SliderItem
