import css from './RecipeMainInfo.module.css';
const RecipeMainInfo = ({ recipe, handleAuthorClick }) => {
  return (
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
          src={recipe.owner.avatar || 'https://via.placeholder.com/50x50'}
          alt={recipe.owner.name}></img>
        <div>
          <p className={css.btnAuthorText}>Created by:</p>
          <p className={css.recipeAuthorName}>{recipe.owner.name}</p>
        </div>
      </button>
    </div>
  );
};

export default RecipeMainInfo;
