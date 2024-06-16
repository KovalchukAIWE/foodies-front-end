import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectIsLoggedIn } from "../../redux/user/selectors";
import { setModalSignInStatus } from "../../redux/user/slice";
import {
  addRecipeToFavorite,
  deleteRecipeFromFavorite,
} from "../../services/recipes";
import sprite from "../../assets/img/icons-sprite.svg";
import styles from "./RecipeCard.module.css";

const RecipeCard = ({ recipe }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const [isFavorite, setIsFavorite] = useState(false);

  const defaultAvatar = "/src/assets/img/noUserPhoto.webp";
  const handleAuthorClick = () => {
    if (isLoggedIn) {
      navigate(`/user/${recipe.owner._id}`);
    } else {
      dispatch(setModalSignInStatus(true));
    }
  };

  const handleAddToFavorites = async () => {
    try {
      await addRecipeToFavorite(recipe._id);
      setIsFavorite(true);
    } catch (error) {
      console.error("Failed to add recipe to favorites", error);
    }
  };

  const handleRemoveFromFavorites = async () => {
    try {
      await deleteRecipeFromFavorite(recipe._id);
      setIsFavorite(false);
    } catch (error) {
      console.error("Failed to remove recipe from favorites", error);
    }
  };

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
        <div className={styles.recipeCardBox}>
          <button
            className={styles.recipeCardAuthor}
            onClick={handleAuthorClick}
          >
            <img
              src={recipe.owner.avatar || defaultAvatar}
              alt={recipe.owner.name}
              className={styles.authorAvatar}
            />
            <span>{recipe.owner.name}</span>
          </button>
          <div className={styles.recipeCardSocial}>
            {isFavorite ? (
              <button
                className={styles.recipeIconCircleActive}
                type="button"
                onClick={handleRemoveFromFavorites}
              >
                <svg className={styles.recipeSocialIconActive}>
                  <use xlinkHref={`${sprite}#heart`} />
                </svg>
              </button>
            ) : (
              <button
                className={styles.recipeIconCircle}
                type="button"
                onClick={handleAddToFavorites}
              >
                <svg className={styles.recipeSocialIcon}>
                  <use xlinkHref={`${sprite}#heart`} />
                </svg>
              </button>
            )}
            <button type="button">
              <Link to={`/recipe/${recipe._id}`}>
                <div className={styles.recipeIconCircle}>
                  <svg className={styles.recipeSocialIcon}>
                    <use xlinkHref={`${sprite}#arrow-up-right`} />
                  </svg>
                </div>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
