import React from 'react'
import './style/Footer.scss'
import Form from './Components/Form/Form'
import Socials from './Components/Socials/Socials'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <div className="footer__box footer__box_md">
          <div className="footer__title">
            ЕСТЬ ВОПРОС?
          </div>
          <div className="footer__text">
            Наша команда экспертов всегда готова помочь.
            Просто оставьте нам сообщение, и мы свяжемся
            с вами напрямую
          </div>
        </div>
        <div className="footer__content">
          <div className="footer__box">
            <div className="footer__title">
              ЕСТЬ ВОПРОС?
          </div>
            <div className="footer__text">
              Наша команда экспертов всегда готова помочь.
              Просто оставьте нам сообщение, и мы свяжемся
              с вами напрямую
          </div>
          </div>
          <div className="footer__info">
            <div className="footer__info-title">
              СВЯжитесь с нами по электронной почте или
              по телефону
            </div>
            <a href="mailto:support@simpletoro.com" className="footer__info-mail">support@simpletoro.com</a>
            <a href="tel:375293000000" className="footer__info-tel">+ 37529-300-00-00</a>
          </div>
          <Socials modClass="footer__socials" />
        </div>
        <div className="footer__form">
          <Form />
        </div>
      </div>
      <div className="footer__bottom">
        <div className="footer__bottom-text">
          2020 ООО «ТОРГОВО-ИНВЕСТИЦИОННАЯ КОМПАНИЯ РОВИТАЛ»
          </div>
      </div>
    </footer>
  )
}

export default Footer
