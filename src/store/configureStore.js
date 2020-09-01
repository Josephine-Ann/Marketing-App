import { createStore, combineReducers } from 'redux';
import featuresReducer from '../reducers/features';
import filtersReducer from '../reducers/filters';
import purchasesReducer from '../reducers/purchases';

export default () => {
  const store = createStore(
    combineReducers({
      features: featuresReducer,
      filters: filtersReducer,
      purchases: purchasesReducer
    })
  );

  return store;
};
