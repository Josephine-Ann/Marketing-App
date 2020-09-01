import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import featuresReducer from '../reducers/features';
import filtersReducer from '../reducers/filters';
import purchasesReducer from '../reducers/purchases';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      features: featuresReducer,
      filters: filtersReducer,
      purchases: purchasesReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
