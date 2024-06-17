import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchData = createAsyncThunk('product/fetch', async () => {
    const { data } = await axios.get('https://fakestoreapi.com/products');
    console.log(data);
    return data;
});

const ProductSlice = createSlice({
    name: 'ProductSlice',
    initialState: {
        products: [],
        status: 'idle', // idle, loading, success, failed
        error: null,
    },
    // reducers: {
    //     loadProducts: (state, action) => {
    //         state.products = action.payload;
    //     },
    // },
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending, (state, action) => {
                state.status = 'loading';
            })
            .addCase(fetchData.fulfilled, (state, action) => {
                state.products = action.payload;
                state.status = 'success';
            })
            .addCase(fetchData.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default ProductSlice.reducer;

export const { loadProducts } = ProductSlice.actions;
