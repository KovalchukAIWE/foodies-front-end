import { useRef } from "react";
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
    trigger,
    formState: { errors },
  } = useFormContext();

  const ingredientRef = useRef();

  const ingredient = watch("ingredientsSelect");
  const measure = watch("measure");

  let ingredientValid = "";
  if (ingredient?.value && !measure?.length) {
    ingredientValid = "Quantity is required";
  }

  if (selectedIngredients.find((el) => el.id === ingredient?.value)) {
    ingredientValid = "Already exist";
  }

  const handleAddIngredient = async () => {
    if (selectedIngredients.find((el) => el.id === ingredient?.value)) {
      return;
    }
    if (ingredient && measure) {
      const imgSrc = ingredientsList.find(
        (el) => el._id === ingredient.value
      ).img;

      setSelectedIngredients([
        ...selectedIngredients,
        { id: ingredient.value, name: ingredient.label, img: imgSrc, measure },
      ]);

      ingredientRef.current.clearValue();
      await setValue("measure", "");
      trigger("ingredients");
    }
  };

  const handleRemoveIngredient = (ingId) => {
    setSelectedIngredients(
      selectedIngredients.filter((ing) => ing.id !== ingId)
    );
  };

  return (
    <div className={styles.addIngredientsWrapper}>
      <div className={styles.ingredientsOptionsWrapper}>
        <div className={styles.addOptionsWrapper}>
          <label htmlFor="ingredientsSelect" className={styles.labelText}>
            Ingredients
          </label>
          <Select
            {...register("ingredientsSelect")}
            name={"ingredientsSelect"}
            id="ingredientsSelect"
            placeholder={"Add the ingredient"}
            selectedOption={null}
            ref={ingredientRef}
            options={ingredientsList.map((option) => {
              return { value: option._id, label: option.name };
            })}
            onChange={(selectedOption) => {
              setValue("ingredientsSelect", selectedOption);
            }}
            styles={selectStyles}
          />
        </div>
        <div className={styles.addOptionsWrapper}>
          <div className={styles.errorContainer}>
            <input
              type="text"
              {...register("measure")}
              name="measure"
              placeholder="Enter quantity"
              className={`${styles.ingredientsQuantity} text`}
            />
            <span className={`${styles.error} ${styles.errorIngr}`}>
              {ingredientValid ?? ingredientValid}
            </span>
          </div>
        </div>
      </div>
      <div className={styles.errorContainer}>
        {errors.ingredients && (
          <span className={`${styles.error} ${styles.errorIngr}`}>
            {errors.ingredients?.message}
          </span>
        )}
        <AddIngrButton text="Add ingredient" onClick={handleAddIngredient} />
      </div>

      {selectedIngredients.length ? (
        <ul className={styles.ingrList}>
          {selectedIngredients.map((ingredient, index) => {
            return (
              <IngredientCard
                key={ingredient.id}
                id={ingredient.id}
                index={index}
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
