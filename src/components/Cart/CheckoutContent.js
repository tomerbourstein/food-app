import { useSelector } from "react-redux";
import ListGroup from "react-bootstrap/ListGroup";
import Badge from "react-bootstrap/Badge";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import classes from "./CheckoutContent.module.css";
const CheckoutContent = (props) => {
  const checkoutCookie = useSelector((state) => state.cart.cartList);
  const sumPrice = useSelector((state) => state.cart.totalPrice);

  return (
    <ListGroup variant="flush">
      <Row>
        {checkoutCookie.map((cookie, i) => (
          <Col key={i} className={classes.checkoutContent}>
            <ListGroup.Item className={classes.padd} as="li">
              <div className="fw-bold d-flex justify-content-between ">
                <p className="mb-1">
                  {" "}
                  {cookie.type} {"x" + cookie.amount}{" "}
                </p>
                <Badge className={classes.badgeColor} bg="secondary" pill>
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
          <Badge className={classes.badgeColor} bg="none">
            {" "}
            <div>Total Amount: {sumPrice}₪</div>{" "}
          </Badge>
        </h4>
      </Col>
    </ListGroup>
  );
};

export default CheckoutContent;
