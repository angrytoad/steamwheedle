// @flow
import { Observable } from 'rxjs';
import Cookies from 'js-cookie';
import axios from 'axios';
import { mergeMap } from 'rxjs/operators';
import apiServiceClient from '../apiServiceClient';
import type { CurrentUser } from '../types/user.types';
import type { PayloadAction } from '../types/redux.types';
import type { AuctionItem } from '../types/auction.types';
import type { GetAuctionItemsPayloadAction } from './auction.epics';

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

  getUserAuctionPurchases = (action$: any) => action$.ofType('GET_USER_AUCTION_PURCHASES_REQUEST').pipe(mergeMap((action: PayloadAction) => Observable.create((observer: any) => {
    if (Cookies.get('auth_token') !== undefined || action.payload.redirect) {
      axios.get(`${process.env.API}/user/purchases`, apiServiceClient.options())
        .then(({ data }: AuctionItem[]) => {
          observer.next({
            type: 'GET_USER_AUCTION_PURCHASES_REQUEST_SUCCESS',
            payload: data,
          });

          document.dispatchEvent(new CustomEvent('updateActivePurchaseGroup'));
        })
        .catch((error) => {
          // handle error
          console.log(error);
          observer.next({
            type: 'GET_USER_AUCTION_PURCHASES_REQUEST_FAIL',
          });
        })
        .then(() => {
          // Always Run This
        });
    }
  })));

  sellPurchaseRequest = (action$: any) => action$.ofType('SELL_PURCHASE_REQUEST').pipe(mergeMap((action: GetAuctionItemsPayloadAction) => Observable.create((observer: any) => {
    if (Cookies.get('auth_token') !== undefined || action.payload.redirect) {
      axios.post(`${process.env.API}/auction/sell`,
        {
          item_purchase_id: action.payload.purchase.id,
          quantity: action.payload.quantity,
        },
        apiServiceClient.options())
        .then(({ data }: AuctionItem[]) => {
          console.log(action.payload.purchase);

          observer.next({
            type: 'GET_USER_AUCTION_PURCHASES_REQUEST',
          });
          observer.next({
            type: 'UPDATE_CURRENT_USER_BALANCE',
            payload: data.balance,
          });
          action.callback([]);
        })
        .catch((error) => {
          // handle error
          console.log(error);
          observer.next({
            type: 'GET_AUCTION_ITEMS_REQUEST_FAIL',
          });
          action.callback([
            'Can\'t sell auction purchase',
          ]);
        })
        .then(() => {
          // Always Run This
        });
    }
  })));

  getEpics() {
    return [
      this.getCurrentUser,
      this.getUserAuctionPurchases,
      this.sellPurchaseRequest,
    ];
  }
}
