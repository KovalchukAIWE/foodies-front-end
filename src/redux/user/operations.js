import { createAsyncThunk } from "@reduxjs/toolkit";

import {
  logInUser,
  logOutUser,
  refreshUser,
  registerUser,
  setUsersAvatarByUserId,
} from "../../services/user.js";
import {
  addRecipeToFavorite,
  deleteRecipeFromFavorite,
  getUsersFavoriteRecipes,
} from "../../services/recipes.js";

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

export const getFavoriteRecipes = createAsyncThunk(
  "user/getFavoriteRecipes",
  async (_, thunkAPI) => {
    try {
      const data = await getUsersFavoriteRecipes();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addFavoriteRecipe = createAsyncThunk(
  "user/addFavoriteRecipe",
  async (recipeId, thunkAPI) => {
    try {
      const data = await addRecipeToFavorite(recipeId);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteFavoriteRecipe = createAsyncThunk(
  "user/deleteFavoriteRecipe",
  async (recipeId, thunkAPI) => {
    try {
      const data = await deleteRecipeFromFavorite(recipeId);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
