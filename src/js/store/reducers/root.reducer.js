import { combineReducers } from 'redux';

import {
  testReducer,
} from './test.reducer';
import { currentUserReducer } from './user.reducer';
import { userLoggedInReducer } from './auth.reducer';

export default combineReducers({
  test: testReducer,
  currentUser: currentUserReducer,
  userLoggedIn: userLoggedInReducer,
});
