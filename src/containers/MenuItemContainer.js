import { connect } from 'react-redux';
import { MenuItem } from '../components/MenuItem';
import {
  removeItem,
  updateQuantity,
  updatePrice
} from '../store/items/actions';
import { selectItemTotal } from '../store/items/selector';

const mapStateToProps = (state, props) => ({
  total: selectItemTotal(state, props)
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    remove: () => dispatch(removeItem(ownProps.uuid)),
    updatePrice: (price) => dispatch(updatePrice(price, ownProps.uuid)),
    updateQuantity: (quantity) =>
      dispatch(updateQuantity(quantity, ownProps.uuid))
  };
};

export const MenuItemContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuItem);
