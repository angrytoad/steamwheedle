// @flow
import { bindActionCreators, type Dispatch } from 'redux';
import connect from 'react-redux/es/connect/connect';
import type { AppState } from '../../store/state';
import Play from './component';

type ReduxStateProps = {|

|};

type ReduxActionProps = {|

|};

export type PlayProps = {
  ...ReduxStateProps,
  ...ReduxActionProps,
};

export type PlayState = {

};

const mapStateToProps = (state: AppState): ReduxStateProps => ({

});

export default connect(mapStateToProps)(Play);
