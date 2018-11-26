// @flow
import connect from 'react-redux/es/connect/connect';
import type { AppState } from '../../store/state';
import GlanceInventory from './component';

type ReduxStateProps = {|

|};

type ReduxActionProps = {|

|};

export type GlanceInventoryProps = {
  ...ReduxStateProps,
  ...ReduxActionProps,
};

export type GlanceInventoryState = {

};

const mapStateToProps = (state: AppState): ReduxStateProps => ({

});

export default connect(mapStateToProps)(GlanceInventory);
