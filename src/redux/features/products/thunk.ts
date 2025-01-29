import { createAsyncThunk } from "@reduxjs/toolkit"
import api from '../../../helper/newAxios.ts'
import { apiConstants } from "../../../constents/apiConstant.ts"

export const getProducts = createAsyncThunk("products/get", async (payload: any, Thunk:any) => {
  try {
      const response = await api.get(apiConstants.auth.products , payload ? payload : null);
      return response?.data;
  }
  catch (error: any) {
      throw Thunk.rejectWithValue(error?.message)
  }
})


