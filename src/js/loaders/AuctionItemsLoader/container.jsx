// @flow
import connect from 'react-redux/es/connect/connect';
import type { AppState } from '../../store/state';
import AuctionItemsLoader from './component';
import type { AuctionItem } from '../../store/types/auction.types';

type ReduxStateProps = {|
  allAuctionItems: AuctionItem[],
|};


export type AuctionItemsLoaderProps = {
  ...ReduxStateProps,
  ...ReduxActionProps,
};

export type AuctionItemsLoaderState = {

};

const mapStateToProps = (state: AppState): ReduxStateProps => ({
  allAuctionItems: state.allAuctionItems,
});

export default connect(mapStateToProps)(AuctionItemsLoader);
