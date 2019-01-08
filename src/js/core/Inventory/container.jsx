// @flow
import { withRouter } from 'react-router';
import connect from 'react-redux/es/connect/connect';
import type { AppState } from '../../store/state';
import Inventory from './component';
import type { CurrentUser } from '../../store/types/user.types';

type ReduxStateProps = {|
  view: string,
  currentUser: CurrentUser,
|};

export type InventoryProps = {
  ...ReduxStateProps,
};

export type InventoryState = {

};

const mapStateToProps = (state: AppState): ReduxStateProps => ({
  view: state.view,
  currentUser: state.currentUser,
});

export default withRouter(connect(mapStateToProps)(Inventory));
