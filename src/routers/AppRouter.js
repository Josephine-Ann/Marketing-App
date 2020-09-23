
import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import LandingPage from '../components/LandingPage';
import FeaturesPage from '../components/FeaturesPage';
import FeaturePage from '../components/FeaturePage';
import LoginPage from '../components/LoginPage';
import AddFeaturePage from '../components/AddFeaturePage';
import AddPurchasePage from '../components/AddPurchasePage';
import EditPurchasePage from '../components/EditPurchasePage';
import CartPage from '../components/CartPage';
import NotFoundPage from '../components/NotFoundPage';
import Navbar from '../components/Navbar';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Navbar />
      <Switch>
        <Route path="/" component={LoginPage} exact={true} />
        <Route path="/dashboard" component={LandingPage} exact={true} />
        <Route path="/features" component={FeaturesPage} />
        <Route path="/feature/:id" component={FeaturePage} />
        <Route path="/create" component={AddFeaturePage} />
        <Route path="/purchase" component={AddPurchasePage} />
        <Route path="/purchaseedit/:id" component={EditPurchasePage} />
        <Route path="/cart" component={CartPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
