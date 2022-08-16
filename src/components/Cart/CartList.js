import React from "react";
import { useSelector } from "react-redux";
import ChosenCookie from "./ChosenCookie";

import ListGroup from "react-bootstrap/ListGroup";

const CartList = (props) => {
  const cartList = useSelector((state) => state.cart.cartList);

  return (
    <ListGroup variant="flush">
      {cartList.map((cookie) => (
        <ChosenCookie key={Math.random()} enteredCookie={cookie} />
      ))}
    </ListGroup>
  );
};
export default CartList;
