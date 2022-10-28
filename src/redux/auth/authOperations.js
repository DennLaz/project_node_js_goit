import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  registerInAPI,
  loginInAPI,
  getCurrentUser,
  logoutFromAPI,
} from "../../services/API/api";

export const createNewUser = createAsyncThunk(
  "users/register",
  async (data, { rejectWithValue }) => {
    try {
      return await registerInAPI(data);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const loginOldUser = createAsyncThunk(
  "users/login",
  async (data, { rejectWithValue }) => {
    try {
      return await loginInAPI(data);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const userLogout = createAsyncThunk(
  "users/logout",
  async (_, { rejectWithValue, getState }) => {
    try {
      const { auth } = getState();
      await logoutFromAPI(auth.accessToken);
      return;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getUser = createAsyncThunk(
  "users/current",
  async (_, { rejectWithValue, getState }) => {
    try {
      const { auth } = getState();
      const result = await getCurrentUser(auth.token);
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
  {
    condition: (_, { getState }) => {
      const { auth } = getState();
      if (!auth.token) {
        return false;
      }
    },
  }
);
