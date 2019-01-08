// @flow
import React from 'react';
import { Switch, Route } from 'react-router';
import {ToastContainer, ToastStore} from 'react-toasts';
import type { AppProps } from './container';
import '../../../styles/core.scss';
import TestActions from '../../store/actions/test.actions';

import background from "../../../resources/images/steamwheedle_background.jpg";
import css from "./styles.module.scss";

import PrivateRoute from "../PrivateRoute/container";

import Landing from "../Landing/container";
import NoRouteMatch from "../NoRouteMatch/component";
import Register from "../Register/container";
import Login from "../Login/container";
import Play from '../Play/container';
import Auction from '../Auction/container';
import Inventory from '../Inventory/container';
import InventoryItem from '../InventoryItem/container';
import BuyItemModal from "../../widgets/BuyItemModal/container";

class App extends React.PureComponent<AppProps> {

  renderPathComponent = () => {
    return (
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path="/play" component={Play} />
        <PrivateRoute exact path="/auction" component={Auction} />
        <PrivateRoute exact path="/inventory" component={Inventory} />
        <PrivateRoute exact path="/inventory/:item_id" component={InventoryItem} />
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
        <BuyItemModal />
        { this.renderPathComponent() }
      </div>
    );
  }
}

export default App;
