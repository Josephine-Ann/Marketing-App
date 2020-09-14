import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

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
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        placeholder="Description"
                        autoFocus
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                    />
                    <input
                        type="url"
                        placeholder="Please write url of image"
                        autoFocus
                        value={this.state.url}
                        onChange={this.onUrlChange}
                    />
                    <input
                        type="text"
                        placeholder="Amount"
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    />
                    <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />
                    <textarea
                        placeholder="Add a name for your feature (optional)"
                        value={this.state.name}
                        onChange={this.onNameChange}
                    >
                    </textarea>
                    <button>Add feature</button>
                </form>
            </div>
        )
    }
}