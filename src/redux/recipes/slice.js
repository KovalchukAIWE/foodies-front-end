import { createSlice, isPending, isRejected } from "@reduxjs/toolkit";

import {
  getAllCategories,
  getAllIngredients,
  getAllAreas,
  getFavoriteRecipes,
  addFavoriteRecipe,
  deleteFavoriteRecipe,
} from "./operations";

const recipesSlice = createSlice({
  name: "recipes",
  initialState: {
    categories: [],
    ingredients: [],
    areas: [],
    favoriteRecipes: [],
    isLoading: false,
    errorMessage: "",
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllCategories.fulfilled, (state, { payload }) => {
        state.categories = payload;
        state.isLoading = false;
      })
      .addCase(getAllIngredients.fulfilled, (state, { payload }) => {
        state.ingredients = payload;
        state.isLoading = false;
      })
      .addCase(getAllAreas.fulfilled, (state, { payload }) => {
        state.areas = payload;
        state.isLoading = false;
      })
      .addCase(getFavoriteRecipes.fulfilled, (state, { payload }) => {
        state.favoriteRecipes = payload;
        state.isLoading = false;
      })
      .addCase(addFavoriteRecipe.fulfilled, (state, { payload }) => {
        // перевірити, відповідь, що там є айді доданого рецепта
        state.favoriteRecipes.push(payload.id);
        state.isLoading = false;
      })
      .addCase(deleteFavoriteRecipe.fulfilled, (state, { payload }) => {
        // перевірити, відповідь, що там є айді видаленого рецепта
        const index = state.favoriteRecipes.findIndex(
          (id) => id === payload.id
        );
        if (index !== -1) {
          state.favoriteRecipes.splice(index, 1);
        }
        state.isLoading = false;
      })
      .addMatcher(
        isPending(
          getAllAreas,
          getAllCategories,
          getAllIngredients,
          getFavoriteRecipes,
          addFavoriteRecipe,
          deleteFavoriteRecipe
        ),
        (state) => {
          state.isLoading = true;
          state.errorMessage = "";
        }
      )
      .addMatcher(
        isRejected(
          getAllAreas,
          getAllCategories,
          getAllIngredients,
          getFavoriteRecipes,
          addFavoriteRecipe,
          deleteFavoriteRecipe
        ),
        (state, { payload }) => {
          state.isLoading = false;
          state.errorMessage = payload;
        }
      );
  },
});

export const recipesReducer = recipesSlice.reducer;
