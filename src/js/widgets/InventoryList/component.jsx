// @flow
import React from 'react';
import uuidv4 from 'uuid/v4';
import type { InventoryListProps, InventoryListState } from './container';
import css from './styles.module.scss';

import AuctionPurchaseGroup from '../../ui/AuctionPurchaseGroup/container';

class InventoryList extends React.PureComponent<InventoryListProps, InventoryListState> {
  render() {
    const { userAuctionPurchases, allAuctionItems } = this.props;
    return (
      <div className={css.inventoryList}>
        <div className={css.inventoryListItems}>
          {
            Object.keys(userAuctionPurchases).length > 0
              ? (
                Object.keys(userAuctionPurchases).map((purchaseKey) => {
                  const purchase = userAuctionPurchases[purchaseKey];
                  return (
                    <AuctionPurchaseGroup
                      key={uuidv4()}
                      purchase={purchase}
                      allAuctionItems={allAuctionItems}
                    />
                  );
                })
              )
              : (
                <p className="text-muted">
                  Your inventory is empty, why not see if anything on the auction
                  &nbsp;takes your fancy?
                </p>
              )
          }
        </div>
      </div>
    );
  }
}

export default InventoryList;
