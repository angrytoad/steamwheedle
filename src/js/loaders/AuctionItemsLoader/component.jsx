// @flow
import React from 'react';
import type { AuctionItemsLoaderProps, AuctionItemsLoaderState } from './container';
import AuctionActions from '../../store/actions/auction.actions';

class AuctionItemsLoader extends React.PureComponent<
  AuctionItemsLoaderProps,
  AuctionItemsLoaderState
  > {
  auctionActions = new AuctionActions();

  componentDidMount = () => {
    this.auctionActions
      .getAuctionItems(undefined, undefined, true);
  };

  render() {
    const { allAuctionItems, children } = this.props;
    return (
      <React.Fragment>
        {
          allAuctionItems.length > 0
          && children
        }
      </React.Fragment>
    );
  }
}

export default AuctionItemsLoader;
