// @flow
import React from 'react';
import _ from 'lodash';
import { Button, Table } from 'semantic-ui-react';
import uuidv4 from 'uuid/v4';
import numeral from 'numeral';
import { getRarityColor, getRiskColor } from '../../helpers/colorHelper';

import type { InventoryItemProps, InventoryItemState } from './container';
import css from './styles.module.scss';
import UserActions from '../../store/actions/user.actions';
import PurchaseGroupStats from '../../ui/PurchaseGroupStats/container';
import ItemImageName from '../../ui/ItemImageName/component';
import SinglePurchaseRender from '../../widgets/SinglePurchaseRender/container';
import SellPurchaseModal from '../../widgets/SellPurchaseModal/container';
import ApplicationActions from '../../store/actions/application.actions';
import Money from '../../ui/Money/component';
import RiskBlock from '../../ui/RiskBlock/component';

class InventoryItem extends React.PureComponent<InventoryItemProps, InventoryItemState> {
  get AuctionPurchaseItem() {
    const { allAuctionItems, itemId } = this.props;
    return _.find(allAuctionItems, item => item.id === itemId);
  }

  userActions = new UserActions();

  applicationActions = new ApplicationActions();


  componentDidMount() {
    this.userActions.setActivePurchaseGroup(this.findActivePurchaseGroup());
    document.addEventListener('updateActivePurchaseGroup', this.updateActivePurchaseGroup);
  }

  componentWillUnmount() {
    this.userActions.clearActivePurchaseGroup();
    document.removeEventListener('updateActivePurchaseGroup', this.updateActivePurchaseGroup);
  }

  findActivePurchaseGroup = () => {
    const { userAuctionPurchases } = this.props;
    const auctionPurchaseItem = this.AuctionPurchaseItem;
    const key = _.find(
      Object.keys(userAuctionPurchases), itemName => itemName === auctionPurchaseItem.name,
    );
    return userAuctionPurchases[key];
  };

  updateActivePurchaseGroup = () => {
    const { userAuctionPurchases, activePurchaseGroup, allAuctionItems } = this.props;
    if (activePurchaseGroup !== null) {
      const activePurchaseGroupItem = _
        .find(allAuctionItems, item => item.id === activePurchaseGroup[0].item_id);

      const found = _
        .find(Object.keys(userAuctionPurchases), name => name === activePurchaseGroupItem.name);

      if (found !== undefined) {
        this.userActions.setActivePurchaseGroup(userAuctionPurchases[activePurchaseGroupItem.name]);
      } else {
        this.userActions.clearActivePurchaseGroup();
      }
    }
  };

  render() {
    const auctionPurchaseItem = this.AuctionPurchaseItem;
    const { userAuctionPurchases, activePurchaseGroup, currentUser } = this.props;

    console.log(auctionPurchaseItem);
    console.log(currentUser);

    return (
      <div className={`${css.inventoryItem} animated fadeIn`}>
        <div className={css.itemInfo}>
          <div
            className={css.itemName}
          >
            <h1
              style={{
                color: getRarityColor(auctionPurchaseItem.rarity.name),
              }}
            >
              { auctionPurchaseItem.name }
            </h1>
            <p className="text-muted">
              { auctionPurchaseItem.category.name }
              <RiskBlock
                color={getRiskColor(auctionPurchaseItem.risk.name)}
                risk={auctionPurchaseItem.risk.name}
                size={24}
              />
            </p>
            <Button
              type="button"
              basic
              size="small"
              color="yellow"
              disabled={auctionPurchaseItem.current_price > currentUser.balance}
              onClick={() => document.dispatchEvent(new CustomEvent('openBuyModal', { detail: auctionPurchaseItem }))}
            >
              Quick Buy
            </Button>
            <div
              className={css.itemBackground}
              style={{
                backgroundImage: `url(${auctionPurchaseItem.image})`,
              }}
            />
          </div>
          <div className={css.itemDescription}>
            <h3 className="text-muted">{ auctionPurchaseItem.description }</h3>
          </div>
        </div>

        {
          activePurchaseGroup !== null
            ? (
              <React.Fragment>
                <PurchaseGroupStats
                  item={auctionPurchaseItem}
                  purchaseGroup={activePurchaseGroup}
                />
                <h2 className="text-left">Total Purchases: { activePurchaseGroup.length }</h2>
                <Table
                  className={css.purchaseGroupRender}
                  celled
                  padded
                  inverted
                  compact
                  unstackable
                >
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell singleLine textAlign="right">Buy Price</Table.HeaderCell>
                      <Table.HeaderCell singleLine textAlign="center">Stock</Table.HeaderCell>
                      <Table.HeaderCell textAlign="right">Valuation</Table.HeaderCell>
                      <Table.HeaderCell textAlign="center">Trend</Table.HeaderCell>
                      <Table.HeaderCell textAlign="center">Actions</Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>

                  <Table.Body>
                    {
                    activePurchaseGroup.map(purchase => (
                      <SinglePurchaseRender
                        key={uuidv4()}
                        purchase={purchase}
                        item={auctionPurchaseItem}
                      />
                    ))
                  }
                  </Table.Body>
                </Table>
                <SellPurchaseModal />
              </React.Fragment>
            )
            : (
              <React.Fragment>
                <div className={`${css.currentPrice} m-4`}>
                  <h1>Current Price</h1>
                  <Money amount={auctionPurchaseItem.current_price} size="large" alignment="center" />
                </div>
              </React.Fragment>
            )
        }
      </div>
    );
  }
}

export default InventoryItem;
