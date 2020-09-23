import React from 'react';
import { connect } from 'react-redux';
import { startRemovePurchase } from '../actions/purchases';
import selectPurchasesSummary from '../selectors/purchasesSummary';
import purchasesPrice from '../selectors/purchasesPrice';
import purchasesFeatureIds from '../selectors/purchasesFeatureIds';
import { NavLink } from 'react-router-dom';
import CardDeck from 'react-bootstrap/CardDeck'
import uuid from 'uuid';
import CurrencyFormat from "react-currency-format";
import CartPageItem from './CartPageItem';
import Button from 'react-bootstrap/Button'

export class CartPage extends React.Component {

  onClick = (purchaseId) => {
    console.log(purchaseId)
    this.props.startRemovePurchase(purchaseId);
  }


  render() {
    return (
      <div id="cart-page">
        <h1>Your shopping Basket</h1>
        <hr />
        <CardDeck id="cart-page-cards">
          return <div key={uuid()}>
            {
              this.props.purchases.length === 0 ? (
                <div>
                  <p>No purchases</p>
                </div>
              ) : (
                  this.props.purchases.map((purchases) => {
                    return <CartPageItem key={uuid()} {...purchases} onClick={this.onClick} />;
                  })
                )
            }
          </div>;
        </CardDeck>
        <CurrencyFormat
          renderText={(value) => (
            <h2 className="cardPage_h2"> The total cost is {value}</h2>
          )}
          decimalScale={2}
          value={this.props.purchasesPrice / 100}
          displayType={"text"}
          thousandSeparator={true}
          suffix={" €"}
        />
        <NavLink to={"/purchase"}><Button>Proceed to checkout</Button></NavLink>
      </div>

    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  startRemovePurchase: (purchase) => dispatch(startRemovePurchase(purchase))
});

const mapStateToProps = (state) => {
  return {
    purchases: selectPurchasesSummary(state.features, state.purchases),
    purchasesPrice: purchasesPrice(state.features, state.purchases),
    purchasesFeatureIds: purchasesFeatureIds(state.features, state.purchases),
    purchaseDetails: state.purchases
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);


