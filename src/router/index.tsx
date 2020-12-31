import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Landing, Home, Login, SignUp, UpdateProfile } from '~/screens';
import PrivateRoute from './private';

export default () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact={true} path="/" component={Landing} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <PrivateRoute path="/update-profile" component={UpdateProfile} redirectRoute="/" />
        <PrivateRoute redirectRoute="/" path="/home" component={Home} />
      </Switch>
    </BrowserRouter>
  );
};
