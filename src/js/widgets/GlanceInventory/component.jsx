// @flow
import React from 'react';
import type { GlanceInventoryProps, GlanceInventoryState } from './container';
import css from './styles.module.scss';

class GlanceInventory extends React.PureComponent<GlanceInventoryProps, GlanceInventoryState> {
  state = {

  };

  componentDidMount = () => {

  };
  render() {
    return (
      <div className={css.glanceInventory}>
        <h2>Inventory</h2>
      </div>
    );
  }
}

export default GlanceInventory;
