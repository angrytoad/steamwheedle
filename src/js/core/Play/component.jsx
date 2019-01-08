// @flow
import React from 'react';
import type { PlayProps, PlayState } from './container';
import css from './styles.module.scss';

import Block from '../../ui/Block/component';

import PlayView from '../../views/Play/container';

class Play extends React.PureComponent<PlayProps, PlayState> {
  render() {
    return (
      <div className={`animated fadeIn ${css.play}`}>
        <PlayView />
      </div>
    );
  }
}

export default Play;
