import { cartActions } from "./cart-slice";
import { uiActions } from "./ui-slice";

export const fetchCartData = (cartData) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://react-http-140ec-default-rtdb.firebaseio.com/cart.json"
      );
      if (!response.ok) {
        throw new Error("Could not fetch data!");
      }
      const data = await response.json();
      return data;
    };
    try {
      const cartData = await fetchData();
      dispatch(
        cartActions.replaceCart({
          cartList: cartData.cartList || [],
          totalAmount: cartData.totalAmount,
          totalPrice: cartData.totalPrice,
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Fetching Data Failed!",
        })
      );
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending Data",
      })
    );
    const sendRequest = async () => {
      const requestOptions = {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          cartList: cart.cartList,
          totalAmount: cart.totalAmount,
          totalPrice: cart.totalPrice,
        }),
      };
      const response = await fetch(
        "https://react-http-140ec-default-rtdb.firebaseio.com/cart.json",
        requestOptions
      );

      if (!response.ok) {
        throw new Error("Something is Wrong!");
      }
    };
    try {
      await sendRequest();
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Data Stored Successfully!",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Storing Data Failed!",
        })
      );
    }
  };
};
