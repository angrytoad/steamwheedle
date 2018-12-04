// @flow
import React from 'react';
import numeral from 'numeral';
import type { PurchaseGroupStatsProps, PurchaseGroupStatsState } from './container';
import css from './styles.module.scss';
import Money from '../Money/component';

class PurchaseGroupStats extends React.PureComponent<PurchaseGroupStatsProps> {
  get purchaseGroupStock() {
    const { purchaseGroup } = this.props;
    let total = 0;
    purchaseGroup.forEach((purchase) => {
      total += purchase.current;
    });
    return total;
  }

  get purchaseGroupInvested() {
    const { purchaseGroup } = this.props;
    let total = 0;
    purchaseGroup.forEach((purchase) => {
      total += numeral(purchase.current).multiply(purchase.buy_price).value();
    });
    return total;
  }

  get newInvestmentValue() {
    const { purchaseGroup, item } = this.props;
    return purchaseGroup
      .map(purchase => numeral(purchase.current).multiply(item.current_price).value())
      .reduce((a, b) => a + b);
  }

  get purchaseGroupMovement() {
    const { purchaseGroup, item } = this.props;
    const oldInvestmentValue = this.purchaseGroupInvested;
    // eslint-disable-next-line prefer-destructuring
    const newInvestmentValue = this.newInvestmentValue;

    return numeral(newInvestmentValue)
      .subtract(oldInvestmentValue)
      .divide(oldInvestmentValue)
      .multiply(100)
      .value();
  }

  render() {
    return (
      <div className={css.purchaseGroupStats}>
        <div className={`${css.stock} ${css.statBlock} mb-4`}>
          <h4>Stock</h4>
          <span className={css.statBlockFigure}>{ numeral(this.purchaseGroupStock).format('0,0') }</span>
        </div>
        <div className={`${css.invested} ${css.statBlock} mb-4`}>
          <h4>Invested</h4>
          <Money amount={this.purchaseGroupInvested} size="large" alignment="left" />
        </div>
        <div className={`${css.movement} ${css.statBlock} mb-4`}>
          <h4>Current Valuation</h4>
          <Money amount={this.newInvestmentValue} size="large" alignment="left" />
          {
            this.purchaseGroupMovement >= 0
              ? <span className={css.movement}>+{ numeral(this.purchaseGroupMovement).format('0,0.00') }%</span>
              : <span className={css.movement}>{ numeral(this.purchaseGroupMovement).format('0,0.00') }%</span>
          }
        </div>
      </div>
    );
  }
}

export default PurchaseGroupStats;
