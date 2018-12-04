// @flow
import connect from 'react-redux/es/connect/connect';
import type { AppState } from '../../store/state';
import SellPurchaseModal from './component';

type ReduxStateProps = {|

|};

type ReduxActionProps = {|

|};

export type SellPurchaseModalProps = {
  ...ReduxStateProps,
  ...ReduxActionProps,
};

export type SellPurchaseModalState = {

};

const mapStateToProps = (state: AppState): ReduxStateProps => ({

});

export default connect(mapStateToProps)(SellPurchaseModal);
