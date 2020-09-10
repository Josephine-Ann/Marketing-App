import React from 'react';
import { connect } from 'react-redux';
import { startRemovePurchase } from '../actions/purchases';
import selectPurchasesSummary from '../selectors/purchasesSummary';
import purchasesPrice from '../selectors/purchasesPrice';
import purchasesFeatureIds from '../selectors/purchasesFeatureIds';
import { NavLink } from 'react-router-dom';
import uuid from 'uuid';

export class CartPage extends React.Component {
  // onClick = (purchaseId) => {
  //   this.props.removePurchase(purchaseId);
  // }
  render() {
    return (
      <div>
        <h1>Order Summary</h1>
        {this.props.purchases.map((purchase) => {
          return <div key={uuid()}><h1>You have put a {purchase.name}, at the price of {purchase.amount} in your cart.</h1></div>;
        })}
        {this.props.purchasesFeatureIds.map((purchaseId) => {
          return <div key={uuid()}><NavLink to={"/purchaseedit/" + purchaseId}><button>Edit item</button></NavLink></div>;
        })}
        <p>The total cost is {this.props.purchasesPrice}</p>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  removePurchase: (purchase) => dispatch(startRemovePurchase(purchase))
});

const mapStateToProps = (state) => {
  return {
    purchases: selectPurchasesSummary(state.features, state.purchases),
    purchasesPrice: purchasesPrice(state.features, state.purchases),
    purchasesFeatureIds: purchasesFeatureIds(state.features, state.purchases)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);


