// @flow
import React from 'react';
import type { PlayProps, PlayState } from './container';
import css from './styles.module.scss';

import Block from '../../ui/Block/component';
import TopBar from '../../widgets/TopBar/component';
import GlanceBalance from '../../widgets/GlanceBalance/container';
import GlanceInventory from '../../widgets/GlanceInventory/container';
import Donations from '../../widgets/Donations/component';
import MainView from '../../widgets/MainView/container';
import GlanceHoldings from '../../widgets/GlanceHoldings/container';
import GlanceMarketActivity from '../../widgets/GlanceMarketActivity/container';

class Play extends React.PureComponent<PlayProps, PlayState> {
  state = {

  };

  componentDidMount = () => {

  };

  render() {
    return (
      <div className={`animated fadeIn ${css.play}`}>
        <div className={css.top}>
          <Block>
            <TopBar />
          </Block>
        </div>
        <div className={css.left}>
          <Block>
            <GlanceBalance />
          </Block>
          <Block>
            <GlanceInventory />
          </Block>
          <Block>
            <Donations />
          </Block>
        </div>
        <div className={css.main}>
          <Block>
            <MainView />
          </Block>
        </div>
        <div className={css.right}>
          <Block>
            <GlanceHoldings />
          </Block>
          <Block>
            <GlanceMarketActivity />
          </Block>
        </div>
      </div>
    );
  }
}

export default Play;
