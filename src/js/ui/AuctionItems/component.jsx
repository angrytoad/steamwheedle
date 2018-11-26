// @flow
import React from 'react';
import SVGInline from 'react-svg-inline';
import css from './styles.module.scss';

import bars from '../../../resources/images/ui/bars.svg';
import heart from "../../../resources/icons/heart.svg";

type AuctionItemsProps = {

}

type AuctionItemsState = {

}

class AuctionItems extends React.PureComponent<AuctionItemsProps, AuctionItemsState> {
  state = {
    loading: true,
  };

  componentDidMount = () => {

  };

  render() {
    const { loading } = this.state;
    return (
      <div className={css.auctionItems}>
        {
          loading
            && <SVGInline svg={bars} />
        }
      </div>
    );
  }
}

export default AuctionItems;
