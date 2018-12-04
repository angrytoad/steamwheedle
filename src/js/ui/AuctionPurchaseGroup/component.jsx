// @flow
import React from 'react';
import _ from 'lodash';
import type { AuctionPurchaseGroupProps, AuctionPurchaseGroupState } from './container';
import css from './styles.module.scss';
import ItemImageName from '../ItemImageName/component';
import ApplicationActions from '../../store/actions/application.actions';
import UserActions from '../../store/actions/user.actions';

class AuctionPurchaseGroup extends React.PureComponent<AuctionPurchaseGroupProps, AuctionPurchaseGroupState> {
  applicationActions = new ApplicationActions();

  userActions = new UserActions();

  get AuctionPurchaseItem() {
    const { allAuctionItems, purchase } = this.props;
    return _.find(allAuctionItems, item => item.id === purchase[0].item_id);
  }

  handleSetPurchaseView = () => {
    const { purchase } = this.props;
    this.applicationActions.setView('purchaseGroup');
    this.userActions.setActivePurchaseGroup(purchase);
  };

  render() {
    const auctionPurchaseItem = this.AuctionPurchaseItem;
    const { purchase } = this.props;

    return (
      <div className={css.auctionPurchaseGroup} onClick={this.handleSetPurchaseView}>
        <div className={css.purchaseGroupGlance}>
          <ItemImageName item={auctionPurchaseItem} />
          <div className={css.purchaseTotals}>
            <span className={css.count}>{ purchase.length }</span>
            <span className="text-muted text-uppercase">Purchases</span>
          </div>

        </div>

      </div>
    );
  }
}

export default AuctionPurchaseGroup;
