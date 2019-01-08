// @flow
import { bindActionCreators, type Dispatch } from 'redux';
import connect from 'react-redux/es/connect/connect';
import type { AppState } from '../../store/state';
import InventoryLoader from './component';
import type { AuctionItem, AuctionPurchase } from '../../store/types/auction.types';

type ReduxStateProps = {|
  allAuctionItems: AuctionItem[],
  userAuctionPurchases: AuctionPurchase[],
|};

export type InventoryLoaderProps = {
  ...ReduxStateProps,
  children: any,
};

export type InventoryLoaderState = {

};

const mapStateToProps = (state: AppState): ReduxStateProps => ({
  allAuctionItems: state.allAuctionItems,
  userAuctionPurchases: state.userAuctionPurchases,
});

export default connect(mapStateToProps)(InventoryLoader);
