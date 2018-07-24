// dependencies
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserHistory, IndexRoute } from 'react-router';
import { BrowserRouter} from 'react-router-dom';
// styles

// components
import Main from '../components/Start'
import SinglePost from '../components/SinglePost';
import Grid from '../components/Grid';

// const Router = (
//   <BrowserRouter history={BrowserHistory}>
//     <Route path="/" component={Main}>


//     </Route>
//   </BrowserRouter>
// )

ReactDOM.render(
  <Main>
    <p>
      ahoy... reverted back to props.children!
    </p>
  </Main>
  , document.getElementById('app'));

// <IndexRoute component={Grid}></IndexRoute>
  // <Route path="/view/" component={SinglePost}></Route>
  