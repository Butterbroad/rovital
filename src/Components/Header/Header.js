import React from 'react'
import './Header.scss'
import Logo from './Components/Logo/Logo'
import Menu from './Components/Menu/Menu'
import Info from './Components/Info/Info'
import Btn from '../Btn/Btn'
import Burger from './Components/Burger/Burger'

function Header({ setShow, modClass }) {
  return (
    <header className={`header ${modClass || ""}`}>
      <div className="header__wrapper">
        <Logo />
        <Menu />
        <Info modClass="header__info" />
        <Btn btnText="НАПИШИТЕ НАМ" modClass="header__btn btn_main" />
        <Burger setShow={setShow} modClass="header__burger" />
      </div>
    </header>
  )
}

export default Header
