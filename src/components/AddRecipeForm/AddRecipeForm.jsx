import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import addRecipeSchema from "./validationSchema/addRecipeSchema";

import styles from "./AddRecipeForm.module.css";

import UploadPhoto from "./UploadPhoto/UploadPhoto";
import RecipeDescription from "./RecipeDescription/RecipeDescription";
import { DeleteButton } from "../Buttons/Buttons";
import CookingTimeCounter from "./CookingTimeCounter/CookingTimeCounter";
import AddIngredients from "./AddIngredients/AddIngredients";

import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  selectCategories,
  selectIngredients,
} from "../../redux/recipes/selectors";
import { selectUser } from "../../redux/user/selectors";
import { createRecipe } from "../../services/recipes";
import SelectCategory from "./SelectCategory/SelectCategory";
import RecipePreparation from "./RecipePreparation/RecipePreparation";
import RecipeTitle from "./RecipeTitle/RecipeTitle";

const AddRecipeForm = () => {
  const methods = useForm({
    resolver: yupResolver(addRecipeSchema),
    mode: "onBlur",
  });
  const {
    formState: { errors, isSubmitSuccessful },
  } = methods;

  console.log("errors :>> ", errors);

  const categoryRef = useRef();

  const categoriesList = useSelector(selectCategories);
  const ingredientsList = useSelector(selectIngredients);
  const { id: userId } = useSelector(selectUser);

  const [cookingTime, setCookingTime] = useState(10);
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [imagePreview, setImagePreview] = useState(null);

  const navigate = useNavigate();

  const onSubmit = (data) => {
    const ingredients = selectedIngredients.map((ing) => {
      return { id: ing.id, measure: ing.measure };
    });

    console.log({ ...data, ingredients });

    const formData = {
      title: data.title,
      category: data.category,
      instructions: data.instructions,
      description: data.description,
      time: data.time,
      ingredients,
      thumb: data.thumb,
    };

    try {
      createRecipe(formData);
    } catch (error) {
      // переписати
      alert("Error: " + error.response.data.message);
    }
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      navigate(`/user/${userId}`);
    }
  }, [isSubmitSuccessful, navigate, userId]);

  const handleReset = () => {
    methods.reset();
    setImagePreview(null);
    setSelectedIngredients([]);
    setCookingTime(10);
    categoryRef.current.clearValue();
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className={styles.form}
        autoComplete="off"
      >
        {/* UPLOAD PHOTO */}
        <UploadPhoto
          imagePreview={imagePreview}
          setImagePreview={setImagePreview}
        />
        <div className={styles.formOptionals}>
          {/* RECIPE TITLE*/}
          <RecipeTitle />

          <div className={styles.formOptionsWrapper}>
            {/* RECIPE DESCRIPTION */}
            <RecipeDescription />

            {/* SELECT CATEGORY */}
            <SelectCategory categoriesList={categoriesList} ref={categoryRef} />

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
          <RecipePreparation />

          {/* FORM BUTTONS */}
          <div className={styles.bottomBtns}>
            <DeleteButton onClick={handleReset} />
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
