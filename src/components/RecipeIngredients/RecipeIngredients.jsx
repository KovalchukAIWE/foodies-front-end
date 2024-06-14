import styles from './RecipeIngredients.module.css';

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
