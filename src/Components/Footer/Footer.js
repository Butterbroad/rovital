import React from 'react'
import './style/Footer.scss'
import Form from './Components/Form/Form'
import Socials from './Components/Socials/Socials'

function Footer({ modClass }) {
  return (
    <footer className={`footer ${modClass}`}>
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
            <a href="mailto:tik.rovital@gmail.com" className="footer__info-mail">tik.rovital@gmail.com</a>
            <div className="footer__info-phones">
              <a href="tel:375296512910" className="footer__info-tel">+ 375 29 651 29 10</a>
              <a href="tel:74991130153" className="footer__info-tel">+ 7 499 113 01 53</a>
            </div>
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
