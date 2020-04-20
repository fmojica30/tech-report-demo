import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Container, Row, Col, Table } from "reactstrap";

const Cart = (props) => {

  const calculateTotal = () => {
    return 
  }
  return (
    <Fragment>
      <div style={{ textAlign: "center", marginTop: "15px" }}>
        <h2>Your Cart</h2>
      </div>
      <Container>
        <Row>
          <Col>
            <Table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Item</th>
                  <th>Amount</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Shoes</td>
                  <td>{props.shoes}</td>
                  <td>$29.99</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Camera</td>
                  <td>{props.camera}</td>
                  <td>$99.99</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Wallet</td>
                  <td>{props.wallet}</td>
                  <td>$19.99</td>
                </tr>
                <tr>
                  <th scope="row">Total</th>
                  <td></td>
                  <td></td>
                  <td>{"$"+((props.shoes * 29.99) + (props.wallet * 19.99) + (props.camera * 99.99)).toFixed(2).toString()}</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    shoes: state.shoes,
    wallet: state.wallet,
    camera: state.camera,
  };
};

export default connect(mapStateToProps)(Cart);
