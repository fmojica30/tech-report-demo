import React from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

const Home = (props) => {
  return (
    <div style={{ alignItems: "center", textAlign: "center" }}>
      <h1 style={{ margin: "75px" }}>Welcome to Our Store</h1>
      <Link to="/store">
        <Button style={{margin: "30px"}}>Go To Store</Button>
      </Link>
      <Link to="cart">
        <Button>Go To Cart</Button>
      </Link>
    </div>
  );
};

export default Home;
