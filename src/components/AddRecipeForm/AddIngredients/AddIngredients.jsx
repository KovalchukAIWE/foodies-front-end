import Select from "react-select";

import { selectStyles } from "../../../css/selectStyles";
import styles from "../AddRecipeForm.module.css";

import { AddIngrButton } from "../../Buttons/Buttons";
import IngredientCard from "../IngredientCard/IngredientCard";

const AddIngredients = ({
  ingredientsList,
  register,
  setValue,
  watch,
  selectedIngredients,
  setSelectedIngredients,
}) => {
  const handleAddIngredient = () => {
    const ingredient = watch("ingredient");
    const measure = watch("measure");

    if (ingredient && measure) {
      const imgSrc = ingredientsList.find(
        (el) => el._id === ingredient.value
      ).img;

      setSelectedIngredients([
        ...selectedIngredients,
        { id: ingredient.value, name: ingredient.label, img: imgSrc, measure },
      ]);

      setValue("ingredient", "");
      setValue("measure", "");
    }
  };

  const handleRemoveIngredient = (ingredientId) => {
    return setSelectedIngredients(
      selectedIngredients.filter((ing) => ing.id !== ingredientId)
    );
  };

  return (
    <div className={styles.addIngredientsWrapper}>
      <div className={styles.ingredientsOptionsWrapper}>
        <div className={styles.addOptionsWrapper}>
          <label htmlFor="ingredients">Ingredients</label>
          <Select
            name={"ingredients"}
            placeholder={"Add the ingredient"}
            options={ingredientsList.map((option) => {
              return { value: option._id, label: option.name };
            })}
            {...register("ingredient")}
            onChange={(selectedOption) =>
              setValue("ingredient", selectedOption)
            }
            styles={selectStyles}
          />
        </div>
        <div className={styles.addOptionsWrapper}>
          <input
            type="text"
            {...register("measure", { required: true })}
            placeholder="Enter quantity"
            className={`${styles.ingredientsQuantity} text`}
          />
        </div>
      </div>
      <AddIngrButton text="Add ingredient" onClick={handleAddIngredient} />
      {selectedIngredients.length ? (
        <ul className={styles.ingrList}>
          {selectedIngredients.map((ingredient) => {
            return (
              <IngredientCard
                key={ingredient.id}
                id={ingredient.id}
                ingredient={ingredient}
                handleRemoveIngredient={handleRemoveIngredient}
              />
            );
          })}
        </ul>
      ) : (
        <></>
      )}
    </div>
  );
};

export default AddIngredients;
