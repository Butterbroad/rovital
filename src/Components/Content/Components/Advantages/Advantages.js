import React from 'react'
import AdvantagesItem from './Components/AdvantagesItem/AdvantagesItem'
import './styles/Advantages.scss'
import icon1 from './styles/img/icon1.svg'
import icon2 from './styles/img/icon2.svg'
import icon3 from './styles/img/icon3.svg'
import icon4 from './styles/img/icon4.svg'
import icon5 from './styles/img/icon5.svg'
import icon6 from './styles/img/icon6.svg'

function Advantages() {
  const items = [
    { icon: icon1, text: "Официальный представитель спортивных систем GPS-мониторинга Johan" },
    { icon: icon2, text: "Эксклюзивный дистрибьютор велосипедов Polar (Сербия) на территории Армении, Беларуси, Казахстана и  России." },
    { icon: icon3, text: "Ценообразование в режиме реального времени" },
    { icon: icon4, text: "Профессиональная консультация" },
    { icon: icon5, text: "Гарантия от производителя" },
    { icon: icon6, text: "Высокая скорость доставки" },
  ]
  return (
    <div className="advantages">
      <div className="advanages__wrapper">
        <div className="advantages__title">
          НАши преимущества
        </div>
        <div className="advantages__items">
          {items.map((item, index) => (
            <AdvantagesItem key={index} icon={item.icon} text={item.text} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Advantages
