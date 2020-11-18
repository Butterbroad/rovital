import React from 'react'
import './style/Hero.scss'
import Header from '../Header/Header'
import Slider from './Components/Slider/HeroSlider'

function Hero({ setShow }) {
  return (
    <section className="hero">
      <Header setShow={setShow} />
      <Slider />
    </section>
  )
}

export default Hero
