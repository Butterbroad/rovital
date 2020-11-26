import React from 'react'
import './styles/Johan.scss'
import HeroJohan from './Components/HeroJohan/HeroJohan'
import JohanContent from './Components/JohanContent/JohanContent'
import Footer from '../Footer/Footer'

function Johan() {
  return (
    <div className="johan">
      <HeroJohan />
      <JohanContent />
      {/* <Footer modClass="footer_johan" /> */}
    </div>
  )
}

export default Johan
