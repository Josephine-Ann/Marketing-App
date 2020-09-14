import React from 'react';
import { connect } from 'react-redux';
import { removeFeature } from '../actions/features';
import { NavLink } from 'react-router-dom';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


const FeatureListItem = ({ name, description, amount, id, url, dispatch }) => (
  <div className="lit">
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={url} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {amount} - {description}
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

