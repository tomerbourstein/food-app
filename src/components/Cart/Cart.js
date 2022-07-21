import React from "react";

import classes from "./Cart.module.css";
import CartList from "./CartList";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/esm/Badge";

const Cart = (props) => {
  const sumCookiePrice = () => {
    const cookiePrice = props.enteredCookie.map((cookie) => cookie.price);
    const sumPrice = cookiePrice.reduce((a, b) => a + b, 0);
    return sumPrice
  };


  return (
    <Modal
      variant="light"
      show={props.showModal}
      onHide={props.handleButtonClose}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <h2>This is Your Cart</h2>
      </Modal.Header>
      <Modal.Body>
        {props.enteredCookie.length === 0 ? (
          <div>Your Cart is empty!</div>
        ) : (
          <CartList enteredCookie={props.enteredCookie} />
        )}
      </Modal.Body>
      <Modal.Footer className={classes.justifySpaceBetween}>
        <h4>
          {" "}
          <Badge bg="secondary">
            {" "}
            <div>Total Amount: {sumCookiePrice()}₪</div>{" "}
          </Badge>
        </h4>

        <Button variant="success" size="sm">
          Order
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Cart;
