// @flow
import React from 'react';
import { Modal, Button, Input } from 'semantic-ui-react';
import numeral from 'numeral';
import { ToastStore } from 'react-toasts';
import type { SellPurchaseModalProps, SellPurchaseModalState } from './container';
import css from './styles.module.scss';
import ItemImageName from '../../ui/ItemImageName/component';
import Money from '../../ui/Money/component';
import UserActions from '../../store/actions/user.actions';

class SellPurchaseModal extends React.PureComponent<
  SellPurchaseModalProps,
  SellPurchaseModalState
  > {
  state = {
    sellPurchaseShowing: false,
    item: null,
    purchase: null,
    quantity: 1,
  };

  userActions = new UserActions();

  componentDidMount = () => {
    document.addEventListener('openSellPurchaseModal', this.handleOpenSellPurchaseModal);
    document.addEventListener('closeSellPurchaseModal', this.handleCloseSellPurchaseModal);
  };

  componentWillUnmount = () => {
    document.removeEventListener('openSellPurchaseModal', this.handleOpenSellPurchaseModal);
    document.removeEventListener('closeSellPurchaseModal', this.handleCloseSellPurchaseModal);
  };

  handleOpenSellPurchaseModal = ({ detail }): void => {
    this.setState({
      sellPurchaseShowing: true,
      item: detail.item,
      purchase: detail.purchase,
      quantity: detail.purchase.current,
    });
  };

  handleCloseSellPurchaseModal = (): void => {
    this.setState({
      sellPurchaseShowing: false,
      item: null,
      purchase: null,
      quantity: 1,
    });
  };

  handleUpdateQuantity = (e): void => {
    const { purchase, quantity } = this.state;
    this.setState({
      quantity: numeral(e.target.value <= purchase.current ? e.target.value : quantity).format('0'),
    });
  };

  handleSell = (): void => {
    const { quantity, purchase } = this.state;
    if (purchase !== null && quantity !== null) {
      this.userActions.sellPurchase(purchase, quantity, this.handleSellCallback);
    }
  };

  handleSellCallback = (errors: Array<string>): void => {
    const { item, quantity, purchase } = this.state;
    if (errors.length > 0) {
      ToastStore.error(`There was a problem trying to sell ${item.name}.`);
    } else {
      ToastStore.success(`You have successfully sold ${quantity} X ${item.name}`);
    }

    this.setState({
      sellPurchaseShowing: false,
      item: null,
      purchase: null,
      quantity: 1,
    });
  };

  render() {
    const {
      item, purchase, quantity, sellPurchaseShowing,
    } = this.state;

    return (
      <Modal
        className={css.sellPurchaseModal}
        size="mini"
        basic
        open={sellPurchaseShowing}
        onClose={this.handleCloseSellPurchaseModal}
      >
        {
          item !== null
          && purchase !== null
          && (
            <React.Fragment>
              <Modal.Header>
                <ItemImageName item={item} />
              </Modal.Header>
              <Modal.Content>
                <strong>How many would you like to sell? [{ numeral(quantity).format('0,0') }/{ numeral(purchase.current).format('0,0') }]</strong>
                <Money amount={item.current_price * quantity} size="large" />
                <hr />
                <Input
                  type="number"
                  autoFocus
                  placeholder="Quantity"
                  value={quantity}
                  onChange={this.handleUpdateQuantity}
                  min={1}
                  max={5000}
                />
              </Modal.Content>
              <Modal.Actions>
                <Button basic negative floated="left" onClick={this.handleCloseBuyModal}>Cancel</Button>
                <Button
                  color="yellow"
                  content="Sell"
                  disabled={quantity > purchase.current || quantity === '0'}
                  onClick={this.handleSell}
                />
              </Modal.Actions>
            </React.Fragment>
          )
        }
      </Modal>
    );
  }
}

export default SellPurchaseModal;
