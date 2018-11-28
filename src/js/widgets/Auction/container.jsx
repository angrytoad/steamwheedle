// @flow
import connect from 'react-redux/es/connect/connect';
import type { AppState } from '../../store/state';
import Auction from './component';
import type {AuctionCategory, AuctionItem} from '../../store/types/auction.types';
import type {CurrentUser} from "../../store/types/user.types";

type ReduxStateProps = {|
  auctionCategories: AuctionCategory[],
  selectedAuctionCategories: string[],
  auctionItems: AuctionItem[],
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
  auctionCategories: state.auctionCategories,
  selectedAuctionCategories: state.selectedAuctionCategories,
  auctionItems: state.auctionItems,
  currentUser: state.currentUser,
});

export default connect(mapStateToProps)(Auction);
