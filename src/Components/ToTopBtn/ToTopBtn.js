import React from 'react'
import './styles/ToTopBtn.scss'
import btnImg from './styles/img/btn.svg'

function ToTopBtn() {

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  }

  return (
    <div className="toTopBtn" onClick={() => scrollToTop()}>
      <img src={btnImg} alt="" />
    </div>
  )
}

export default ToTopBtn
