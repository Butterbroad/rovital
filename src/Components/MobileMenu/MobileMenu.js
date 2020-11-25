import React from 'react'
import './styles/MobileMenu.scss'
import menuLogo from './styles/img/logo.svg'
import Btn from '../Btn/Btn'
import Info from '../Header/Components/Info/Info'
import MenuSocials from './Components/MenuSocials/MenuSocials'
import burgerClose from './styles/img/close.svg'

function MobileMenu({ setHide }) {
  return (
    <div className="mobile-menu">
      <div className="mobile-menu__wrapper">
        <div className="mobile-menu__header">
          <div className="mobile-menu__logo">
            <img src={menuLogo} alt="" />
          </div>
          <div className="mobile-menu__burger" onClick={() => setHide()}>
            <img src={burgerClose} alt="" />
          </div>
        </div>
        <div className="mobile-menu__box">
          <ul className="mobile-menu__list">
            <li className="mobile-menu__list-item">
              <a href="" className="mobile-menu__list-link">
                Главная
              </a>
            </li>
            <li className="mobile-menu__list-item">
              <a href="" className="mobile-menu__list-link">
                Продукты
              </a>
            </li>
            <li className="mobile-menu__list-item">
              <a href="" className="mobile-menu__list-link">
                Преимущества
              </a>
            </li>
            <li className="mobile-menu__list-item">
              <a href="" className="mobile-menu__list-link">
                БЛОГ
              </a>
            </li>
          </ul>
        </div>

        <Btn btnText="НАПИШИТЕ НАМ" modClass="mobile-menu__btn btn_main" />
        <Info modClass="mobile-menu__info" />
        <MenuSocials modClass="mobile-menu__socials" />
      </div>
    </div>
  )
}

export default MobileMenu
