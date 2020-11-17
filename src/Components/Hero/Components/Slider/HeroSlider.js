import React from 'react'
import './style/HeroSlider.scss'
import Slider from "react-slick";
import "../../../../../node_modules/slick-carousel/slick/slick.css";
import "../../../../../node_modules/slick-carousel/slick/slick-theme.css";
import slideOneImg from './style/img/slide1.png'
import HeroSliderItem from './Components/HeroSliderItem'

function HeroSlider() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    adaptiveHeight: true
  };

  const slides = [
    { img: slideOneImg, title: "Дистрибьютор ВЕЛОСИПЕДОВ Polar (сербия)" },
    { img: slideOneImg, title: "Дистрибьютор ВЕЛОСИПЕДОВ Polar (сербия)" },
    { img: slideOneImg, title: "Дистрибьютор ВЕЛОСИПЕДОВ Polar (сербия)" },
  ]

  return (
    <div className='slider'>
      <div className="slider__wrapper">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <HeroSliderItem key={index} image={slide.img} title={slide.title} />
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default HeroSlider
