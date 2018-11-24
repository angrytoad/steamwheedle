// @flow
import connect from 'react-redux/es/connect/connect';
import { withRouter } from 'react-router';
import type { AppState } from '../../store/state';
import App from './component';
import history from "../../routing/history";

type ReduxStateProps = {|

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
});

export default withRouter(connect(mapStateToProps)(App));
