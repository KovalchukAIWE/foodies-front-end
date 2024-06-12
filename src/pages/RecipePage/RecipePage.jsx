import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import PathInfo from "../../components/PathInfo/PathInfo.jsx";
import RecipeInfo from "../../components/RecipeInfo/RecipeInfo.jsx";
import PopularRecipes from "../../components/PopularRecipes/PopularRecipes.jsx";
import Loader from "../../components/Loader/Loader.jsx";
import Section from "../../components/Section/Section.jsx";
import {
  getDataRecipeById,
  getPopularRecipes,
} from "../../services/recipes.js";

const ReciepePage = () => {
  const [recipe, setRecipe] = useState(null);
  const [popularRecipes, setPopularRecipes] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { recipeId } = useParams();

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const result = await getPopularRecipes();
        setPopularRecipes(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const result = await getDataRecipeById(recipeId);
        setRecipe(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [recipeId]);

  return (
    <>
      <Section>
        {recipe && (
          <>
            <PathInfo pageName={recipe.title} />
            <RecipeInfo recipe={recipe} />
          </>
        )}
        {Array.isArray(popularRecipes) && (
          <PopularRecipes recipes={popularRecipes} />
        )}

        {/* Поміняти на компонент нотифікашки */}
        {error && <p>{error}</p>}
        {isLoading && <Loader />}
      </Section>
    </>
  );
};

export default ReciepePage;
