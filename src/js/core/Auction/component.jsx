// @flow
import React from 'react';
import type { AuctionProps, AuctionState } from './container';
import css from './styles.module.scss';

import Block from '../../ui/Block/component';
import AuctionView from '../../views/Auction/container';

import BalanceMenu from '../../ui/BalanceMenu/component';
import PlayMenu from '../../ui/PlayMenu/component';
import XpBar from '../../widgets/XpBar/container';

class Auction extends React.PureComponent<AuctionProps, AuctionState> {
  render() {
    const { view, currentUser, location } = this.props;

    return (
      <div className={`${css.auction}`}>
        <Block>
          <AuctionView />
        </Block>
        <PlayMenu location={location} currentUser={currentUser} />
        <BalanceMenu currentUser={currentUser} />
        <XpBar currentUser={currentUser} />
      </div>
    );
  }
}

export default Auction;
