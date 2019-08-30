import React from 'react';
import { Route, Switch } from 'react-router-dom';
import List from './List';
import Page404 from './components/Page404';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={List} />
    <Route component={Page404} />
  </Switch>
);


export default Routes;
