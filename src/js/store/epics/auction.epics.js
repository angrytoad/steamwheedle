// @flow
import { Observable } from 'rxjs';
import Cookies from 'js-cookie';
import axios from 'axios';
import { mergeMap } from 'rxjs/operators';
import apiServiceClient from '../apiServiceClient';
import type { PayloadAction } from '../types/redux.types';
import type { AuctionCategory, AuctionItem } from '../types/auction.types';

export default class AuctionEpics {
  getAuctionCategories = (action$: any) => action$.ofType('GET_AUCTION_CATEGORIES_REQUEST').pipe(mergeMap((action: PayloadAction) => Observable.create((observer: any) => {
    if (Cookies.get('auth_token') !== undefined || action.payload.redirect) {
      axios.get(`${process.env.API}/auction/categories`, apiServiceClient.options())
        .then(({ data }: AuctionCategory[]) => {
          observer.next({
            type: 'GET_AUCTION_CATEGORIES_SUCCESS',
            payload: data,
          });
        })
        .catch((error) => {
          // handle error
          console.log(error);
          observer.next({
            type: 'GET_AUCTION_CATEGORIES_FAIL',
          });
        })
        .then(() => {
          // Always Run This
        });
    }
  })));

  getAuctionItems = (action$: any) => action$.ofType('GET_AUCTION_ITEMS_REQUEST').pipe(mergeMap((action: PayloadAction) => Observable.create((observer: any) => {
    if (Cookies.get('auth_token') !== undefined || action.payload.redirect) {
      axios.post(`${process.env.API}/auction/items`,
        {
          categories: action.payload,
        },
        apiServiceClient.options())
        .then(({ data }: AuctionItem[]) => {
          observer.next({
            type: 'GET_AUCTION_ITEMS_REQUEST_SUCCESS',
            payload: data,
          });
          document.dispatchEvent(action.callback);
        })
        .catch((error) => {
          // handle error
          console.log(error);
          observer.next({
            type: 'GGET_AUCTION_ITEMS_REQUEST_FAIL',
          });
          document.dispatchEvent(action.callback);
        })
        .then(() => {
          // Always Run This
        });
    }
  })));

  getEpics() {
    return [
      this.getAuctionCategories,
      this.getAuctionItems,
    ];
  }
}
