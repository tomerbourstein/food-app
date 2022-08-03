import ListGroup from "react-bootstrap/ListGroup";
import Badge from "react-bootstrap/Badge";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import classes from "./CheckoutContent.module.css";
const CheckoutContent = (props) => {
  return (
    <ListGroup variant="flush">
      <Row>
        {props.checkoutCookie.map((cookie) => (
          <Col className={classes.checkoutContent}>
            <ListGroup.Item className={classes.padd} key={Math.random()} as="li">
              <div className="fw-bold d-flex justify-content-between ">
                <p className="mb-1" >
                  {" "}
                  {cookie.type} {"x" + cookie.amount}{" "}
                </p>
                <Badge className="align-self-start" bg="secondary" pill>
                  {cookie.price + "₪"}
                </Badge>
              </div>
            </ListGroup.Item>
          </Col>
        ))}
      </Row>

      <Col className="mt-4 mb-2">
        <h4 className="mx-1">
          {" "}
          <Badge  bg="secondary">
            {" "}
            <div>Total Amount: {props.checkoutSum()}₪</div>{" "}
          </Badge>
        </h4>
      </Col>
    </ListGroup>
  );
};

export default CheckoutContent;
