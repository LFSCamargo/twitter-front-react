import React, { FC } from 'react';
import { Location } from 'history';
import { Route, Redirect } from 'react-router-dom';

interface Props {
  component: any;
  location?: Location;
  path: string;
  exact?: boolean;
  redirectRoute: string;
}

const PrivateRoute: FC<Props> = ({ component: Component, redirectRoute, ...rest }) => {
  const isLogged = localStorage.getItem('token') !== null;
  return (
    <Route
      {...rest}
      render={(props): JSX.Element =>
        isLogged ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: redirectRoute,
              state: { from: props.location.pathname },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
