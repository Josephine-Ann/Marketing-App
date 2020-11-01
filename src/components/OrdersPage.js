import React from 'react';
import { connect } from 'react-redux';
import { startRemovePurchase } from '../actions/purchases';
import { startAddPurchase } from '../actions/purchases';
import selectPurchasesSummary from '../selectors/purchasesSummaryBought';
import purchasesFeatureIds from '../selectors/purchasesFeatureIds';
import purchasesFromFeatures from '../selectors/purchasesFromFeatures';
import purchasesPrice from '../selectors/ordersPrice';
import { NavLink } from 'react-router-dom';
import CardDeck from 'react-bootstrap/CardDeck'
import uuid from 'uuid';
import CurrencyFormat from "react-currency-format";
import OrderPageItem from './OrderPageItem';
import Button from 'react-bootstrap/Button'
import individualOrders from '../selectors/individualOrdersAre';

export class OrdersPage extends React.Component {

  onClick = (purchaseId) => {
    this.props.startRemovePurchase(purchaseId);
    console.log(this.props.purchases)
  }
  render() {
    return (
      <div id="cart-page">
        <h1>Your orders</h1>
        <hr />
        <CardDeck id="cart-page-cards">
          <div key={uuid()}>
            {
              this.props.individualOrders.length === 0 ? (
                <div>
                  <p>No purchases</p>
                </div>
              ) : (
                  this.props.orders.map((order) => {
                    return <OrderPageItem key={uuid()} {...order} onClick={this.onClick} />
                  })
                )
            }
          </div>;
        </CardDeck>
      </div>

    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  startRemovePurchase: (id) => dispatch(startRemovePurchase(id)),
  startAddPurchase: (purchase) => dispatch(startRemovePurchase(purchase))
});

const mapStateToProps = (state) => {
  return {
    purchases: selectPurchasesSummary(state.features, state.purchases),
    purchasesPrice: purchasesPrice(state.features, state.purchases),
    purchasesFeatureIds: purchasesFeatureIds(state.features, state.purchases),
    purchasesFromFeatures: purchasesFromFeatures(state.features, state.purchases),
    purchaseDetails: state.purchases,
    individualOrders: individualOrders(state.orders, state.purchases, state.features),
    orders: state.orders
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OrdersPage);