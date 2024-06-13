import styles from './RecipeIngredients.module.css';
// import getIngredients from '../../services/ingredients';

// console.log(getIngredients('640c2dd963a319ea671e382c'));
const RecipeIngredients = ({ ingredient }) => {
  return (
    <li className={styles.ingrItem}>
      <img
        className={styles.ingrImg}
        src={ingredient.img}
        alt={ingredient.name}
      />
      <div className={`${styles.ingrDescr} text`}>
        <p className={styles.ingrName}>{ingredient.name}</p>
        <p>{ingredient.measure}</p>
      </div>
    </li>
  );
};

export default RecipeIngredients;
