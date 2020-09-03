import React from 'react';
import { connect } from 'react-redux';

const CartPage = (props) => {
  props.featuresIds.map(di => {
    props.features.find((x) => {
      if (x.id === di) {
        console.log(`You have: ${x.name} for ${x.amount} in your cart.`)
      }
    })
  })
  return (
    <div>
      <h1>cart page</h1>
      <h1>cart page</h1>
      <h1>cart page</h1>
      <h1>cart page</h1>
    </div>
  )
}




const mapStateToProps = (state) => {
  return {
    featuresIds: state.purchases.map((x) => {
      return x.featureId
    }),
    features: state.features
  };
};

export default connect(mapStateToProps)(CartPage);


