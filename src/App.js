import React, {  useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import classes from "./App.module.css";

import Navigation from "./components/Navigation";
import MainCard from "./components/MainCard/MainCard";
import Background from "./components/Background";
import Cart from "./components/Cart/Cart";

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
  const [cookiesLeft, setCookiesLeft] = useState([]);
  const [cookiesRight, setCookiesRight] = useState([]);

  const [show, setShow] = useState(false);
  var [cookies, setCookies] = useState([]);
  var [count, setCount] = useState(0);

useEffect(() =>{
  const handleFetch = async () =>{
    const resLeft = await fetch("https://react-http-140ec-default-rtdb.firebaseio.com/cookiesLeft.json/");
    const dataLeft = await resLeft.json();
    const cookiesDataLeft = [];
      for(const key in dataLeft) {

      cookiesDataLeft.push({
        id: key,
        type: dataLeft[key].type,
        description: dataLeft[key].description,
        price: dataLeft[key].price
      })
    }
    setCookiesLeft(cookiesDataLeft);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
    const resRight = await fetch("https://react-http-140ec-default-rtdb.firebaseio.com/cookiesRight.json/");
    const dataRight = await resRight.json();
    const cookiesDataRight = [];
      for(const key in dataRight) {

      cookiesDataRight.push({
        id: key,
        type: dataRight[key].type,
        description: dataRight[key].description,
        price: dataRight[key].price
      })
    }
    setCookiesRight(cookiesDataRight)
  }
  handleFetch();
},[])
  

  useEffect(() => {
    const cookieCount = cookies.map((c) => Number(c.amount));
    setCount(cookieCount.reduce((a, b) => a + b, 0));
  }, [cookies]);

  const handleButtonClick = () => {
    setShow(true);
  };

  const handleButtonClose = (hasConfirm) => {
    setShow(false);
    if(!hasConfirm) {
      return;
    }
    setCookies([]);
  };

  const addCookieHandler = (enteredCookieEvent) => {
    let traceCookieType = (element) => element.type === enteredCookieEvent.type;
    let foundCookie = cookies.find(traceCookieType);

    if (foundCookie) {
      setCookies(() => {
        foundCookie.amount =
          Number(foundCookie.amount) + Number(enteredCookieEvent.amount);
        foundCookie.price =
          Number(foundCookie.price) + Number(enteredCookieEvent.price);
        return [...cookies];
      });
    } else {
      setCookies((prevState) => {
        cookies = [enteredCookieEvent, ...prevState];
        return [...cookies];
      });
    }
  };


  return (
    <div className={classes.App}>
      <Navigation
        handleButtonClick={handleButtonClick}
        enteredCookie={cookies}
        cookieCount={count}
      />
      <Cart
        handleButtonClose={handleButtonClose}
        showModal={show}
        enteredCookie={cookies}
      />
      <Background />
      <MainCard
        cookiesRight={cookiesRight}
        cookiesLeft={cookiesLeft}
        addCookieHandler={addCookieHandler}
      />
    </div>
  );
}

export default App;
