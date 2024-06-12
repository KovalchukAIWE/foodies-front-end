import { foodiesApiClient, setAuthHeader } from "./apiClient.js";

export const registerUser = async (credentials) => {
  const { data } = await foodiesApiClient.post("user/signup", credentials);
  setAuthHeader(data.token);
  return data;
};

export const logInUser = async (credentials) => {
  const { data } = await foodiesApiClient.post("user/signin", credentials);
  setAuthHeader(data.token);
  return data;
};

export const refreshUser = async (token) => {
  setAuthHeader(token);
  const { data } = await foodiesApiClient.get("user/current");
  return data;
};

export const logOutUser = async () => {
  await foodiesApiClient.post("user/signout");
  setAuthHeader();
};

export const getUserDataByUserId = async (userId) => {
  const { data } = await foodiesApiClient.get(`users/${userId}`);
  return data;
};

export const setUsersAvatarByUserId = async ({ userId, avatar }) => {
  const formData = new FormData();
  formData.append("avatar", avatar);
  const { data } = await foodiesApiClient.patch(
    `user/${userId}/avatar`,
    formData
  );
  return data;
};

export const getUsersFollowersByUserId = async (userId) => {
  const { data } = await foodiesApiClient.get(`user/${userId}/followers`);
  return data;
};

export const getUsersFollowingsByUserId = async (userId) => {
  const { data } = await foodiesApiClient.get(`user/${userId}/followings`);
  return data;
};

export const setFollowUserByUserId = async ({ userId, body }) => {
  const { data } = await foodiesApiClient.patch(`user/${userId}/follow`, body);
  return data;
};

export const setUnfollowUserByUserId = async (userId, body) => {
  const { data } = await foodiesApiClient.patch(
    `user/${userId}/unfollow`,
    body
  );
  return data;
};
