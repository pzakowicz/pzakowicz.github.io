import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './index.css';
import NavBar from './components/NavBar/NavBar';
import AboutMe from './components/AboutMe/AboutMe';
import Portfolio from './components/Portfolio/Portfolio';
import CV from './components/CV/CV';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <NavBar />
          <AboutMe />
        </Route>
        <Route path="/cv">
          <NavBar />
          <CV />
        </Route>
        <Route path="/portfolio">
          <NavBar />
          <Portfolio />
        </Route>
        <Route path="/contact">
          <NavBar />
        </Route>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

