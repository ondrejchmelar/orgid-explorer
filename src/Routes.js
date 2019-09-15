import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import List from './List';
import OrgIdDetails from './OrgIdDetails'
import Page404 from './components/Page404';

const { PUBLIC_URL } = process.env;

const Routes = () => (
  <Switch>
    <Route path={[`${PUBLIC_URL}/orgid/:id`]} exact component={OrgIdDetails} />
    <Redirect exact from={`${PUBLIC_URL}/orgid`} to='/'/>
    <Route path={`${PUBLIC_URL}/`} exact component={List} />
    <Route component={Page404} />
  </Switch>
);

export default Routes;
