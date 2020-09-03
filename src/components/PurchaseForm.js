import React from 'react';

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
                        placeholder="Add extra delivery info for your purchase (optional)"
                        value={this.state.extraInfo}
                        onChange={this.onInfoChange}
                    >
                    </textarea>
                    <button>Add purchase</button>
                </form>
            </div>
        )
    }
}
