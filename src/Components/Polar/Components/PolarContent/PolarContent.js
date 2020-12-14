import React from 'react'
import PolarAbout from './Components/PolarAbout/PolarAbout'
import Advantages from '../../../Advantages/Advantages'
import polarIcon1 from '../../../Advantages/styles/img/polarIcon1.svg'
import polarIcon2 from '../../../Advantages/styles/img/polarIcon2.svg'
import polarIcon3 from '../../../Advantages/styles/img/polarIcon3.svg'

function PolarContent() {

  const polarItems = [
    { icon: polarIcon1, text: "Polar - это гарантия качества" },
    { icon: polarIcon2, text: "Мы сможем предложить вам горные (МТБ) велосипеды, городские, трекинговые, модные, электрические, фитнес, складные, а также детские велосипеды и коляски (беговелы)." },
    { icon: polarIcon3, text: "Нашим  приоритетом являются современные дизайн, цвет и большой выбор рам из алюминия и стали." }

  ]

  return (
    <div className="polar-content">
      <PolarAbout />
      <Advantages items={polarItems} title="преимущества" modClass="advantages_polar" />
    </div>
  )
}

export default PolarContent
