import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import addRecipeSchema from "./validationSchema/addRecipeSchema";

import Select from "react-select";
import { selectStyles } from "../../css/selectStyles";
import styles from "./AddRecipeForm.module.css";

import UploadPhoto from "./UploadPhoto/UploadPhoto";
import RecipeDescription from "./RecipeDescription/RecipeDescription";
import { DeleteButton } from "../Buttons/Buttons";
import CookingTimeCounter from "./CookingTimeCounter/CookingTimeCounter";
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
  const [imagePreview, setImagePreview] = useState(null);

  const onSubmit = (data) => {
    const ingredients = selectedIngredients.map((ing) => {
      return { _id: ing.id, measure: ing.measure };
    });
    console.log({ ...data, ingredients });
    // Send Backend
  };

  const RecipePrep = methods.watch("instructions");
  const wordsRecipePrepCount = RecipePrep?.length
    ? RecipePrep.trim().split(" ").length
    : 0;

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className={styles.form}
        autoComplete="off"
      >
        <UploadPhoto
          imagePreview={imagePreview}
          setImagePreview={setImagePreview}
        />
        <div className={styles.formOptionals}>
          <div className={styles.errorContainer}>
            <input
              type="text"
              {...methods.register("title")}
              placeholder="THE NAME OF THE RECIPE"
              className={styles.recipeName}
            />
            {errors.title && (
              <span className={styles.error}>{errors.title?.message}</span>
            )}
          </div>

          <div className={styles.formOptionsWrapper}>
            {/* RECIPE DESCRIPTION */}
            <RecipeDescription />

            {/* SELECT CATEGORY */}
            <div className={styles.addOptionsWrapper}>
              <label className={styles.labelText}>Category</label>
              <div className={styles.errorContainer}>
                <Select
                  name="category"
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
                {errors.category && (
                  <span className={styles.error}>
                    {errors.category?.message}
                  </span>
                )}
              </div>
            </div>

            {/* COOKING TIMER */}
            <CookingTimeCounter
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
            <label htmlFor="instructions" className={styles.labelText}>
              Recipe Preparation
            </label>
            <div className={styles.inputAreaWrapper}>
              <div className={styles.errorContainer}>
                <textarea
                  {...methods.register("instructions")}
                  placeholder="Enter recipe"
                  className={`${styles.inputArea} text`}
                />
                {errors.instructions && (
                  <span className={`${styles.error} ${styles.errorInputArea}`}>
                    {errors.instructions?.message}
                  </span>
                )}
              </div>
              <p className={`${styles.symbCounter} text`}>
                <span
                  className={`${styles.symbCounter} text ${
                    wordsRecipePrepCount > 0 ? styles.symbBold : ""
                  }`}
                >
                  {wordsRecipePrepCount}
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
