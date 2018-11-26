// @flow
import connect from 'react-redux/es/connect/connect';
import type { AppState } from '../../store/state';
import GlanceMarketActivity from './component';

type ReduxStateProps = {|

|};

type ReduxActionProps = {|

|};

export type GlanceMarketActivityProps = {
  ...ReduxStateProps,
  ...ReduxActionProps,
};

export type GlanceMarketActivityState = {

};

const mapStateToProps = (state: AppState): ReduxStateProps => ({

});

export default connect(mapStateToProps)(GlanceMarketActivity);
