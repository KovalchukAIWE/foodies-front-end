import { useFormContext } from "react-hook-form";

import styles from "./IngredientCard.module.css";
import sprite from "../../../assets/img/icons-sprite.svg";

const IngredientCard = ({ id, ingredient, handleRemoveIngredient, index }) => {
  const { register } = useFormContext();
  const defaultIngrImg = "/src/assets/img/noIngr.png";

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
        src={ingredient.img || defaultIngrImg}
        alt={ingredient.name}
        width={55}
        height={55}
        onError={(e) => {
          e.target.onError = null;
          e.target.src = defaultIngrImg;
        }}
      />
      <div className={`${styles.ingrDescr} text`}>
        <p className={styles.ingrName}>{ingredient.name}</p>
        <p>{ingredient.measure}</p>
      </div>
      <input
        type="hidden"
        {...register(`ingredients[${index}].id`)}
        name={`ingredients[${index}].id`}
        value={id}
      />
      <input
        type="hidden"
        {...register(`ingredients[${index}].measure`)}
        name={`ingredients[${index}].measure`}
        value={ingredient.measure}
      />
    </li>
  );
};

export default IngredientCard;
