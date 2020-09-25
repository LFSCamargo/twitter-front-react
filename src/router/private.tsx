import React, { FC } from 'react';
import { Location } from 'history';
import { Route, Redirect } from 'react-router-dom';

interface Props {
  component: any;
  location?: Location;
  path: string;
  exact?: boolean;
  isLogged: boolean;
  redirectRoute: string;
}

const PrivateRoute: FC<Props> = ({ component: Component, isLogged, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props): JSX.Element =>
        isLogged ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: ,
              state: { from: props.location.pathname },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;