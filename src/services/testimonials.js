import { foodiesApiClient } from "./apiClient.js";

export const getTestimonials = async () => {
  const { data } = await foodiesApiClient.get("testimonials");
  return data;
};
