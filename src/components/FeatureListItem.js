import React from 'react';
import { connect } from 'react-redux';
import { removeFeature } from '../actions/features';
import { NavLink } from 'react-router-dom';

const FeatureListItem = ({ name, description, amount, id, dispatch }) => (
  <div>
    <h3>{name}</h3>
    <p>{amount} - {description}</p>
    <button onClick={() => {
      dispatch(removeFeature({ id }));
    }}>Remove</button>
    <NavLink to={"/feature/" + id} activeClassName="is-active" exact={true}><button>Take a look</button></NavLink>
  </div>
);


const mapStateToProps = (state) => {
  return {
    features: state.features
  }
}

export default connect(mapStateToProps)(FeatureListItem);

