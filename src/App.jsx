import { useEffect, lazy, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";

import { refresh } from "./redux/user/operations.js";
import { selectIsRefreshing } from "./redux/user/selectors.js";
import Loader from "./components/Loader/Loader.jsx";
import SharedLayout from "./components/SharedLayout/SharedLayout.jsx";
import { getAllAreas, getAllIngredients } from "./redux/recipes/operations.js";

const HomePage = lazy(() => import("./pages/HomePage/HomePage.jsx"));
const RecipePage = lazy(() => import("./pages/RecipePage/RecipePage.jsx"));

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refresh());
    dispatch(getAllAreas());
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
            <Route path="recipe/:recipeId" element={<RecipePage />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
