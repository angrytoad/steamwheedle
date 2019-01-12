// @flow

import type { CurrentUser } from './types/user.types';
import type {AuctionCategory, AuctionItem, AuctionPurchase, AuctionPurchases} from './types/auction.types';
import type {GlobalCountdown, SoundSettings} from "./types/application.types";

export type AppState = {
  +test: string,
  +currentUser: CurrentUser,
  +userLoggedIn: boolean,
  +view: string,
  +auctionCategories: AuctionCategory[],
  +selectedAuctionCategories: string[],
  +auctionItems: AuctionItem[],
  +userAuctionPurchases: AuctionPurchases,
  +allAuctionItems: AuctionItem[],
  +activePurchaseGroup: AuctionPurchase[],
  +availableLevels: number[],
  +globalCountdown: GlobalCountdown,
  +nextUpdate: number,
  +soundSettings: SoundSettings,
}
