// @flow
import React from 'react';
import css from './styles.module.scss';

type BlockProps = {
    children: any,
}

class Block extends React.PureComponent<BlockProps> {
  render() {
    const { children } = this.props;
    return (
      <div className={css.block}>
        { children }
      </div>
    );
  }
}

export default Block;
