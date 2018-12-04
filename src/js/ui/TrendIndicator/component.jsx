// @flow
import React from 'react';
import SVGInline from "react-svg-inline";
import numeral from 'numeral';
import css from './styles.module.scss';

import up from '../../../resources/icons/arrow-outline-up.svg';
import down from '../../../resources/icons/arrow-outline-down.svg';


type TrendIndicatorProps = {
  value: number,
};

type TrendIndicatorState = {

};

class TrendIndicator extends React.PureComponent<TrendIndicatorProps, TrendIndicatorState> {
  state = {

  };

  componentDidMount = () => {

  };

  render() {
    const { value } = this.props;
    return (
      <div className={css.trendIndicator}>
        {
          value >= 0
            ? <React.Fragment><SVGInline className={`${css.up} icon`} svg={up} /> <span className={css.up}>+{numeral(value).format('0,0.00')}%</span></React.Fragment>
            : <React.Fragment><SVGInline className={`${css.down} icon`} svg={down} /> <span className={css.down}>{numeral(value).format('0,0.00')}%</span></React.Fragment>
        }
      </div>
    );
  }
}

export default TrendIndicator;
