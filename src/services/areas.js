import { foodiesApiClient } from "./apiClient.js";

export const getAreas = async () => {
  const { data } = await foodiesApiClient.get("areas");
  return data;
};
