import React from 'react';
import "./App.scss";
import Hero from '../Hero/Hero'
import Content from '../Content/Content';
import Footer from '../Footer/Footer';

function App() {
  return (
    <div className="app">
      <Hero />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
