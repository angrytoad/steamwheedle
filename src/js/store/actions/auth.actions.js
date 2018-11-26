// @flow
import Store from '../store';

export default class AuthActions {
  store: Store = Store;

  loginUser({ username, password }, callback: () => {}) {
    this.store.dispatch({
      type: 'USER_LOGIN_REQUEST',
      payload: {
        username,
        password,
      },
      callback,
    });
  }

  registerUser({ username, password, email }, callback: () => {}) {
    this.store.dispatch({
      type: 'REGISTER_USER',
      payload: {
        username,
        password,
        email,
      },
      callback,
    });
  }
}
