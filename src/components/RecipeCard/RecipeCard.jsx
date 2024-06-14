import sprite from "../../assets/img/icons-sprite.svg";
import styles from "./RecipeCard.module.css";

const RecipeCard = ({ recipe }) => {
  const defaultAvatar = "/src/assets/img/noUserPhoto.webp";

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
        <p className={styles.recipeCardDescription}>{recipe.instructions}</p>
        <div className={styles.recipeCardBox}>
          <button type="button" className={styles.recipeCardAuthor}>
            <img
              src={recipe.ownerAvatar || defaultAvatar}
              alt={recipe.ownerName}
              className={styles.authorAvatar}
            />
            <span>{recipe.ownerName}</span>
          </button>
          <div className={styles.recipeCardSocial}>
            <div className={styles.recipeIconCircle}>
              <svg className={styles.recipeSocialIcon}>
                <use xlinkHref={`${sprite}#heart`} />
              </svg>
            </div>
            <div className={styles.recipeIconCircle}>
              <svg className={styles.recipeSocialIcon}>
                <use xlinkHref={`${sprite}#arrow-up-right`} />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
