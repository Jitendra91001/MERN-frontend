import { createSlice } from '@reduxjs/toolkit'
import {loginUser, logoutUser, signUserData } from './authThunk'

export const initialState = {
    error:false,
    pending:false,
    user:[],
    logedInUser:{},
    isLogedIn:false,
    token:''
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
      //signUP
      builder.addCase(signUserData.pending, (state, action) => {
        state.pending = true;
      }),
      builder.addCase(signUserData.fulfilled, (state:any, action:any) => {
        state.user = action.payload;
        state.pending = true;
        
      }),
      builder.addCase(signUserData.rejected, (state:any, action:any) => {
        state.error = action.error;
        state.pending = false;

      })

      //login
      builder.addCase(loginUser.pending, (state, action) => {
        state.pending = true;
        state.isLogedIn = false

      }),
      builder.addCase(loginUser.fulfilled, (state:any, action:any) => {
        state.logedInUser = action.payload.user;
        state.pending = false;
        state.isLogedIn = true
        state.token = action.payload.token;
        localStorage.setItem('secret_key',action.payload.token)
      }),
      builder.addCase(loginUser.rejected, (state:any, action:any) => {
        state.error = action.error;
        state.pending = false;
        state.isLogedIn = false
      })

      builder.addCase(logoutUser.pending, (state, action) => {
        state.pending = true;
      }),
      builder.addCase(logoutUser.fulfilled, (state:any, action:any) => {
        state.logedInUser = null;
        state.pending = false;
      }),
      builder.addCase(logoutUser.rejected, (state:any, action:any) => {
        state.error = action.error;

        // localStorage.removeItem("user")
      })

      
      
    },
})

export default authSlice.reducer
export const {} = authSlice.actions;