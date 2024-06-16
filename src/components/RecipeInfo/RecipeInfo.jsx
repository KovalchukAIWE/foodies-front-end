import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getDataRecipeById } from '../../services/recipes';
import Modal from '../Modal/Modal';
import SignInModal from '../SignInModal/SignInModal';
import { AddToFavButton } from '../Buttons/Buttons';
import css from './RecipeInfo.module.css';
import RecipeIngredients from '../RecipeIngredients/RecipeIngredients';
import RecipeMainInfo from '../RecipeMainInfo/RecipeMainInfo';
import RecipePreparation from '../RecipePreparation/RecipePreparation';
import Loader from '../Loader/Loader';

const RecipeInfo = ({ isAuthenticated }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState(null);
  const [showSignInModal, setShowSignInModal] = useState(false);

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
    if (isAuthenticated) {
      navigate(`/user/${recipe.owner}`);
    } else {
      setShowSignInModal(true);
    }
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
          isOpen={showSignInModal}
          onClose={() => setShowSignInModal(false)}>
          <SignInModal />
        </Modal>
      </div>
    </div>
  );
};

export default RecipeInfo;
