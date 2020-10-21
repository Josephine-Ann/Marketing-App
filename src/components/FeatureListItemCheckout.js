import React from 'react';
import { connect } from 'react-redux';
import { startAddPurchase } from '../actions/purchases';
import { NavLink } from 'react-router-dom';
import purchasesPrice from '../selectors/purchasesPrice';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import CurrencyFormat from "react-currency-format";
import lastAddress from '../selectors/lastAddress';

export class FeatureListItem extends React.Component {
  onSubmit = () => {
    this.props.startAddPurchase({ featureId: this.props.id, quantity: 1, address: '', extraInfo: '', amount: 0 })
    console.log(this.props.individualOrders)
  };
  render() {
    return (
      <div className="lit">
        <Card style={{ width: '18rem' }}>
          <Card.Img className="feature_card_img" variant="top" src={this.props.url} />
          <Card.Body>
            <Card.Title className="feature_card_title"> {this.props.name}</Card.Title>
            <CurrencyFormat
              renderText={(value) => (
                <span>{value}</span>
              )}
              decimalScale={2}
              value={this.props.amount / 100}
              displayType={"text"}
              thousandSeparator={true}
              suffix={" €"}
            />
            <Card.Text>
              {this.props.description}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    purchases: state.purchases,
    lastPurchaseAddress: lastAddress(state.purchases),
    purchasesPrice: purchasesPrice(state.features, state.purchases),
    individualOrders: individualOrder(state.orders, state.purchases, state.features),
  }
}


const mapDispatchToProps = (dispatch) => ({
  startAddPurchase: (purchase) => dispatch(startAddPurchase(purchase))
});

export default connect(mapStateToProps, mapDispatchToProps)(FeatureListItem);


