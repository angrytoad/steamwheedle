// @flow
import { bindActionCreators, type Dispatch } from 'redux';
import connect from 'react-redux/es/connect/connect';
import type { AppState } from '../../store/state';
import Play from './component';
import type { CurrentUser } from '../../store/types/user.types';

type ReduxStateProps = {|
  currentUser: CurrentUser,
|};

export type PlayProps = {
  ...ReduxStateProps,
};

export type PlayState = {

};

const mapStateToProps = (state: AppState): ReduxStateProps => ({
  currentUser: state.currentUser,
});

export default connect(mapStateToProps)(Play);
