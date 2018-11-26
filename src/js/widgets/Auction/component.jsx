// @flow
import React from 'react';
import type { AuctionProps, AuctionState } from './container';
import AuctionActions from '../../store/actions/auction.actions';
import css from './styles.module.scss';

import AuctionCategories from '../../ui/AuctionCategories/component';
import AuctionItems from '../../ui/AuctionItems/component';

class Auction extends React.PureComponent<AuctionProps, AuctionState> {

  auctionActions = new AuctionActions();

  componentDidMount = () => {
    this.auctionActions.getAuctionCategories();
  };

  render() {
    const { auctionCategories, selectedAuctionCategories } = this.props;

    return (
      <div className={css.auction}>
        <div className={css.topper}>
          <h1>The Auction</h1>
          <div>
            <p>Search</p>
          </div>
        </div>
        <AuctionCategories
          auctionCategories={auctionCategories}
          selectedAuctionCategories={selectedAuctionCategories}
        />
        <AuctionItems />
      </div>
    );
  }
}

export default Auction;
