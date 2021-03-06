import React from 'react';
import { connect } from 'react-redux';
import onePurchaseFromFeature from '../selectors/onePurchaseFromFeature';
import CurrencyFormat from "react-currency-format";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";


export class CartPageItemNoPic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      amount: props.amount,
      description: props.description,
      id: props.id,
      purchaseId: props.purchaseId
    };
  }
  onClick = () => {
    this.props.onClick({
      id: this.state.purchaseId
    })
  }
  render() {
    return (
      <List className="card_list">
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src={this.props.url} />
          </ListItemAvatar>

          <ListItemText
            primary={this.state.name}
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  className="inline inline_mobile"
                  color="textPrimary">
                  {this.state.description}
                </Typography>
                <CurrencyFormat
                  renderText={(value) => (
                    <span className="cart-page-price">{value}</span>
                  )}
                  decimalScale={2}
                  value={this.state.amount / 100}
                  displayType={"text"}
                  thousandSeparator={true}
                  suffix={"€"}
                />
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
      </List>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    purchaseId: onePurchaseFromFeature(props.id, state.purchases)
  };
};

export default connect(mapStateToProps, undefined)(CartPageItemNoPic);

