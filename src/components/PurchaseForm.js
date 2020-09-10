import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default class PurchaseForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            address: props.purchase ? props.purchase.address : '',
            extraInfo: props.purchase ? props.purchase.extraInfo : '',
            quantity: props.purchase ? (props.purchase.quantity / 100).toString() : '',
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
    onQuantityChange = (e) => {
        const quantity = e.target.value;

        if (!quantity || quantity.match(/^\d+$/)) {
            this.setState(() => ({ quantity }));
        }
    };
    onSubmit = (e) => {
        e.preventDefault();

        if (!this.state.address || !this.state.quantity) {
            this.setState(() => ({ error: 'Please provide address and quantity.' }));
        } else {
            this.setState(() => ({ error: '' }));
            this.props.onSubmit({
                address: this.state.address,
                quantity: this.state.quantity,
                extraInfo: this.state.extraInfo
            });
        }
    };
    render() {
        return (
            <div>
                <Form onSubmit={this.onSubmit}>
                    <Form.Group controlId="exampleForm.ControlInput1" onChange={this.onAddressChange} value={this.state.quantity}>
                        <Form.Label>Address</Form.Label>
                        <Form.Control placeholder="33 New Street" />
                    </Form.Group>
                    <Form.Group value={this.state.quantity} onChange={this.onQuantityChange}
                        controlId="exampleForm.ControlSelect1">
                        <Form.Label>Quantity</Form.Label>
                        <Form.Control as="select">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Form.Control>
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
