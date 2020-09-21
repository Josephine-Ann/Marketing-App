import React from 'react';
import { connect } from 'react-redux';
import PurchaseForm from './PurchaseForm';
import { startAddPurchase } from '../actions/purchases';
import { startEditPurchase } from '../actions/purchases';
import selectPurchasesSummary from '../selectors/purchasesSummary';
import FeatureListItemCheckout from './FeatureListItemCheckout';
import CardDeck from 'react-bootstrap/CardDeck'
import uuid from 'uuid';


export class AddPurchasePage extends React.Component {
    onSubmit = (purchase) => {
        this.props.purchases.forEach((indPurchase) => {
            let id = indPurchase.id
            this.props.startEditPurchase(id, purchase)
        })
    };
    render() {
        return (
            <div id="add-purchase-area">
                <PurchaseForm
                    onSubmit={this.onSubmit}
                />
                <CardDeck>
                    {this.props.features.map((feature) => {
                        return <FeatureListItemCheckout key={uuid()} {...feature} />;
                    })}
                </CardDeck>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => {
    return {
        feature: state.features.find((feature) => feature.id === props.match.params.id),
        features: selectPurchasesSummary(state.features, state.purchases),
        purchases: state.purchases,
    }
}

const mapDispatchToProps = (dispatch) => ({
    startAddPurchase: (purchase) => dispatch(startAddPurchase(purchase)),
    startEditPurchase: (id, purchase) => dispatch(startEditPurchase(id, purchase))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddPurchasePage);