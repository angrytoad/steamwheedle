// @flow

export type AuctionCategory = {
  id: string,
  name: string,
  created_at: string,
  updated_at: string,
};

export type AuctionItem = {
  id: string,
  name: string,
  description: string,
  image: string,
  current_price: number,
  base_price: number,
  rarity: {
    rarity_id: string,
    name: string,
  },
  risk: {
    risk_id: string,
    name: string,
  },
  category: {
    category_id: string,
    name: string,
  }
}

export type AuctionPurchase = {
  buy_price: number,
  created_at: string,
  id: string,
  item_id: string,
  quantity: number,
  current: number,
  updated_at: string,
  user_id: string,
}

export type AuctionPurchases = { [key: string]: AuctionPurchase[] };
