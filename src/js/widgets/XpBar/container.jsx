// @flow
import connect from 'react-redux/es/connect/connect';
import type { AppState } from '../../store/state';
import XpBar from './component';
import type { CurrentUser } from '../../store/types/user.types';

type ReduxStateProps = {|
  availableLevels: number[],
|};

type ReduxActionProps = {|

|};

export type XpBarProps = {
  ...ReduxStateProps,
  ...ReduxActionProps,
  currentUser: CurrentUser,
};

export type XpBarState = {
  oldUser: CurrentUser,
};

const mapStateToProps = (state: AppState): ReduxStateProps => ({
  availableLevels: state.availableLevels,
});

export default connect(mapStateToProps)(XpBar);
