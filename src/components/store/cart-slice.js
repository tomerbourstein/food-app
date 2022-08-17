import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
  cartList: [],
  totalAmount: 0,
  isShow: false,
  totalPrice: 0,
  changed: false,
};
const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    toggle(state) {
      state.isShow = !state.isShow;
    },
    replaceCart(state, action) {
      state.cartList = action.payload.cartList;
      state.totalAmount = action.payload.totalAmount;
      state.totalPrice = action.payload.totalPrice;
    },
    addToCart(state, action) {
      state.changed = true;
      let newCookie = action.payload;
      state.totalAmount = Number(state.totalAmount) + Number(newCookie.amount);
      let foundCookie = state.cartList.find(
        (element) => element.type === newCookie.type
      );

      if (!foundCookie) {
        state.cartList.push({
          type: newCookie.type,
          description: newCookie.description,
          cookiePrice: newCookie.cookiePrice,
          price: newCookie.price,
          amount: newCookie.amount,
        });
      } else {
        foundCookie.amount =
          Number(foundCookie.amount) + Number(newCookie.amount);
        foundCookie.price = Number(foundCookie.price) + Number(newCookie.price);
      }
    },
    addOneToCart(state, action) {
      state.changed = true;
      let newCookie = action.payload;
      let foundCookie = state.cartList.find(
        (element) => element.type === newCookie.type
      );
      state.totalAmount++;
      foundCookie.amount++;
      foundCookie.price =
        Number(foundCookie.price) + Number(foundCookie.cookiePrice);
    },
    removeFromCart(state, action) {
      state.changed = true;
      state.totalAmount--;
      let newAmount = action.payload;
      let foundCookie = state.cartList.find(
        (element) => element.type === newAmount.type
      );

      if (newAmount.amount <= 1) {
        state.cartList = state.cartList.filter(
          (item) => item.type !== newAmount.type
        );
      } else {
        foundCookie.amount--;
        foundCookie.price =
          Number(foundCookie.price) - Number(foundCookie.cookiePrice);
      }
    },
    resetCart(state) {
      state.changed = true;
      state.cartList = [];
      state.totalAmount = 0;
      state.totalPrice = 0;
    },
    sumPrice(state, action) {
      const cookiePrice = state.cartList.map((cookie) => cookie.price);
      const sumPrice = cookiePrice.reduce((a, b) => a + b, 0);
      state.totalPrice = sumPrice;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
