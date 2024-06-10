import { foodiesApiClient } from "./apiClient.js";

export const getCategories = async () => {
  const { data } = await foodiesApiClient.get("categories");
  return data;
};
