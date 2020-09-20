import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import moment from 'moment';
import { NavLink } from 'react-router-dom';
import onePurchaseFromFeature from '../selectors/onePurchaseFromFeature';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import CurrencyFormat from "react-currency-format";

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
            <Card className="text-center">
                <Card.Header>{this.state.name}</Card.Header>
                <Card.Body>
                    <CurrencyFormat
                        renderText={(value) => (
                            <Card.Title>{value}</Card.Title>
                        )}
                        decimalScale={2}
                        value={this.state.amount / 100}
                        displayType={"text"}
                        thousandSeparator={true}
                        suffix={" €"}
                    />
                    <Card.Text>
                        {this.state.description}
                    </Card.Text>
                    <Button onClick={this.onClick} variant="primary">Delete</Button>
                </Card.Body>
                <Card.Footer className="text-muted">2 days ago</Card.Footer>
            </Card>
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