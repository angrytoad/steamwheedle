// @flow
import * as React from 'react';
import type { MainViewProps, MainViewState } from './container';
import ApplicationActions from '../../store/actions/application.actions';

import Auction from '../../views/Auction/container';
import Inventory from '../../views/Inventory/container';
//import Balance from '../../views/Balance/container';
import PurchaseGroupView from '../../views/PurchaseGroupView/container';

class MainView extends React.PureComponent<MainViewProps, MainViewState> {

  applicationActions = new ApplicationActions();

  renderView = (view: string): React.Node => {
    switch (view) {
      case 'auction':
        return <Auction />;
      case 'purchaseGroup':
        return <PurchaseGroupView />;
      case 'inventory':
        return <Inventory />;
      case 'balance':
        //return <Balance />;
      default:
        return <h1>No View Found for {view}</h1>;
    }
  };


  componentDidMount = () => {
    this.applicationActions.setView('auction');
  };

  render() {
    const { view } = this.props;

    return (
      <React.Fragment>
        {
          this.renderView(view)
        }
      </React.Fragment>
    );
  }
}

export default MainView;
