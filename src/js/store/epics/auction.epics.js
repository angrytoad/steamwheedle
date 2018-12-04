// @flow
import { Observable } from 'rxjs';
import Cookies from 'js-cookie';
import axios from 'axios';
import { mergeMap } from 'rxjs/operators';
import apiServiceClient from '../apiServiceClient';
import type { PayloadAction } from '../types/redux.types';
import type { AuctionCategory, AuctionItem } from '../types/auction.types';

export type GetAuctionItemsPayloadAction<T> = {
  +type: string,
  +payload: T,
  +callback?: (errors?: string[]) => void,
  +setAll?: boolean,
}


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

  getAuctionItems = (action$: any) => action$.ofType('GET_AUCTION_ITEMS_REQUEST').pipe(mergeMap((action: GetAuctionItemsPayloadAction) => Observable.create((observer: any) => {
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
          if (action.setAll) {
            observer.next({
              type: 'SET_ALL_AUCTION_ITEMS',
              payload: data,
            });
          }
          document.dispatchEvent(action.callback);
        })
        .catch((error) => {
          // handle error
          console.log(error);
          observer.next({
            type: 'GET_AUCTION_ITEMS_REQUEST_FAIL',
          });
          document.dispatchEvent(action.callback);
        })
        .then(() => {
          // Always Run This
        });
    }
  })));

  buyAuctionItem = (action$: any) => action$.ofType('BUY_AUCTION_ITEM_REQUEST').pipe(mergeMap((action: PayloadAction) => Observable.create((observer: any) => {
    if (Cookies.get('auth_token') !== undefined || action.payload.redirect) {
      axios.post(`${process.env.API}/auction/buy`,
        {
          quantity: action.payload.quantity,
          item_id: action.payload.item.id,
        },
        apiServiceClient.options())
        .then(({ data }: number) => {
          observer.next({
            type: 'UPDATE_CURRENT_USER_BALANCE',
            payload: data.balance,
          });
          observer.next({
            type: 'GET_USER_AUCTION_PURCHASES_REQUEST',
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
            'Could not buy item',
          ]);
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
      this.buyAuctionItem,
    ];
  }
}
