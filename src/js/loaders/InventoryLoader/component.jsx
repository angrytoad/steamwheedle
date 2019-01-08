// @flow
import React from 'react';
import type { InventoryLoaderProps, InventoryLoaderState } from './container';
import UserActions from '../../store/actions/user.actions';

class InventoryLoader extends React.PureComponent<InventoryLoaderProps, InventoryLoaderState> {
  userActions = new UserActions();

  componentDidMount = () => {
    this.userActions.getUserAuctionPurchases();
  };

  render() {
    const { children, allAuctionItems, userAuctionPurchases } = this.props;
    return (
      <React.Fragment>
        {
          userAuctionPurchases !== null
          && allAuctionItems.length > 0
          && (
            children
          )
        }
      </React.Fragment>
    );
  }
}

export default InventoryLoader;
