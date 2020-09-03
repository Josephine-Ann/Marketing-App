import React from 'react';
import { connect } from 'react-redux';
import selectPurchases from '../selectors/purchases';
import uuid from 'uuid';


const CartPage = (props) => {
  return (
    <div>
      {props.purchases.map((purchase) => {
        return <div key={uuid()}><h1>{purchase}</h1><button>Remove</button></div>;
      })}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    purchases: selectPurchases(state.features, state.purchases)
  };
};

export default connect(mapStateToProps)(CartPage);


