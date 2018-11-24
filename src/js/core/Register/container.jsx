// @flow
import connect from 'react-redux/es/connect/connect';
import type { AppState } from '../../store/state';
import Register from './component';
import type { CurrentUser } from '../../store/types/user.types';

type ReduxStateProps = {|
  currentUser: CurrentUser,
  userLoggedIn: boolean,
|};

export type RegisterProps = {
  ...ReduxStateProps,
};

export type RegisterState = {
  username: string,
  password: string,
  loading: boolean,
};

const mapStateToProps = (state: AppState): ReduxStateProps => ({
  currentUser: state.currentUser,
  userLoggedIn: state.userLoggedIn,
});

export default connect(mapStateToProps)(Register);
