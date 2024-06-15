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
  totalPage,
}) => {
  return (
    <>
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
        <Subtitle text="Go on a taste journey, where every sip is a sophisticated creative chord, and every dessert is an expression of the most refined gastronomic desires." />
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
          <RecipePagination
            onChangePage={onSetPage}
            currentPage={page}
            totalPage={totalPage}
          />
        </div>
      </div>
    </>
  );
};

export default Recipes;
