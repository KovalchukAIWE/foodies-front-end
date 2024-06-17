import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectIsLoggedIn } from "../../redux/user/selectors";
import { setModalSignInStatus } from "../../redux/user/slice";
import {
  getDataRecipeById,
  addRecipeToFavorite,
  deleteRecipeFromFavorite,
  getUsersFavoriteRecipes,
} from "../../services/recipes";
import { selectFavoriteRecipes } from "../../redux/recipes/selectors.js";
import sprite from "../../assets/img/icons-sprite.svg";
import styles from "./RecipeCard.module.css";

const RecipeCard = ({ recipe }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const favoriteRecipes = useSelector(selectFavoriteRecipes);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const checkIfFavorite = async (recipeId) => {
      try {
        const favorites = await getUsersFavoriteRecipes();
        if (favorites && Array.isArray(favorites.result)) {
          const favoriteRecipeIds = favorites.result.map(
            (recipe) => recipe._id
          );
          setIsFavorite(favoriteRecipeIds.includes(recipeId));
        } else {
          console.error(
            "Favorites response does not contain a valid result array:",
            favorites
          );
        }
      } catch (error) {
        console.error("Failed to check if recipe is favorite", error);
      }
    };

    if (isLoggedIn) {
      checkIfFavorite(recipe._id);
    }
  }, [isLoggedIn, recipe._id]);

  useEffect(() => {
    setIsFavorite(
      favoriteRecipes.some((favRecipe) => favRecipe._id === recipe._id)
    );
  }, [favoriteRecipes, recipe._id]);

  const defaultAvatar = "/src/assets/img/noUserPhoto.webp";
  const handleAuthorClick = () => {
    if (isLoggedIn) {
      navigate(`/user/${recipe.owner._id}`);
    } else {
      dispatch(setModalSignInStatus(true));
    }
  };

  const handleAddToFavorites = async () => {
    if (!isLoggedIn) {
      dispatch(setModalSignInStatus(true));
      return;
    }

    try {
      await addRecipeToFavorite(recipe._id);
      setIsFavorite(true);
    } catch (error) {
      console.error("Failed to add recipe to favorites", error);
    }
  };

  const handleRemoveFromFavorites = async () => {
    if (!isLoggedIn) {
      dispatch(setModalSignInStatus(true));
      return;
    }

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
