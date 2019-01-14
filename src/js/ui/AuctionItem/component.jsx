// @flow
import React from 'react';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import css from './styles.module.scss';
import type { AuctionItem as _AuctionItem } from '../../store/types/auction.types';
import { getRarityColor, getRiskColor } from '../../helpers/colorHelper';
import Money from '../Money/component';
import type { CurrentUser } from '../../store/types/user.types';
import ItemImageName from '../ItemImageName/component';
import RiskBlock from '../RiskBlock/component';
import TrendIndicator from '../TrendIndicator/component';

type AuctionItemProps = {
  item: _AuctionItem,
  currentUser: CurrentUser,
};

class AuctionItem extends React.PureComponent<AuctionItemProps> {
  get trend() {
    const { item } = this.props;
    const oldInvestmentValue = numeral(item.base_price).value();
    const newInvestmentValue = numeral(item.current_price).value();
    return numeral(newInvestmentValue)
      .subtract(oldInvestmentValue)
      .divide(oldInvestmentValue)
      .multiply(100)
      .value();
  }

  render() {
    const { item, currentUser } = this.props;

    return (
      <tr className={`${css.auctionItem} ${(item.current_price > currentUser.balance ? css.disabled : '')}`}>

        <td className={css.name}>
          <Link to={`/inventory/${item.id}`}>
            <ItemImageName item={item} />
          </Link>
        </td>
        <td className={css.risk}>
          <RiskBlock color={getRiskColor(item.risk.name)} risk={item.risk.name} />
        </td>
        <td>
          <Money amount={item.current_price} size="small" alignment="right" />
        </td>
        <td>
          <TrendIndicator value={numeral(this.trend).value()} />
        </td>
        <td>
          <Button
            type="button"
            basic
            size="small"
            color="yellow"
            disabled={item.current_price > currentUser.balance}
            onClick={() => document.dispatchEvent(new CustomEvent('openBuyModal', { detail: item }))}
          >
            Quick Buy
          </Button>
        </td>
      </tr>
    );
  }
}

export default AuctionItem;
