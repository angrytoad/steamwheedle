// @flow
import React from 'react';
import uuidv4 from 'uuid/v4';
import SVGInline from 'react-svg-inline';
import css from './styles.module.scss';

import AuctionItem from '../AuctionItem/component';
import bars from '../../../resources/images/ui/bars.svg';
import AuctionActions from '../../store/actions/auction.actions';
import type { AuctionCategory, AuctionItem as _AuctionItem } from '../../store/types/auction.types';
import type { CurrentUser } from '../../store/types/user.types';


type AuctionItemsProps = {
  selectedAuctionCategories: string[],
  auctionItems: _AuctionItem[],
  currentUser: CurrentUser,
}

type AuctionItemsState = {
  loading: boolean,
  prevSelectedAuctionCategories: AuctionCategory[]
}


class AuctionItems extends React.PureComponent<AuctionItemsProps, AuctionItemsState> {
  state = {
    loading: true,
  };

  auctionActions = new AuctionActions();

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.selectedAuctionCategories !== prevState.prevSelectedAuctionCategories) {
      return {
        ...prevState,
        prevSelectedAuctionCategories: nextProps.selectedAuctionCategories,
        loading: true,
      };
    }

    return null;
  }

  componentDidUpdate(prevProps, prevState) {
    const { selectedAuctionCategories } = this.props;
    const { prevSelectedAuctionCategories } = this.state;

    if (prevSelectedAuctionCategories !== prevState.prevSelectedAuctionCategories) {
      setTimeout(() => {
        this.auctionActions
          .getAuctionItems(selectedAuctionCategories, new CustomEvent('finishLoading'));
      }, 250);
    }
  }

  getAuctionItemsCallback = (errors: string[]) => {
    this.setState({
      loading: false,
    });
  };

  componentDidMount = () => {
    const { selectedAuctionCategories } = this.props;
    document.addEventListener('finishLoading', this.getAuctionItemsCallback);
    this.auctionActions
      .getAuctionItems(selectedAuctionCategories, new CustomEvent('finishLoading'));
  };

  componentWillUnmount = () => {
    document.removeEventListener('finishLoading', this.getAuctionItemsCallback);
  };

  render() {
    const { loading } = this.state;
    const { auctionItems, currentUser } = this.props;
    return (
      <div className={css.auctionItems}>
        {
          loading
            ? <SVGInline className="animated fadeIn" svg={bars} />
            : (
              <React.Fragment>
                {
                  auctionItems.length === 0
                    ? <p>No Items here m&apos;lord.</p>
                    : (
                      <table className={`animated fadeIn ${css.scrollContainer}`}>
                        <thead className={css.auctionItemsHeader}>
                          <tr>
                            <th>Item</th>
                            <th>Risk</th>
                            <th>Price</th>
                            <th>Trend</th>
                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {
                            auctionItems
                              .map(auctionItem => (
                                <AuctionItem
                                  key={uuidv4()}
                                  item={auctionItem}
                                  currentUser={currentUser}
                                />
                              ))
                          }
                        </tbody>
                      </table>
                    )
                }
              </React.Fragment>
            )
        }
      </div>
    );
  }
}
export default AuctionItems;
