import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cart-slice";
import ListGroup from "react-bootstrap/ListGroup";
import Badge from "react-bootstrap/Badge";
import Image from 'react-bootstrap/Image'
import cookie1 from "../../media/cookie1.jpeg";

import classes from "./ChosenCookie.module.css";

const ChosenCookie = (props) => {
  const dispatch = useDispatch();
  
  const onAddItemHandler = (event) => {
    dispatch(
      cartActions.addOneToCart({
        type: props.enteredCookie.type,
        amount: props.enteredCookie.amount,
        description: props.enteredCookie.description,
      })
    );
    dispatch(cartActions.sumPrice());
  };

  const onRemoveItemHandler = (event) => {
    dispatch(cartActions.removeFromCart({
      type: props.enteredCookie.type,
      amount: props.enteredCookie.amount,
      description: props.enteredCookie.description,
    }));
    dispatch(cartActions.sumPrice());

  };

  return (
    <ListGroup.Item as="li" className={classes.listGroupItem}>
      <div>
        <Image className={classes.cookieImg} roundedCircle src={cookie1}/>
      </div>
      <div className={classes.text}>
        <div className={classes.textType}>
          {props.enteredCookie.type} {"x" + props.enteredCookie.amount}{" "}
        </div>
        {props.enteredCookie.description}
      </div>
      <div className={classes.buttons}>
        <Badge
          onClick={onAddItemHandler}
          text="danger"
          bg="light"
          size="sm"
        >
          +
        </Badge>{" "}
        <Badge
          onClick={onRemoveItemHandler}
          className="mx-1"
          text="danger"
          bg="light"
          size="sm"
        >
          -
        </Badge>
        <Badge 
          className={classes.badgeColor}
          as="small" bg="secondary" pill>
          {props.enteredCookie.price + "₪"}
        </Badge>
      </div>
    </ListGroup.Item>
  );
};

export default ChosenCookie;
