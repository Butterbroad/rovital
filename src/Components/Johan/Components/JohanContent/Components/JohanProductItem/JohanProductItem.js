import React from 'react'
import './styles/JohanProductItem.scss'
import productImg1 from './styles/img/product-item.png'

function JohanProductItem() {
  return (
    <div className="johan-product-item">
      <div className="johan-product-item__wrapper">
        <div className="johan-product-item__img">
          <img src={productImg1} alt="" />
        </div>
        <div className="johan-product-item__box">
          <div className="johan-product-item__title">
            ДАТЧИК <span>V4</span>
          </div>
          <div className="johan-product-item__text">
            Спортивный GPS-трекер JOHAN V4, который можно носить в удобном GPS-жилете, объединяет данные о местоположении с данными инерционного датчика для точного измерения всех видов активности, от длинных спринтов до коротких взрывных действий. С дополнительным датчиком мы позволяем вам обогащать данные мониторингом сердечного ритма. Чтобы получить полный обзор вашей тренировки или пообщаться с системой JOHAN!
          </div>
        </div>
      </div>
    </div>
  )
}

export default JohanProductItem
