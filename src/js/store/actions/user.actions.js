// @flow
import Store from '../store';
import type { AuctionPurchase } from '../types/auction.types';

export default class UserActions {
  store: Store = Store;

  getCurrentUser(redirect: boolean = false) {
    this.store.dispatch({
      type: 'GET_CURRENT_USER_REQUEST',
      payload: {
        redirect,
      },
    });
  }

  getUserAuctionPurchases() {
    this.store.dispatch({
      type: 'GET_USER_AUCTION_PURCHASES_REQUEST',
    });
  }

  setActivePurchaseGroup(purchase: AuctionPurchase[]) {
    this.store.dispatch({
      type: 'SET_ACTIVE_PURCHASE_GROUP',
      payload: purchase,
    });
  }

  clearActivePurchaseGroup() {
    this.store.dispatch({
      type: 'CLEAR_ACTIVE_PURCHASE_GROUP',
    });
  }

  sellPurchase(purchase: AuctionPurchase, quantity: number, callback: () => {}) {
    this.store.dispatch({
      type: 'SELL_PURCHASE_REQUEST',
      payload: {
        purchase,
        quantity,
      },
      callback,
    });
  }

  getAvailableLevels() {
    this.store.dispatch({
      type: 'GET_AVAILABLE_LEVELS_REQUEST',
    });
  }
}
