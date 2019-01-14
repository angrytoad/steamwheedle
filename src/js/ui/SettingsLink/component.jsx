// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import css from './styles.module.scss';
import settings from '../../../resources/images/ui/settings.png';

class SettingsLink extends React.PureComponent {
  render() {
    return (
      <div
        className={css.settingsLink}
      >
        <Link to="/settings">
          <img alt="Settings" src={settings} />
        </Link>
      </div>
    );
  }
}

export default SettingsLink;
