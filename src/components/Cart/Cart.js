import React, { useState } from "react";

import classes from "./Cart.module.css";
import CartList from "./CartList";
import FormPayment from "./FormPayment";
import CheckoutContent from "./CheckoutContent";
import Loading from "./Loading";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/esm/Badge";

const Cart = (props) => {
  const [hasOrdered, setHasOrdered] = useState(false);
  const [hasConfirm, setHasConfirm] = useState(false);
  let cartFull = false;

if(props.enteredCookie.length === 0) {
  cartFull = true;
}

  const orderClickHandler = event => {
    setHasConfirm(true);
  }

  const goToCheckoutHandler = (event) => {
    if (props.enteredCookie.length === 0){
      return;
    }
    setHasOrdered(true);
  };

  const backToCartHandler = (event) => {
    setHasOrdered(false);
  };
  const sumCookiePrice = () => {
    const cookiePrice = props.enteredCookie.map((cookie) => cookie.price);
    const sumPrice = cookiePrice.reduce((a, b) => a + b, 0);
    return sumPrice;
  };

  return (
    <Modal
      variant="light"
      show={props.showModal}
      onHide={props.handleButtonClose}
      backdrop="static"
      keyboard={false}
    >
      {!hasOrdered ? (
        <>
          <Modal.Header closeButton>
            <Modal.Title>This is Your Cart</Modal.Title>
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

            <Button disabled={cartFull} onClick={goToCheckoutHandler} variant="success" size="sm">
              Checkout
            </Button>
          </Modal.Footer>
        </>
      ) : (
        <>
          <Modal.Header closeButton>
            <Modal.Title>Your Order and Information</Modal.Title>
          </Modal.Header>
          <Modal.Header>
            <CheckoutContent
              checkoutCookie={props.enteredCookie}
              checkoutSum={sumCookiePrice}
            />
          </Modal.Header>
          <Modal.Body>
            <FormPayment />
          </Modal.Body>

          <Modal.Footer className={classes.justifySpaceBetween}>
            <Button
              onClick={backToCartHandler}
              variant="outline-success"
              size="sm"
            >
              Back to Cart
            </Button>

            <Button
            onClick={orderClickHandler}
              type="submit"
              form="payment-form"
              variant="success"
              size="sm"
            >
              Confirm Order
            </Button>
          </Modal.Footer>
        </>
      )}
      {/* {!hasConfirm &&  
      <>
        <Modal.Header>
          <Modal.Title>Please Wait While Processing Your Order... </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Loading />
        </Modal.Body>
        <Modal.footer>
          <Button>Close</Button>
        </Modal.footer>
      </>
      } */}
    </Modal>
  );
};

export default Cart;
