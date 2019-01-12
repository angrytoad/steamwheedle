// @flow
import React from 'react';
import numeral from 'numeral';
import type { GlobalTimerProps, GlobalTimerState } from './container';
import css from './styles.module.scss';
import ApplicationActions from '../../store/actions/application.actions';

import auction from '../../../resources/images/ui/auction.png';

class GlobalTimer extends React.PureComponent<GlobalTimerProps, GlobalTimerState> {
  state = {
    countdownLoading: false,
    loadingTime: 3000,
  };

  applicationActions = new ApplicationActions();

  countdownTimer = null;

  componentDidMount = () => {
    this.applicationActions.getGlobalCountdown();
    this.countdownTimer = setInterval(() => {
      this.applicationActions.nextUpdateTick();
    }, 1000);

    document.addEventListener('performGlobalUpdate', this.performGlobalUpdate);
  };

  componentWillUnmount = () => {
    clearInterval(this.countdownTimer);
    document.removeEventListener('performGlobalUpdate', this.performGlobalUpdate);
  };

  static getDerivedStateFromProps(props, state) {
    if (props.nextUpdate <= 0 && state.countdownLoading === false) {
      document.dispatchEvent(new CustomEvent('performGlobalUpdate'));
      return {
        countdownLoading: true,
      };
    }
    if (props.nextUpdate > 0 && state.countdownLoading === true) {
      return {
        countdownLoading: false,
      };
    }
    return null;
  }

  performGlobalUpdate = () => {
    const { loadingTime } = this.state;
    setTimeout(() => {
      this.applicationActions.performGlobalUpdate();
    }, loadingTime);
  };

  secondsToTimer = seconds => `${Math.floor(numeral(seconds).divide(60).value())}:${(`${seconds % 60}`).padStart(2, '0')}`;

  render() {
    const { globalCountdown, nextUpdate } = this.props;
    const { countdownLoading } = this.state;
    return (
      <div className={css.globalTimer}>
        <div className={css.wrapper}>
          <h3>Next <img alt="Auction" style={{ width: '32px' }} src={auction} /> Update:</h3>
          <div className={css.nextUpdate}>
            {
              countdownLoading
                ? (
                  <div className="animated fadeIn la-timer">
                    <div />
                  </div>
                )
                : (
                  <h3 className="animated fadeIn">{ this.secondsToTimer(nextUpdate) }</h3>
                )
            }
          </div>
        </div>
      </div>
    );
  }
}

export default GlobalTimer;
