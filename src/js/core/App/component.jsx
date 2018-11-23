// @flow
import React from 'react';
import type { AppProps } from './container';
import '../../../styles/core.scss';
import TestActions from '../../store/actions/test.actions';

import css from './styles.module.scss';

class App extends React.PureComponent<AppProps> {
  testActions = new TestActions();

  componentDidMount = () => {
    this.testActions.testAction();
  };


  render() {
    const { test } = this.props;

    console.log(test);

    return (
      <div className={css.App}>
        <h1>Welcome to Steamwheedle</h1>
        <p>
          Coming shortly!
        </p>
      </div>
    );
  }
}

export default App;
