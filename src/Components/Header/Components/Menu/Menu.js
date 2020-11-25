import React from 'react'
import './Menu.scss'

function Menu({ modClass }) {
  return (
    <nav className={`header__menu menu ${modClass}`}>
      <ul className="menu__list">
        <li className="menu__list-item">
          <a href="" className="menu__list-link">
            Главная
          </a>
        </li>
        <li className="menu__list-item">
          <a href="" className="menu__list-link">
            Продукты
          </a>
        </li>
        <li className="menu__list-item">
          <a href="" className="menu__list-link">
            Преимущества
          </a>
        </li>
        <li className="menu__list-item">
          <a href="" className="menu__list-link">
            БЛОГ
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Menu
