import React from 'react'
import AdvantagesItem from './Components/AdvantagesItem/AdvantagesItem'
import './styles/Advantages.scss'

function Advantages({ title, items, modClass }) {


  return (
    <div className={`advantages ${modClass || ''}`} >
      <div className="advantages__wrapper">
        <div className="advantages__title">
          {title}
        </div>
        <div className="advantages__items">
          {items.map((item, index) => (
            <AdvantagesItem key={index} icon={item.icon} text={item.text} />
          ))}
        </div>
      </div>
    </div >
  )
}

export default Advantages
