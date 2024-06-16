import css from './RecipePreparation.module.css';
const RecipePreparation = ({ recipe }) => {
  return (
    <div className={css.recipeDetailsInstructions}>
      <h3 className={css.recipeTitleInstructions}>Recipe Preparation</h3>
      <p className={css.recipeInstructions}>{recipe.instructions}</p>
    </div>
  );
};

export default RecipePreparation;
