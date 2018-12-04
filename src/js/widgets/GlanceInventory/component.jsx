// @flow
import React from 'react';
import uuidv4 from 'uuid/v4';
import type { GlanceInventoryProps, GlanceInventoryState } from './container';
import css from './styles.module.scss';
import UserActions from '../../store/actions/user.actions';

import AuctionPurchaseGroup from '../../ui/AuctionPurchaseGroup/container';

class GlanceInventory extends React.PureComponent<GlanceInventoryProps, GlanceInventoryState> {
  state = {

  };

  userActions = new UserActions();

  componentDidMount = () => {
    this.userActions.getUserAuctionPurchases();
  };

  render() {
    const { userAuctionPurchases, allAuctionItems } = this.props;

    return (
      <div className={css.glanceInventory}>
        <h2>Inventory</h2>
        {
          userAuctionPurchases !== null
          && allAuctionItems.length > 0
            && (
            <div className={css.glanceInventoryItems}>
              {
                Object.keys(userAuctionPurchases).length > 0
                  ? (
                    <div className={css.glanceInventoryItemsScroller}>
                      {
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
                      }
                    </div>
                  )
                  : (
                    <p className="text-muted">
                      Your inventory is empty, why not see if anything on the auction
                      &nbsp;takes your fancy?
                    </p>
                  )
              }
            </div>
            )
        }
      </div>
    );
  }
}

export default GlanceInventory;
