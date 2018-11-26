// @flow
import Store from '../store';

export default class UserActions {
  store: Store = Store;

  getCurrentUser(redirect: boolean = false) {
    this.store.dispatch({
      type: 'GET_CURRENT_USER_REQUEST',
      payload: {
        redirect,
      },
    });
  }
}
