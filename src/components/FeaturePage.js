import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


const FeaturePage = (props) => {
  return (
    <div>
      <Card className="bg-dark text-white feature">
        <Card.Img src={props.feature.url} alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title>{props.feature.name}</Card.Title>
          <Card.Text>
            <p>{props.feature.description}</p>
            <p>{props.feature.amount}</p>
          </Card.Text>
          <NavLink to={"/purchase/" + props.feature.id} activeClassName="is-active" exact={true}><Button>Buy me!</Button></NavLink>
        </Card.ImgOverlay>
      </Card>
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
