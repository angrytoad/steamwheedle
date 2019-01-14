// @flow
import React from 'react';
import numeral from 'numeral';
import math from 'mathjs';
import css from './styles.module.scss';

import goldIcon from '../../../resources/images/ui/Gold.png';
import silverIcon from '../../../resources/images/ui/Silver.png';
import copperIcon from '../../../resources/images/ui/Copper.png';

type MoneyProps = {
  size: string,
  alignment: string,
}

type MoneyState = {
  copper: number,
  silver: number,
  gold: number,
}

class Money extends React.PureComponent<MoneyProps, MoneyState> {
  state = {
    copper: 0,
    silver: 0,
    gold: 0,
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    return {
      ...prevState,
      copper: Money.setCopper(nextProps.amount),
      silver: Money.setSilver(nextProps.amount),
      gold: Money.setGold(nextProps.amount),
    };
  }

  static setCopper = (amount: number = 0): number => math.floor(amount % 100);

  static setSilver = (amount: number = 0): number => math
    .floor(numeral(amount).divide(100).value() % 100);

  static setGold = (amount: number = 0): number => math
    .floor(numeral(amount).divide(10000).value());

  render() {
    const { size = 'small', alignment = 'center' } = this.props;
    const { copper, silver, gold } = this.state;

    return (
      <div className={`${css.money} ${size} ${alignment}`}>
        {
            gold > 0
            && (
            <div>
              { numeral(gold).format('0,0') } <img alt="Gold" src={goldIcon} />
            </div>
            )
          }

        {
          (gold > 0 || silver > 0)
          && (
          <div>
            {silver} <img alt="Silver" src={silverIcon} />
          </div>
          )
        }
        <div>
          { copper } <img alt="Copper" src={copperIcon} />
        </div>
      </div>
    );
  }
}

export default Money;
