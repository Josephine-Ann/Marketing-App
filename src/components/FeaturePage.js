import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import CurrencyFormat from "react-currency-format";

const FeaturePage = (props) => {
  return (
    <div className="feature">
      <Card className="feature_card">
        <Card.Img className="feature_img" src={props.feature.url} alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title className="feature__title">{props.feature.name}</Card.Title>
          <Card.Text>
            <p className="feature__p">{props.feature.description}</p>
            <CurrencyFormat
              renderText={(value) => (
                <span className="feature__p feature__price ">{value}</span>
              )}
              decimalScale={2}
              value={props.feature.amount / 100}
              displayType={"text"}
              thousandSeparator={true}
              suffix={" €"}
            />
          </Card.Text>
          <NavLink to={"/purchase/" + props.feature.id}
            activeClassName="is-active"
            exact={true}>
            <Button>Buy me!</Button>
          </NavLink>
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
