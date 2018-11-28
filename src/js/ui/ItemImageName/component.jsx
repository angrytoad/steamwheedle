// @flow
import React from 'react';
import css from './styles.module.scss';
import type { AuctionItem } from '../../store/types/auction.types';
import { getRarityColor } from '../../helpers/colorHelper';

type ItemImageNameProps = {
  item: AuctionItem
}

class ItemImageName extends React.PureComponent<ItemImageNameProps, ItemImageNameState> {
  state = {

  };

  componentDidMount = () => {

  };

  render() {
    const { item } = this.props;
    return (
      <div className={css.itemImageName}>
        <img className="itemImage" src={item.image} />
        <span style={{ color: getRarityColor(item.rarity.name) }}>{ item.name }</span>
      </div>
    );
  }
}

export default ItemImageName;