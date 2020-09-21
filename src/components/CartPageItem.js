import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import moment from 'moment';
import { NavLink } from 'react-router-dom';
import onePurchaseFromFeature from '../selectors/onePurchaseFromFeature';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import CurrencyFormat from "react-currency-format";

import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";


export class CartPageItem extends React.Component {
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
                                    className="inline"
                                    color="textPrimary"
                                >{this.state.description} -
                                </Typography>
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <Card.Text className="cart-page-price">{value}</Card.Text>
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
                    <Button className="cart-page-item-btn" onClick={this.onClick} variant="primary">Delete</Button>
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

export default connect(mapStateToProps, undefined)(CartPageItem);