// @flow
import type { PayloadAction } from '../types/redux.types';

export const userLoggedInReducer = (
  state: boolean = false,
  action: PayloadAction,
) => {
  switch (action.type) {
    case 'SET_USER_LOGGED_IN':
      return true;
    case 'SET_USER_LOGGED_OUT':
      return false;
    default: {
      return state;
    }
  }
};

export default userLoggedInReducer;
