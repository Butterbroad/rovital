import React from 'react'
import './styles/JohanAdvantages.scss'
import itemIcon1 from './styles/img/item1.png'
import itemIcon2 from './styles/img/item2.png'
import itemIcon3 from './styles/img/item3.png'
import itemIcon4 from './styles/img/item4.png'

function JohanAdvantages() {
  return (
    <div className="johan-advantages">
      <div className="johan-advantages__wrapper">
        <div className="johan-advantages__title">
          ПОЧЕМУ ВЫБИРАЮТ JOHAN?
        </div>
        <div className="johan-advantages__text">
          В <span>JOHAN</span> наша цель - сделать технологию GPS простой для тренеров любого уровня и доступной для всех спортивных команд. Наша удобная для пользователя система GPS мониторинга помогает тренерам понять, как интерпретировать данные о производительности игроков и как оптимизировать график тренировок.
        </div>
        <div className="johan-advantages__items">
          <div className="johan-advantages__item">
            <div className="johan-advantages__item-img">
              <img src={itemIcon1} alt="" />
            </div>
            <div className="johan-advantages__item-title">
              понятный ИНТЕРФЕЙС
            </div>
          </div>
          <div className="johan-advantages__item">
            <div className="johan-advantages__item-img">
              <img src={itemIcon2} alt="" />
            </div>
            <div className="johan-advantages__item-title">
              РУКОВОДСТВО ПО СПОРТИВНОЙ НАУКЕ
            </div>
          </div>
          <div className="johan-advantages__item">
            <div className="johan-advantages__item-img">
              <img src={itemIcon3} alt="" />
            </div>
            <div className="johan-advantages__item-title">
              ДОСТУПНЫЙ
            </div>
          </div>
          <div className="johan-advantages__item">
            <div className="johan-advantages__item-img">
              <img src={itemIcon4} alt="" />
            </div>
            <div className="johan-advantages__item-title">
              СОВЕТЫ ПО ОБУЧЕНИЮ
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JohanAdvantages
