import React from 'react'
import './styles/Burger.scss'
import burgerImg from './styles/img/burger.svg'

function Burger({ setShow, modClass }) {
  return (
    <div className={`burger ${modClass}`} onClick={() => setShow()}>
      <svg viewBox="0 0 16 12">
        <path d="M1.49298 0.990356H15.0963" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M1.49298 6.09755H15.0963" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M1.49298 11.2047H15.0963" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  )
}

export default Burger
