// @flow
import React from 'react';
import css from './styles.modules.scss';

type RiskBlockProps = {
  size?: number,
  color: string,
  risk: string,
}

class RiskBlock extends React.PureComponent<RiskBlockProps> {
  static get defaultProps() {
    return {
      size: 32,
    };
  }

  render() {
    const { size = 32, color = '', risk = '' } = this.props;

    return (
      <div
        className="riskBlock"
        title={risk}
        style={{
          width: `${size}px`,
          height: `${size}px`,
          backgroundColor: color,
        }}
      />
    );
  }
}

export default RiskBlock;
