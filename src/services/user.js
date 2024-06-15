import { foodiesApiClient, setAuthHeader } from "./apiClient.js";

export const registerUser = async (credentials) => {
  const { data } = await foodiesApiClient.post("users/signup", credentials);
  setAuthHeader(data.token);
  return data;
};

export const logInUser = async (credentials) => {
  const { data } = await foodiesApiClient.post("users/signin", credentials);
  setAuthHeader(data.token);
  return data;
};

export const refreshUser = async (token) => {
  setAuthHeader(token);
  const { data } = await foodiesApiClient.get("users/current");
  return data;
};

export const logOutUser = async () => {
  await foodiesApiClient.post("users/signout");
  setAuthHeader();
};

export const getUserDataByUserId = async (userId) => {
  const { data } = await foodiesApiClient.get(`users/${userId}`);
  return data;
};

export const setUsersAvatarByUserId = async ({ avatar }) => {
  const formData = new FormData();
  formData.append("avatar", avatar);
  const { data } = await foodiesApiClient.patch(`users/avatar`, formData);
  return data;
};

export const getUsersFollowersByUserId = async () => {
  const { data } = await foodiesApiClient.get(`users/followers`);
  return data;
};

export const getUsersFollowingsByUserId = async () => {
  const { data } = await foodiesApiClient.get(`users/followings`);
  return data;
};

export const setFollowUserByUserId = async ({ body }) => {
  const { data } = await foodiesApiClient.patch(`users/follow`, body);
  return data;
};

export const setUnfollowUserByUserId = async (body) => {
  const { data } = await foodiesApiClient.patch(`users/unfollow`, body);
  return data;
};
