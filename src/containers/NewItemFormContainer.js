import { connect } from 'react-redux';
import { NewItemForm } from '../components/NewItemForm';
import { addNewItems } from '../store/items/actions';

const mapDispatchToProps = {
  onSubmit: (name, price) => addNewItems(name, price)
};

export const NewItemFormContainer = connect(
  null,
  mapDispatchToProps
)(NewItemForm);
