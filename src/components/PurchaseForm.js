import React from 'react';

export default class PurchaseForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            address: props.purchase ? props.purchase.address : '',
            name: props.purchase ? props.purchase.name : '',
            amount: props.purchase ? (props.purchase.amount / 100).toString() : '',
            error: ''
        };
    }
    onAddressChange = (e) => {
        const address = e.target.value;
        this.setState(() => ({ address }));
    };
    onNameChange = (e) => {
        const name = e.target.value;
        this.setState(() => ({ name }));
    };
    onQuantityChange = (e) => {
        const quantity = e.target.value;

        if (!quantity || quantity.match(/^\d+$/)) {
            this.setState(() => ({ quantity }));
        }
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
                name: this.state.name
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
                        placeholder="Address"
                        autoFocus
                        value={this.state.address}
                        onChange={this.onAddressChange}
                    />
                    <input
                        type="text"
                        placeholder="Quantity"
                        value={this.state.quantity}
                        onChange={this.onQuantityChange}
                    />
                    <textarea
                        placeholder="Add extra deliver info for your purchase (optional)"
                        value={this.state.name}
                        onChange={this.onNameChange}
                    >
                    </textarea>
                    <button>Add purchase</button>
                </form>
            </div>
        )
    }
}