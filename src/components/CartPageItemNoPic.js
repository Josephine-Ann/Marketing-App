import React from 'react';
import { connect } from 'react-redux';
import onePurchaseFromFeature from '../selectors/onePurchaseFromFeature';

import Button from 'react-bootstrap/Button'
import CurrencyFormat from "react-currency-format";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";


export class CartPageItemNoPic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      amount: props.amount,
      description: props.description,
      id: props.id
    };
  }
  onClick = () => {
    this.props.onClick({
      id: this.props.purchaseId
    })
  }
  render() {
    return (
      <List className="card_list">
        <ListItem alignItems="flex-start">
          <ListItemText
            primary={this.state.name}
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  className="inline"
                  color="textPrimary">
                  products description -
                </Typography>
                <CurrencyFormat
                  renderText={(value) => (
                    <span className="cart-page-price">€ 23.00</span>
                  )}
                  decimalScale={2}
                  value={this.state.amount / 100}
                  displayType={"text"}
                  thousandSeparator={true}
                  suffix={" €"}
                />
              </React.Fragment>
            }
          />

          <Button className="cart-page-item-btn2" onClick={this.onClick} variant="primary">Delete</Button>
        </ListItem>
        <Divider variant="inset" component="li" />
      </List>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    purchaseId: onePurchaseFromFeature(props.id, state.purchases),
    name: props.name
  };
};

export default connect(mapStateToProps, undefined)(CartPageItemNoPic);