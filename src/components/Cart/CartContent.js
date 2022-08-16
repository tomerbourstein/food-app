import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../store/cart-slice";
import { modalContentActions } from "../store/modal-content-slice";
import classes from "./Cart.module.css";
import CartList from "./CartList";
import FormPayment from "./FormPayment";
import CheckoutContent from "./CheckoutContent";
import Loading from "./Loading";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/esm/Badge";

export const ActiveCart = () => {
  const dispatch = useDispatch();
  const cartList = useSelector((state) => state.cart.cartList);
  const sumPrice = useSelector((state) => state.cart.totalPrice);

  let cartFull = false;

  if (cartList.length === 0) {
    cartFull = true;
  }

  const goToCheckoutHandler = (event) => {
    if (cartList === 0) {
      return;
    } else {
      dispatch(modalContentActions.confirmOrder(true));
    }
  };
  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>This is Your Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {cartList.length === 0 ? <div>Your Cart is empty!</div> : <CartList />}
      </Modal.Body>
      <Modal.Footer className={classes.justifySpaceBetween}>
        <h4>
          {" "}
          <Badge bg="secondary">
            {" "}
            <div>Total Amount: {sumPrice}₪</div>{" "}
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

export const CheckoutCart = (props) => {
  const dispatch = useDispatch();

  const backToCartHandler = (event) => {
    dispatch(modalContentActions.confirmOrder(false));
  };
  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>Your Order and Information</Modal.Title>
      </Modal.Header>
      <Modal.Header>
        <CheckoutContent />
      </Modal.Header>
      <Modal.Body>
        <FormPayment handleSubmit={props.handleSubmit} />
      </Modal.Body>

      <Modal.Footer className={classes.justifySpaceBetween}>
        <Button onClick={backToCartHandler} variant="outline-success" size="sm">
          Back to Cart
        </Button>

        <Button type="submit" form="payment-form" variant="success" size="sm">
          Confirm Order
        </Button>
      </Modal.Footer>
    </>
  );
};

export const SuccessCart = () => {
  const isLoading = useSelector((state) => state.modalContent.isLoading);
  const dispatch = useDispatch();
  const resetCartHandler = (event) => {
    dispatch(modalContentActions.confirmOrder(false));
    dispatch(modalContentActions.confirmCheckout(false));
    dispatch(modalContentActions.isLoading(false));
    dispatch(cartActions.toggle());
    dispatch(cartActions.resetCart());
  };
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
        <Button onClick={resetCartHandler}>Close</Button>
      </Modal.Footer>
    </>
  );
};
