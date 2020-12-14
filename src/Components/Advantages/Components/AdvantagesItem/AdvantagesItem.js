import React from 'react'
import './AdvantagesItem.scss'

function AdvantagesItem({ icon, text }) {
  return (
    <div className="advantages__item item-advantages">
      <div className="item-advantages__icon">
        <img src={icon} alt="icon" />
      </div>
      <div className="item-advantages__text">
        {text}
      </div>
    </div>
  )
}

export default AdvantagesItem
