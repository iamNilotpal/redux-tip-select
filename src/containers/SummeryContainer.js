import { connect } from 'react-redux';
import { Summary } from '../components/Summary';
import {
  selectSubTotal,
  selectTipAmount,
  selectTotal
} from '../store/items/selector';

const mapStateToProps = (state) => {
  const subtotal = selectSubTotal(state);
  const tipAmount = selectTipAmount(state);
  const total = selectTotal(state);

  return {
    subtotal,
    tipAmount,
    total
  };
};

export const SummaryContainer = connect(mapStateToProps)(Summary);
