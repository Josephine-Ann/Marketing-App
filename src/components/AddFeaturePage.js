import React from 'react';
import { connect } from 'react-redux';
import FeatureForm from './FeatureForm';
import { startAddFeature } from '../actions/features';

export class AddFeaturePage extends React.Component {
    onSubmit = (feature) => {
        this.props.startAddFeature(feature);
        this.props.history.push('/');
    };
    render() {
        return (
            <div>
                <h1>Hi</h1>
                <h1>Hi</h1>
                <h1>Hi</h1>
                <h1>Hi</h1>
                <h1>Add Feature</h1>
                <FeatureForm
                    onSubmit={this.onSubmit}
                />
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    startAddFeature: (feature) => dispatch(startAddFeature(feature))
});

export default connect(undefined, mapDispatchToProps)(AddFeaturePage);