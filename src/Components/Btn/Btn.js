import React from 'react'
import './Btn.scss'

function Btn({ btnText, btnClassMod }) {
  return (
    <a href="" className={`btn ${btnClassMod}`} >
      { btnText}
    </a >
  )
}

export default Btn
