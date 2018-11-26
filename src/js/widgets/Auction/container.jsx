// @flow
import connect from 'react-redux/es/connect/connect';
import type { AppState } from '../../store/state';
import Auction from './component';
import type { AuctionCategory } from '../../store/types/auction.types';

type ReduxStateProps = {|
  auctionCategories: AuctionCategory[],
  selectedAuctionCategories: string[],
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
});

export default connect(mapStateToProps)(Auction);
