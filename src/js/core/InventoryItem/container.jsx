// @flow
import { withRouter } from 'react-router';
import connect from 'react-redux/es/connect/connect';
import type { AppState } from '../../store/state';
import InventoryItem from './component';
import type { CurrentUser } from '../../store/types/user.types';

type ReduxStateProps = {|
  view: string,
  currentUser: CurrentUser,
|};

export type InventoryItemProps = {
  ...ReduxStateProps,
};

export type InventoryItemState = {

};

const mapStateToProps = (state: AppState): ReduxStateProps => ({
  view: state.view,
  currentUser: state.currentUser,
});

export default withRouter(connect(mapStateToProps)(InventoryItem));
