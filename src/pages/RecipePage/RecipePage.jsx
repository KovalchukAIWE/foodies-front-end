import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import PathInfo from "../../components/PathInfo/PathInfo.jsx";
import RecipeInfo from "../../components/RecipeInfo/RecipeInfo.jsx";
import PopularRecipes from "../../components/PopularRecipes/PopularRecipes.jsx";
import Loader from "../../components/Loader/Loader.jsx";
import MainTitle from "../../components/MainTitle/MainTitle.jsx";
import Container from "../../components/Container/Container.jsx";
import {
  getDataRecipeById,
  getPopularRecipes,
} from "../../services/recipes.js";

import css from "./RecipePage.module.css";

const RecipePage = () => {
  const [recipe, setRecipe] = useState(null);
  const [popularRecipes, setPopularRecipes] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { id } = useParams();

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
        const result = await getDataRecipeById(id);
        setRecipe(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [id]);

  return (
    <>
      <section className={css.sectionRecipeInfo}>
        <Container>
          {recipe && (
            <>
              <PathInfo pageName={recipe.title} />
              <RecipeInfo recipe={recipe} />
            </>
          )}
        </Container>
      </section>
      <section className={css.sectionPopularRecipe}>
        <Container>
          {Array.isArray(popularRecipes) && (
            <PopularRecipes recipes={popularRecipes} />
          )}
          <MainTitle text="Popular recipes" />
          {/* Поміняти на компонент нотифікашки */}
          {error && <p>{error}</p>}
          {isLoading && <Loader />}
        </Container>
      </section>
    </>
  );
};

export default RecipePage;
