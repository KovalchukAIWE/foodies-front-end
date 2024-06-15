export const selectUser = (state) => state.user.user;
export const selectIsLoggedIn = (state) => state.user.isLoggedIn;
export const selectIsRefreshing = (state) => state.user.isRefreshing;
export const selectIsLoading = (state) => state.user.isLoading;
export const selectErrorMessage = (state) => state.user.errorMessage;
export const selectIsModalSignInOpen = (state) => state.user.isModalSignInOpen;
export const selectIsModalSignUpOpen = (state) => state.user.isModalSignUpOpen;
