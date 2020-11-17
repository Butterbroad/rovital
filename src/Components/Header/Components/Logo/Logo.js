import React from 'react';
import './style/Logo.scss';
import logo from './style/img/logo.png'


function Logo() {
  return (
    <a href="" className="header__logo logo">
      <img
        className="logo__img"
        src={logo}
        alt=""
      />
      <div className="logo__box">
        <div className="logo__title">
          РОВИТАЛ
        </div>
        <div className="logo__subtitle">
          торгово-инвестиционная компания
        </div>
      </div>
    </a>
  )
}

export default Logo;
