// @flow
import connect from 'react-redux/es/connect/connect';
import type { AppState } from '../../store/state';
import GlobalTimer from './component';
import type { GlobalCountdown } from '../../store/types/application.types';

type ReduxStateProps = {|
  globalCountdown: GlobalCountdown,
  nextUpdate: number,
|};

type ReduxActionProps = {|

|};

export type GlobalTimerProps = {
  ...ReduxStateProps,
  ...ReduxActionProps,
};

export type GlobalTimerState = {

};

const mapStateToProps = (state: AppState): ReduxStateProps => ({
  globalCountdown: state.globalCountdown,
  nextUpdate: state.nextUpdate,
});

export default connect(mapStateToProps)(GlobalTimer);
