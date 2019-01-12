// @flow
import React from 'react';
import { Switch, Route } from 'react-router';
import { Howl } from "howler";
import {ToastContainer, ToastStore} from 'react-toasts';
import type { AppProps } from './container';
import '../../../styles/core.scss';

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
import Settings from '../Settings/container';

import BuyItemModal from "../../widgets/BuyItemModal/container";
import ApplicationActions from "../../store/actions/application.actions";


const ambient = new Howl({
  src: [`/music/bg/TavernCrowded.wav`],
  loop: true,
  volume: 0.2,
});

const music = new Howl({
  src: [`/music/bg/TavernAlliance01.mp3`],
  loop: true,
  volume: 0.1,
});

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
        <Route exact path="/settings" component={Settings} />
        <Route component={NoRouteMatch} />
      </Switch>
    )
  };

  applicationActions = new ApplicationActions();

  startMusic = () => {
    music.play()
  };

  stopMusic = () => {
    music.stop()
  };

  startAmbient = () => {
    ambient.play()
  };

  stopAmbient = () => {
    ambient.stop()
  };

  componentDidMount = () => {
    document.addEventListener('startMusic', this.startMusic);
    document.addEventListener('stopMusic', this.stopMusic);
    document.addEventListener('startAmbient', this.startAmbient);
    document.addEventListener('stopAmbient', this.stopAmbient);

    this.applicationActions.loadSettings();
  };

  componentWillUnmount =() => {
    document.removeEventListener('startMusic', this.startMusic);
    document.removeEventListener('stopMusic', this.stopMusic);
    document.removeEventListener('startAmbient', this.startAmbient);
    document.removeEventListener('stopAmbient', this.stopAmbient);
  }

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
