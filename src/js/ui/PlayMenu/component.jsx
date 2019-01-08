// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import css from './styles.module.scss';
import ApplicationActions from '../../store/actions/application.actions';

import auction from '../../../resources/images/ui/auction.png';
import inventory from '../../../resources/images/ui/inventory.png';
import balance from '../../../resources/images/ui/balance.png';
import type { CurrentUser } from '../../store/types/user.types';
import Money from '../Money/component';

type PlayMenuProps = {
  location: string,
  currentUser: CurrentUser,
};

type PlayMenuState = {

}

class PlayMenu extends React.PureComponent<PlayMenuProps, PlayMenuState> {

  render() {
    const { location, currentUser } = this.props;

    return (
      <div className={css.playMenu}>
        <div
          className={`${css.menuItem} ${location.pathname === '/auction' ? css.active : css.notActive}`}
        >
          <Link to="/auction">
            <img
              src={auction}
              alt="Auction"
              title="Auction"
            />
          </Link>
        </div>
        <div
          className={`${css.menuItem} ${location.pathname === '/inventory' ? css.active : css.notActive}`}
        >
          <Link to="/inventory">
            <img
              src={inventory}
              alt="Warehouse"
              title="Warehouse"
            />
          </Link>

        </div>
        <div
          className={`${css.menuItem} ${location.pathname === '/balance' ? css.active : css.notActive}`}
        >
          <Link to="/balance">
            <img
              src={balance}
              alt="Vault"
              title="Vault"
            />
          </Link>

        </div>
      </div>
    );
  }
}

export default PlayMenu;
