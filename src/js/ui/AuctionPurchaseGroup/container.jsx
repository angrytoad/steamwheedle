// @flow
import AuctionPurchaseGroup from './component';
import type { AuctionItem, AuctionPurchase } from '../../store/types/auction.types';


export type AuctionPurchaseGroupProps = {
  purchase: AuctionPurchase,
  allAuctionItems: AuctionItem[],
};

export type AuctionPurchaseGroupState = {

};

export default AuctionPurchaseGroup;
