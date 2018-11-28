// @flow
import connect from 'react-redux/es/connect/connect';
import type { AppState } from '../../store/state';
import BuyItemModal from './component';
import type { CurrentUser } from '../../store/types/user.types';
import type { AuctionItem } from '../../store/types/auction.types';

type ReduxStateProps = {|
  currentUser: CurrentUser,
|};

export type BuyItemModalProps = {
  ...ReduxStateProps,
};

export type BuyItemModalState = {
  buyModalShowing: boolean,
  item: AuctionItem | null,
  quantity: number,
};

const mapStateToProps = (state: AppState): ReduxStateProps => ({
  currentUser: state.currentUser,
});

export default connect(mapStateToProps)(BuyItemModal);
