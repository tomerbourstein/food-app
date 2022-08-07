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
  const [isLoading, setIsLoading] = useState(false);
  let cartFull = false;

  if (props.enteredCookie.length === 0) {
    cartFull = true;
  }

  async function handleUserSubmitData(enteredData) {
    setHasConfirm(true);
    setIsLoading(true);
    const requestOptions = {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(enteredData),
    };
    try {
      const response = await fetch(
        "https://react-http-140ec-default-rtdb.firebaseio.com/purchases.json",
        requestOptions
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const data = await response.json();
      console.log(data);
      setIsLoading(false);
    } catch (error) {
      let err = {
        error: true,
        status: error.message,
      };
      return err;
    }
  }

  const goToCheckoutHandler = (event) => {
    if (props.enteredCookie.length === 0) {
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

  const resetCartHandler = (event) => {
    setHasOrdered(false);
    setHasConfirm(false);
    setIsLoading(false);
    props.handleButtonClose();
  };
  const ActiveCart = () => {
    return (
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

          <Button
            disabled={cartFull}
            onClick={goToCheckoutHandler}
            variant="success"
            size="sm"
          >
            Checkout
          </Button>
        </Modal.Footer>
      </>
    );
  };

  const CheckoutCart = () => {
    return (
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
          <FormPayment
            checkoutCookie={props.enteredCookie}
            checkoutSum={sumCookiePrice}
            handleSubmit={handleUserSubmitData}
          />
        </Modal.Body>

        <Modal.Footer className={classes.justifySpaceBetween}>
          <Button
            onClick={backToCartHandler}
            variant="outline-success"
            size="sm"
          >
            Back to Cart
          </Button>

          <Button type="submit" form="payment-form" variant="success" size="sm">
            Confirm Order
          </Button>
        </Modal.Footer>
      </>
    );
  };

  const SuccessCart = () => {
    return (
      <>
        <Modal.Header>
          <Modal.Title>
            <p>Thank You for Buyin Kuperman!</p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {isLoading ? (
            <Loading />
          ) : (
            <p>Your Order is Confirmed, Visit Us Again Soon!</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={resetCartHandler} >
            Close
          </Button>
        </Modal.Footer>
      </>
    );
  };

  return (
    <Modal
      variant="light"
      show={props.showModal}
      onHide={props.handleButtonClose}
      backdrop="static"
      keyboard={false}
    >
      {!hasOrdered && <ActiveCart />}
      {hasOrdered && !hasConfirm && <CheckoutCart />}
      {hasOrdered && hasConfirm && <SuccessCart />}
    </Modal>
  );
};

export default Cart;
