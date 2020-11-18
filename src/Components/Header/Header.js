import React from 'react'
import './Header.scss'
import Logo from './Components/Logo/Logo'
import Menu from './Components/Menu/Menu'
import Info from './Components/Info/Info'
import Btn from '../Btn/Btn'
import Burger from './Components/Burger/Burger'

function Header({ setShow }) {
  return (
    <header className='header'>
      <div className="header__wrapper">
        <Logo />
        <Menu />
        <Info classMod="header__info" />
        <Btn btnText="НАПИШИТЕ НАМ" btnClassMod="header__btn btn_main" />
        <Burger setShow={setShow} />
      </div>
    </header>
  )
}

export default Header
