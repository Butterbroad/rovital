import React from 'react'
import Advantages from './Components/Advantages/Advantages'
import Products from './Components/Products/Products'
import './style/Content.scss'

function Content() {
  return (
    <section className="content">
      <Products />
      <Advantages />
    </section>
  )
}

export default Content
