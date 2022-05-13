import { connect } from 'react-redux';
import { MenuItem } from '../components/MenuItem';
import {
  removeItem,
  updateQuantity,
  updatePrice
} from '../store/items/actions';

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    remove: () => dispatch(removeItem(ownProps.uuid)),
    updatePrice: (price) => dispatch(updatePrice(price, ownProps.uuid)),
    updateQuantity: (quantity) =>
      dispatch(updateQuantity(quantity, ownProps.uuid)),
    total: ownProps.price * ownProps.quantity
  };
};

export const MenuItemContainer = connect(null, mapDispatchToProps)(MenuItem);
