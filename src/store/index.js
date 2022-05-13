import { combineReducers, createStore } from 'redux';
import { reducer as itemsReducer } from './items/reducer';
import { reducer as tipPercentageReducer } from './tip-percentage/reducer';

const reducer = combineReducers({
  items: itemsReducer,
  tipPercentage: tipPercentageReducer
});

export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
