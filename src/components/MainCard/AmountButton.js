import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cart-slice";
import {ReactComponent as PlusSign} from "../../media/plus-circle.svg";
import classes from "./AmountButton.module.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";

const AmountButton = (props) => {
  const dispatch = useDispatch();
  const [amount, setAmount] = useState("");
  const [disable, setDisable] = useState(true);

  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
    if (event.target.value === "0") {
      setDisable(true);
    } else {
      setDisable(false);
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const selectedCookie = {
      type: props.name,
      description: props.description,
      cookiePrice: props.price,
      price: props.price * amount,
      amount: amount,
    };
    dispatch(cartActions.addToCart(selectedCookie));
    dispatch(cartActions.sumPrice());
    setAmount("");
    setDisable(true);
  };

  return (
    <div>
      <Form onSubmit={submitHandler} className={classes.width}>
        <InputGroup>
        <Form.Control
          type="number"
          value={amount}
          onChange={amountChangeHandler}
          className={classes.placeHolder}
          name={props.name}
          min="0"
          max="5"
          ></Form.Control>

        <Button disabled={disable} type="submit" className={classes.btnColor} size="sm">
          <PlusSign />
        </Button>
          </InputGroup>
      </Form>
    </div>
  );
};

export default AmountButton;
