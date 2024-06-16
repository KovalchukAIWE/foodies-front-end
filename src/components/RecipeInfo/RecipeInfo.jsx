import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  getDataRecipeById,
  addRecipeToFavorite,
  deleteRecipeFromFavorite,
  getUsersFavoriteRecipes,
} from '../../services/recipes';
import Modal from '../Modal/Modal';
import SignInModal from '../SignInModal/SignInModal';
import { AddToFavButton } from '../Buttons/Buttons';
import css from './RecipeInfo.module.css';
import RecipeIngredients from '../RecipeIngredients/RecipeIngredients';
import RecipeMainInfo from '../RecipeMainInfo/RecipeMainInfo';
import RecipePreparation from '../RecipePreparation/RecipePreparation';
import Loader from '../Loader/Loader';
import {
  selectIsLoggedIn,
  selectIsModalSignInOpen,
} from '../../redux/user/selectors';
import { setModalSignInStatus } from '../../redux/user/slice';

const RecipeInfo = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isSignInModalOpen = useSelector(selectIsModalSignInOpen);
  const [recipe, setRecipe] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const data = await getDataRecipeById(id);
        setRecipe(data);
        if (isLoggedIn) {
          await checkIfFavorite(data._id);
        }
      } catch (err) {
        console.error('Failed to fetch recipe', err);
      }
    };

    fetchRecipe();
  }, [id, isLoggedIn]);

  const checkIfFavorite = async (recipeId) => {
    try {
      const favorites = await getUsersFavoriteRecipes();
      if (favorites && Array.isArray(favorites.result)) {
        const favoriteRecipeIds = favorites.result.map((recipe) => recipe._id);
        setIsFavorite(favoriteRecipeIds.includes(recipeId));
      } else {
        console.error(
          'Favorites response does not contain a valid result array:',
          favorites
        );
      }
    } catch (error) {
      console.error('Failed to check if recipe is favorite', error);
    }
  };

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
      console.error('Failed to add recipe to favorites', error);
    }
  };

  const handleRemoveFromFavorites = async () => {
    try {
      await deleteRecipeFromFavorite(recipe._id);
      setIsFavorite(false);
    } catch (error) {
      console.error('Failed to remove recipe from favorites', error);
    }
  };

  const closeSignInModal = () => {
    dispatch(setModalSignInStatus(false));
  };

  if (!recipe) {
    return <Loader />;
  }

  return (
    <div className={css.recipeInfo}>
      <img
        src={recipe.thumb}
        alt={recipe.title}
        className={css.recipeImage}
      />
      <div className={css.recipeDetails}>
        <RecipeMainInfo
          recipe={recipe}
          handleAuthorClick={handleAuthorClick}
        />

        <RecipeIngredients ingredients={recipe.ingredients} />

        <RecipePreparation recipe={recipe} />

        {isFavorite ? (
          <AddToFavButton
            recipe={recipe}
            className={css.addToFavButton}
            text='Remove from favorites'
            onClick={handleRemoveFromFavorites}
          />
        ) : (
          <AddToFavButton
            recipe={recipe}
            className={css.addToFavButton}
            text='Add to favorites'
            onClick={handleAddToFavorites}
          />
        )}

        <Modal
          isOpen={isSignInModalOpen}
          onClose={closeSignInModal}>
          <SignInModal />
        </Modal>
      </div>
    </div>
  );
};

export default RecipeInfo;
