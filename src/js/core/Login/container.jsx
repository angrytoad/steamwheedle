// @flow
import { bindActionCreators, type Dispatch } from 'redux';
import connect from 'react-redux/es/connect/connect';
import type { AppState } from '../../store/state';
import Login from './component';
import type { CurrentUser } from '../../store/types/user.types';

type ReduxStateProps = {|
  userLoggedIn: boolean,
  currentUser: CurrentUser,
|};

type ReduxActionProps = {|

|};

export type LoginProps = {
  ...ReduxStateProps,
  ...ReduxActionProps,
};

export type LoginState = {

};

const mapStateToProps = (state: AppState): ReduxStateProps => ({
  userLoggedIn: state.userLoggedIn,
  currentUser: state.currentUser,
});


export default connect(mapStateToProps)(Login);
