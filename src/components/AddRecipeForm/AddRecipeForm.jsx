import { useForm } from "react-hook-form";

import styles from "./AddRecipeForm.module.css";

import { DeleteButton } from "../Buttons/Buttons";
import SelectDropDown from "../SelectDropDown/SelectDropDown";

import {
  // useEffect,
  useState,
} from "react";
import { useSelector } from "react-redux";
import {
  selectCategories,
  selectIngredients,
} from "../../redux/recipes/selectors";
import CookingTimeConter from "./CookingTimeConter/CookingTimeConter";
import UploadPhoto from "./UploadPhoto/UploadPhoto";
import AddIngredients from "./AddIngredients/AddIngredients";

const AddRecipeForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm();
  console.log(errors);

  const categoriesList = useSelector(selectCategories);
  const ingredientsList = useSelector(selectIngredients);

  const [cookingTime, setCookingTime] = useState(5);
  const [selectedIngredients, setSelectedIngredients] = useState([]);

  const onSubmit = (data) => console.log(data);
  const onSelectCategory = (value) => console.log(value);

  const symbRecipeDescrCount = watch("description")?.length;
  const symbRecipePrepCount = watch("instructions")?.length;

  // useEffect(() => {

  // }, []);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={styles.form}
      autoComplete="off"
    >
      <UploadPhoto />
      <div className={styles.formOptionals}>
        <input
          type="text"
          {...register("title", { required: true })}
          placeholder="THE NAME OF THE RECIPE"
          className={styles.recipeName}
        />

        <div className={styles.formOptionsWrapper}>
          <div className={`${styles.inputAreaWrapper} ${styles.recipeDescr}`}>
            <input
              type="text"
              {...register(
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

            <SelectDropDown
              options={categoriesList.map((option) => {
                return { value: option._id, label: option.name };
              })}
              placeholder={"Select a category"}
              selectedOption={null}
              onSelect={onSelectCategory}
              name={"category"}
              // {...register("category")}
              // onChange={(selectedOption) =>
              //   setValue("category", selectedOption.value)
              // }
            />
          </div>

          <CookingTimeConter
            cookingTime={cookingTime}
            setCookingTime={setCookingTime}
            // {...register("time", { required: true })}
          />

          <AddIngredients
            ingredientsList={ingredientsList}
            register={register}
            setValue={setValue}
            watch={watch}
            selectedIngredients={selectedIngredients}
            setSelectedIngredients={setSelectedIngredients}
          />
        </div>

        <div className={styles.recipePreparation}>
          <label htmlFor="instructions">Recipe Preparation</label>
          <div className={styles.inputAreaWrapper}>
            <textarea
              {...register(
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
          <DeleteButton />
          <input type="submit" className={styles.submitBtn} />
        </div>
      </div>
    </form>
  );
};

export default AddRecipeForm;
