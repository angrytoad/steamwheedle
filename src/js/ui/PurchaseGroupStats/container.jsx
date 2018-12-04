// @flow
import PurchaseGroupStats from './component';
import type { AuctionItem, AuctionPurchase } from '../../store/types/auction.types';

export type PurchaseGroupStatsProps = {
  item: AuctionItem,
  purchaseGroup: AuctionPurchase[],
};

export default PurchaseGroupStats;
