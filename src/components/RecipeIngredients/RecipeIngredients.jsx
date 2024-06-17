import css from "./RecipeIngredients.module.css";
import styles from "../AddRecipeForm/IngredientCard/IngredientCard.module.css";
import defaultIngrImg from "../../assets/img/no-ingr.webp";

const RecipeIngredients = ({ ingredients }) => {
  return (
    <div className={css.recipeDetailsIngredients}>
      <h3 className={css.recipeTitleIngredients}>Ingredients</h3>
      <ul className={css.recipeIngredientsList}>
        {ingredients.map((ingredient) => (
          <li key={ingredient._id} className={styles.ingrItem}>
            <img
              src={ingredient.img}
              alt={ingredient.name}
              width={55}
              height={55}
              className={styles.ingrImg}
              onError={(e) => {
                e.target.onError = null;
                e.target.src = defaultIngrImg;
              }}
            />
            <div className={`${styles.ingrDescr} text`}>
              <p className={styles.ingrName}>{ingredient.name}</p>
              <p>{ingredient.measure}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeIngredients;
