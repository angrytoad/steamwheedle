// @flow
import connect from 'react-redux/es/connect/connect';
import type { AppState } from '../../store/state';
import App from './component';

type ReduxStateProps = {|

|};

type ReduxActionProps = {|

|};

export type AppProps = {
  ...ReduxStateProps,
  ...ReduxActionProps,
};

const mapStateToProps = (state: AppState): ReduxStateProps => ({
  test: state.test,
});

export default connect(mapStateToProps)(App);
