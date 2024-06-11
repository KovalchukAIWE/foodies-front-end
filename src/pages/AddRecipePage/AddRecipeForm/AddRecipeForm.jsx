import { useForm, Controller } from "react-hook-form";

import styles from "./AddRecipeForm.module.css";
import sprite from "../../../assets/img/icons-sprite.svg";

import {
  DeleteButton,
  AddIngrButton,
} from "../../../components/Buttons/Buttons";
import SelectDropDown from "../../../components/SelectDropDown/SelectDropDown";

import {
  // useEffect,
  useState,
} from "react";
import { useSelector } from "react-redux";
import {
  selectCategories,
  selectIngredients,
} from "../../../redux/recipes/selectors";
import CookingTime from "./CookingTime/CookingTime";

const AddRecipeForm = () => {
  const {
    register,
    control,
    //reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  console.log(errors);

  const categoriesList = useSelector(selectCategories);
  const ingredientsList = useSelector(selectIngredients);

  const [symbRecipeDescrCount, setSymbRecipeDescrCount] = useState(0);
  const [symbRecipePrepCount, setSymbRecipePrepCount] = useState(0);

  const onSubmit = (data) => console.log(data);
  //reset();
  const onSelectCategory = (value) => console.log(value);
  const onSelectIngredient = (value) => console.log(value);

  const handleSymbRecipeDescrCount = (e) => {
    setSymbRecipeDescrCount(e.target.value.length);
  };

  const handleSymbRecipePrepCount = (e) => {
    setSymbRecipePrepCount(e.target.value.length);
  };

  // useEffect(() => {

  // }, []);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={styles.form}
      autoComplete="off"
    >
      <div className={styles.uploadPhoto}>
        <svg width={50} height={50} className={styles.svgPhoto}>
          <use href={`${sprite}#photo`}></use>
        </svg>
        <p className={styles.uploadPhotoText}>Upload a photo</p>
      </div>
      <div className={styles.formOptionals}>
        <input
          type="text"
          {...register("recipeName", { required: true })}
          placeholder="THE NAME OF THE RECIPE"
          className={styles.recipeName}
        />

        <div className={styles.formOptionsWrapper}>
          <div className={`${styles.inputAreaWrapper} ${styles.recipeDescr}`}>
            <input
              type="text"
              {...register(
                "recipeDescr",
                { required: true },
                { maxLength: 220 }
              )}
              placeholder="Enter a description of the dish"
              className={` ${styles.inputArea} text`}
              onChange={handleSymbRecipeDescrCount}
            />
            <p className={`${styles.symbCounter} text`}>
              <span
                className={`${styles.symbCounter} text ${
                  symbRecipeDescrCount > 0 ? styles.symbBold : ""
                }`}
              >
                {symbRecipeDescrCount}
              </span>
              /200
            </p>
          </div>
          <div className={styles.addOptionsWrapper}>
            <label htmlFor="category">Category</label>
            <Controller
              render={({ field }) => (
                <SelectDropDown
                  field={field}
                  options={categoriesList.map((option) => {
                    return { value: option._id, label: option.name };
                  })}
                  placeholder={"Select a category"}
                  selectedOption={null}
                  onSelect={onSelectCategory}
                  name={"category"}
                />
              )}
              name={"category"}
              control={control}
            />
          </div>

          <CookingTime />

          <div className={styles.addOptionsWrapper}>
            <label htmlFor="ingredients">Ingredients</label>
            <SelectDropDown
              placeholder={"Add the ingredient"}
              options={ingredientsList.map((option) => {
                return { value: option._id, label: option.name };
              })}
              selectedOption={null}
              onSelect={onSelectIngredient}
              name={"ingredients"}
            />
          </div>
          <div className={styles.addOptionsWrapper}>
            <input
              type="text"
              {...register("ingredientsQuantity", { required: true })}
              placeholder="Enter quantity"
              className={`${styles.ingredientsQuantity} text`}
            />
          </div>
        </div>
        <AddIngrButton text="Add ingredient" type="button" />

        <div className={styles.recipePreparation}>
          <label htmlFor="recipePreparation">Recipe Preparation</label>
          <div className={styles.inputAreaWrapper}>
            <textarea
              {...register(
                "recipePreparation",
                { required: true },
                { maxLength: 220 }
              )}
              placeholder="Enter recipe"
              className={`${styles.inputArea} text`}
              onChange={handleSymbRecipePrepCount}
            />
            <p className={`${styles.symbCounter} text`}>
              <span
                className={`${styles.symbCounter} text ${
                  symbRecipePrepCount > 0 ? styles.symbBold : ""
                }`}
              >
                {symbRecipePrepCount}
              </span>
              /200
            </p>
          </div>
        </div>
        <div className={styles.bottomBtns}>
          <DeleteButton />
          <input type="submit" className={styles.submitBtn} />
        </div>
      </div>
    </form>
  );
};

export default AddRecipeForm;
