import React from 'react';
import { connect } from 'react-redux';
import FeatureListItem from './FeatureListItem';
import selectFeatures from '../selectors/features';
import CardDeck from 'react-bootstrap/CardDeck'


const FeatureList = (props) => (
  <div id="feature-list">
    <h1>Feature List</h1>
    <CardDeck>
      {props.features.map((feature) => {
        return <FeatureListItem key={feature.id} {...feature} />;
      })}
    </CardDeck>
  </div>
);

const mapStateToProps = (state) => {
  return {
    features: selectFeatures(state.features, state.filters)
  };
};

export default connect(mapStateToProps)(FeatureList);
