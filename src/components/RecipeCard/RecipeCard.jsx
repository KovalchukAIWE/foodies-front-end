import styles from "./RecipeCard.module.css";

const RecipeCard = ({ recipe }) => {
  return (
    <div className={styles.recipeCard}>
      <img
        className={styles.recipeCardImg}
        loading="lazy"
        src={recipe.thumb}
        alt={recipe.title}
      />
      <div className={styles.recipeCardContainer}>
        <h3 className={styles.recipeCardTitle}>{recipe.title}</h3>
        <p className={styles.recipeCardDescription}>{recipe.description}</p>
      </div>
    </div>
  );
};

export default RecipeCard;
