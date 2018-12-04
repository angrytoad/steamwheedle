// @flow
import Store from '../store';
import type { AuctionItem } from '../types/auction.types';

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

  getAuctionItems(selectedAuctionCategories: string[] = [], event = null, setAll: boolean = false) {
    this.store.dispatch({
      type: 'GET_AUCTION_ITEMS_REQUEST',
      payload: selectedAuctionCategories,
      callback: event,
      setAll,
    });
  }

  setAllAuctionItems(auctionItems: AuctionItem[]) {
    this.store.dispatch({
      type: 'SET_ALL_AUCTION_ITEMS',
      payload: auctionItems,
    });
  }

  buyAuctionItem(item: AuctionItem, quantity: number, callback: Function) {
    this.store.dispatch({
      type: 'BUY_AUCTION_ITEM_REQUEST',
      payload: {
        item,
        quantity,
      },
      callback,
    });
  }
}
