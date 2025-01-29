import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import userReducer from "../features/user/userSlice";
import  productSlice  from "../features/products/slice";
const rootReducers = combineReducers({
  authData: authReducer,
  Userdata: userReducer,
  productData:productSlice
});

export default rootReducers;
