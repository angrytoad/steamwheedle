// @flow
import Store from '../store';

export default class TestActions {
    store: Store = Store;

    testAction() {
      this.store.dispatch({
        type: 'TEST_ACTION',
      });
    }
}
