// @flow
import axios from 'axios';
import { Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
// import type { PayloadAction } from '../types/redux.types';

export default class TestEpics {
    testUpdate = (action$: any) => action$.ofType('TEST_ACTION').pipe(mergeMap(() => Observable.create((observer: any) => {
      axios.get('http://192.168.99.100:8080/api/test')
        .then((response) => {
          // handle success
          console.log(response);
        })
        .catch((error) => {
          // handle error
          console.log(error);
        })
        .then(() => {
          // always executed
        });
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
