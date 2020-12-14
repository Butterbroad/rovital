import React from 'react'
import './styles/Johan.scss'
import HeroJohan from './Components/HeroJohan/HeroJohan'
import JohanContent from './Components/JohanContent/JohanContent'
import Footer from '../Footer/Footer'
import MobileMenu from '../MobileMenu/MobileMenu'

function Johan({ setShow, showMenu, setHide }) {
  return (
    <div className="johan">
      <HeroJohan setShow={setShow} />
      <JohanContent />
      <Footer modClass="footer_johan" />

      {
        showMenu && <MobileMenu setHide={setHide} />
      }
    </div>
  )
}

export default Johan
