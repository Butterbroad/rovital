import React, { useState, useEffect } from 'react';
import MainPage from '../MainPage/MainPage';
import Johan from '../Johan/Johan';
import Polar from '../Polar/Polar';
import "./App.scss";
import { Route, Switch, useLocation } from 'react-router-dom'


function App() {
  const [show, setShow] = useState(false);

  function scrollToTop() {
    window.scrollTo(0, 0);
  }
  const location = useLocation();
  useEffect(() => {
    scrollToTop();
  }, [location]);



  return (
    <div className="app">
      <Switch>
        <Route exact path="/">
          <MainPage setShow={() => setShow(true)} showMenu={show} setHide={() => setShow(false)} />
        </Route>
        <Route path="/johan">
          <Johan setShow={() => setShow(true)} showMenu={show} setHide={() => setShow(false)} />
        </Route>
        <Route path="/polar">
          <Polar setShow={() => setShow(true)} showMenu={show} setHide={() => setShow(false)} />
        </Route>
      </Switch>
    </div>

  );
}

export default App;
