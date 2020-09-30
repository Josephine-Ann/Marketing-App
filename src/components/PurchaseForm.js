import React from 'react';
// import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import lastAddress from '../selectors/lastAddress';
import { connect } from 'react-redux';
import { Col, Row, Form } from "react-bootstrap";

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
    const { id } = this.props;
    return (
      <div className="apurchase-items" id="form-purchase">
        <Form onSubmit={this.onSubmit}>
          <Form.Row>
            <Form.Group as={Col} controlId={id}>
              <Form.Control id="inlineFormInputName" placeholder="Your Name" />
            </Form.Group>

            <Form.Group as={Col} controlId={id}>
              <Form.Control id="inlineFormInputName" placeholder="Your Lastname" />
            </Form.Group>
          </Form.Row>

          <Form.Group controlId={id} onChange={this.onAddressChange} value={this.state.address}>
            <Form.Control placeholder="Your Address" />
          </Form.Group>
          <Form.Group controlId={id} onChange={this.onInfoChange} value={this.state.extraInfo}>
            <Form.Control placeholder="Additional Information" />
          </Form.Group>

          <Form.Row>
            <Form.Group as={Col} md="6" controlId="validationCustom03">
              <Form.Control type="text" placeholder="City" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationCustom04">
              <Form.Control type="text" placeholder="State" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
          </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationCustom05">
              <Form.Control type="text" placeholder="Zip" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div >
    )
  }
}

const mapStateToProps = (state) => {
  return {
    lastPurchaseAddress: lastAddress(state.purchases)
  }
}


export default connect(mapStateToProps, undefined)(PurchaseForm);