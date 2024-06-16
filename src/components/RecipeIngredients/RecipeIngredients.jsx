import css from './RecipeIngredients.module.css';

const RecipeIngredients = ({ ingredients }) => {
  return (
    <div className={css.recipeDetailsIngredients}>
      <h3 className={css.recipeTitleIngredients}>Ingredients</h3>
      <ul className={css.recipeIngredientsList}>
        {ingredients.map((ingredient) => (
          <li
            key={ingredient._id}
            className={css.ingrItem}>
            <div className={css.ingrImgBox}>
              <img
                src={ingredient.img}
                alt={ingredient.name}
                className={css.ingrImg}
              />
            </div>
            <div className={`${css.ingrDescr} text`}>
              <p className={css.ingrName}>{ingredient.name}</p>
              <p className={css.ingrMeasure}>{ingredient.measure}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeIngredients;
