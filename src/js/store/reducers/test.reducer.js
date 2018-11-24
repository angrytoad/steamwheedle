// @flow
import type { PayloadAction } from '../types/redux.types';

export const testReducer = (
  state: string = 'testing',
  action: PayloadAction,
) => {
  switch (action.type) {
    case 'TEST_ACTION_SUCCESS': {
      return 'working';
    }
    default: {
      return state;
    }
  }
};

export default testReducer;
