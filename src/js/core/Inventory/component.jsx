// @flow
import React from 'react';
import type { InventoryProps, InventoryState } from './container';
import css from './styles.module.scss';

import Block from '../../ui/Block/component';
import InventoryView from '../../views/Inventory/container';

import BalanceMenu from '../../ui/BalanceMenu/component';

import PlayMenu from '../../ui/PlayMenu/component';
import AuctionItemsLoader from '../../loaders/AuctionItemsLoader/container';
import InventoryLoader from '../../loaders/InventoryLoader/container';
import XpBar from '../../widgets/XpBar/container';
import GlobalTimer from '../../widgets/GlobalTimer/container';

class Inventory extends React.PureComponent<InventoryProps, InventoryState> {
  render() {
    const { view, currentUser, location } = this.props;

    return (
      <div className={`${css.inventory}`}>
        <Block>
          <AuctionItemsLoader>
            <InventoryLoader>
              <InventoryView />
            </InventoryLoader>
          </AuctionItemsLoader>
        </Block>

        <PlayMenu location={location} currentUser={currentUser} />
        <BalanceMenu currentUser={currentUser} />
        <XpBar currentUser={currentUser} />
        <GlobalTimer />
      </div>
    );
  }
}

export default Inventory;
