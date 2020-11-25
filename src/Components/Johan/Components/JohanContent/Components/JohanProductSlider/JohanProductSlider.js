import React from 'react'
import './styles/JohanProductSlider.scss'
import Slider from "react-slick";
import "../../../../../../../node_modules/slick-carousel/slick/slick.css";
import "../../../../../../../node_modules/slick-carousel/slick/slick-theme.css";
import sliderImage1 from './styles/img/slider-item1.png'
import sliderImage2 from './styles/img/slider-item2.png'
import sliderImage3 from './styles/img/slider-item3.png'

function JohanProductSlider() {

  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <div className="johan-product-slider">
      <div className="johan-product-slider__wrapper">
        <Slider {...settings}>
          <div className="johan-product-slider__item">
            <div className="johan-product-slider__box">
              <div className="johan-product-slider__title">
                ДАТЧИК <span>V5</span>
              </div>
              <div className="johan-product-slider__subtitle">
                Познакомьтесь с нашей новой технологией отслеживания
              </div>
              <div className="johan-product-slider__text">
                Наша новая технология отслеживания V5 имеет новейшие функции: встроенный пульсометр и мониторинг в режиме реального времени! Выбирите параметры, которые вы хотите отслеживать в реальном времени, и начните сеанс.
              </div>
            </div>
            <div className="johan-product-slider__img">
              <img src={sliderImage1} alt="" />
            </div>
          </div>

          <div className="johan-product-slider__item">
            <div className="johan-product-slider__box">
              <div className="johan-product-slider__title">
                ДАТЧИК <span>V5</span>
              </div>
              <div className="johan-product-slider__subtitle">
                Живое отслеживание
              </div>
              <div className="johan-product-slider__text">
                С помощью приложения JOHAN Live вы можете следить за своей командой в режиме реального времени во время тренировок и матчей! Выберите параметры, которые вы хотите отслеживать в реальном времени, и начните сеанс.
              </div>
            </div>
            <div className="johan-product-slider__img">
              <img src={sliderImage2} alt="" />
            </div>
          </div>

          <div className="johan-product-slider__item">
            <div className="johan-product-slider__box">
              <div className="johan-product-slider__title">
                ДАТЧИК <span>V5</span>
              </div>
              <div className="johan-product-slider__subtitle">
                Встроенная частота пульса
              </div>
              <div className="johan-product-slider__text">
                Датчик V5 содержит встроенный датчик частоты сердечных сокращений, так что данные GPS и данные о частоте пульса могут быть получены от игроков.
              </div>
            </div>
            <div className="johan-product-slider__img">
              <img src={sliderImage3} alt="" />
            </div>
          </div>
        </Slider>
      </div>
    </div>
  )
}

export default JohanProductSlider
