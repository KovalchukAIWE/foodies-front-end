import { createAsyncThunk } from "@reduxjs/toolkit";

import { getAreas } from "../../services/areas.js";
import { getIngredients } from "../../services/ingredients.js";
import { getCategories } from "../../services/categories.js";
import {
  addRecipeToFavorite,
  deleteRecipeFromFavorite,
  getUsersFavoriteRecipes,
} from "../../services/recipes.js";

export const getAllAreas = createAsyncThunk(
  "recieps/getAreas",
  async (_, thunkAPI) => {
    try {
      const data = await getAreas();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getAllCategories = createAsyncThunk(
  "recieps/getCategories",
  async (_, thunkAPI) => {
    try {
      const data = await getCategories();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getAllIngredients = createAsyncThunk(
  "recieps/getIngredients",
  async (_, thunkAPI) => {
    try {
      const data = await getIngredients();
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
