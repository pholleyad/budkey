import React, { Component } from 'react';
import { BrowserRouter } from "react-router-dom";
import { Route, Redirect, Switch } from 'react-router';
import Login from './routes/Login';

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login} exact />
          <Redirect to="/login" />
        </Switch>
      </BrowserRouter>
    );
  }
}
