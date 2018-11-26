// @flow
import connect from 'react-redux/es/connect/connect';
import type { AppState } from '../../store/state';
import GlanceHoldings from './component';

type ReduxStateProps = {|

|};

type ReduxActionProps = {|

|};

export type GlanceHoldingsProps = {
  ...ReduxStateProps,
  ...ReduxActionProps,
};

export type GlanceHoldingsState = {

};

const mapStateToProps = (state: AppState): ReduxStateProps => ({

});

export default connect(mapStateToProps)(GlanceHoldings);
