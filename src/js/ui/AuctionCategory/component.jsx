// @flow
import React from 'react';
import css from './styles.module.scss';
import type { AuctionCategory as AC } from '../../store/types/auction.types';
import AuctionActions from '../../store/actions/auction.actions';

type AuctionCategoryProps = {
  category: AC,
  selectedAuctionCategories: string[],
}

type AuctionCategoryState = {

}

class AuctionCategory extends React.PureComponent<
  AuctionCategoryProps,
  AuctionCategoryState
  > {
  state = {

  };

  auctionActions = new AuctionActions();

  isActiveCategory = (id: string): boolean => {
    const { selectedAuctionCategories } = this.props;
    return selectedAuctionCategories.indexOf(id) > -1;
  };

  handleToggleActiveCategory = (id: string) => {
    if (this.isActiveCategory(id)) {
      this.auctionActions.deselectAuctionCategory(id);
    } else {
      this.auctionActions.selectAuctionCategory(id);
    }
  };

  render() {
    const { category } = this.props;

    return (
      <div
        role="button"
        tabIndex={0}
        className={`${css.auctionCategory} ${(this.isActiveCategory(category.id) ? css.active : '')}`}
        onClick={() => this.handleToggleActiveCategory(category.id)}
      >
        { category.name }
      </div>
    );
  }
}

export default AuctionCategory;
