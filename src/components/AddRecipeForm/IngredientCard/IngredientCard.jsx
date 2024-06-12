import styles from "./IngredientCard.module.css";
import sprite from "../../../assets/img/icons-sprite.svg";

const IngredientCard = ({ ingredient }) => {
  const handleClick = () => {
    console.log("click :>> REMOVE");
  };
  return (
    <li className={styles.ingrItem}>
      <button type="button" className={styles.btnRemove} onClick={handleClick}>
        <svg width={16} height={16}>
          <use href={`${sprite}#close`}></use>
        </svg>
      </button>
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

export default IngredientCard;
