import React from 'react';
import { connect } from 'react-redux';
import FeatureListItem from './FeatureListItem';
import selectFeatures from '../selectors/features';

const FeatureList = (props) => (
  <div>
    <h1>Feature List</h1>
    {props.features.map((feature) => {
      return <FeatureListItem key={feature.id} {...feature} />;
    })}
  </div>
);

const mapStateToProps = (state) => {
  return {
    features: selectFeatures(state.features, state.filters)
  };
};

export default connect(mapStateToProps)(FeatureList);
