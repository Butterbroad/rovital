import React from 'react'
import './styles/Polar.scss'
import HeroPolar from './Components/HeroPolar/HeroPolar'
import Footer from '../Footer/Footer'
import PolarContent from './Components/PolarContent/PolarContent'
import MobileMenu from '../MobileMenu/MobileMenu'

function Polar({ setShow, showMenu, setHide }) {
  return (
    <div className="polar">
      <HeroPolar setShow={setShow} />
      <PolarContent />
      <Footer modClass="footer_polar" />

      {
        showMenu && <MobileMenu setHide={setHide} />
      }
    </div>
  )
}

export default Polar
