
/* import './App.css'; */
import './App.scss';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home';
import Entertainment from './components/Entertainment'
import Shop from './components/Shop';
import Events from './components/Events';
import Contact from './components/Contact';
import Footer from './components/Footer'

import Nav from './components/Nav';

function App() {
  return (
    <Router>
    <div>
      <Nav />

      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/entertainment">
          <Entertainment />
        </Route>
        <Route path="/shop">
          <Shop />
        </Route>
        <Route path="/events">
          <Events />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>


        {/* 404 Component muss ganz ans Ende des Switches */}
        {/* <Route> */}
        <Route path="*">
          <h1>404</h1>
        </Route>
      </Switch>

      <Footer />
    </div>
  </Router>
  );
}

export default App;
