import { createSlice } from '@reduxjs/toolkit';

import { signup, login, logout, getCurrent } from './authOperations';

const initialState = {
  user: {},
  token: '',
  isLogin: false,
  loading: false,
  error: null,
};

const pending = store => ({ ...store, loading: true, error: null });

const rejected = (store, { payload }) => ({
  ...store,
  loading: false,
  error: payload,
});

const fulfilled = (store, { payload }) => {
  store.loading = false;
  store.user = payload.user;
  store.token = payload.token;
  store.isLogin = true;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    /* Register */
    [signup.pending]: pending,
    [signup.fulfilled]: fulfilled,
    [signup.rejected]: rejected,

    /* Login */
    [login.pending]: pending,
    [login.fulfilled]: fulfilled,
    [login.rejected]: rejected,

    /* Login */
    [logout.pending]: pending,
    [logout.fulfilled]: () => ({ ...initialState }),
    [logout.rejected]: rejected,

    /* Current */
    [getCurrent.pending]: pending,
    [getCurrent.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.user = payload;
      store.isLogin = true;
    },
    [getCurrent.rejected]: rejected,
  },
});

export default authSlice.reducer;
