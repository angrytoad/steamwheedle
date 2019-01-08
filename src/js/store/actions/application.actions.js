// @flow
import Store from '../store';

export default class ApplicationActions {
  store: Store = Store;

  setView(view: string = 'auction') {
    this.store.dispatch({
      type: 'SET_VIEW',
      payload: view,
    });
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  resetView() {
    this.store.dispatch({
      type: 'RESET_VIEW',
    });
  }
}
