// @flow
import connect from 'react-redux/es/connect/connect';
import type { AppState } from '../../store/state';
import InventoryList from './component';
import type { AuctionPurchases, AuctionItem } from '../../store/types/auction.types';

type ReduxStateProps = {|
  userAuctionPurchases: AuctionPurchases,
  allAuctionItems: AuctionItem[],
|};

type ReduxActionProps = {|

|};

export type InventoryListProps = {
  ...ReduxStateProps,
  ...ReduxActionProps,
};

export type InventoryListState = {

};

const mapStateToProps = (state: AppState): ReduxStateProps => ({
  userAuctionPurchases: state.userAuctionPurchases,
  allAuctionItems: state.allAuctionItems,
});

export default connect(mapStateToProps)(InventoryList);
