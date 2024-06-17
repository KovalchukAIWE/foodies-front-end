import MainTitle from "../MainTitle/MainTitle";
import Subtitle from "../Subtitle/Subtitle";
import RecipeFilters from "../RecipeFilters/RecipeFilters";
import RecipeList from "../RecipeList/RecipeList";
import RecipePagination from "../RecipePagination/RecipePagination";
import sprite from "../../assets/img/icons-sprite.svg";
import styles from "./Recipes.module.css";

const Recipes = ({
  selectedCategories,
  selectedIngredient,
  selectedArea,
  onSelectedArea,
  onSelectedIngredient,
  onBack,
  recipes,
  onSetPage,
  page,
  total,
  limit,
  categories,
}) => {
  const getCategoryDescription = (categories, selectedCategories) => {
    const category = categories.find(
      (category) => category.name === selectedCategories
    );
    return category ? category.description : "";
  };
  const categoryDescription = getCategoryDescription(
    categories,
    selectedCategories
  );

  return (
    <div className={styles.recipesBox}>
      <div className={styles.recipesNav}>
        <button className={styles.backButton} type="button" onClick={onBack}>
          <svg className={styles.recipesArrowLeft}>
            <use xlinkHref={`${sprite}#arrow-left`} />
          </svg>
          BACK
        </button>
      </div>
      <div className={styles.resipesTitleContainer}>
        <MainTitle text={selectedCategories} />
        <Subtitle text={categoryDescription} />
      </div>
      <div className={styles.resipesContainer}>
        <RecipeFilters
          selectedIngredient={selectedIngredient}
          selectedArea={selectedArea}
          onSelectedIngredient={onSelectedIngredient}
          onSelectedArea={onSelectedArea}
        />
        <div>
          <RecipeList recipes={recipes} />
          {total > limit && (
            <RecipePagination
              limit={limit}
              onChangePage={onSetPage}
              currentPage={page}
              total={total}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Recipes;
