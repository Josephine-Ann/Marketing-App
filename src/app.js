import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { setTextFilter } from './actions/filters';
import { startSetFeatures } from './actions/features';
import { startSetPurchases } from './actions/purchases';
import { login, logout } from './actions/auth';
import getVisibleFeatures from './selectors/features';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import { firebase } from './firebase/firebase';

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

let hasRendered = false;

const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('app'));
    hasRendered = true;
  }
}

store.dispatch(startSetFeatures())

firebase.auth().onAuthStateChanged((user) => {
  // this fires every time auth state changes
  // if the user is logged out 'user' will be null
  // otherwise it will be the user
  if (user) {
    store.dispatch(login(user.uid));
    store.dispatch(startSetPurchases()).then(() => {
      renderApp();
      if (history.location.pathname === '/') {
        history.push('/')
      }
    })
  } else {
    store.dispatch(logout());
    renderApp();
    history.push('/')
  }
})