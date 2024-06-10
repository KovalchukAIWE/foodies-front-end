import { foodiesApiClient } from "./apiClient.js";

export const getIngredients = async () => {
  const { data } = await foodiesApiClient.get("ingredients");
  return data;
};
