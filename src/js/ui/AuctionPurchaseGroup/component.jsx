// @flow
import React from 'react';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import type { AuctionPurchaseGroupProps, AuctionPurchaseGroupState } from './container';
import css from './styles.module.scss';
import ItemImageName from '../ItemImageName/component';
import ApplicationActions from '../../store/actions/application.actions';
import UserActions from '../../store/actions/user.actions';

class AuctionPurchaseGroup extends React.PureComponent<
  AuctionPurchaseGroupProps,
  AuctionPurchaseGroupState
  > {
  applicationActions = new ApplicationActions();

  userActions = new UserActions();

  get AuctionPurchaseItem() {
    const { allAuctionItems, purchase } = this.props;
    return _.find(allAuctionItems, item => item.id === purchase[0].item_id);
  }

  render() {
    const auctionPurchaseItem = this.AuctionPurchaseItem;
    const { purchase } = this.props;

    return (
      <div className={css.auctionPurchaseGroup}>
        <Link to={`/inventory/${purchase[0].item_id}`}>
          <div className={css.purchaseGroupGlance}>
            <ItemImageName item={auctionPurchaseItem} />
            <div className={css.purchaseTotals}>
              <span className={css.count}>{ purchase.length }</span>
              <span className="text-muted text-uppercase">Purchases</span>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

export default AuctionPurchaseGroup;
