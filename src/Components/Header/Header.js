import React from 'react'
import './Header.scss'
import Logo from './Components/Logo/Logo'
import Menu from './Components/Menu/Menu'
import Info from './Components/Info/Info'
import Btn from '../Btn/Btn'

function Header() {
  return (
    <header className='header'>
      <div className="header__wrapper">
        <Logo />
        <Menu />
        <Info />
        <Btn btnText="НАПИШИТЕ НАМ" btnClassMod="header__btn btn_main" />
      </div>
    </header>
  )
}

export default Header
