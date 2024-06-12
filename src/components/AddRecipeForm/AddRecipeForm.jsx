import { FormProvider, useForm } from "react-hook-form";
import Select from "react-select";

import { selectStyles } from "../../css/selectStyles";
import styles from "./AddRecipeForm.module.css";

import UploadPhoto from "./UploadPhoto/UploadPhoto";
import { DeleteButton } from "../Buttons/Buttons";
import CookingTimeConter from "./CookingTimeConter/CookingTimeConter";
import AddIngredients from "./AddIngredients/AddIngredients";

import { useState } from "react";

import { useSelector } from "react-redux";
import {
  selectCategories,
  selectIngredients,
} from "../../redux/recipes/selectors";

const AddRecipeForm = () => {
  const methods = useForm();

  const categoriesList = useSelector(selectCategories);
  const ingredientsList = useSelector(selectIngredients);

  const [cookingTime, setCookingTime] = useState(5);
  const [selectedIngredients, setSelectedIngredients] = useState([]);

  const onSubmit = (data) => console.log(data);

  const symbRecipeDescrCount = methods.watch("description")?.length;
  const symbRecipePrepCount = methods.watch("instructions")?.length;

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className={styles.form}
        autoComplete="off"
      >
        <UploadPhoto />
        <div className={styles.formOptionals}>
          <input
            type="text"
            {...methods.register("title", { required: true })}
            placeholder="THE NAME OF THE RECIPE"
            className={styles.recipeName}
          />

          <div className={styles.formOptionsWrapper}>
            <div className={`${styles.inputAreaWrapper} ${styles.recipeDescr}`}>
              <input
                type="text"
                {...methods.register(
                  "description",
                  { required: true },
                  { maxLength: 220 }
                )}
                placeholder="Enter a description of the dish"
                className={` ${styles.inputArea} text`}
              />
              <p className={`${styles.symbCounter} text`}>
                <span
                  className={`${styles.symbCounter} text ${
                    symbRecipeDescrCount > 0 ? styles.symbBold : ""
                  }`}
                >
                  {symbRecipeDescrCount || 0}
                </span>
                /200
              </p>
            </div>
            <div className={styles.addOptionsWrapper}>
              <label htmlFor="category">Category</label>
              <Select
                name={"category"}
                placeholder={"Select a category"}
                selectedOption={null}
                options={categoriesList.map((option) => {
                  return { value: option._id, label: option.name };
                })}
                {...methods.register("category", { required: true })}
                onChange={(selectedOption) =>
                  methods.setValue("category", selectedOption.label)
                }
                styles={selectStyles}
              />
            </div>

            <CookingTimeConter
              cookingTime={cookingTime}
              setCookingTime={setCookingTime}
            />

            <AddIngredients
              ingredientsList={ingredientsList}
              selectedIngredients={selectedIngredients}
              setSelectedIngredients={setSelectedIngredients}
            />
          </div>

          <div className={styles.recipePreparation}>
            <label htmlFor="instructions">Recipe Preparation</label>
            <div className={styles.inputAreaWrapper}>
              <textarea
                {...methods.register(
                  "instructions",
                  { required: true },
                  { maxLength: 220 }
                )}
                placeholder="Enter recipe"
                className={`${styles.inputArea} text`}
              />
              <p className={`${styles.symbCounter} text`}>
                <span
                  className={`${styles.symbCounter} text ${
                    symbRecipePrepCount > 0 ? styles.symbBold : ""
                  }`}
                >
                  {symbRecipePrepCount || 0}
                </span>
                /200
              </p>
            </div>
          </div>
          <div className={styles.bottomBtns}>
            <DeleteButton
            // onClick={() => reset({ defaultValues })}
            />
            <button type="submit" className={styles.submitBtn}>
              Publish
            </button>
          </div>
        </div>
      </form>
    </FormProvider>
  );
};

export default AddRecipeForm;
