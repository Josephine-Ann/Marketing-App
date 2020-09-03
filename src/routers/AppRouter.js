import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import LandingPage from '../components/LandingPage';
import FeaturesPage from '../components/FeaturesPage';
import FeaturePage from '../components/FeaturePage';
import AddFeaturePage from '../components/AddFeaturePage';
import AddPurchasePage from '../components/AddPurchasePage';
import CartPage from '../components/CartPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={LandingPage} exact={true} />
        <Route path="/features" component={FeaturesPage} />
        <Route path="/feature/:id" component={FeaturePage} />
        <Route path="/create" component={AddFeaturePage} />
        <Route path="/purchase/:id" component={AddPurchasePage} />
        <Route path="/cart" component={CartPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
