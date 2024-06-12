import { createAsyncThunk } from "@reduxjs/toolkit";

import {
  logInUser,
  logOutUser,
  refreshUser,
  registerUser,
  setUsersAvatarByUserId,
} from "../../services/user.js";

export const register = createAsyncThunk(
  "user/register",
  async (credentials, thunkAPI) => {
    try {
      const data = await registerUser(credentials);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  "user/login",
  async (credentials, thunkAPI) => {
    try {
      const data = await logInUser(credentials);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refresh = createAsyncThunk("user/refresh", async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const persistedToken = state.user.token;

  if (persistedToken === null) {
    return thunkAPI.rejectWithValue("");
  }

  try {
    const data = await refreshUser(persistedToken);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const logOut = createAsyncThunk("user/logout", async (_, thunkAPI) => {
  try {
    await logOutUser();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const setUsersAvatar = createAsyncThunk(
  "user/setAvatar",
  async ({ userId, avatar }, thunkAPI) => {
    try {
      const data = await setUsersAvatarByUserId({ userId, avatar });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
