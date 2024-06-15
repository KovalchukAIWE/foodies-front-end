import styles from "./IngredientCard.module.css";
import sprite from "../../../assets/img/icons-sprite.svg";

const IngredientCard = ({ id, ingredient, handleRemoveIngredient }) => {
  return (
    <li className={styles.ingrItem}>
      <button
        type="button"
        className={styles.btnRemove}
        onClick={() => {
          handleRemoveIngredient(id);
        }}
      >
        <svg width={16} height={16}>
          <use href={`${sprite}#close`}></use>
        </svg>
      </button>
      <img
        className={styles.ingrImg}
        src={ingredient.img}
        alt={ingredient.name}
        width={55}
        height={55}
      />
      <div className={`${styles.ingrDescr} text`}>
        <p className={styles.ingrName}>{ingredient.name}</p>
        <p>{ingredient.measure}</p>
      </div>
    </li>
  );
};

export default IngredientCard;
