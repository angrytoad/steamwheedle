// @flow
import { Observable } from 'rxjs';
import Cookies from 'js-cookie';
import axios from 'axios';
import { mergeMap } from 'rxjs/operators';
import apiServiceClient from '../apiServiceClient';
import type { CurrentUser } from '../types/user.types';
import type { PayloadAction } from '../types/redux.types';

export default class UserEpics {
  getCurrentUser = (action$: any) => action$.ofType('GET_CURRENT_USER_REQUEST').pipe(mergeMap((action: PayloadAction) => Observable.create((observer: any) => {
    if (Cookies.get('auth_token') !== undefined || action.payload.redirect) {
      axios.get(`${process.env.API}/user`, apiServiceClient.options())
        .then(({ data }: CurrentUser) => {
          observer.next({
            type: 'GET_CURRENT_USER_SUCCESS',
            payload: data,
          });
          observer.next({
            type: 'SET_USER_LOGGED_IN',
          });
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
    }
  })));

  getEpics() {
    return [
      this.getCurrentUser,
    ];
  }
}
