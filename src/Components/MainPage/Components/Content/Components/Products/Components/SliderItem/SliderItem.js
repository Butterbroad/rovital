import React from 'react'
import './SliderItem.scss'
import Btn from '../../../../../../../Btn/Btn'
import { Link } from 'react-router-dom';


function SliderItem({ logo, text, path }) {
  return (
    <div className="slider-products__slide slider-item">
      <div className="slider-item__logo">
        <img src={logo} alt="" />
      </div>
      <div className="slider-item__title">
        {text}
      </div>
      <Link to={path}>
        <Btn btnText="Подробнее" modClass="slider-item__btn btn_main" />
      </Link>
    </div>
  )
}

export default SliderItem
