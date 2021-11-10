import { createSlice } from '@reduxjs/toolkit';

export interface cartState {
	products: {
		id: number;
		image: string;
		amount: string;
		title: string;
	}[];
	quantity: number;
	total: number;
}

const initialState: cartState = {
	products: [],
	quantity: 0,
	total: 0,
};

export const productReducer = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addProduct: (state, action) => {
			state.quantity += 1;
			state.products.push(action.payload);
			state.total += action.payload.amount * action.payload.quantity;
		},
	},
});

export const { addProduct } = productReducer.actions;
export default productReducer.reducer;
