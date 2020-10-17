import React from 'react';
import { connect } from 'react-redux';
import PurchaseForm from './PurchaseForm';
import { startAddPurchase } from '../actions/purchases';
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
    this.props.purchases.forEach((indPurchase) => {
      let id = indPurchase.id
      this.props.startEditPurchase(id, purchase)
    })
    console.log(`Hi`)
  };

  onClick = (purchaseId) => {
    console.log(purchaseId)
  }

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
<<<<<<< HEAD
        <CardDeck >
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
=======
          <CardDeck >
            return <div key={uuid()} className="add-purchase-cart-item">
              {
                this.props.purchases.length === 0 ? (
                  <div>
                    <p>No purchases</p>
                  </div>
                ) : (
                    this.props.purchases.map((purchases) => {
                      return <CartPageItemNoPic key={uuid()} {...purchases} onClick={this.onClick} />;
                    })
                  )
              }
            </div>;
          </CardDeck>
        </div>

        {/* Payment section - Payment method */}
        <div className='payment__section'>
          <div className="payment__title">
            <h4>Payment Method</h4>
          </div>
          <div className="payment__details">
            {/* Stripe magic will go */}

            <form >
              <CardElement />

              {/* <div className='payment__priceContainer'>
                <CurrencyFormat
                  renderText={(value) => (
                    <h3>Order Total: {value}</h3>
                  )}
                  decimalScale={2}
                  value={2333}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div> */}

              {/* Errors */}
              {/* {error && <div>{error}</div>} */}
            </form>
          </div>
        </div>

>>>>>>> 4db2bc5b8c0497199558047f04f6696094b452cc
      </div>

    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    feature: state.features.find((feature) => feature.id === props.match.params.id),
    purchases: selectPurchasesSummary(state.features, state.purchases),
  }
}

const mapDispatchToProps = (dispatch) => ({
  startAddPurchase: (purchase) => dispatch(startAddPurchase(purchase)),
  startEditPurchase: (id, purchase) => dispatch(startEditPurchase(id, purchase)),
  startRemovePurchase: (id) => dispatch(startRemovePurchase(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddPurchasePage);