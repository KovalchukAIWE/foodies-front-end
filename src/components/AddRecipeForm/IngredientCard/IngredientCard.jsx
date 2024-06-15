import { useFormContext } from "react-hook-form";

import styles from "./IngredientCard.module.css";
import sprite from "../../../assets/img/icons-sprite.svg";

const IngredientCard = ({ id, ingredient, handleRemoveIngredient, index }) => {
  const { register } = useFormContext();

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
