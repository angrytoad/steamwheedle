// @flow
import React from 'react';
import type { AuctionCategoriesLoaderProps } from './container';
import AuctionActions from '../../store/actions/auction.actions';

class AuctionCategoriesLoader extends React.PureComponent<AuctionCategoriesLoaderProps> {
  auctionActions = new AuctionActions();

  componentDidMount = () => {
    this.auctionActions.getAuctionCategories();
  };

  render() {
    const { auctionCategories, children } = this.props;
    return (
      <React.Fragment>
        {
          auctionCategories.length > 0
            && children
        }
      </React.Fragment>
    );
  }
}

export default AuctionCategoriesLoader;
