import { createSlice } from "@reduxjs/toolkit";
import { isPending, isFulfilled, isRejected } from "@reduxjs/toolkit";

import {
  register,
  logIn,
  refresh,
  logOut,
  setUsersAvatar,
  getFavoriteRecipes,
  addFavoriteRecipe,
  deleteFavoriteRecipe,
} from "./operations";

const initialUser = {
  id: null,
  name: null,
  email: null,
  avatar: null,
};

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: initialUser,
    favoriteRecipes: [],
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    isLoading: false,
    errorMessage: "",
  },
  extraReducers: (builder) => {
    builder
      .addCase(refresh.fulfilled, (state, { payload }) => {
        // уточнити чи додали властивість user у відповідь бека
        state.user = { ...state.user, ...payload.user };
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.isLoading = false;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.user = initialUser;
        state.isLoggedIn = false;
        state.token = null;
        state.isLoading = false;
      })
      .addCase(setUsersAvatar.fulfilled, (state, { payload }) => {
        state.user = payload.avatar;
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
          register,
          logIn,
          logOut,
          refresh,
          setUsersAvatar,
          getFavoriteRecipes,
          addFavoriteRecipe,
          deleteFavoriteRecipe
        ),
        (state, { type }) => {
          if (type === refresh.pending.type) {
            state.isRefreshing = true;
          }
          state.isLoading = true;
          state.errorMessage = "";
        }
      )
      .addMatcher(
        isRejected(
          register,
          logIn,
          logOut,
          refresh,
          setUsersAvatar,
          getFavoriteRecipes,
          addFavoriteRecipe,
          deleteFavoriteRecipe
        ),
        (state, { type, payload }) => {
          if (type === refresh.rejected.type) {
            state.isRefreshing = false;
          }
          state.isLoading = false;
          state.errorMessage = payload;
        }
      )
      .addMatcher(isFulfilled(register, logIn), (state, { payload }) => {
        state.user = { ...state.user, ...payload.user };
        state.isLoggedIn = true;
        state.token = payload.token;
        state.isLoading = false;
      });
  },
});

export const userReducer = userSlice.reducer;
