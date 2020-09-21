import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import lastAddress from '../selectors/lastAddress';
import { connect } from 'react-redux';


class PurchaseForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            address: props.purchase ? props.purchase.address : '',
            extraInfo: props.purchase ? props.purchase.extraInfo : '',
            quantity: props.purchase ? (props.purchase.quantity / 100).toString() : 1,
            error: '',
            featureId: ''
        };
    }
    onAddressChange = (e) => {
        const address = e.target.value;
        this.setState(() => ({ address }));
    };
    onInfoChange = (e) => {
        const extraInfo = e.target.value;
        this.setState(() => ({ extraInfo }));
    };
    onSubmit = (e) => {
        e.preventDefault();

        if (!this.state.address) {
            this.setState(() => ({ error: 'Please provide address.' }));
        } else {
            this.setState(() => ({ error: '' }));
            this.props.onSubmit({
                address: this.state.address,
                extraInfo: this.state.extraInfo
            });
        }
    };
    render() {
        return (
            <div className="apurchase-items" id="form-purchase">
                <Form onSubmit={this.onSubmit}>
                    <Form.Group controlId="exampleForm.ControlInput1" onChange={this.onAddressChange} value={this.state.address}>
                        <Form.Label>Address</Form.Label>
                        <Form.Control placeholder="33 New Street" />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput1" onChange={this.onInfoChange} value={this.state.extraInfo}>
                        <Form.Label>Additional Information (Optional) </Form.Label>
                        <Form.Control placeholder="Leave on porch" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                  </Button>
                </Form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        lastPurchaseAddress: lastAddress(state.purchases)
    }
}


export default connect(mapStateToProps, undefined)(PurchaseForm);