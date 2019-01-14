// @flow
import connect from 'react-redux/es/connect/connect';
import type { AppState } from '../../store/state';
import SinglePurchaseRender from './component';
import type { AuctionItem, AuctionPurchase } from '../../store/types/auction.types';

type ReduxStateProps = {|

|};

export type SinglePurchaseRenderProps = {
  ...ReduxStateProps,
  purchase: AuctionPurchase,
  item: AuctionItem,
};

export type SinglePurchaseRenderState = {

};

const mapStateToProps = (state: AppState): ReduxStateProps => ({

});

export default connect(mapStateToProps)(SinglePurchaseRender);
