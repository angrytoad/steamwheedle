// @flow
import Cookies from 'js-cookie';
import Store from '../store';
import { playSound } from '../../helpers/soundHelper';
import type { SoundSettings } from '../types/application.types';

export default class ApplicationActions {
  store: Store = Store;

  setView(view: string = 'auction') {
    this.store.dispatch({
      type: 'SET_VIEW',
      payload: view,
    });
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  resetView() {
    this.store.dispatch({
      type: 'RESET_VIEW',
    });
  }

  getGlobalCountdown() {
    this.store.dispatch({
      type: 'GET_GLOBAL_COUNTDOWN_REQUEST',
    });
  }

  nextUpdateTick() {
    this.store.dispatch({
      type: 'NEXT_UPDATE_TICK',
    });
  }

  performGlobalUpdate() {
    playSound('auction/priceUpdate');

    this.store.dispatch({
      type: 'GET_GLOBAL_COUNTDOWN_REQUEST',
    });

    this.store.dispatch({
      type: 'GET_AUCTION_ITEMS_REQUEST',
      payload: [],
      callback: null,
      setAll: true,
    });
  }

  loadSettings() {
    let playMusic = Cookies.get('steamwheedlePlayMusic');
    let playAmbient = Cookies.get('steamwheedlePlayAmbient');

    if (playMusic === undefined) {
      Cookies.set('steamwheedlePlayMusic', true, { expires: 11000 });
      playMusic = 'true';
    }
    if (playAmbient === undefined) {
      Cookies.set('steamwheedlePlayAmbient', true, { expires: 11000 });
      playAmbient = 'true';
    }

    if (playMusic === 'true') {
      document.dispatchEvent(new CustomEvent('startMusic'));
    } else {
      document.dispatchEvent(new CustomEvent('stopMusic'));
    }

    if (playAmbient === 'true') {
      document.dispatchEvent(new CustomEvent('startAmbient'));
    } else {
      document.dispatchEvent(new CustomEvent('stopAmbient'));
    }

    this.store.dispatch({
      type: 'UPDATE_SOUND_SETTINGS',
      payload: {
        playAmbient: playAmbient === 'true',
        playMusic: playMusic === 'true',
      },
    });
  }

  toggleMusicEnabled(enabled: boolean, soundSettings: SoundSettings) {
    Cookies.set('steamwheedlePlayMusic', enabled, { expires: 11000 });

    if (enabled) {
      document.dispatchEvent(new CustomEvent('startMusic'));
    } else {
      document.dispatchEvent(new CustomEvent('stopMusic'));
    }

    this.store.dispatch({
      type: 'UPDATE_SOUND_SETTINGS',
      payload: {
        ...soundSettings,
        playMusic: enabled,
      },
    });
  }

  toggleAmbientEnabled(enabled: boolean, soundSettings: SoundSettings) {
    Cookies.set('steamwheedlePlayAmbient', enabled, { expires: 11000 });

    if (enabled) {
      document.dispatchEvent(new CustomEvent('startAmbient'));
    } else {
      document.dispatchEvent(new CustomEvent('stopAmbient'));
    }

    this.store.dispatch({
      type: 'UPDATE_SOUND_SETTINGS',
      payload: {
        ...soundSettings,
        playAmbient: enabled,
      },
    });
  }
}
