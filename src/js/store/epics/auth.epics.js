// @flow
import axios from 'axios';
import Cookies from 'js-cookie';
import { Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import type { PayloadAction } from '../types/redux.types';

type LoginResponse = {
  access_token: string,
  token_type: string,
  expires_at: string,
}

export default class AuthEpics {
  registerUser = (action$: any) => action$.ofType('REGISTER_USER').pipe(mergeMap((action: PayloadAction) => Observable.create((observer: any) => {
    const { username, password, email } = action.payload;
    axios.post(`${process.env.API}/user/register`, {
      username,
      password,
      email,
    })
      .then((response) => {
        observer.next({
          type: 'USER_LOGIN_REQUEST',
          payload: {
            username,
            password,
          },
        });
        action.callback();
      })
      .catch((error) => {
        // handle error
        console.log(error);
        action.callback([error]);
      })
      .then(() => {
        // always executed
      });
  })));

  userLogin = (action$: any) => action$.ofType('USER_LOGIN_REQUEST').pipe(mergeMap((action: PayloadAction) => Observable.create((observer: any) => {
    const { username, password } = action.payload;
    axios.post(`${process.env.API}/user/login`, {
      username,
      password,
    })
      .then(({ data }: LoginResponse) => {
        Cookies.set('auth_token', data.access_token, { expires: 11000 });
        // handle success
        setTimeout(() => {
          observer.next({
            type: 'GET_CURRENT_USER_REQUEST',
          });
        }, 50);
      })
      .catch((error) => {
        // handle error
        console.log(error);
        action.callback([error]);
      })
      .then(() => {
        // always executed
      });
  })));

  getEpics() {
    return [
      this.registerUser,
      this.userLogin,
    ];
  }
}
