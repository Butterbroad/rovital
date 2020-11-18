import React from 'react'
import './Info.scss'

function Info({ classMod }) {
  return (
    <div className={`${classMod} info`}>
      <a href="tel:375293000000" className="info__tel">+ 37529-300-00-00</a>
      <a href="mailto:support@simpletoro.com" className="info__mail">support@simpletoro.com</a>
    </div>
  )
}

export default Info
