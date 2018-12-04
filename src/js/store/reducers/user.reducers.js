// @flow
import type { PayloadAction } from '../types/redux.types';
import type { CurrentUser } from '../types/user.types';
import type {AuctionPurchase, AuctionPurchases} from "../types/auction.types";

export const currentUserReducer = (
  state: CurrentUser | null = null,
  action: PayloadAction,
) => {
  switch (action.type) {
    case 'GET_CURRENT_USER_SUCCESS': {
      const currentUser: CurrentUser = action.payload;
      if (currentUser === undefined || currentUser === null) {
        return state;
      }
      return action.payload;
    }
    case 'UPDATE_CURRENT_USER_BALANCE': {
      return {
        ...state,
        balance: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export const userAuctionPurchasesReducer = (
  state: AuctionPurchases | null = null,
  action: PayloadAction,
) => {
  switch (action.type) {
    case 'GET_USER_AUCTION_PURCHASES_REQUEST_SUCCESS': {
      const auctionPurchases: AuctionPurchases = action.payload;
      if (auctionPurchases === undefined || auctionPurchases === null) {
        return state;
      }
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

export const activePurchaseGroupReducer = (
  state: AuctionPurchase[] | null = null,
  action: PayloadAction,
) => {
  switch (action.type) {
    case 'SET_ACTIVE_PURCHASE_GROUP': {
      const purchase: AuctionPurchase[] = action.payload;
      if (purchase === undefined || purchase === null) {
        return state;
      }
      return purchase;
    }
    case 'CLEAR_ACTIVE_PURCHASE_GROUP': {
      return null;
    }
    default: {
      return state;
    }
  }
};

export default currentUserReducer;
