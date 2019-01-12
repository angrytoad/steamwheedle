// @flow
import React from 'react';
import type { InventoryProps, InventoryState } from './container';
import css from './styles.module.scss';
import UserActions from '../../store/actions/user.actions';

import AuctionItemsLoader from '../../loaders/AuctionItemsLoader/container';
import InventoryLoader from '../../loaders/InventoryLoader/container';
import InventoryList from '../../widgets/InventoryList/container';

class Inventory extends React.PureComponent<InventoryProps, InventoryState> {
  render() {
    return (
      <div className={`${css.inventory} animated fadeIn`}>
        <div className={css.topper}>
          <h1 className="title">Inventory</h1>
          <h4 className="subtitle">Manage and Sell your items.</h4>
        </div>
        <InventoryList />
      </div>
    );
  }
}

export default Inventory;
