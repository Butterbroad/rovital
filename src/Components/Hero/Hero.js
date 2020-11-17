import React from 'react'
import './style/Hero.scss'
import Header from '../Header/Header'
import Slider from './Components/Slider/HeroSlider'

function Hero() {
  return (
    <section className="hero">
      <Header />
      <Slider />
    </section>
  )
}

export default Hero
