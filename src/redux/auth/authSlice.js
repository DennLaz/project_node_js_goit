import { createSlice } from "@reduxjs/toolkit";
import {
  createNewUser,
  loginOldUser,
  getUser,
  userLogout,
} from "./authOperations";
import { pending, rejected } from "../../shared/utils/pendingAndRejected";
import initialState from "./authInitialState";

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [createNewUser.pending]: pending,
    [createNewUser.rejected]: rejected,
    [createNewUser.fulfilled]: (store, { payload }) => ({
      ...store,
      loading: false,
      user:{
        userName: "ok",
      }
      // user: {
      //   userName: payload.username,
      // },
    }),

    [loginOldUser.pending]: pending,
    [loginOldUser.rejected]: rejected,
    [loginOldUser.fulfilled]: (store, { payload }) => ({
      ...store,
      loading: false,
      token: payload.token,
      isLogin: true,
      user: {
        userId: payload.user._id,
        userName: payload.user.username,
      },
    }),

    [userLogout.pending]: pending,
    [userLogout.rejected]: rejected,
    [userLogout.fulfilled]: () => initialState,

    [getUser.pending]: pending,
    [getUser.rejected]: () => initialState,
    [getUser.fulfilled]: (store, { payload }) => ({
      ...store,
      loading: false,
      isLogin: true,
      user: { userId: payload._id, userName: payload.username },
    }),
  },
});

export default authSlice.reducer;



