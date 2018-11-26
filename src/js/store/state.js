// @flow

import type { CurrentUser } from './types/user.types';
import type { AuctionCategory } from './types/auction.types';

export type AppState = {
  +test: string,
  +currentUser: CurrentUser,
  +userLoggedIn: boolean,
  +view: string,
  +auctionCategories: AuctionCategory[],
  +selectedAuctionCategories: string[],
}
