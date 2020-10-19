import React from 'react';
import { connect } from 'react-redux';
import { startAddPurchase } from '../actions/purchases';
import { NavLink } from 'react-router-dom';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import CurrencyFormat from "react-currency-format";
import lastAddress from '../selectors/lastAddress';

export class FeatureListItem extends React.Component {
  onSubmit = () => {
    this.props.startAddPurchase({ featureId: this.props.id, quantity: 1, address: '', extraInfo: '', amount: 0 })

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
            <Button onClick={this.onSubmit} variant="primary">Buy</Button>
            <NavLink to={"/feature/" + this.props.id} activeClassName="is-active" exact={true}><Button>Take a look</Button></NavLink>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    purchases: state.purchases,
    lastPurchaseAddress: lastAddress(state.purchases)
  }
}


const mapDispatchToProps = (dispatch) => ({
  startAddPurchase: (purchase) => dispatch(startAddPurchase(purchase))
});

export default connect(mapStateToProps, mapDispatchToProps)(FeatureListItem);


