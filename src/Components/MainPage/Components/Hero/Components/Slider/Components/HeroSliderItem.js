import React from 'react'
import './HeroSliderItem.scss'
import Btn from '../../../../../../Btn/Btn';

function HeroSliderItem({ image, title }) {
  return (
    <div className='slider__slide'>
      <div className="slider__img">
        <img src={image} alt="" />
      </div>
      <div className="slider__box">
        <div className="slider__title">
          {title}
        </div>
        <Btn btnText="Заказать товар" modClass="slider__btn btn_red" />
      </div>
    </div>
  )
}

export default HeroSliderItem
