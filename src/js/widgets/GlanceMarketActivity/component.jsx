// @flow
import React from 'react';
import type { GlanceMarketActivityProps, GlanceMarketActivityState } from './container';
import css from './styles.module.scss';

class GlanceMarketActivity extends React.PureComponent<GlanceMarketActivityProps, GlanceMarketActivityState> {
  state = {

  };

  componentDidMount = () => {

  };
  render() {
    return (
      <div className={css.glanceMarketActivity}>
        <h2>Market Activity</h2>
      </div>
    );
  }
}

export default GlanceMarketActivity;
