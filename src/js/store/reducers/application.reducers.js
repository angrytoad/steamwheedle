// @flow
import type { PayloadAction } from '../types/redux.types';
import type { GlobalCountdown, SoundSettings } from '../types/application.types';

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

export const globalCountdownReducer = (
  state: GlobalCountdown | null = null,
  action: PayloadAction,
) => {
  switch (action.type) {
    case 'GET_GLOBAL_COUNTDOWN_REQUEST_SUCCESS':
      return action.payload;
    default: {
      return state;
    }
  }
};

export const nextUpdateReducer = (
  state: number = 0,
  action: PayloadAction,
) => {
  switch (action.type) {
    case 'SET_NEXT_UPDATE':
      return action.payload;
    case 'NEXT_UPDATE_TICK':
      return state - 1;
    default: {
      return state;
    }
  }
};

export const soundSettingsReducer = (
  state: SoundSettings | null = null,
  action: PayloadAction,
) => {
  switch (action.type) {
    case 'UPDATE_SOUND_SETTINGS':
      return action.payload;
    default: {
      return state;
    }
  }
};

export default viewReducer;
