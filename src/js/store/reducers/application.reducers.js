// @flow
import type { PayloadAction } from '../types/redux.types';

export const viewReducer = (
  state: string = 'auction',
  action: PayloadAction,
) => {
  switch (action.type) {
    case 'SET_VIEW':
      return action.payload;
    case 'RESET_VIEW':
      return 'auction';
    default: {
      return state;
    }
  }
};

export default viewReducer;
