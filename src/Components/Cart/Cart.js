import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Container, Row, Col, Table } from "reactstrap";

const Cart = (props) => {

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
                {props.shoes > 0 ? (
                  <tr>
                    <th scope="row">1</th>
                    <td>Shoes</td>
                    <td>{}</td>
                    <td>$29.99</td>
                  </tr>
                ) : null}
                {props.camera > 0 ? (
                  <tr>
                    <th scope="row">2</th>
                    <td>Camera</td>
                    <td>{}</td>
                    <td>$99.99</td>
                  </tr>
                ) : null}
                {props.wallet > 0 ? (
                  <tr>
                    <th scope="row">3</th>
                    <td>Wallet</td>
                    <td>{}</td>
                    <td>$19.99</td>
                  </tr>
                ) : null}
                <tr>
                  <th scope="row">Total</th>
                  <td></td>
                  <td></td>
                  <td>
                    {"$"}
                  </td>
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
  };
};

export default connect(mapStateToProps)(Cart);
