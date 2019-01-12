// @flow
import connect from 'react-redux/es/connect/connect';
import type { AppState } from '../../store/state';
import Settings from './component';
import type { SoundSettings } from '../../store/types/application.types';

type ReduxStateProps = {|
  soundSettings: SoundSettings,
|};

export type SettingsProps = {
  ...ReduxStateProps,
};

const mapStateToProps = (state: AppState): ReduxStateProps => ({
  soundSettings: state.soundSettings,
});

export default connect(mapStateToProps)(Settings);
