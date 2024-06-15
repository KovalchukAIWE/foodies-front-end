import styles from './RecipeIngredients.module.css';

const RecipeIngredients = ({ ingredient }) => {
  return (
    <li className={styles.ingrItem}>
      <div className={styles.ingrImgBox}>
        <img
          src={ingredient.img}
          alt={ingredient.name}
          className={styles.ingrImg}
        />
      </div>
      <div className={`${styles.ingrDescr} text`}>
        <p className={styles.ingrName}>{ingredient.name}</p>
        <p className={styles.ingrMeasure}>{ingredient.measure}</p>
      </div>
    </li>
  );
};

export default RecipeIngredients;
