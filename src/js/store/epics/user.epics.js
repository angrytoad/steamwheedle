// @flow
import { Observable } from 'rxjs';
import axios from 'axios';
import { mergeMap } from 'rxjs/operators';
import apiServiceClient from '../apiServiceClient';
// import type { PayloadAction } from '../types/redux.types';

export default class UserEpics {
  getCurrentUser = (action$: any) => action$.ofType('GET_CURRENT_USER_REQUEST').pipe(mergeMap(() => Observable.create((observer: any) => {
    console.log(apiServiceClient.options());
    axios.get(`${process.env.API}/user`, apiServiceClient.options())
      .then((response) => {
        // handle success
        console.log(response);
      })
      .catch((error) => {
        // handle error
        console.log(error);
        observer.next({
          type: 'GET_CURRENT_USER_FAIL',
        });
        observer.next({
          type: 'SET_USER_LOGGED_OUT',
        });
      })
      .then(() => {
        // always executed
      });
    observer.next({
      type: 'GET_CURRENT_USER_SUCCESS',
    });
  })));

  getEpics() {
    return [
      this.getCurrentUser,
    ];
  }
}
