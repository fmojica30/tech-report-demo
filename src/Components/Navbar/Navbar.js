import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  const [navState, setNavState] = useState({
    itemsActive: true,
    cartActive: false,
  });

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand>Store</NavbarBrand>
        <Nav className="mr-auto" navbar>
          <NavItem active={navState.itemsActive}>
            <NavLink
              onClick={() => {
                setNavState({ itemsActive: true, cartActive: false });
              }}
            >
              Items
            </NavLink>
          </NavItem>
          <NavItem active={navState.cartActive}>
            <NavLink
              onClick={() => {
                setNavState({ itemsActive: false, cartActive: true });
              }}
            >
              Cart
            </NavLink>
          </NavItem>
        </Nav>
        <NavbarText>React Redux and Router Demo</NavbarText>
      </Navbar>
    </div>
  );
};

export default NavBar;
