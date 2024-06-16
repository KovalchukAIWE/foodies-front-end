import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import addRecipeSchema from "./validationSchema/addRecipeSchema";
import { toast } from "react-toastify";

import styles from "./AddRecipeForm.module.css";

import UploadPhoto from "./UploadPhoto/UploadPhoto";
import RecipeTitle from "./RecipeTitle/RecipeTitle";
import RecipeDescription from "./RecipeDescription/RecipeDescription";
import SelectCategory from "./SelectCategory/SelectCategory";
import CookingTimeCounter from "./CookingTimeCounter/CookingTimeCounter";
import AddIngredients from "./AddIngredients/AddIngredients";
import RecipePreparation from "./RecipePreparation/RecipePreparation";
import { DeleteButton } from "../Buttons/Buttons";

import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  selectCategories,
  selectIngredients,
} from "../../redux/recipes/selectors";
import { selectUser } from "../../redux/user/selectors";
import { createRecipe } from "../../services/recipes";

const AddRecipeForm = ({ onHandleSubmit }) => {
  const methods = useForm({
    resolver: yupResolver(addRecipeSchema),
    mode: "onBlur",
  });

  const categoryRef = useRef();

  const categoriesList = useSelector(selectCategories);
  const ingredientsList = useSelector(selectIngredients);
  const { id: userId } = useSelector(selectUser);

  const [imagePreview, setImagePreview] = useState(null);
  const [cookingTime, setCookingTime] = useState(10);
  const [selectedIngredients, setSelectedIngredients] = useState([]);

  const navigate = useNavigate();

  const handleReset = () => {
    categoryRef.current.getValue()[0] ? categoryRef.current.clearValue() : null;
    methods.reset();
    setImagePreview(null);
    setSelectedIngredients([]);
    setCookingTime(10);
  };

  const onSubmit = async (data) => {
    const formData = {
      title: data.title,
      category: data.category,
      instructions: data.instructions,
      description: data.description,
      time: data.time,
      ingredients: data.ingredients,
      thumb: data.thumb,
    };

    try {
      await onHandleSubmit(true);
      const result = await createRecipe(formData);
      if (result) {
        toast.success("Your recipe was published");
        navigate(`/user/${userId}`);
      }
    } catch (error) {
      console.log("onSubmit err :>> ", error);
      toast.error("Uuups..." + error.response.data.message);
    }
  };

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
          <RecipeTitle />
          <div className={styles.formOptionsWrapper}>
            <RecipeDescription />
            <SelectCategory categoriesList={categoriesList} ref={categoryRef} />
            <CookingTimeCounter
              cookingTime={cookingTime}
              setCookingTime={setCookingTime}
            />
            <AddIngredients
              ingredientsList={ingredientsList}
              selectedIngredients={selectedIngredients}
              setSelectedIngredients={setSelectedIngredients}
            />
          </div>
          <RecipePreparation />
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
