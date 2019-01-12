// @flow
import { Observable } from 'rxjs';
import Cookies from 'js-cookie';
import axios from 'axios';
import { mergeMap } from 'rxjs/operators';
import apiServiceClient from '../apiServiceClient';
import type { PayloadAction } from '../types/redux.types';
import type { GlobalCountdown } from '../types/application.types';


export default class ApplicationEpics {
  getGlobalCountdown = (action$: any) => action$.ofType('GET_GLOBAL_COUNTDOWN_REQUEST').pipe(mergeMap((action: PayloadAction) => Observable.create((observer: any) => {
    if (Cookies.get('auth_token') !== undefined || action.payload.redirect) {
      axios.get(`${process.env.API}/auction/update`, apiServiceClient.options())
        .then(({ data }: GlobalCountdown) => {
          observer.next({
            type: 'GET_GLOBAL_COUNTDOWN_REQUEST_SUCCESS',
            payload: data,
          });
          observer.next({
            type: 'SET_NEXT_UPDATE',
            payload: data.nextUpdateSeconds,
          });
        })
        .catch((error) => {
          // handle error
          console.log(error);
          observer.next({
            type: 'GET_GLOBAL_COUNTDOWN_REQUEST_FAIL',
          });
        })
        .then(() => {
          // Always Run This
        });
    }
  })));

  getEpics() {
    return [
      this.getGlobalCountdown,
    ];
  }
}
