
/* import './App.css'; */
import './App.scss';
import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home';
import Entertainment from './components/Entertainment'
import Shop from './components/Shop';
import Events from './components/Events';
import Contact from './components/Contact';
import Footer from './components/Footer'
import { NavLink } from "react-router-dom";
/* import Nav from './components/Nav'; */

function App() {
  return (
    <Router>
    <main>
    <nav className="navigation">
            <ul>
                <li>
                    <NavLink className="main-nav"
                    activeStyle={{ color: '#BB7043'}} to="/" exact>HOME 
                    </NavLink>
                </li>
                <li>
                    <NavLink className="main-nav"
                    activeStyle={{ color: '#BB7043'}} to="/entertainment">ENTERTAINMENT
                    </NavLink>
                </li>
                <li>
                    <NavLink className="main-nav"
                    activeStyle={{ color: '#BB7043'}} to="/shop">SHOP
                    </NavLink>
                </li>
                <li>
                    <NavLink className="main-nav"
                    activeStyle={{ color: '#BB7043'}} to="/events">EVENTS
                    </NavLink>
                </li>
                <li>
                    <NavLink className="main-nav"
                    activeStyle={{ color: '#BB7043'}} to="/contact">CONTACT
                    </NavLink>
                </li>
            </ul>
        </nav>
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
      </Switch>

      <Footer />
    </main>
  </Router>
  );
}

export default App;
