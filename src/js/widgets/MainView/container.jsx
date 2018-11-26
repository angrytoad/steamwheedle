// @flow
import connect from 'react-redux/es/connect/connect';
import type { AppState } from '../../store/state';
import MainView from './component';

type ReduxStateProps = {|
  view: string,
|};

type ReduxActionProps = {|

|};

export type MainViewProps = {
  ...ReduxStateProps,
  ...ReduxActionProps,
};

export type MainViewState = {

};

const mapStateToProps = (state: AppState): ReduxStateProps => ({
  view: state.view,
});

export default connect(mapStateToProps)(MainView);
