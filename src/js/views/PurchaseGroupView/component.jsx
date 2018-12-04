// @flow
import React from 'react';
import { Table } from 'semantic-ui-react';
import _ from 'lodash';
import uuidv4 from 'uuid/v4';
import type { PurchaseGroupViewProps, PurchaseGroupViewState } from './container';
import css from './styles.module.scss';
import ItemImageName from '../../ui/ItemImageName/component';
import PurchaseGroupStats from '../../ui/PurchaseGroupStats/container';
import SinglePurchaseRender from '../../widgets/SinglePurchaseRender/container';
import SellPurchaseModal from '../../widgets/SellPurchaseModal/container';
import UserActions from '../../store/actions/user.actions';
import ApplicationActions from '../../store/actions/application.actions';

class PurchaseGroupView extends React.PureComponent<
  PurchaseGroupViewProps,
  PurchaseGroupViewState
  > {
  get AuctionPurchaseItem() {
    const { allAuctionItems, activePurchaseGroup } = this.props;
    return _.find(allAuctionItems, item => item.id === activePurchaseGroup[0].item_id);
  }

  userActions = new UserActions();

  applicationActions = new ApplicationActions();

  componentDidMount = () => {
    document.addEventListener('sellPurchaseModal', this.getAuctionItemsCallback);
    document.addEventListener('updateActivePurchaseGroup', this.updateActivePurchaseGroup);
  };

  componentWillUnmount = () => {
    document.removeEventListener('sellPurchaseModal', this.getAuctionItemsCallback);
    document.removeEventListener('updateActivePurchaseGroup', this.updateActivePurchaseGroup);
  };

  updateActivePurchaseGroup = () => {
    const { userAuctionPurchases, activePurchaseGroup, allAuctionItems } = this.props;
    const activePurchaseGroupItem = _
      .find(allAuctionItems, item => item.id === activePurchaseGroup[0].item_id);

    const found = _
      .find(Object.keys(userAuctionPurchases), name => name === activePurchaseGroupItem.name);

    if (found !== undefined) {
      this.userActions.setActivePurchaseGroup(userAuctionPurchases[activePurchaseGroupItem.name]);
    } else {
      this.applicationActions.setView('auction');
      this.userActions.clearActivePurchaseGroup();
    }
  };

  render() {
    const { activePurchaseGroup } = this.props;

    const item = this.AuctionPurchaseItem;

    return (
      <div className={`${css.purchaseGroupView} animated fadeIn`}>
        <PurchaseGroupStats item={item} purchaseGroup={activePurchaseGroup} />
        <ItemImageName item={item} />
        <hr />
        <h2 className="text-left">Total Purchases: { activePurchaseGroup.length }</h2>
        <Table celled padded inverted compact>
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
                  item={item}
                />
              ))
            }
          </Table.Body>
        </Table>
        <SellPurchaseModal />
      </div>
    );
  }
}

export default PurchaseGroupView;
