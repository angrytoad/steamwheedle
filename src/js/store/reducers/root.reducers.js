import { combineReducers } from 'redux';

import {
  testReducers,
} from './test.reducers';
import { currentUserReducer } from './user.reducers';
import { userLoggedInReducer } from './auth.reducers';
import { viewReducer } from './application.reducers';
import { auctionCategoriesReducer, selectedAuctionCategoriesReducer } from './auction.reducers';

export default combineReducers({
  test: testReducers,
  currentUser: currentUserReducer,
  userLoggedIn: userLoggedInReducer,
  view: viewReducer,
  auctionCategories: auctionCategoriesReducer,
  selectedAuctionCategories: selectedAuctionCategoriesReducer,
});
