
import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import LandingPage from '../components/LandingPage';
import FeaturesPage from '../components/FeaturesPage';
import FeaturePage from '../components/FeaturePage';
import AddFeaturePage from '../components/AddFeaturePage';
import AddPurchasePage from '../components/AddPurchasePage';
import CartPage from '../components/CartPage';
import OrdersPage from '../components/OrdersPage';
import NotFoundPage from '../components/NotFoundPage';
import Navbar from '../components/Navbar';
import PrivateRoute from './PrivateRoute';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Navbar />
      <Switch>
        <Route path="/" component={LandingPage} exact={true} />
        <Route path="/features" component={FeaturesPage} />
        <Route path="/orders" component={OrdersPage} />
        <Route path="/feature/:id" component={FeaturePage} />
        <Route path="/create" component={AddFeaturePage} />
        <PrivateRoute path="/purchase" component={AddPurchasePage} />
        <PrivateRoute path="/cart" component={CartPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
