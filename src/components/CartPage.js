import React from 'react';
import { connect } from 'react-redux';
import { startRemovePurchase } from '../actions/purchases';
import selectPurchasesSummary from '../selectors/purchasesSummary';
import uuid from 'uuid';


const CartPage = (props) => {
  return (
    <div>
      <h1>Order Summary</h1>
      {props.purchases.map((purchase) => {
        return <div key={uuid()}><h1>You have bought a {purchase.name}, at the price of {purchase.amount}</h1></div>;
      })}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    purchases: selectPurchasesSummary(state.features, state.purchases),
    purchasesAll: state.purchases
  };
};

export default connect(mapStateToProps)(CartPage);


