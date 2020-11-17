import React from 'react'
import './SocialsItem.scss'

function SocialsItem({ icon }) {
  return (
    <a href="" className="socials-item">
      <img src={icon} alt="" />
    </a>
  )
}

export default SocialsItem
