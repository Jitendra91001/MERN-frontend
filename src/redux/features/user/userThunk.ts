import { createAsyncThunk } from "@reduxjs/toolkit"
import api from '../../../helper/newAxios.ts'
import { apiConstants } from "../../../constents/apiConstant.ts"

export const createUser = createAsyncThunk('api/post-user', async (payload:any) => {
 try{
  const response = await api.post(apiConstants.auth.createUser ,payload, {
    headers: {
        'Content-Type': 'multipart/form-data',
    }})
  return response.data
 }catch(error:any){
   console.log(error.message)
 }
},
)