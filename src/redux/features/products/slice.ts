import { createSlice } from '@reduxjs/toolkit'
import { getProducts } from './thunk'

export const initialState = {
    error:false,
    pending:false,
    allproduct:[],
}

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
    },
    extraReducers: (builder:any) => {
      //signUP
      builder.addCase(getProducts.pending, (state:any) => {
        state.pending = true;
      }),
      builder.addCase(getProducts.fulfilled, (state:any, action:any) => {
        state.allproduct = action.payload;
        state.pending = true;
      }),
      builder.addCase(getProducts.rejected, (state:any, action:any) => {
        state.error = action.error;
        state.pending = false;
      })
      
      
    },
})

export default productSlice.reducer
export const {} = productSlice.actions;