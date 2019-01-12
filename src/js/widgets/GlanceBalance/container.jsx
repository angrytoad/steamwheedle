// @flow
import connect from 'react-redux/es/connect/connect';
import type { AppState } from '../../store/state';
import GlanceBalance from './component';
import type { CurrentUser } from '../../store/types/user.types';

type ReduxStateProps = {|
  currentUser: CurrentUser,
|};

type ReduxActionProps = {|

|};

export type GlanceBalanceProps = {
  ...ReduxStateProps,
  ...ReduxActionProps,
};

export type GlanceBalanceState = {

};

const mapStateToProps = (state: AppState): ReduxStateProps => ({
  currentUser: state.currentUser,
});

export default connect(mapStateToProps)(GlanceBalance);
