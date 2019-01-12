// @flow
import React from 'react';
import css from './styles.module.scss';
import type { AuctionItem } from '../../store/types/auction.types';
import { getRarityColor } from '../../helpers/colorHelper';

type ItemImageNameProps = {
  item: AuctionItem,
  description?: boolean,
}

class ItemImageName extends React.PureComponent<ItemImageNameProps> {
  render() {
    const { item, description = false } = this.props;

    return (
      <div className={css.itemImageName}>
        <img alt={item.name} className="itemImage" src={item.image} />
        <div>
          <span style={{ color: getRarityColor(item.rarity.name) }}>{ item.name }</span>
          <span className={`${css.category} text-muted`}><small>{ item.category.name }</small></span>
          {
            description
            && (
            <span className={css.description}>
              { item.description }
            </span>
            )
          }
        </div>
      </div>
    );
  }
}

ItemImageName.defaultProps = {
  description: false,
};

export default ItemImageName;
