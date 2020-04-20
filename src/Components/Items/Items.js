import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

// Image imports
import Shoes from "../../Static/Images/Shoes.jpg";
import Wallet from "../../Static/Images/Wallet.jpg";
import DSLR from "../../Static/Images/DSLR.jpg";



const Items = (props) => {
  return (
    <div style={{ textAlign: "center", marginTop: "15px" }}>
      <h2>Items</h2>
      <Container>
        <Row>
          <Col>
            <Card>
              <CardImg
                top
                width="100%"
                height="230px"
                src={DSLR}
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle>Camera</CardTitle>
                <CardSubtitle>High Quality DSLR</CardSubtitle>
                <Button style={{margin: "15px"}}>Add to cart</Button>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card>
              <CardImg
                top
                width="100%"
                src={Shoes}
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle>White Shoes</CardTitle>
                <CardSubtitle>Comfortable Shoes</CardSubtitle>
                <Button style={{margin: "15px"}}>Add to Cart</Button>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card>
              <CardImg
                top
                width="100%"
                height="230px"
                src={Wallet}
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle>Wallet</CardTitle>
                <CardSubtitle>High quality leather wallet</CardSubtitle>
                <Button style={{margin: "15px"}}>Add to Cart</Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Items;
