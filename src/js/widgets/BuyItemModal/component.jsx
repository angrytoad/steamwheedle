// @flow
import React from 'react';
import numeral from 'numeral';
import { ToastStore } from 'react-toasts';
import { Button, Modal, Input } from 'semantic-ui-react';
import { BuyItemModalProps, BuyItemModalState } from './container';
import css from './styles.module.scss';
import ItemImageName from '../../ui/ItemImageName/component';
import Money from '../../ui/Money/component';
import AuctionActions from '../../store/actions/auction.actions';

class BuyItemModal extends React.PureComponent<BuyItemModalProps, BuyItemModalState> {
  state = {
    buyModalShowing: false,
    item: null,
    quantity: 1,
  };

  auctionActions = new AuctionActions();

  componentDidMount = () => {
    document.addEventListener('openBuyModal', this.handleOpenBuyModal);
    document.addEventListener('closeBuyModal', this.handleCloseBuyModal);
  };

  componentWillUnmount = () => {
    document.removeEventListener('openBuyModal', this.handleOpenBuyModal);
    document.removeEventListener('closeBuyModal', this.handleCloseBuyModal);
  }

  handleOpenBuyModal = ({ detail }): void => {
    this.setState({
      buyModalShowing: true,
      item: detail,
    });
  };

  handleCloseBuyModal = (): void => {
    this.setState({
      buyModalShowing: false,
      item: null,
      quantity: 1,
    });
  };

  handleUpdateQuantity = (e): void => {
    this.setState({
      quantity: numeral(e.target.value).format('0'),
    });
  };

  handleBuy = (): void => {
    const { item, quantity } = this.state;
    if (item !== null && quantity !== null) {
      this.auctionActions.buyAuctionItem(item, quantity, this.handleBuyCallback);
    }
  };

  handleBuyCallback = (errors: Array<string>): void => {
    const { item, quantity } = this.state;

    console.log(errors);
    if (errors.length > 0) {
      ToastStore.error(`There was a problem trying to purchase ${item.name}.`);
    } else {
      ToastStore.success(`You have successfully purchased ${quantity} X ${item.name}`);
    }

    this.setState({
      buyModalShowing: false,
      item: null,
      quantity: 1,
    });
  };

  render() {
    const { buyModalShowing, item, quantity } = this.state;
    const { currentUser } = this.props;

    return (
      <Modal
        className={css.buyItemModal}
        size="mini"
        basic
        open={buyModalShowing}
        onClose={this.handleCloseBuyModal}
      >
        {
          item !== null
            && (
            <React.Fragment>
              <Modal.Header>
                <ItemImageName item={item} />
              </Modal.Header>
              <Modal.Content>
                <strong>Price you pay</strong>
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
                  content="Buy"
                  disabled={(item.current_price * quantity) > currentUser.balance || quantity === '0'}
                  onClick={this.handleBuy}
                />
              </Modal.Actions>
            </React.Fragment>
            )
        }
      </Modal>
    );
  }
}

export default BuyItemModal;
