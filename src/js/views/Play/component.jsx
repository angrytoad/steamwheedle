// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import { PlayProps, PlayState } from './container';
import css from './styles.module.scss';
import auction from '../../../resources/images/ui/auction.png';
import inventory from '../../../resources/images/ui/inventory.png';
import balance from '../../../resources/images/ui/balance.png';

class Play extends React.PureComponent<PlayProps, PlayState> {
  state = {

  };

  componentDidMount = () => {

  };

  render() {
    const { currentUser } = this.props;

    return (
      <div className={css.play}>
        <div className={css.wrapper}>
          <div className={css.topper}>
            <h1 className="title">Welcome { currentUser.username }</h1>
            <h4 className="subtitle">Where would you like to go?</h4>
          </div>
          <div className={css.pageSelection}>
            <div
              className={css.pageItem}
            >
              <Link to="/auction">
                <img
                  src={auction}
                  alt="Auction"
                  title="Auction"
                />
                <div className={css.name}>
                  Auction
                </div>
              </Link>
            </div>
            <div
              className={css.pageItem}
            >
              <Link to="/inventory">
                <img
                  src={inventory}
                  alt="My Inventory"
                  title="My Inventory"
                />
                <div className={css.name}>
                  Warehouse
                </div>
              </Link>

            </div>
            <div
              className={css.pageItem}
            >
              <Link to="/balance">
                <img
                  src={balance}
                  alt="My Balance"
                  title="My Balance"
                />
                <div className={css.name}>
                  Vault
                </div>
              </Link>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Play;
