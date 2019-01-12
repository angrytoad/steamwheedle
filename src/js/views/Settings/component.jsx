// @flow
import React from 'react';
import SVGInline from 'react-svg-inline';
import type { SettingsProps } from './container';
import css from './styles.module.scss';


import checkmark from '../../../resources/icons/checkmark.svg';
import close from '../../../resources/icons/close.svg';
import ApplicationActions from '../../store/actions/application.actions';

class Settings extends React.PureComponent<SettingsProps> {
  applicationActions = new ApplicationActions();

  toggleMusicSetting = (enabled: boolean) => {
    const { soundSettings } = this.props;
    this.applicationActions.toggleMusicEnabled(enabled, soundSettings);
  };

  toggleAmbientSetting = (enabled: boolean) => {
    const { soundSettings } = this.props;
    this.applicationActions.toggleAmbientEnabled(enabled, soundSettings);
  };

  render() {
    const { soundSettings } = this.props;

    return (
      <div className={css.settings}>
        <div className={css.wrapper}>
          <div className={css.topper}>
            <h1 className="title">Settings</h1>
            <h4 className="subtitle">Audio, Video & Game Preferences.</h4>
          </div>
          <div className={css.settingsRender}>
            {
              soundSettings !== null
                && (
                <React.Fragment>
                  <div className={css.setting}>
                    <p>Enable Tavern Music</p>
                    <div>
                      <SVGInline
                        svg={checkmark}
                        className={soundSettings.playMusic ? css.active : ''}
                        onClick={() => this.toggleMusicSetting(true)}
                      />
                      <SVGInline
                        svg={close}
                        className={!soundSettings.playMusic ? css.active : ''}
                        onClick={() => this.toggleMusicSetting(false)}
                      />
                    </div>
                  </div>
                  <div className={css.setting}>
                    <p>Enable Ambient Music</p>
                    <div>
                      <SVGInline
                        svg={checkmark}
                        className={soundSettings.playAmbient ? css.active : ''}
                        onClick={() => this.toggleAmbientSetting(true)}
                      />
                      <SVGInline
                        svg={close}
                        className={!soundSettings.playAmbient ? css.active : ''}
                        onClick={() => this.toggleAmbientSetting(false)}
                      />
                    </div>
                  </div>
                </React.Fragment>
                )
            }
          </div>
        </div>
      </div>
    );
  }
}

export default Settings;
