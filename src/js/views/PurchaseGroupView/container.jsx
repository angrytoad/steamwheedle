// @flow
import connect from 'react-redux/es/connect/connect';
import type { AppState } from '../../store/state';
import PurchaseGroupView from './component';
import type {AuctionItem, AuctionPurchase, AuctionPurchases} from '../../store/types/auction.types';

type ReduxStateProps = {|
  activePurchaseGroup: AuctionPurchase[],
  allAuctionItems: AuctionItem[],
  userAuctionPurchases: AuctionPurchases
|};

export type PurchaseGroupViewProps = {
  ...ReduxStateProps,
};

export type PurchaseGroupViewState = {

};

const mapStateToProps = (state: AppState): ReduxStateProps => ({
  activePurchaseGroup: state.activePurchaseGroup,
  allAuctionItems: state.allAuctionItems,
  userAuctionPurchases: state.userAuctionPurchases,
});

export default connect(mapStateToProps)(PurchaseGroupView);
