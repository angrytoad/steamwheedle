// @flow
import React from 'react';
import { Route } from 'react-router-dom';
import type { PrivateRouteProps } from './container';
import UserActions from '../../store/actions/user.actions';

class PrivateRoute extends React.PureComponent<PrivateRouteProps, PrivateRouteState> {
  userActions = new UserActions();

  componentDidMount = () => {
    this.userActions.getCurrentUser(true);
    this.userActions.getAvailableLevels();
  };

  render() {
    const {
      currentUser, userLoggedIn, component, path,
    } = this.props;

    if (component === null) {
      return <div />;
    }

    if (currentUser === null) {
      return <div />;
    }

    if ((currentUser === null || currentUser === undefined) && userLoggedIn === true) {
      this.userActions.getCurrentUser();
      return <div />;
    }
    const element = x => React.createElement(component, { ...x });
    return (
      <Route path={path} render={element} />
    );
  }
}

export default PrivateRoute;
