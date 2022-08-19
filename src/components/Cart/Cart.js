import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { modalContentActions } from "../store/modal-content-slice";
import { ActiveCart, CheckoutCart, SuccessCart } from "./CartContent";

import Modal from "react-bootstrap/Modal";


const Cart = (props) => {
  const hasOrdered = useSelector((state) => state.modalContent.hasOrdered);
  const hasConfirm = useSelector((state) => state.modalContent.hasConfirm);
  const dispatch = useDispatch();

  async function handleUserSubmitData(enteredData) {
    dispatch(modalContentActions.confirmCheckout(true));
    dispatch(modalContentActions.isLoading(true));

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
      setTimeout(()=>dispatch(modalContentActions.isLoading(false)),2500);
    } 
    
    catch (error) {
      let err = {
        error: true,
        status: error.message,
      };
      return err;
    }
  }

  return (
    <Modal
    // className={classes.cartText}
      variant="light"
      show={props.showModal}
      onHide={props.handleButtonClose}
      backdrop="static"
      keyboard={false}
    >
      {!hasOrdered && <ActiveCart />}
      {hasOrdered && !hasConfirm && (
        <CheckoutCart handleSubmit={handleUserSubmitData} />
      )}
      {hasOrdered && hasConfirm && <SuccessCart />}
    </Modal>
  );
};

export default Cart;
