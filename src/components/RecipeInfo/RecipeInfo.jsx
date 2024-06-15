import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getDataRecipeById } from '../../services/recipes';
import Modal from '../Modal/Modal';
import SignInModal from '../SignInModal/SignInModal';
import { AddToFavButton } from '../Buttons/Buttons';
import css from './RecipeInfo.module.css';
import RecipeIngredients from '../RecipeIngredients/RecipeIngredients';

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
    return <div>Loading...</div>;
  }

  return (
    <div className={css.recipeInfo}>
      <img
        src={recipe.thumb}
        alt={recipe.title}
        className={css.recipeImage}
      />
      <div className={css.recipeDetails}>
        <div className={css.recipeTitleAndAuthor}>
          <h2 className={css.recipeTitle}>{recipe.title}</h2>
          <div className={css.categoryAndTime}>
            <p className={css.recipeCategory}>{recipe.category}</p>
            <p className={css.recipeTime}>{recipe.time} min</p>
          </div>
          <p className={css.recipeDescription}>{recipe.description}</p>
          <button
            onClick={handleAuthorClick}
            className={css.recipeAuthor}>
            <img
              src={recipe.owner.avatar || '../../images/owner.jpg'}
              alt={recipe.owner.name}></img>
            <div>
              <p className={css.btnAuthorText}>Created by:</p>
              <p className={css.recipeAuthorName}>{recipe.owner.name}</p>
            </div>
          </button>
        </div>
        <div className={css.recipeDetailsIngredients}>
          <h3 className={css.recipeTitleIngredients}>Ingredients</h3>
          <ul className={css.recipeIngredientsList}>
            {recipe.ingredients.map((ingredient) => (
              <RecipeIngredients
                key={ingredient._id}
                ingredient={ingredient}
              />
            ))}
          </ul>
        </div>
        <div className={css.recipeDetailsInstructions}>
          <h3 className={css.recipeTitleInstructions}>Recipe Preparation</h3>
          <p className={css.recipeInstructions}>{recipe.instructions}</p>
        </div>
        <AddToFavButton
          recipe={recipe}
          className={css.addToFavButton}
          text='Add to favorites'
          onClick={() => console.log('Add to favorites')}
        />

        {showSignInModal && (
          <Modal onClose={() => setShowSignInModal(false)}>
            <SignInModal />
          </Modal>
        )}
      </div>
    </div>
  );
};

export default RecipeInfo;
