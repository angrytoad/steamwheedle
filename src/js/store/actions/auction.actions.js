// @flow
import Store from '../store';

export default class AuctionActions {
  store: Store = Store;

  getAuctionCategories() {
    this.store.dispatch({
      type: 'GET_AUCTION_CATEGORIES_REQUEST',
    });
  }

  deselectAuctionCategory(id) {
    this.store.dispatch({
      type: 'DESELECT_AUCTION_CATEGORY',
      payload: id,
    });
  }

  selectAuctionCategory(id) {
    this.store.dispatch({
      type: 'SELECT_AUCTION_CATEGORY',
      payload: id,
    });
  }

  getAuctionItems(selectedAuctionCategories: string[] = [], event = null) {
    this.store.dispatch({
      type: 'GET_AUCTION_ITEMS_REQUEST',
      payload: selectedAuctionCategories,
      callback: event,
    });
  }
}
