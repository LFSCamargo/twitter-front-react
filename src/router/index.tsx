import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Landing, Home, Login, SignUp } from '~/screens';
import PrivateRoute from './private';

export default () => {
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLogged(token !== null);
  }, []);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact={true} path="/" component={Landing} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <PrivateRoute isLogged={isLogged} redirectRoute="/" path="/home" component={Home} />
      </Switch>
    </BrowserRouter>
  );
};
