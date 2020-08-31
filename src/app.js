import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { setTextFilter } from './actions/filters';
import { addFeature } from './actions/features';
import getVisibleFeatures from './selectors/features';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

store.dispatch(addFeature({
  name: 'Lettuce',
  description: 'Delicious',
  amount: 300
}))

store.dispatch(addFeature({
  name: 'Spinach',
  description: 'Delicious',
  amount: 300
}))

store.dispatch(addFeature({
  name: 'Spinach',
  description: 'Delicious',
  amount: 300
}))

store.dispatch(addFeature({
  name: 'Spinach',
  description: 'Delicious',
  amount: 300
}))

store.dispatch(addFeature({
  name: 'Spinach',
  description: 'Delicious',
  amount: 300
}))

store.dispatch(addFeature({
  name: 'Spinach',
  description: 'Delicious',
  amount: 300
}))

store.dispatch(addFeature({
  name: 'Spinach',
  description: 'Delicious',
  amount: 300
}))

store.dispatch(addFeature({
  name: 'Spinach',
  description: 'Delicious',
  amount: 300
}))

store.dispatch(addFeature({
  name: 'Tomatoes',
  description: 'Delicious',
  amount: 300
}))

store.dispatch(addFeature({
  name: 'Potato',
  description: 'Delicious',
  amount: 300
}))

const state = store.getState();
const visibleFeatures = getVisibleFeatures(state.features, state.filters);
console.log(visibleFeatures);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
