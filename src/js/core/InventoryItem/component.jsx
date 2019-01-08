// @flow
import React from 'react';
import type { InventoryItemProps, InventoryItemState } from './container';
import css from './styles.module.scss';

import Block from '../../ui/Block/component';
import InventoryItemView from '../../views/InventoryItem/container';

import BalanceMenu from '../../ui/BalanceMenu/component';

import PlayMenu from '../../ui/PlayMenu/component';
import AuctionItemsLoader from '../../loaders/AuctionItemsLoader/container';
import InventoryLoader from '../../loaders/InventoryLoader/container';
import XpBar from '../../widgets/XpBar/container';

class InventoryItem extends React.PureComponent<InventoryItemProps, InventoryItemState> {
  render() {
    const {
      view, currentUser, location, match,
    } = this.props;

    return (
      <div className={`${css.inventoryItem}`}>
        <Block>
          <AuctionItemsLoader>
            <InventoryLoader>
              <InventoryItemView itemId={match.params.item_id} currentUser={currentUser} />
            </InventoryLoader>
          </AuctionItemsLoader>
        </Block>
        <PlayMenu location={location} currentUser={currentUser} />
        <BalanceMenu currentUser={currentUser} />
        <XpBar currentUser={currentUser} />
      </div>
    );
  }
}

export default InventoryItem;
