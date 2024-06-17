import styles from "./RecipePreview.module.css";
import icons from "../../assets/img/icons-sprite.svg";
import { Link } from "react-router-dom";
import {
  createShortTitle,
  createShortDescription,
} from "../../helpers/helpers";

const RecipePreview = ({
  img,
  text,
  recipeName,
  id,
  title,
  handleDeleteRecipe,
  isOwner,
}) => {
  return (
    <li key={id} className={styles.recipeCard}>
      <div className={styles.imageTextWrapper}>
        <img
          src={img}
          alt={recipeName}
          className={styles.recipeImg}
          width={75}
          height={75}
        />
        <div className={styles.recipeTextBox}>
          <h2 className={styles.recipeTitle}>{createShortTitle(title)}</h2>
          <p className={styles.recipeText}>{createShortDescription(text)}</p>
        </div>
      </div>
      <div className={styles.recipeButtonsBox}>
        <Link
          to={`/recipe/${id}`}
          className={styles.recipeBtn}
          aria-label="watch the details of the recipe"
        >
          <svg className={styles.recipeCardIcon}>
            <use href={`${icons}#arrow-up-right`}></use>
          </svg>
        </Link>
        {isOwner && (
          <button
            type="button"
            className={styles.recipeBtn}
            aria-label="delete recipe from my recipies"
            onClick={() => handleDeleteRecipe(id)}
          >
            <svg className={styles.recipeCardIcon}>
              <use href={`${icons}#trash`}></use>
            </svg>
          </button>
        )}
      </div>
    </li>
  );
};

export default RecipePreview;
