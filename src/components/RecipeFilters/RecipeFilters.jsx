import { useSelector } from "react-redux";
import Select from "react-select";
import { selectIngredients, selectAreas } from "../../redux/recipes/selectors";
import styles from "./RecipeFilters.module.css";
import { selectStyles } from "../../css/selectStyles";

const RecipeFilters = ({
  selectedIngredient,
  selectedArea,
  onSelectedIngredient,
  onSelectedArea,
}) => {
  const ingredients = useSelector(selectIngredients);
  const areas = useSelector(selectAreas);

  const handleIngredientChange = (selectedOption) => {
    onSelectedIngredient(selectedOption ? selectedOption.value : null);
  };

  const handleAreaChange = (selectedOption) => {
    onSelectedArea(selectedOption ? selectedOption.value : null);
  };

  return (
    <div className={styles.selectContainer}>
      <div className={styles.selectBox}>
        <Select
          styles={selectStyles}
          name={"ingredients"}
          placeholder={"Ingredients"}
          options={ingredients.map((option) => {
            return { value: option._id, label: option.name };
          })}
          value={
            selectedIngredient
              ? {
                  value: selectedIngredient,
                  label: ingredients.find(
                    (ingredient) => ingredient._id === selectedIngredient
                  ).name,
                }
              : null
          }
          onChange={handleIngredientChange}
        />
      </div>
      <div className={styles.selectBox}>
        <Select
          styles={selectStyles}
          name={"Area"}
          placeholder={"Area"}
          options={areas.map((option) => {
            return { value: option._id, label: option.name };
          })}
          value={
            selectedArea
              ? {
                  value: selectedArea,
                  label: areas.find((area) => area._id === selectedArea).name,
                }
              : null
          }
          onChange={handleAreaChange}
        />
      </div>
    </div>
  );
};

export default RecipeFilters;
