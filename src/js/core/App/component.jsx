// @flow
import React from 'react';
import { Switch, Route } from 'react-router';
import {ToastContainer, ToastStore} from 'react-toasts';
import type { AppProps } from './container';
import '../../../styles/core.scss';
import TestActions from '../../store/actions/test.actions';

import background from "../../../resources/images/steamwheedle_background.jpg";
import css from "./styles.module.scss";

import Landing from "../Landing/container";
import NoRouteMatch from "../NoRouteMatch/component";
import Register from "../Register/container";

class App extends React.PureComponent<AppProps> {
  testActions = new TestActions();

  componentDidMount = () => {
    //this.testActions.testAction();
  };

  renderPathComponent = () => {
    return (
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/register" component={Register} />
        <Route component={NoRouteMatch} />
      </Switch>
    )
  };

  render() {
    return (
      <div
        className={css.App}
        style={{
          backgroundImage: `url(${background})`,
        }}
      >
        <div
          className={css.backDrop}
        />
        <ToastContainer store={ToastStore}/>
        { this.renderPathComponent() }
      </div>
    );
  }
}

export default App;
