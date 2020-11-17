import React from 'react'
import './style/Products.scss'
import Slider from "react-slick";
import "../../../../../node_modules/slick-carousel/slick/slick.css";
import "../../../../../node_modules/slick-carousel/slick/slick-theme.css";
import logo1 from './style/img/logo1.svg'
import SliderItem from './Components/SliderItem/SliderItem';

function Products() {

  const settings = {
    infinite: true,
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 641,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
    ]
  };

  const items = [
    { logo: logo1, text: "Интернет- магазин спортивной техники" },
    { logo: logo1, text: "Интернет- магазин спортивной техники" },
    { logo: logo1, text: "Интернет- магазин спортивной техники" },
    { logo: logo1, text: "Интернет- магазин спортивной техники" },
    { logo: logo1, text: "Интернет- магазин спортивной техники" },
  ]

  return (
    <div className="products">
      <div className="products__wrapper">
        <div className="products__title">
          ВСЕ ПРОДУКТЫ
        </div>
        <div className="products__slider slider-products">
          <div className="slider-products__body">
            <Slider {...settings}>
              {items.map((item, index) => (
                <SliderItem key={index} logo={item.logo} text={item.text} />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products