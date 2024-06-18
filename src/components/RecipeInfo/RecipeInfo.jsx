import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  addRecipeToFavorite,
  deleteRecipeFromFavorite,
} from "../../services/recipes";
import Modal from "../Modal/Modal";
import SignInModal from "../SignInModal/SignInModal";
import { AddToFavButton } from "../Buttons/Buttons";
import css from "./RecipeInfo.module.css";
import RecipeIngredients from "../RecipeIngredients/RecipeIngredients";
import RecipeMainInfo from "../RecipeMainInfo/RecipeMainInfo";
import RecipePreparation from "../RecipePreparation/RecipePreparation";
import {
  selectIsLoggedIn,
  selectIsModalSignInOpen,
} from "../../redux/user/selectors";
import { setModalSignInStatus } from "../../redux/user/slice";

const RecipeInfo = ({ recipe }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isSignInModalOpen = useSelector(selectIsModalSignInOpen);
  const [isFavorite, setIsFavorite] = useState(recipe.favorite);

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
    try {
      await deleteRecipeFromFavorite(recipe._id);
      setIsFavorite(false);
    } catch (error) {
      console.error("Failed to remove recipe from favorites", error);
    }
  };

  const closeSignInModal = () => {
    dispatch(setModalSignInStatus(false));
  };

  return (
    <div className={css.recipeInfo}>
      <img
        src={recipe.thumb}
        alt={recipe.title}
        className={css.recipeImage}
        width={343}
        height={318}
      />
      <div className={css.recipeDetails}>
        <RecipeMainInfo recipe={recipe} handleAuthorClick={handleAuthorClick} />

        <RecipeIngredients ingredients={recipe.ingredients} />

        <RecipePreparation recipe={recipe} />

        {isLoggedIn && isFavorite ? (
          <AddToFavButton
            recipe={recipe}
            className={css.addToFavButton}
            text="Remove from favorites"
            onClick={handleRemoveFromFavorites}
          />
        ) : (
          <AddToFavButton
            recipe={recipe}
            className={css.addToFavButton}
            text="Add to favorites"
            onClick={handleAddToFavorites}
          />
        )}

        {isSignInModalOpen && !isLoggedIn && (
          <Modal isOpen={isSignInModalOpen} onClose={closeSignInModal}>
            <SignInModal onClose={closeSignInModal} />
          </Modal>
        )}
      </div>
    </div>
  );
};

export default RecipeInfo;
