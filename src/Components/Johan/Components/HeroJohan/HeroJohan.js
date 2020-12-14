import React from 'react'
import Btn from '../../../Btn/Btn'
import Header from '../../../Header/Header'
import Posibilities from './Components/Posibilities/Posibilities'
import './styles/HeroJohan.scss'
import heroImg from './styles/img/sportsmans.png'

function HeroJohan({ setShow }) {
  return (
    <section className="hero-johan">
      <Header modClass="light" setShow={setShow} />
      <div className="hero-johan__wrapper">
        <div className="hero-johan__box hero-johan__box_1">
          <div className="hero-johan__title">
            GPS-мониторинг
            спортивных
            результатов
      </div>
          <div className="hero-johan__text">
            <span>JOHAN</span> направляет спортивные команды с помощью точного спортивного трекера GPS. Улучшение физических показателей игроков и предотвращение травм.
      </div>

          <Btn btnText="Скачать брошюру" modClass="hero-johan__btn btn_green" />
        </div>
        <div className="hero-johan__box hero-johan__box_2">
          <div className="hero-johan__img">
            <img src={heroImg} alt="" />
          </div>
        </div>
        <div className="hero-johan__box hero-johan__box_3">
          <Posibilities />
        </div>
      </div>
    </section>
  )
}

export default HeroJohan
