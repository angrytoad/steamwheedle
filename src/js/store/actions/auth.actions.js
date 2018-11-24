// @flow
import Store from '../store';

export default class AuthActions {
  store: Store = Store;

  loginAction() {
    this.store.dispatch({
      type: 'TEST_ACTION',
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
