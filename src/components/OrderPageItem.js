import React from 'react';
import { connect } from 'react-redux';
import onePurchaseFromFeature from '../selectors/onePurchaseFromFeature';
import Button from 'react-bootstrap/Button'
import CurrencyFormat from "react-currency-format";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import individualOrders from '../selectors/individualOrders';
import individualOrderPrices from '../selectors/individualOrderPrices';
import uuid from 'uuid';

export class OrderPageItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      amount: props.amount,
      description: props.description,
      url: props.url
    };
  }
  render() {
    return (
      <div>
        <p>Order made on: {(new Date(this.props.date)).toString()}</p>
        {
          this.props.individualOrders[this.props.index - 1].map((order) => {
            return <div key={uuid()}>
              <p>Product name: {order.name}</p>
              <p>Product URL: {order.url}</p>
            </div>
          })
        }
        <p>Price of entire order: {this.props.individualOrderPrices[this.props.index - 1]}</p>
       __________________________________________________________________________________________________
       __________________________________________________________________________________________________
       __________________________________________________________________________________________________
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    individualOrders: individualOrders(state.orders, state.purchases, state.features),
    orders: state.orders,
    individualOrderPrices: individualOrderPrices(state.orders, state.purchases, state.features)
  };
};

export default connect(mapStateToProps, undefined)(OrderPageItem);
