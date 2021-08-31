import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import Home from './Home';
import Qoute from './Qoute';
import NavBar from './Navbar';

const Routes = () => (
  <BrowserRouter>
    <NavBar />
    <Switch>

      <Route exact path="/" component={Home} />
      <Route exact path="/calculator" component={App} />
      <Route exact path="/qoute" component={Qoute} />

    </Switch>
  </BrowserRouter>
);

export default Routes;
