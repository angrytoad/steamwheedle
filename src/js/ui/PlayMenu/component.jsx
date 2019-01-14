// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import css from './styles.module.scss';

import auction from '../../../resources/images/ui/auction.png';
import inventory from '../../../resources/images/ui/inventory.png';
import home from '../../../resources/images/ui/home.png';
import settings from '../../../resources/images/ui/settings.png';
import type { CurrentUser } from '../../store/types/user.types';

type PlayMenuProps = {
  location: string,
  currentUser: CurrentUser,
};

class PlayMenu extends React.PureComponent<PlayMenuProps> {
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
              alt="Inventory"
              title="Inventory"
            />
          </Link>

        </div>
        <div
          className={`${css.menuItem} ${css.double}`}
        >
          <Link
            to="/play"
            className={location.pathname === '/play' ? css.active : css.notActive}
          >
            <img
              src={home}
              alt="Home"
              title="Home"
            />
          </Link>
          <Link
            to="/settings"
            className={location.pathname === '/settings' ? css.active : css.notActive}
          >
            <img
              src={settings}
              alt="Settings"
              title="Settings"
            />
          </Link>
        </div>
      </div>
    );
  }
}

export default PlayMenu;
