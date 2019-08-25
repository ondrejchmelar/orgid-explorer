import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Page404 from './components/Page404';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route component={Page404} />
  </Switch>
);


export default Routes;
