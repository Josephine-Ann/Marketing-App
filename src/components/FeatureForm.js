import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default class FeatureForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            description: props.feature ? props.feature.description : '',
            url: props.feature ? props.feature.url : '',
            name: props.feature ? props.feature.name : '',
            amount: props.feature ? (props.feature.amount / 100).toString() : '',
            createdAt: props.feature ? moment(props.feature.createdAt) : moment(),
            calendarFocused: false,
            error: ''
        };
    }
    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }));
    };
    onNameChange = (e) => {
        const name = e.target.value;
        this.setState(() => ({ name }));
    };
    onUrlChange = (e) => {
        const url = e.target.value;
        this.setState(() => ({ url }));
    };
    onAmountChange = (e) => {
        const amount = e.target.value;

        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }));
        }
    };
    onDateChange = (createdAt) => {
        if (createdAt) {
            this.setState(() => ({ createdAt }));
        }
    };
    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused }));
    };
    onSubmit = (e) => {
        e.preventDefault();

        if (!this.state.description || !this.state.amount) {
            this.setState(() => ({ error: 'Please provide description and amount.' }));
        } else {
            this.setState(() => ({ error: '' }));
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf(),
                name: this.state.name,
                url: this.state.url
            });
        }
    };
    render() {
        return (
            <div id="feature-form">
                {this.state.error && <p>{this.state.error}</p>}
                <h1>Add Feature</h1>
                <Form onSubmit={this.onSubmit}>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Name</Form.Label>
                        <Form.Control rows="3" onChange={this.onNameChange}
                            value={this.state.name}
                            placeholder="Add a name for your feature (optional)"
                        />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Description</Form.Label>
                        <Form.Control rows="3" onChange={this.onDescriptionChange}
                            value={this.state.description}
                            autoFocus placeholder="Description" />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Please provide a URL for the image</Form.Label>
                        <Form.Control rows="3" onChange={this.onUrlChange}
                            value={this.state.url}
                            placeholder="Please write url of image"
                            autoFocus />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Please provide a price for the product</Form.Label>
                        <Form.Control rows="3" onChange={this.onAmountChange}
                            value={this.state.amount}
                            placeholder="Amount"
                            autoFocus />
                    </Form.Group>
                    <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />
                    <Button onClick={this.onSubmit}>Submit</Button>
                </Form>
                {this.state.error && <p>{this.state.error}</p>}
            </div>
        )
    }
}