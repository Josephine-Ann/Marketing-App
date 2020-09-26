import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import featuresReducer from '../reducers/features';
import filtersReducer from '../reducers/filters';
import authReducer from '../reducers/auth';
import purchasesReducer from '../reducers/purchases';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      features: featuresReducer,
      filters: filtersReducer,
      purchases: purchasesReducer,
      auth: authReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
