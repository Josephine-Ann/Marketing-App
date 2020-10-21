import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { setTextFilter } from './actions/filters';
import { startSetFeatures } from './actions/features';
import { startSetPurchases } from './actions/purchases';
import { startSetOrders } from './actions/orders';
import { login, logout } from './actions/auth';
import getVisibleFeatures from './selectors/features';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import { firebase } from './firebase/firebase';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";


const store = configureStore();


const promise = loadStripe(
  "pk_test_51HX2p4GRQp1cNJKEeKemoKBzPndfkTh2ijCg4M0nTyp1uAR8GGr4opg5DKXXrnYpxfL1MsRRt6T67p1LtPNMRbf700mp1cvokX"
);

const jsx = (
  <Provider store={store}>
    <Elements stripe={promise}>
      <AppRouter />
    </Elements>
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

let counter = 1;

firebase.auth().onAuthStateChanged((user) => {
  // this fires every time auth state changes
  // if the user is logged out 'user' will be null
  // otherwise it will be the user
  if (user) {
    store.dispatch(login(user.uid));
    store.dispatch(startSetPurchases()).then(() => {
      store.dispatch(startSetOrders())
      renderApp();
      if (history.location.pathname === '/') {
        history.push('/')
      }
    })
  } else {
    store.dispatch(logout());
    renderApp();
  }
})