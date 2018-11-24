// @flow
import type { PayloadAction } from '../types/redux.types';
import type { CurrentUser } from '../types/user.types';

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
    default: {
      return state;
    }
  }
};

export default currentUserReducer;
