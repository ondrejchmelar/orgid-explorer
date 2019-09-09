import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import List from './List';
import OrgIdDetails from './OrgIdDetails'
import Page404 from './components/Page404';

const Routes = () => (
  <Switch>
    <Route path={["/orgid/:id"]} exact component={OrgIdDetails} />
    <Redirect exact from={"/orgid"} to='/'/>
    <Route path="/" exact component={List} />
    <Route component={Page404} />
  </Switch>
);

export default Routes;
