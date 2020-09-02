import React from 'react';
import { connect } from 'react-redux';
import PurchaseForm from './PurchaseForm';
import { startAddPurchase } from '../actions/purchases';

export class AddPurchasePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }
    onSubmit = (purchase) => {
        this.props.startAddPurchase(purchase);
        this.props.history.push('/');
    };
    render() {
        return (
            <div>
                <h1>Hi</h1>
                <h1>Hi</h1>
                <h1>Hi</h1>
                <h1>Hi</h1>
                <h1>Add purchase</h1>
                <p>{this.props.feature.name}</p>
                <p>{this.props.feature.description}</p>
                <p>{this.props.feature.amount}</p>
                <PurchaseForm
                    onSubmit={this.onSubmit}
                />
            </div>
        );
    }
}

const mapStateToProps = (state, props) => {
    return {
        feature: state.features.find((feature) => feature.id === props.match.params.id)
    }
}

const mapDispatchToProps = (dispatch) => ({
    startAddPurchase: (purchase) => dispatch(startAddPurchase(purchase))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddPurchasePage);