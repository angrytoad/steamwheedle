// @flow
import React from 'react';
import { Button } from 'semantic-ui-react';
import SVGInline from 'react-svg-inline';
import type { LandingProps, LandingState } from './container';
import css from './styles.module.scss';

import Gold from '../../../resources/images/ui/Gold-small.png';
import heart from '../../../resources/icons/heart.svg';
import huzzah from '../../../resources/images/youtubers/huzzah.png';
import history from '../../routing/history';

import SettingsLink from '../../ui/SettingsLink/component';

class Landing extends React.PureComponent<LandingProps, LandingState> {

  handleGoToRegistration = () => {
    history.push('/register');
  };

  render() {
    return (
      <div
        className={`animated fadeIn ${css.Landing}`}
      >
        <div className={css.landing}>
          <div className="my-4">
            <h1>Steamwheedle</h1>
            <div
              className={`my-4 ${css.goldBar}`}
              style={{
                backgroundImage: `url(${Gold}`,
              }}
            />
            <h2>
              Become Azeroth&apos;s greatest trader!
            </h2>
          </div>
          <Button
            className="my-4"
            color="yellow"
            size="big"
            onClick={this.handleGoToRegistration}
          >
            Play
          </Button>
          <div className={`my-4 ${css.madeWithLove}`}>
            <h2>
              Made with
              <SVGInline className="icon" svg={heart} />
              by...
            </h2>
            <ul className="mt-2">
              <a rel="noopener noreferrer" target="_blank" href="https://www.youtube.com/c/Huzzah">
                <li><img alt="Huzzah" src={huzzah} /></li>
              </a>
            </ul>
          </div>
        </div>
        <SettingsLink />
      </div>
    );
  }
}

export default Landing;
