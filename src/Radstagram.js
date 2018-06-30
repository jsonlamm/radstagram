// dependencies
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, BrowserHistory, IndexRoute } from 'react-router';
// styles

// components
import Main from '../components/Start'

const router = (
  <Router history={BrowserHistory}>
    <Route path="/" component={Main}>
    </Route>
  </Router>
)

ReactDOM.render(
  <Main>
    <p>A child</p>
  </Main>, document.getElementById('app'));

