// @flow
import connect from 'react-redux/es/connect/connect';
import type { AppState } from '../../store/state';
import InventoryItem from './component';
import type {AuctionItem, AuctionPurchase, AuctionPurchases} from '../../store/types/auction.types';
import type {CurrentUser} from "../../store/types/user.types";

type ReduxStateProps = {|
  allAuctionItems: AuctionItem[],
  userAuctionPurchases: AuctionPurchase[],
  activePurchaseGroup: AuctionPurchase[]
|};

export type InventoryItemProps = {
  ...ReduxStateProps,
  itemId: string,
  currentUser: CurrentUser,
};

export type InventoryItemState = {

};

const mapStateToProps = (state: AppState): ReduxStateProps => ({
  allAuctionItems: state.allAuctionItems,
  userAuctionPurchases: state.userAuctionPurchases,
  activePurchaseGroup: state.activePurchaseGroup,
});

export default connect(mapStateToProps)(InventoryItem);
