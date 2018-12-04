// @flow
import type { PayloadAction } from '../types/redux.types';
import type { AuctionItem, AuctionCategory } from '../types/auction.types';

export const auctionCategoriesReducer = (
  state: AuctionCategory[] = [],
  action: PayloadAction,
) => {
  switch (action.type) {
    case 'GET_AUCTION_CATEGORIES_SUCCESS':
      const categories: AuctionCategory[] = action.payload;
      if (categories === undefined || categories === null) {
        return state;
      }
      return categories;
    case 'GET_AUCTION_CATEGORIES_FAIL':
      return state;
    default: {
      return state;
    }
  }
};

export const selectedAuctionCategoriesReducer = (
  state: string[] = [],
  action: PayloadAction<string>,
) => {
  switch (action.type) {
    case 'SELECT_AUCTION_CATEGORY':
      return [
        ...state,
        action.payload,
      ];
    case 'DESELECT_AUCTION_CATEGORY':
      return [
        ...state.slice(0, state.indexOf(action.payload)),
        ...state.slice(state.indexOf(action.payload) + 1),
      ];
    default: {
      return state;
    }
  }
};

export const auctionItemsReducer = (
  state: AuctionItem[] = [],
  action: PayloadAction,
) => {
  switch (action.type) {
    case 'GET_AUCTION_ITEMS_REQUEST_SUCCESS':
      const items: AuctionItem[] = action.payload;
      if (items === undefined || items === null) {
        return state;
      }
      return items;
    case 'GET_AUCTION_ITEMS_REQUEST_FAIL':
      return state;
    default: {
      return state;
    }
  }
};

export const allAuctionItemsReducer = (
  state: AuctionItem[] = [],
  action: PayloadAction,
) => {
  switch (action.type) {
    case 'SET_ALL_AUCTION_ITEMS':
      const items: AuctionItem[] = action.payload;
      if (items === undefined || items === null) {
        return state;
      }
      return items;
    default: {
      return state;
    }
  }
};
