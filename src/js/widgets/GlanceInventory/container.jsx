// @flow
import connect from 'react-redux/es/connect/connect';
import type { AppState } from '../../store/state';
import GlanceInventory from './component';
import type { AuctionPurchases, AuctionItem } from '../../store/types/auction.types';

type ReduxStateProps = {|
  userAuctionPurchases: AuctionPurchases,
  allAuctionItems: AuctionItem[],
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
  userAuctionPurchases: state.userAuctionPurchases,
  allAuctionItems: state.allAuctionItems,
});

export default connect(mapStateToProps)(GlanceInventory);
