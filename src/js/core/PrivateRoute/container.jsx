// @flow
import { bindActionCreators, type Dispatch } from 'redux';
import connect from 'react-redux/es/connect/connect';
import type { AppState } from '../../store/state';
import PrivateRoute from './component';
import type { CurrentUser } from '../../store/types/user.types';

type ReduxStateProps = {|
  userLoggedIn: boolean,
  currentUser: CurrentUser,
|};

type ReduxActionProps = {|

|};

export type PrivateRouteProps = {
  ...ReduxStateProps,
  ...ReduxActionProps,
};

export type PrivateRouteState = {

};

const mapStateToProps = (state: AppState): ReduxStateProps => ({
  currentUser: state.currentUser,
  userLoggedIn: state.userLoggedIn,
});


export default connect(mapStateToProps)(PrivateRoute);
