// @flow
import React from 'react';
import numeral from 'numeral';
import { Header, Table, Rating } from 'semantic-ui-react';
import type { SinglePurchaseRenderProps, SinglePurchaseRenderState } from './container';
import css from './styles.module.scss';
import Money from '../../ui/Money/component';

import sell from '../../../resources/images/ui/sell.png';
import TrendIndicator from '../../ui/TrendIndicator/component';

class SinglePurchaseRender extends React.PureComponent<
  SinglePurchaseRenderProps,
  SinglePurchaseRenderState
  > {
  get trend() {
    const { purchase, item } = this.props;
    const oldInvestmentValue = numeral(purchase.buy_price).multiply(purchase.current).value();
    const newInvestmentValue = numeral(item.current_price).multiply(purchase.current).value();
    return numeral(newInvestmentValue)
      .subtract(oldInvestmentValue)
      .divide(oldInvestmentValue)
      .multiply(100)
      .value();
  }

  get baseTrend() {
    const { purchase, item } = this.props;
    const oldInvestmentValue = numeral(item.base_price).multiply(purchase.current).value();
    const newInvestmentValue = numeral(purchase.buy_price).multiply(purchase.current).value();
    return numeral(newInvestmentValue)
      .subtract(oldInvestmentValue)
      .divide(oldInvestmentValue)
      .multiply(100)
      .value();
  }

  handleOpenSellPurchaseModal = () => {
    const { purchase, item } = this.props;
    document.dispatchEvent(new CustomEvent('openSellPurchaseModal', {
      detail: {
        purchase,
        item,
      },
    }));
  };

  render() {
    const { purchase, item } = this.props;
    return (
      <Table.Row className={css.singlePurchaseRender}>
        <Table.Cell singleLine verticalAlign="middle">
          <Money amount={purchase.buy_price} size="medium" alignment="right" />
        </Table.Cell>
        <Table.Cell singleLine textAlign="center" verticalAlign="middle">
          { numeral(purchase.current).format('0,0') }
        </Table.Cell>
        <Table.Cell singleLine textAlign="center" verticalAlign="middle">
          <Money amount={numeral(purchase.current).multiply(item.current_price).value()} size="medium" alignment="right" />
          <span className={css.mobileTrend}>
            <TrendIndicator simple value={numeral(this.trend).value()} />
          </span>
        </Table.Cell>
        <Table.Cell singleLine textAlign="center" verticalAlign="middle">
          <TrendIndicator value={numeral(this.trend).value()} />
        </Table.Cell>
        <Table.Cell textAlign="center" verticalAlign="middle">
          <img
            alt="Sell Items"
            title={`Sell ${item.name}`}
            className={`itemImage ${css.action}`}
            src={sell}
            onClick={this.handleOpenSellPurchaseModal}
          />
        </Table.Cell>
      </Table.Row>
    );
  }
}

export default SinglePurchaseRender;
