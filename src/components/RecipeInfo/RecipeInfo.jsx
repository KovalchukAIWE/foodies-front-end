import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getDataRecipeById } from '../../services/recipes';
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

  useEffect(() => {
    getDataRecipeById(id)
      .then((data) => {
        setRecipe(data);
      })
      .catch((err) => {
        console.error('Failed to fetch recipe', err);
      });
  }, [id]);

  const handleAuthorClick = () => {
    if (isLoggedIn) {
      navigate(`/user/${recipe.owner._id}`);
    } else {
      dispatch(setModalSignInStatus(true));
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
        <AddToFavButton
          recipe={recipe}
          className={css.addToFavButton}
          text='Add to favorites'
          onClick={() => console.log('Add to favorites')}
        />

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
