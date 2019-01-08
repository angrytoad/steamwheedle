// @flow
import { bindActionCreators, type Dispatch } from 'redux';
import connect from 'react-redux/es/connect/connect';
import type { AppState } from '../../store/state';
import AuctionCategoriesLoader from './component';
import type { AuctionCategory } from '../../store/types/auction.types';

type ReduxStateProps = {|
  auctionCategories: AuctionCategory[],
|};

export type AuctionCategoriesLoaderProps = {
  ...ReduxStateProps,
  children: any,
};

const mapStateToProps = (state: AppState): ReduxStateProps => ({
  auctionCategories: state.auctionCategories,
});

export default connect(mapStateToProps)(AuctionCategoriesLoader);
