import React from 'react'
import Btn from '../../../Btn/Btn'
import Header from '../../../Header/Header'
import './styles/HeroPolar.scss'
import heroImg from './styles/img/man-on-bike.png'

function HeroPolar({ setShow }) {
  return (
    <section className="hero-polar">
      <Header setShow={setShow} />
      <div className="hero-polar__wrapper">
        <div className="hero-polar__box hero-polar__box_1">
          <div className="hero-polar__title">
            дистрибьютер велосипедов
            POLAR (сербия)
          </div>

          <Btn btnText="Скачать брошюру" modClass="hero-polar__btn btn_orange" />
        </div>
        <div className="hero-polar__box hero-polar__box_2">
          <div className="hero-polar__img">
            <img src={heroImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroPolar