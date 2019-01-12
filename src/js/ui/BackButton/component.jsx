// @flow
import React from 'react';
import { withRouter } from 'react-router-dom';
import css from './styles.module.scss';

import back from '../../../resources/images/ui/back.png';

class BackButton extends React.PureComponent<BackButtonProps, BackButtonState> {
  static contextTypes = {
    router: () => true, // replace with PropTypes.object if you use them
  }

  render() {
    const { history } = this.props;

    return (
      <div
        className={css.backButton}
        onClick={history.goBack}
        role="button"
        tabIndex={0}
      >
        <img alt="Back" src={back} />
      </div>
    );
  }
}

export default withRouter(BackButton);
