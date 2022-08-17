import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "./components/store/cart-slice";
import { sendCartData, fetchCartData } from "./components/store/cart-requests";
import "bootstrap/dist/css/bootstrap.min.css";
import classes from "./App.module.css";

import Navigation from "./components/Navigation";
import MainCard from "./components/MainCard/MainCard";
import Background from "./components/Background";
import Cart from "./components/Cart/Cart";

let isInitial = true;

// const cookiesLeft = [
//   {
//     type: "Blondie",
//     description: "Chocolate Chip With White Chocolate.",
//     price: "10",
//   },
//   {
//     type: "Hazlenut",
//     description: "Chocolate Chip With Roasted Hazelnut and Sea Salt.",
//     price: "15",
//   },
//   {
//     type: "Pistacchio",
//     description: "Chocolate Chip With Caramelized Pistacchio Nuts.",
//     price: "12",
//   },
//   {
//     type: "Bitter",
//     description: "Dark Classic Chocolate Chip With Marzipan Topping.",
//     price: "10",
//   },
//   {
//     type: "Peanuts",
//     description: "Chocolate Chip With Milk and Real Peanuts.",
//     price: "12",
//   },
// ];

// const cookiesRight = [
//   {
//     type: "M & M",
//     description: "Chocolate Chip With The Original M & M.",
//     price: "10",
//   },
//   {
//     type: "Cashew",
//     description: "Chocolate Chip With Glazed Spicy Cashew.",
//     price: "15",
//   },
//   {
//     type: "Crack Pie",
//     description: "Chocolate Chip With Granola and White Chocolate.",
//     price: "12",
//   },
//   {
//     type: "Pavlova",
//     description: "Chocolate Chip With Mascarpone and Strawberries.",
//     price: "10",
//   },
//   {
//     type: "Fudge",
//     description: "Dark Chocolate Chip With Fudge.",
//     price: "12",
//   },
// ];

function App() {
  const dispatch = useDispatch();
  const cartList = useSelector((state) => state.cart.cartList);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const isChanged = useSelector((state) => state.cart.changed);
  const showCart = useSelector((state) => state.cart.isShow);
  const [cookiesLeft, setCookiesLeft] = useState([]);
  const [cookiesRight, setCookiesRight] = useState([]);
  
  
  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);
  
  useEffect(() => {
    let cart = { cartList, totalAmount, totalPrice };
    if (isInitial) {
      isInitial = false;
      return;
    }
    if (isChanged) {
      dispatch(sendCartData(cart));
    }
  }, [cartList,totalAmount,totalPrice, dispatch, isChanged]);

  useEffect(() => {
    const handleFetch = async () => {
      const resLeft = await fetch(
        "https://react-http-140ec-default-rtdb.firebaseio.com/cookiesLeft.json/"
      );
      const dataLeft = await resLeft.json();
      const cookiesDataLeft = [];
      for (const key in dataLeft) {
        cookiesDataLeft.push({
          id: key,
          type: dataLeft[key].type,
          description: dataLeft[key].description,
          price: dataLeft[key].price,
        });
      }
      setCookiesLeft(cookiesDataLeft);
      ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
      const resRight = await fetch(
        "https://react-http-140ec-default-rtdb.firebaseio.com/cookiesRight.json/"
      );
      const dataRight = await resRight.json();
      const cookiesDataRight = [];
      for (const key in dataRight) {
        cookiesDataRight.push({
          id: key,
          type: dataRight[key].type,
          description: dataRight[key].description,
          price: dataRight[key].price,
        });
      }
      setCookiesRight(cookiesDataRight);
    };
    handleFetch();
  }, []);

  const handleButtonClick = () => {
    dispatch(cartActions.toggle());
  };

  const handleButtonClose = (hasConfirm) => {
    dispatch(cartActions.toggle());

    if (!hasConfirm) {
      return;
    }
    dispatch(cartActions.reset());
  };

  return (
    <div className={classes.App}>
      <Navigation handleButtonClick={handleButtonClick} />
      <Cart handleButtonClose={handleButtonClose} showModal={showCart} />
      <Background />
      <MainCard cookiesRight={cookiesRight} cookiesLeft={cookiesLeft} />
    </div>
  );
}

export default App;
