import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import addRecipeSchema from "./validationSchema/addRecipeSchema";
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
  const methods = useForm({ resolver: yupResolver(addRecipeSchema) });
  const {
    formState: { errors },
  } = methods;

  console.log("errors :>> ", errors);

  const categoriesList = useSelector(selectCategories);
  const ingredientsList = useSelector(selectIngredients);

  const [cookingTime, setCookingTime] = useState(10);
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
          <div className={styles.errorContainer}>
            <input
              type="text"
              {...methods.register("title")}
              placeholder="THE NAME OF THE RECIPE"
              className={styles.recipeName}
            />
            {errors.title && (
              <span className={styles.error}>title is required</span>
            )}
          </div>

          <div className={styles.formOptionsWrapper}>
            {/* RECIPE DESCRIPTION */}
            <div className={`${styles.inputAreaWrapper} ${styles.recipeDescr}`}>
              <div className={styles.errorContainer}>
                <textarea
                  {...methods.register("description")}
                  placeholder="Enter a description of the dish"
                  className={` ${styles.inputArea} text`}
                />
                {errors.description && (
                  <span className={`${styles.error} ${styles.errorInputArea}`}>
                    description is required
                  </span>
                )}
              </div>
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

            {/* SELECT CATEGORY */}
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

            {/* COOKING TIMER */}
            <CookingTimeConter
              cookingTime={cookingTime}
              setCookingTime={setCookingTime}
            />

            {/* SELECT INGREDIENTS */}
            <AddIngredients
              ingredientsList={ingredientsList}
              selectedIngredients={selectedIngredients}
              setSelectedIngredients={setSelectedIngredients}
            />
          </div>

          {/* RECIPE PREPARATION */}
          <div className={styles.recipePreparation}>
            <label htmlFor="instructions">Recipe Preparation</label>
            <div className={styles.inputAreaWrapper}>
              <div className={styles.errorContainer}>
                <textarea
                  {...methods.register("instructions")}
                  placeholder="Enter recipe"
                  className={`${styles.inputArea} text`}
                />
                {errors.instructions && (
                  <span className={`${styles.error} ${styles.errorInputArea}`}>
                    recipe preparation is required
                  </span>
                )}
              </div>
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

          {/* FORM BUTTONS */}
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
