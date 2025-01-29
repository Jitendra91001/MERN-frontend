import { createSlice } from '@reduxjs/toolkit'
import { createUser } from './userThunk'

export const initialState = {
    error:false,
    pending:false,
    User:[]
}

export const userSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
      builder.addCase(createUser.pending, (state) => {
        state.pending = true;
      }),
      builder.addCase(createUser.fulfilled, (state:any, action:any) => {
        state.User = action.payload;
        state.pending = false;
      }),
      builder.addCase(createUser.rejected, (state:any, action:any) => {
        state.error = action.error;
        state.pending = false;
      })
    },
})

export default userSlice.reducer
export const {} = userSlice.actions;