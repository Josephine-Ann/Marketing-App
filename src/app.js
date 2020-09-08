import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { setTextFilter } from './actions/filters';
import { startSetFeatures } from './actions/features';
import { startSetPurchases } from './actions/purchases';
import getVisibleFeatures from './selectors/features';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

store.dispatch(startSetFeatures()).then(() => {
}).then(store.dispatch(startSetPurchases())).then(() => {
  ReactDOM.render(jsx, document.getElementById('app'));
})
