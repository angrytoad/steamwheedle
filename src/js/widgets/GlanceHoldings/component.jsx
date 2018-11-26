// @flow
import React from 'react';
import type { GlanceHoldingsProps, GlanceHoldingsState } from './container';
import css from './styles.module.scss';

class GlanceHoldings extends React.PureComponent<GlanceHoldingsProps, GlanceHoldingsState> {
  state = {

  };

  componentDidMount = () => {

  };
  render() {
    return (
      <div className={css.glanceHoldings}>
        <h2>Holdings</h2>
      </div>
    );
  }
}

export default GlanceHoldings;
