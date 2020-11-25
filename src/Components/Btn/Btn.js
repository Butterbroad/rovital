import React from 'react'
import './Btn.scss'

function Btn({ btnText, modClass }) {
  return (
    <a href="" className={`btn ${modClass}`} >
      { btnText}
    </a >
  )
}

export default Btn
