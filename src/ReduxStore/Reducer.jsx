import { createReducer } from "@reduxjs/toolkit";
export const carts = createReducer(
  {
    cartitem: [],
    cartitem1: [],
    cartitem2: [],
    cartitem3: []
  }, {
  add_to_cart: (state, action) => {
      state.cartitem=action.payload;
  },
  add_to_cart1: (state, action) => {
    state.cartitem1=action.payload;
  },
  add_to_cart2: (state, action) => {
    state.cartitem2=action.payload;
  },
  add_to_cart3: (state, action) => {
    state.cartitem3=action.payload;
  },
})