import { createStore, combineReducers } from 'redux';
import featuresReducer from '../reducers/features';
import filtersReducer from '../reducers/filters';

export default () => {
  const store = createStore(
    combineReducers({
      features: featuresReducer,
      filters: filtersReducer
    })
  );

  return store;
};
