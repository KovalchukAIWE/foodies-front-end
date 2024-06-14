import { useFormContext } from "react-hook-form";
import Select from "react-select";

import { selectStyles } from "../../../css/selectStyles";
import styles from "../AddRecipeForm.module.css";

import { AddIngrButton } from "../../Buttons/Buttons";
import IngredientCard from "../IngredientCard/IngredientCard";

const AddIngredients = ({
  ingredientsList,
  selectedIngredients,
  setSelectedIngredients,
}) => {
  const {
    register,
    watch,
    setValue,
    formState: { errors },
  } = useFormContext();

  setValue("ingredientsCount", selectedIngredients.length);

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

      setValue("ingredientsCount", selectedIngredients.length);

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
          <label htmlFor="ingredients" className={styles.labelText}>
            Ingredients
          </label>
          <Select
            name={"ingredients"}
            placeholder={"Add the ingredient"}
            selectedOption={null}
            options={ingredientsList.map((option) => {
              return { value: option._id, label: option.name };
            })}
            {...register("ingredient")}
            onChange={(selectedOption) => {
              setValue("ingredient", selectedOption);
            }}
            styles={selectStyles}
          />
        </div>
        <div className={styles.addOptionsWrapper}>
          <input
            type="text"
            {...register("measure")}
            placeholder="Enter quantity"
            className={`${styles.ingredientsQuantity} text`}
          />
        </div>
      </div>
      <div className={styles.errorContainer}>
        <input
          type="hidden"
          {...register("ingredientsCount")}
          value={selectedIngredients.length}
          name="ingredientsCount"
        />
        {errors.ingredientsCount && (
          <span className={styles.error}>
            {errors.ingredientsCount?.message}
          </span>
        )}
        <AddIngrButton text="Add ingredient" onClick={handleAddIngredient} />
      </div>

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
