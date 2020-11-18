import React from 'react'
import './styles/Burger.scss'
import burgerImg from './styles/img/burger.svg'

function Burger({ setShow }) {
  return (
    <div className="burger" onClick={() => setShow()}>
      <img src={burgerImg} alt="" />
    </div>
  )
}

export default Burger
