// @flow
import * as React from 'react';
import { withRouter } from 'react-router-dom';
import connect from 'react-redux/es/connect/connect';
import type { Location } from 'react-router';
import type { AppState } from '../../store/state';
import PrivateRoute from './component';

type ReduxStateProps = {
  currentUser: User,
}

type ReactRouterProps = {
  location: Location,
}

export type PrivateRouteProps = ReduxStateProps & ReduxActionProps & ReactRouterProps & {
  component: React.ElementType,
  path: string,
}

const mapStateToProps = (state: AppState): ReduxStateProps => ({
  currentUser: state.currentUser,
});

const reduxConnect = connect(mapStateToProps)(PrivateRoute);
const routerConnect = withRouter(reduxConnect);
export default routerConnect;
