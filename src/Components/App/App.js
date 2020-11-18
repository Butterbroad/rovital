import React, { useState, useEffect } from 'react';
import "./App.scss";
import Hero from '../Hero/Hero'
import Content from '../Content/Content';
import Footer from '../Footer/Footer';
import MobileMenu from '../MobileMenu/MobileMenu';
import ToTopBtn from '../ToTopBtn/ToTopBtn';

function App() {
  const [show, setShow] = useState(false);
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    const getBtn = () => {
      setShowBtn(window.scrollY > 700)
    }
    window.addEventListener('scroll', getBtn)

    return () => window.removeEventListener('scroll', getBtn)
  }, [])

  return (
    <div className="app">
      <Hero setShow={() => setShow(true)} />
      <Content />
      <Footer />
      {
        show && <MobileMenu setHide={() => setShow(false)} />
      }
      {
        showBtn && <ToTopBtn />
      }
    </div>

  );
}

export default App;
