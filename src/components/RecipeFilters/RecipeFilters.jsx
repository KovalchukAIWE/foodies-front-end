import styles from "./RecipeFilters.module.css";

const RecipeFilters = () => {
  return (
    <div className={styles.filtersSelect}>
      <select>
        <option value="">Ingredients</option>
      </select>
      <select>
        <option value="">Area</option>
      </select>
    </div>
  );
};

export default RecipeFilters;
