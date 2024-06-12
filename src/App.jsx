import { useEffect, lazy, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";

import { refresh } from "./redux/user/operations.js";
import { selectIsRefreshing } from "./redux/user/selectors.js";
import Loader from "./components/Loader/Loader.jsx";
import SharedLayout from "./components/SharedLayout/SharedLayout.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";
import {
  getAllAreas,
  getAllCategories,
  getAllIngredients,
} from "./redux/recipes/operations.js";

const HomePage = lazy(() => import("./pages/HomePage/HomePage.jsx"));
const RecipePage = lazy(() => import("./pages/RecipePage/RecipePage.jsx"));
const AddRecipePage = lazy(() =>
  import("./pages/AddRecipePage/AddRecipePage.jsx")
);
const UserPage = lazy(() => import("./pages/UserPage/UserPage.jsx"));

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refresh());
    dispatch(getAllAreas());
    dispatch(getAllCategories());
    dispatch(getAllIngredients());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <>
      <Suspense>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<HomePage />} />
            <Route path="recipe/:id" element={<RecipePage />} />
            <Route
              path="recipe/add"
              element={
                <PrivateRoute redirectTo="/" component={<AddRecipePage />} />
              }
            />
            <Route
              path="user/:id"
              element={<PrivateRoute redirectTo="/" component={<UserPage />} />}
            />
            <Route path="*" element={<HomePage />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
