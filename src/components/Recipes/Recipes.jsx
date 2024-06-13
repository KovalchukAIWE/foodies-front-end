import RecipeFilters from "../RecipeFilters/RecipeFilters";
import RecipeList from "../RecipeList/RecipeList";
import RecipePagination from "../RecipePagination/RecipePagination";
import styles from "./Recipes.module.css";

const Recipes = ({
  selectedIngredient,
  selectedArea,
  onSelectedArea,
  onSelectedIngredient,
  onBack,
  recipes,
}) => {
  return (
    <>
      <div>
        <button type="button" onClick={onBack}>
          BACK
        </button>
      </div>
      <div>
        <h2>Name caregory</h2>
        <p>description caregory</p>
      </div>
      <div className={styles.resipesContainer}>
        <RecipeFilters
          selectedIngredient={selectedIngredient}
          selectedArea={selectedArea}
          onSelectedIngredient={onSelectedIngredient}
          onSelectedArea={onSelectedArea}
        />
        <RecipeList recipes={recipes} />
      </div>
      <RecipePagination />
    </>
  );
};

export default Recipes;
