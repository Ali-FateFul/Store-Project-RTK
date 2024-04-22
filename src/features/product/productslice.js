import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../services/config";

const initialState = {
	loading: false,
	products: [],
	error: "",
};

const fetchProducs = createAsyncThunk("product/fetchProducts", () => {
	return api.get("/products");
});

const productsSlice = createSlice({
	name: "product",
	initialState,
	extraReducers: (builder) => {
		builder.addCase(fetchProducs.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(fetchProducs.fulfilled, (state, action) => {
			state.loading = false;
			state.products = action.payload;
			state.error = "";
		});
		builder.addCase(fetchProducs.rejected, (state, action) => {
			state.loading = false;
			state.products = [];
			state.error = action.error.message;
		});
	},
});

export default productsSlice.reducer;
export { fetchProducs };
