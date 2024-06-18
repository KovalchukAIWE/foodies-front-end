import { foodiesApiClient } from "./apiClient.js";

export const getAllRecipes = async ({
  category = "",
  area = "",
  ingredient = [],
  page = 1,
  limit = 12,
}) => {
  const { data } = await foodiesApiClient.get("recipes", {
    params: {
      category,
      ingredient,
      area,
      page,
      limit,
    },
  });
  return data;
};

export const getPopularRecipes = async () => {
  const { data } = await foodiesApiClient.get("recipes/popular");
  return data;
};

export const getUsersFavoriteRecipes = async ({ limit, page }) => {
  const { data } = await foodiesApiClient.get(
    "recipes/favorites",

    {
      params: { limit, page },
    }
  );
  return data;
};

export const getOwnUsersRecipes = async ({ limit, page, id }) => {
  const { data } = await foodiesApiClient.get(
    `recipes/${id}/my`,

    {
      params: { limit, page },
    }
  );
  return data;
};

export const getDataRecipeById = async (recipeId) => {
  const { data } = await foodiesApiClient.get(`recipes/${recipeId}`);
  return data;
};

export const createRecipe = async (body) => {
  const formData = new FormData();
  Object.keys(body).forEach((key) => {
    if (key === "ingredients") {
      body[key].forEach((ingredient, i) => {
        formData.append(`${key}[${i}][id]`, ingredient.id);
        formData.append(`${key}[${i}][measure]`, ingredient.measure);
      });
    } else {
      formData.append(key, body[key]);
    }
  });

  const { data } = await foodiesApiClient.post("recipes", formData);
  return data;
};

export const deleteRecipeById = async (recipeId) => {
  const { data } = await foodiesApiClient.delete(`recipes/${recipeId}`);
  return data;
};

export const addRecipeToFavorite = async (recipeId) => {
  const { data } = await foodiesApiClient.post(`recipes/${recipeId}/favorite`);
  return data;
};

export const deleteRecipeFromFavorite = async (recipeId) => {
  const { data } = await foodiesApiClient.delete(
    `recipes/${recipeId}/favorite`
  );
  return data;
};
