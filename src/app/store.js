import { configureStore } from "@reduxjs/toolkit";

import productReducer from "../features/product/productslice";

const store = configureStore({
	reducer: {
		product: productReducer,
	},
});

export default store;
