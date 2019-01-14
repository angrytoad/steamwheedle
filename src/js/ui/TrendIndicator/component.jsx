// @flow
import React from 'react';
import SVGInline from 'react-svg-inline';
import numeral from 'numeral';
import css from './styles.module.scss';

import up from '../../../resources/icons/arrow-outline-up.svg';
import down from '../../../resources/icons/arrow-outline-down.svg';


type TrendIndicatorProps = {
  value: number,
  simple: boolean,
};

class TrendIndicator extends React.PureComponent<TrendIndicatorProps> {
  render() {
    const { value, simple = false } = this.props;
    return (
      <div className={`${css.trendIndicator} ${simple ? css.simple : ''}`}>
        {
          simple
            ? (
              <React.Fragment>
                {
                value >= 0
                  ? <React.Fragment><span className={css.up}>+{numeral(value).format('0,0.00')}%</span></React.Fragment>
                  : <React.Fragment><span className={css.down}>{numeral(value).format('0,0.00')}%</span></React.Fragment>
              }
              </React.Fragment>
            )
            : (
              <React.Fragment>
                {
                value >= 0
                  ? <React.Fragment><SVGInline className={`${css.up} icon`} svg={up} /> <span className={css.up}>+{numeral(value).format('0,0.00')}%</span></React.Fragment>
                  : <React.Fragment><SVGInline className={`${css.down} icon`} svg={down} /> <span className={css.down}>{numeral(value).format('0,0.00')}%</span></React.Fragment>
              }
              </React.Fragment>
            )
        }

      </div>
    );
  }
}

export default TrendIndicator;
