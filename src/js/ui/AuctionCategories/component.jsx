// @flow
import React from 'react';
import uuidv4 from 'uuid/v4';
import css from './styles.module.scss';
import type { AuctionCategory as AC } from '../../store/types/auction.types';

import AuctionCategory from '../AuctionCategory/component';
import AuctionActions from '../../store/actions/auction.actions';

import generalCategories from '../../../resources/images/ui/general_category.png';
import professionCategories from '../../../resources/images/ui/profession_category.png';

type AuctionCategoriesProps = {
  auctionCategories: AC[],
  selectedAuctionCategories: string[],
}

type AuctionCategoriesState = {
  professions: string[],
  base: string[],
  currentlyOpenMenu: string,
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
    currentlyOpenMenu: '',
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

  handleSetMobileMenu = (menu: string = ''): void => {
    this.setState({
      currentlyOpenMenu: menu,
    });
  }

  render() {
    const { selectedAuctionCategories } = this.props;
    const { currentlyOpenMenu } = this.state;

    return (
      <div className={css.auctionCategories}>
        <div className={css.categoryBlock}>
          <img
            className="icon"
            src={generalCategories}
            title="General"
            alt="General"
            onClick={() => this.handleSetMobileMenu('base')}
          />
          <div className={css.categoryList}>
            {
              this.filterCategories('base').map((category: AC) => (
                <AuctionCategory
                  key={uuidv4()}
                  category={category}
                  selectedAuctionCategories={selectedAuctionCategories}
                />
              ))
            }
          </div>
          {
            currentlyOpenMenu === 'base'
            && (
            <div className={`${css.mobileCategoryList} animated fadeIn`}>
              <img
                className="icon"
                src={generalCategories}
                title="General"
                alt="General"
                onClick={() => this.handleSetMobileMenu()}
              />
              {
                this.filterCategories('base').map((category: AC) => (
                  <AuctionCategory
                    key={uuidv4()}
                    category={category}
                    selectedAuctionCategories={selectedAuctionCategories}
                  />
                ))
              }
            </div>
            )
          }

        </div>
        <div className={css.categoryBlock}>
          <img
            className="icon"
            src={professionCategories}
            title="Professions"
            alt="Professions"
            onClick={() => this.handleSetMobileMenu('professions')}
          />
          <div className={css.categoryList}>
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
          {
            currentlyOpenMenu === 'professions'
            && (
            <div className={`${css.mobileCategoryList} animated fadeIn`}>
              <img
                className="icon"
                src={professionCategories}
                title="Professions"
                alt="Professions"
                onClick={() => this.handleSetMobileMenu()}
              />
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
            )
          }

        </div>

      </div>
    );
  }
}

export default AuctionCategories;
