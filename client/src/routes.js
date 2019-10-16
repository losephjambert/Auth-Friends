import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './components/auth/PrivateRoute';

import LandingPage from './components/LandingPage';
import Login from './components/auth/Login';
import FriendsContainer from './components/private/FriendsContainer';

const Routes = () => (
  <Switch>
    <Route path='/login' component={Login} />
    <PrivateRoute path='/friends' component={FriendsContainer} />
    <Route component={LandingPage} />
  </Switch>
);

export default Routes;
