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