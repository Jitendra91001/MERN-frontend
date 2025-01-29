import { createAsyncThunk } from "@reduxjs/toolkit"
import api from '../../../helper/newAxios.ts'
import { apiConstants } from "../../../constents/apiConstant.ts"

export const signUserData = createAsyncThunk("auth/signup", async (payload: any, Thunk) => {
  try {
      const response = await api.post(apiConstants.auth.users, payload);
      return response?.data;
  }
  catch (error: any) {
      throw Thunk.rejectWithValue(error?.message)
  }
})


export const loginUser = createAsyncThunk("auth/login", async (payload: any, Thunk) => {
  try {
      const response = await api.post(apiConstants.auth.loginUser, payload);
      return response?.data;
  }
  catch (error: any) {
      throw Thunk.rejectWithValue(error?.message)
  }
})

export const logoutUser = createAsyncThunk("auth/lotout", async (payload: any, Thunk) => {
  try {
      const response = await api.get(apiConstants.auth.logout,payload ? payload : null);
      return response?.data;
  }
  catch (error: any) {
      throw Thunk.rejectWithValue(error?.message)
  }
})


