// @flow
import React from 'react';
import type { SettingsProps, SettingsState } from './container';
import css from './styles.module.scss';
import SettingsView from '../../views/Settings/container';
import ApplicationActions from '../../store/actions/application.actions';

class Settings extends React.PureComponent<SettingsProps, SettingsState> {
  state = {

  };

  applicationActions = new ApplicationActions();

  componentDidMount = () => {
    //this.applicationActions.loadSettings();
  };

  render() {
    return (
      <div className={css.settings}>
        <SettingsView />
      </div>
    );
  }
}

export default Settings;
