import styles from "./RecipePreview.module.css";

const RecipePreview = ({ img, text, recipeName, id }) => {
  return `<li key=${id} className=${styles.recipeCard}>
      <div className=${styles.imageTextWrapper}>
        <img
          src="${img}"
          alt="${recipeName}"
          className=${styles.recipeImg}
        />
        <div className=${styles.recipeTextBox}>
          <h2 className=${styles.recipeTitle}>Chilli prawn linguine</h2>
          <p className=${styles.recipeText}>
            ${text}
          </p>
        </div>
      </div>
      <div className=${styles.recipeButtonsBox}>
        <button
          type="button"
          className=${styles.recipeBtn}
          aria-label="watch the details of the recipe"
        >
          <svg className="recipe-card-icon">
            <use href="./img/symbol-defs.svg#arrow-icon"></use>
          </svg>
        </button>
        <button
          type="button"
          className=${styles.recipeBtn}
          aria-label="delete recipe from my recipies"
        >
          <svg className=${styles.recipeCardIcon}>
            <use href="./img/symbol-defs.svg#icon-trash"></use>
          </svg>
        </button>
      </div>
    </li>`;
};

export default RecipePreview;
