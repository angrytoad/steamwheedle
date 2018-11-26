// @flow
import React from 'react';
import uuidv4 from 'uuid/v4';
import css from './styles.module.scss';
import type { AuctionCategory as AC } from '../../store/types/auction.types';

import AuctionCategory from '../AuctionCategory/component';
import AuctionActions from '../../store/actions/auction.actions';

type AuctionCategoriesProps = {
  auctionCategories: AC[],
  selectedAuctionCategories: string[],
}

type AuctionCategoriesState = {
  professions: string[],
  base: string[],
}

class AuctionCategories extends React.PureComponent<
  AuctionCategoriesProps,
  AuctionCategoriesState
  > {
  state = {
    base: [
      'Weapons',
      'Armor',
      'Container',
      'Consumable',
      'Reagents',
      'Miscellaneous',
    ],
    professions: [
      'Alchemy',
      'Blacksmithing',
      'Enchanting',
      'Engineering',
      'Herbalism',
      'Leatherworking',
      'Mining',
      'Skinning',
      'Tailoring',
    ],
  };

  filterCategories = (filter: string): Array<AC> => {
    const { auctionCategories } = this.props;
    const { base, professions } = this.state;
    switch (filter) {
      case 'base':
        return auctionCategories.filter(category => base.indexOf(category.name) > -1);
      case 'professions':
        return auctionCategories.filter(category => professions.indexOf(category.name) > -1);
      default:
        return [];
    }
  };

  render() {
    const { selectedAuctionCategories } = this.props;

    console.log(selectedAuctionCategories);

    return (
      <div className={css.auctionCategories}>
        {
          this.filterCategories('base').map((category: AC) => (
            <AuctionCategory
              key={uuidv4()}
              category={category}
              selectedAuctionCategories={selectedAuctionCategories}
            />
          ))
        }
        <h3>Professions</h3>
        {
          this.filterCategories('professions').map(category => (
            <AuctionCategory
              key={uuidv4()}
              category={category}
              selectedAuctionCategories={selectedAuctionCategories}
            />
          ))
        }
      </div>
    );
  }
}

export default AuctionCategories;
