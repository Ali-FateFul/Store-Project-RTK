import { configureStore } from "@reduxjs/toolkit";

import productReducer from "../features/product/productslice";
import cartReducer from "../features/cart/cartSlice";

const store = configureStore({
	reducer: {
		product: productReducer,
		cart: cartReducer,
	},
});

export default store;
