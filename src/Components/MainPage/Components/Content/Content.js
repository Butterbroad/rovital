import React from 'react'
import Advantages from '../../../Advantages/Advantages'
import Products from './Components/Products/Products'
import './style/Content.scss'
import mainPageIcon1 from '../../../Advantages/styles/img/mainPageIcon1.svg'
import mainPageIcon2 from '../../../Advantages/styles/img/mainPageIcon2.svg'
import mainPageIcon3 from '../../../Advantages/styles/img/mainPageIcon3.svg'
import mainPageIcon4 from '../../../Advantages/styles/img/mainPageIcon4.svg'
import mainPageIcon5 from '../../../Advantages/styles/img/mainPageIcon5.svg'
import mainPageIcon6 from '../../../Advantages/styles/img/mainPageIcon6.svg'

function Content() {

  const mainPageItems = [
    { icon: mainPageIcon1, text: "Официальный представитель спортивных систем GPS-мониторинга Johan" },
    { icon: mainPageIcon2, text: "Эксклюзивный дистрибьютор велосипедов Polar (Сербия) на территории Армении, Беларуси, Казахстана и  России." },
    { icon: mainPageIcon3, text: "Ценообразование в режиме реального времени" },
    { icon: mainPageIcon4, text: "Профессиональная консультация" },
    { icon: mainPageIcon5, text: "Гарантия от производителя" },
    { icon: mainPageIcon6, text: "Высокая скорость доставки" },
  ]

  return (
    <section className="content">
      <Products />
      <Advantages modClass="advantages_main-page" items={mainPageItems} title="Наши преимущества" />
    </section>
  )
}

export default Content
