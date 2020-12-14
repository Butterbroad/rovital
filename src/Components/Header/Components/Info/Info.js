import React from 'react'
import './Info.scss'

function Info({ modClass }) {
  return (
    <div className={`${modClass || ''} info`}>
      <div className="info__box">
        <a href="tel:375296512910" className="info__tel">+ 375 29 651 29 10</a>
        <a href="tel:74991130153" className="info__tel">+ 7 499 113 01 53</a>
      </div>
      <a href="mailto:tik.rovital@gmail.com" className="info__mail">tik.rovital@gmail.com</a>
    </div>
  )
}

export default Info
