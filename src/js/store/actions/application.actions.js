// @flow
import Store from '../store';

export default class ApplicationActions {
  store: Store = Store;

  setView(view: string = 'auction') {
    this.store.dispatch({
      type: 'SET_VIEW',
      payload: view,
    });
  }

  resetView() {
    this.store.dispatch({
      type: 'RESET_VIEW',
    });
  }
}
