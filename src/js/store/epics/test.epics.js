// @flow
import { Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
// import type { PayloadAction } from '../types/redux.types';

export default class TestEpics {
    testUpdate = (action$: any) => action$.ofType('TEST_ACTION').pipe(mergeMap(() => Observable.create((observer: any) => {
      observer.next({
        type: 'TEST_ACTION_SUCCESS',
      });
    })));

    getEpics() {
      return [
        this.testUpdate,
      ];
    }
}
