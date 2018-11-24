// @flow
import React from 'react';
import { Button } from 'semantic-ui-react';
import css from './styles.module.scss';

import history from '../../routing/history';

import RouteNotFound from '../../../resources/images/RouteNotFound.png';

class NoRouteMatch extends React.PureComponent {
  state = {

  };

  componentDidMount = () => {

  };

  render() {
    return (
      <div
        className={`animated fadeIn ${css.NoRouteMatch}`}
      >
        <div className={css.content}>
          <img alt="You Not Take Candle!" src={RouteNotFound} />
          <h1>You No Take Webpage!</h1>
          <p>
            The Kobolds don&apos;t want to hand this url over to you just yet. Why not take a
            look and see if you can make do with some of our other links.
          </p>
          <ul>
            <li>
              <Button
                className="my-4"
                color="yellow"
                size="big"
                onClick={() => history.push('/play')}
                onKeyDown={() => history.push('/play')}
              >
                Play
              </Button>
            </li>
            <li>
              <Button
                className="my-4"
                color="yellow"
                size="big"
                onClick={() => history.push('/login')}
                onKeyDown={() => history.push('/login')}
              >
                Login
              </Button>
            </li>
            <li>
              <Button
                className="my-4"
                color="yellow"
                size="big"
                onClick={() => history.push('/register')}
                onKeyDown={() => history.push('/register')}
              >
                Register
              </Button>
            </li>
            <li>
              <Button
                className="my-4"
                color="yellow"
                size="big"
                onClick={() => history.push('/')}
                onKeyDown={() => history.push('/')}
              >
                Landing
              </Button>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default NoRouteMatch;
