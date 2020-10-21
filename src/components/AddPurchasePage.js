import React from 'react';
import { connect } from 'react-redux';
import individualOrders from '../selectors/individualOrders';
import individualOrderPrices from '../selectors/individualOrderPrices';
import PurchaseForm from './PurchaseForm';
import { startAddPurchase } from '../actions/purchases';
import { startAddOrder } from '../actions/orders';
import { startEditPurchase } from '../actions/purchases';
import { startRemovePurchase } from '../actions/purchases';
import selectPurchasesSummary from '../selectors/purchasesSummary';
import CardDeck from 'react-bootstrap/CardDeck'
import uuid from 'uuid';
import { CartPageItemNoPic } from './CartPageItemNoPic';
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";

export class AddPurchasePage extends React.Component {
  onSubmit = (purchase) => {
    this.props.startAddOrder({ orderId: purchase.orderId, index: this.props.orders.length + 1 })
    this.props.realPurchases.forEach((indPurchase) => {
      if (indPurchase.bought === false) {
        this.props.startEditPurchase(indPurchase.id, { address: purchase.address, extraInfo: purchase.extraInfo, bought: purchase.bought, orderId: purchase.orderId })
      }
    })
    this.props.history.push('/orders');
  };

  render() {

    return (
      <div >
        <div id="add-purchase-area">

          <PurchaseForm
            className="add-purchase-form"
            onSubmit={this.onSubmit}
          />
          {/* <CardDeck>
          {this.props.features.map((feature) => {
            return <FeatureListItemCheckout key={uuid()} {...feature} />;
          })}
        </CardDeck> */}
          <CardDeck>
            return <div key={uuid()} className="add-purchase-cart-item">
              {
                this.props.purchases.length === 0 ? (
                  <div>
                    <p>No purchases</p>
                  </div>
                ) : (
                    this.props.purchases.map((purchase) => {
                      return <CartPageItemNoPic key={uuid()} {...purchase} onClick={this.onClick} />;
                    })
                  )
              }
            </div>;
        </CardDeck>
        </div>
      </div>

    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    feature: state.features.find((feature) => feature.id === props.match.params.id),
    purchases: selectPurchasesSummary(state.features, state.purchases),
    realPurchases: state.purchases,
    orders: state.orders,
    individualOrderPrices: individualOrderPrices(state.orders, state.purchases, state.features)
  }
}

const mapDispatchToProps = (dispatch) => ({
  startAddPurchase: (purchase) => dispatch(startAddPurchase(purchase)),
  startAddOrder: (orderId) => dispatch(startAddOrder(orderId)),
  startEditPurchase: (id, purchase) => dispatch(startEditPurchase(id, purchase)),
  startRemovePurchase: (id) => dispatch(startRemovePurchase(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddPurchasePage);