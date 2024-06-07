import styles from "./Buttons.module.css";
import sprite from "../../assets/img/icons-sprite.svg";

export const HeroButton = ({ onClick, text }) => {
  return (
    <button onClick={onClick} className={styles.heroButton}>
      {text}
    </button>
  );
};

export const CategoriesButton = ({ onClick, text }) => {
  return (
    <button onClick={onClick} className={styles.categoriesButton}>
      {text}
    </button>
  );
};

export const AddIngrButton = ({ onClick, text }) => {
  return (
    <button onClick={onClick} className={styles.addIngrButton}>
      {text}
      <svg width={20} height={20}>
        <use href={`${sprite}#plus`}></use>
      </svg>
    </button>
  );
};

export const DeleteButton = ({ onClick, text }) => {
  return (
    <button onClick={onClick} className={styles.deleteButton}>
      {text}
      <svg width={20} height={20}>
        <use href={`${sprite}#trash`}></use>
      </svg>
    </button>
  );
};

export const MinusButton = ({ onClick }) => {
  return (
    <button onClick={onClick} className={styles.rangeButton}>
      <svg width={16} height={16}>
        <use href={`${sprite}#minus`}></use>
      </svg>
    </button>
  );
};

export const PlusButton = ({ onClick }) => {
  return (
    <button onClick={onClick} className={styles.rangeButton}>
      <svg width={16} height={16}>
        <use href={`${sprite}#plus`}></use>
      </svg>
    </button>
  );
};

export const FavoriteButton = ({ onClick }) => {
  return (
    <button onClick={onClick} className={styles.recipeCardButton}>
      <svg width={16} height={16}>
        <use href={`${sprite}#heart`}></use>
      </svg>
    </button>
  );
};

export const DetailsButtonRecipe = ({ onClick }) => {
  return (
    <button onClick={onClick} className={styles.recipeCardButton}>
      <svg width={16} height={16}>
        <use href={`${sprite}#arrow-up-right`}></use>
      </svg>
    </button>
  );
};

export const DetailsButtonCategory = ({ onClick }) => {
  return (
    <button onClick={onClick} className={styles.categoryCardButton}>
      <svg width={18} height={18}>
        <use href={`${sprite}#arrow-up-right`}></use>
      </svg>
    </button>
  );
};

export const AddToFavButton = ({ onClick, text }) => {
  return (
    <button onClick={onClick} className={styles.addToFavButton}>
      {text}
    </button>
  );
};

export const FollowButton = ({ onClick, text }) => {
  return (
    <button onClick={onClick} className={styles.followButton}>
      {text}
    </button>
  );
};
