// @flow
import React from 'react';
import css from './styles.module.scss';
import Money from '../Money/component';
import type { CurrentUser } from '../../store/types/user.types';

type BalanceMenuProps = {
  currentUser: CurrentUser,
};

class BalanceMenu extends React.PureComponent<BalanceMenuProps> {
  render() {
    const { currentUser } = this.props;
    return (
      <div className={css.balanceMenu}>
        <Money amount={currentUser.balance} size="medium" />
      </div>
    );
  }
}

export default BalanceMenu;
