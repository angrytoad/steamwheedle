// @flow
import React from 'react';
import SVGInline from 'react-svg-inline';
import { Button } from 'semantic-ui-react';
import type { GlanceBalanceProps, GlanceBalanceState } from './container';
import css from './styles.module.scss';

import Money from '../../ui/Money/component';
import gavel from '../../../resources/icons/gavel-solid.svg';
import ApplicationActions from '../../store/actions/application.actions';

class GlanceBalance extends React.PureComponent<GlanceBalanceProps, GlanceBalanceState> {
  applicationActions = new ApplicationActions();

  handleShowAuctionView = (): void => {
    this.applicationActions.setView('auction');
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
        <div className={css.quickIcons}>
          <Button
            color="yellow"
            basic
            size="tiny"
            onClick={this.handleShowAuctionView}
          >
            <SVGInline className="icon" svg={gavel} /> Auction
          </Button>
        </div>
      </div>
    );
  }
}

export default GlanceBalance;
