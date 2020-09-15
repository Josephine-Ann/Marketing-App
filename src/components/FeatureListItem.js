import React from 'react';
import { connect } from 'react-redux';
import { removeFeature } from '../actions/features';
import { NavLink } from 'react-router-dom';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import CurrencyFormat from "react-currency-format";

const FeatureListItem = ({ name, description, amount, id, url, dispatch }) => (
  <div className="lit">
    <Card style={{ width: '18rem' }}>
      <Card.Img className="feature_card_img" variant="top" src={url} />
      <Card.Body>
        <Card.Title className="feature_card_title"> { name }</Card.Title>
        <CurrencyFormat
          renderText={(value) => (
            <Card.Text>{value}</Card.Text>
          )}
          decimalScale={2}
          value={amount / 100}
          displayType={"text"}
          thousandSeparator={true}
          suffix={" €"}
        />
        <Card.Text>
          {description}
        </Card.Text>
        <Button onClick={() => {
          dispatch(removeFeature({ id }));
        }} variant="primary">Remove</Button>
        <NavLink to={"/feature/" + id} activeClassName="is-active" exact={true}><Button>Take a look</Button></NavLink>
      </Card.Body>
    </Card>
  </div>
);


const mapStateToProps = (state) => {
  return {
    features: state.features
  }
}

export default connect(mapStateToProps)(FeatureListItem);

