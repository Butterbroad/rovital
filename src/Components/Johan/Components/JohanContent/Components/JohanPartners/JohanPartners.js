import React from 'react'
import './styles/JohanPartners.scss'
import logo1 from './styles/img/logo1.png'
import logo2 from './styles/img/logo2.png'
import logo3 from './styles/img/logo3.png'
import logo4 from './styles/img/logo4.png'
import logo5 from './styles/img/logo5.png'
import logo6 from './styles/img/logo6.png'
import logo7 from './styles/img/logo7.png'
import logo8 from './styles/img/logo8.png'
import logo9 from './styles/img/logo9.png'
import logo10 from './styles/img/logo10.png'
import logo11 from './styles/img/logo11.png'
import logo12 from './styles/img/logo12.png'

function JohanPartners() {
  const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10, logo11, logo12]
  return (
    <div className="johan-partners">
      <div className="johan-partners__wrapper">
        <div className="johan-partners__title">
          JOHAN С ГОРДОСТЬЮ ОБСЛУЖИВАЕТ
        </div>
        <div className="johan-partners__text">
          Мы гордимся тем, что обслуживаем самые разные спортивные команды, от любительских до элитных.
          Каждую неделю к нам присоединяются новые амбициозные команды, и мы строим международное высокопроизводительное сообщество, основанное на данных.
        </div>
        <div className="johan-partners__logos">
          {logos.map((logo, index) => (
            <div key={index} className="johan-partners__logo">
              <img src={logo} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default JohanPartners
