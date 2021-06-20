
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home';
import Users from './components/Users';
import About from './components/About';

import Nav from './components/Nav';

function App() {
  return (
    <Router>
    <div>
      <Nav />

      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        {/* Mögliche Probleme: Reihenfolge!*/}
        <Route path="/" exact>
          {/* Mit exact sagen wir es muss genau so sein! */}
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/contact">
          <div>Contact</div>
        </Route>


        {/* 404 Component muss ganz ans Ende des Switches */}
        {/* <Route> */}
        <Route path="*">
          <h1>404</h1>
        </Route>
      </Switch>

      <footer>
        &copy;
      </footer>
    </div>
  </Router>
  );
}

export default App;
