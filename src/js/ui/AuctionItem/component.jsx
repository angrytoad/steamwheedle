// @flow
import React from 'react';
import { Button } from 'semantic-ui-react';
import css from './styles.module.scss';
import type { AuctionItem as _AuctionItem } from '../../store/types/auction.types';
import { getRarityColor, getRiskColor } from '../../helpers/colorHelper';
import Money from '../Money/component';
import type { CurrentUser } from '../../store/types/user.types';
import ItemImageName from '../ItemImageName/component';

type AuctionItemProps = {
  item: _AuctionItem,
  currentUser: CurrentUser,
};

class AuctionItem extends React.PureComponent<AuctionItemProps> {
  componentDidMount = () => {

  };

  render() {
    const { item, currentUser } = this.props;

    return (
      <tr className={css.auctionItem}>
        <td className={css.name}>
          <ItemImageName item={item} />
        </td>
        <td className={css.risk}>
          <span style={{ color: getRiskColor(item.risk.name) }}>{ item.risk.name }</span>
        </td>
        <td>
          <Money amount={item.current_price} size="small" />
        </td>
        <td />
        <td>
          <Button
            type="button"
            basic
            size="small"
            color="yellow"
            disabled={item.current_price > currentUser.balance}
            onClick={() => document.dispatchEvent(new CustomEvent('openBuyModal', { detail: item }))}
          >
            Quick Buy
          </Button>
        </td>
      </tr>
    );
  }
}

export default AuctionItem;
