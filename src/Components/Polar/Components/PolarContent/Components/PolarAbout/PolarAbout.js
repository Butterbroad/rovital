import React from 'react'
import './styles/PolarAbout.scss'
import polarAboutImg from './styles/img/bikes.png'

function PolarAbout() {
  return (
    <div className="polar-about">
      <div className="polar-about__wrapper">
        <div className="polar-about__img">
          <img src={polarAboutImg} alt="" />
        </div>
        <div className="polar-about__box">
          <div className="polar-about__title">
            О компании
      </div>
          <div className="polar-about__text">
            <span>POLAR BIKE</span>  - производитель известного сербского бренда Polar. Велосипеды Polar продаются в специализированных магазинах по всей Сербии, а также в различных странах Европы.
          Бренд Polar включает в себя велосипеды для мужчин и женщин, детей и юниоров.
        </div>
        </div>
      </div>
    </div>
  )
}

export default PolarAbout
