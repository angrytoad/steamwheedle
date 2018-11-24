// @flow
import * as React from 'react';
import { Route } from 'react-router-dom';
import { getCookie } from '../../../helpers/cookieHelper';
import type { PrivateRouteProps } from './container';

const PrivateRoute = (props: PrivateRouteProps) => {
  const {
    getCurrentUser, currentUser, location, component,
  } = props;
  if (component === null) {
    return <div />;
  }
  if (authToken === null) {
    return <div />;
  }
  if (authToken.loggedIn === false) {
    const refreshToken = getCookie('refreshToken');
    if (refreshToken !== null && refreshToken !== undefined && refreshToken !== '') {
      refreshAuth();
    } else {
      localStorage.setItem('callbackUrl', location.pathname);
    }
    return <div />;
  }
  if ((currentUser === null || currentUser === undefined) && authToken.loggedIn === true) {
    getCurrentUser(authToken.loggedInUserId);
    return <div />;
  }
  const element = x => React.createElement(component, { ...x });
  return (
    <Route path={props.path} render={element} />
  );
};

export default PrivateRoute;
