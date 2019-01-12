// @flow
import connect from 'react-redux/es/connect/connect';
import { withRouter } from 'react-router';
import type { AppState } from '../../store/state';
import App from './component';
import history from "../../routing/history";
import type {SoundSettings} from "../../store/types/application.types";

type ReduxStateProps = {|
  soundSettings: SoundSettings,
|};

type ReduxActionProps = {|

|};

export type AppProps = {
  ...ReduxStateProps,
  ...ReduxActionProps,
  history: history,
};

const mapStateToProps = (state: AppState): ReduxStateProps => ({
  test: state.test,
  soundSettings: state.soundSettings,
});

export default withRouter(connect(mapStateToProps)(App));
