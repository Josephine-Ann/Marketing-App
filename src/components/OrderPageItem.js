import React from 'react';
import { connect } from 'react-redux';
// import onePurchaseFromFeature from '../selectors/onePurchaseFromFeature';
// import Button from 'react-bootstrap/Button'
import CurrencyFormat from "react-currency-format";
// import List from "@material-ui/core/List";
// import ListItem from "@material-ui/core/ListItem";
// import Divider from "@material-ui/core/Divider";
// import ListItemText from "@material-ui/core/ListItemText";
// import ListItemAvatar from "@material-ui/core/ListItemAvatar";
// import Avatar from "@material-ui/core/Avatar";
import individualOrders from '../selectors/individualOrders';
import individualOrderPrices from '../selectors/individualOrderPrices';
import uuid from 'uuid';
import {
  Accordion, AccordionSummary,
  AccordionDetails, Typography,
  List, ListItem, Divider,
  ListItemText, ListItemAvatar, Avatar
} from '@material-ui/core';
// import AccordionSummary from '@material-ui/core/AccordionSummary';
// import AccordionDetails from '@material-ui/core/AccordionDetails';
// import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Moment from 'react-moment';


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
      <div className="accordion">
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content">
            <Typography className="accordion__header">
              <Moment format='MMMM Do YYYY, h:mm a'>{this.props.date}</Moment>
            </Typography>
          </AccordionSummary>
          <AccordionDetails className="accordion__details">
            {
              this.props.individualOrders[this.props.index - 1].map((order) => {
                return <div key={uuid()}>
                  <List className="card_list">
                    <ListItem alignItems="flex-start">
                      <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src={order.url} />
                      </ListItemAvatar>
                      <ListItemText
                        primary={order.name}
                        secondary={
                          <React.Fragment>
                            <Typography
                              component="span"
                              variant="body2"
                              className="inline"
                              color="textPrimary">
                              {order.name + " "}
                            </Typography>
                            &nbsp;&nbsp;&nbsp;&nbsp; {order.description}
                          </React.Fragment>
                        }
                      />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                  </List>
                </div>
              })
            }
          </AccordionDetails>
        </Accordion>
        <CurrencyFormat
          renderText={(value) => (
            <span className="order__page__price">{value}</span>
          )}
          decimalScale={2}
          value={this.props.individualOrderPrices[this.props.index - 1]}
          displayType={"text"}
          thousandSeparator={true}
          suffix={" €"}
        />
        <Divider variant="inset" />
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
