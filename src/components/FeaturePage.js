import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

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
      <NavLink to={"/purchase/" + props.feature.id} activeClassName="is-active" exact={true}><button>Buy me!</button></NavLink>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    feature: state.features.find((feature) => feature.id === props.match.params.id)
  }
}

const mapDispatchToProps = (dispatch, props) => ({
  startAddPurchase: (purchase) => dispatch(startAddPurchase(id, purchase))
});

export default connect(mapStateToProps, mapDispatchToProps)(FeaturePage);
