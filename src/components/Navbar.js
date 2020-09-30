import React from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import cartCounter from '../selectors/cartCounter';
// nodejs library that concatenates strings
import classnames from "classnames";
import { startLogout } from '../actions/auth';
import { startLogin } from '../actions/auth';

// reactstrap components
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
} from "reactstrap";

import Badge from '@material-ui/core/Badge';
import Button from '@material-ui/core/Button';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';


function ExamplesNavbar(props) {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 299 ||
        document.body.scrollTop > 299
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 300 ||
        document.body.scrollTop < 300
      ) {
        setNavbarColor("navbar-transparent");
      }
    };

    window.addEventListener("scroll", updateNavbarColor);

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <Navbar
      className={classnames("fixed-top", navbarColor)}
      color-on-scroll="300"
      expand="lg"
    >
      <Container>
        <div className="navbar-translate">
          <h3><strong>JOCHA</strong></h3>
          <button
            aria-expanded={navbarCollapse}
            className={classnames("navbar-toggler navbar-toggler", {
              toggled: navbarCollapse,
            })}
            onClick={toggleNavbarCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className="justify-content-end"
          navbar
          isOpen={navbarCollapse}
        >
          <Nav navbar>
            <NavItem>
              <NavLink to="/" tag={Link}> Home
              </NavLink>
            </NavItem>

            <NavItem>
              <button onClick={props.startLogin}>Login</button>
            </NavItem>
            <NavItem>
              <NavLink to="/features" tag={Link}> Features Page
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink className="nav-cart-link" to="/cart" tag={Link}>
                <Badge badgeContent={props.cartCounter} color="primary">
                  <ShoppingBasketIcon />
                </Badge>
              </NavLink>
            </NavItem>

            <NavItem>
              <Button
                className="nav-cart-button" variant="contained"
                size="small" onClick={props.startLogout}
                startIcon={<ExitToAppIcon />}>
                Logout
              </Button>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

const mapStateToProps = (state) => {
  return {
    cartCounter: cartCounter(state.purchases)
  }
}

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout()),
  startLogin: () => dispatch(startLogin())

});

export default connect(mapStateToProps, mapDispatchToProps)(ExamplesNavbar);

// export default ExamplesNavbar;

