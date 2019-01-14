// @flow
import { bindActionCreators, type Dispatch } from 'redux';
import { withRouter } from 'react-router';
import connect from 'react-redux/es/connect/connect';
import type { AppState } from '../../store/state';
import Auction from './component';
import type { CurrentUser } from '../../store/types/user.types';

type ReduxStateProps = {|
  view: string,
  currentUser: CurrentUser,
|};

type ReduxActionProps = {|

|};

export type AuctionProps = {
  ...ReduxStateProps,
  ...ReduxActionProps,
};

export type AuctionState = {

};

const mapStateToProps = (state: AppState): ReduxStateProps => ({
  view: state.view,
  currentUser: state.currentUser,
});

export default withRouter(connect(mapStateToProps)(Auction));
