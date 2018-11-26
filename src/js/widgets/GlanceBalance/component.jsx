// @flow
import React from 'react';
import type { GlanceBalanceProps, GlanceBalanceState } from './container';
import css from './styles.module.scss';

import Money from '../../ui/Money/component';

class GlanceBalance extends React.PureComponent<GlanceBalanceProps, GlanceBalanceState> {
  state = {

  };

  componentDidMount = () => {

  };

  render() {
    const { currentUser } = this.props;
    return (
      <div className={css.glanceBalance}>
        <h4 className={css.title}>
          { currentUser.username }&apos;s Balance
        </h4>
        <Money
          amount={currentUser.balance}
          size="large"
        />
      </div>
    );
  }
}

export default GlanceBalance;
