import React from "react";
import ChosenCookie from "./ChosenCookie";

import ListGroup from "react-bootstrap/ListGroup";

const CartList = (props) => {
 
  return (
    
      <ListGroup variant="flush">

      {props.enteredCookie.map((cookie) => (
        <ChosenCookie key={Math.random()} enteredCookie={cookie} />
        ))}
        </ListGroup>
    
  );
};
export default CartList;
