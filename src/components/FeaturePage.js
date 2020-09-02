import React from 'react';
import { connect } from 'react-redux';

const FeaturePage = (props) => {
  return (
    <div>
      <h1>hi</h1>
      <h1>hi</h1>
      <h1>hi</h1>
      <h1>hi</h1>
      <h1>hi</h1>
      <p>{props.feature.name}</p>
      <p>{props.feature.description}</p>
      <p>{props.feature.amount}</p>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    feature: state.features.find((feature) => feature.id === props.match.params.id)
  }
}

export default connect(mapStateToProps)(FeaturePage);
