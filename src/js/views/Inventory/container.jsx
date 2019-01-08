// @flow
import connect from 'react-redux/es/connect/connect';
import type { AppState } from '../../store/state';
import Inventory from './component';

type ReduxStateProps = {|

|};

export type InventoryProps = {
  ...ReduxStateProps,
};

export type InventoryState = {

};

const mapStateToProps = (state: AppState): ReduxStateProps => ({

});

export default connect(mapStateToProps)(Inventory);
