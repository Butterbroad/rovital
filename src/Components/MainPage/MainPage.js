import React, { useState, useEffect } from 'react'
import Hero from './Components/Hero/Hero'
import Content from './Components/Content/Content';
import Footer from '../Footer/Footer';
import MobileMenu from '../MobileMenu/MobileMenu';
import ToTopBtn from '../ToTopBtn/ToTopBtn';

function MainPage({ setShow, showMenu, setHide }) {
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    const getBtn = () => {
      setShowBtn(window.scrollY > 700)
    }
    window.addEventListener('scroll', getBtn)

    return () => window.removeEventListener('scroll', getBtn)
  }, [])

  return (
    <div className="main-page">
      <Hero setShow={setShow} />
      <Content />
      <Footer />
      {
        showMenu && <MobileMenu setHide={setHide} />
      }
      {
        showBtn && <ToTopBtn />
      }
    </div>

  );
}

export default MainPage
