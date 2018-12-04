import { combineReducers } from 'redux';

import {
  testReducers,
} from './test.reducers';
import {activePurchaseGroupReducer, currentUserReducer, userAuctionPurchasesReducer} from './user.reducers';
import { userLoggedInReducer } from './auth.reducers';
import { viewReducer } from './application.reducers';
import {
  allAuctionItemsReducer,
  auctionCategoriesReducer,
  auctionItemsReducer,
  selectedAuctionCategoriesReducer
} from './auction.reducers';

export default combineReducers({
  test: testReducers,
  currentUser: currentUserReducer,
  userLoggedIn: userLoggedInReducer,
  view: viewReducer,
  auctionCategories: auctionCategoriesReducer,
  selectedAuctionCategories: selectedAuctionCategoriesReducer,
  auctionItems: auctionItemsReducer,
  userAuctionPurchases: userAuctionPurchasesReducer,
  allAuctionItems: allAuctionItemsReducer,
  activePurchaseGroup: activePurchaseGroupReducer,
});
