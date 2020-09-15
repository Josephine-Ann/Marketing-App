import React from 'react';
import { connect } from 'react-redux';
import { startRemovePurchase } from '../actions/purchases';
import selectPurchasesSummary from '../selectors/purchasesSummary';
import purchasesPrice from '../selectors/purchasesPrice';
import purchasesFeatureIds from '../selectors/purchasesFeatureIds';
import { NavLink } from 'react-router-dom';
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import Button from 'react-bootstrap/Button'
import uuid from 'uuid';

export class CartPage extends React.Component {
  // onClick = (purchaseId) => {
  //   this.props.removePurchase(purchaseId);
  // }
  render() {
    return (
      <div id="cart-page">
        <h1>Order Summary</h1>
        <CardDeck id="cart-page-cards">
          {this.props.purchases.map((purchase) => {
            return <div key={uuid()}>
              <Card className="text-center">
                <Card.Header>{purchase.name}</Card.Header>
                <Card.Body>
                  <Card.Title>{purchase.amount}</Card.Title>
                  <Card.Text>
                    {purchase.description}
                  </Card.Text>
                  <NavLink to={"/purchaseedit/" + purchase.featureId}><Button variant="primary">Edit</Button></NavLink>
                </Card.Body>
                <Card.Footer className="text-muted">2 days ago</Card.Footer>
              </Card></div>;
          })}
          {this.props.purchaseDetails.map((purchase) => {
            return <div key={uuid()}>
              <Card className="text-center">
                <Card.Header>Your order</Card.Header>
                <Card.Body>
                  <Card.Title>You have ordered {purchase.amount} </Card.Title>
                  <Card.Text>
                    Your address is: {purchase.address}
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted">{purchase.extraInfo ? "Extra info: " + purchase.extraInfo : ""}</Card.Footer>
              </Card></div>;
          })}
        </CardDeck>
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
    purchasesFeatureIds: purchasesFeatureIds(state.features, state.purchases),
    purchaseDetails: state.purchases
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);


