import { useForm } from "react-hook-form";
import styles from "./AddRecipeForm.module.css";

import sprite from "../../../assets/img/icons-sprite.svg";
import {
  DeleteButton,
  AddIngrButton,
  MinusButton,
  PlusButton,
} from "../../../components/Buttons/Buttons";

const AddRecipeForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div className={styles.uploadPhoto}>
        <svg width={50} height={50} className={styles.svgPhoto}>
          <use href={`${sprite}#photo`}></use>
        </svg>
        <p className={styles.uploadPhotoText}>Upload a photo</p>
      </div>
      <input
        type="text"
        {...register("recipeName", { required: true })}
        placeholder="THE NAME OF THE RECIPE"
        className={styles.recipeName}
      />

      <div className={`${styles.inputCountWrapper} ${styles.decorLine}`}>
        <input
          type="text"
          {...register("recipeDescr", { required: true }, { maxLength: 220 })}
          placeholder="Enter a description of the dish"
          className={` ${styles.inputArea} ${styles.inputText}`}
        />
        <p className={styles.symbCounter}>0/200</p>
      </div>
      <div className={styles.categoryTimeWrapper}>
        <label htmlFor="category">Category</label>
        <select {...register("category", { required: true })}>
          <option value="beef">Beef</option>
          <option value="breakfast">Breakfast</option>
          <option value="desserts">Desserts</option>
          <option value="lamb">Lamb</option>
          <option value="miscellaneous">Miscellaneous</option>
          <option value="pasta">Pasta</option>
          <option value="pork">Pork</option>
          <option value="seafood">Seafood</option>
          <option value="side">Side</option>
          <option value="starter">Starter</option>
        </select>
        <label htmlFor="">COOKING TIME</label>
        <div className={styles.counter}>
          <MinusButton />
          <span className={styles.counterNum}>10 min</span>
          <PlusButton />
        </div>
      </div>
      <div className={`${styles.ingredientsWrapper} ${styles.decorLine}`}>
        <label htmlFor="ingredients">Ingredients</label>
        <select {...register("ingredients", { required: true })}>
          <option value="Cabbage">Cabbage</option>
          <option value="Cucumber">Cucumber</option>
          <option value="desserts">Desserts</option>
          <option value="Lamb">Lamb</option>
          <option value="Miscellaneous">Miscellaneous</option>
          <option value="Pasta">Pasta</option>
          <option value="Pork">Pork</option>
          <option value="Seafood">Seafood</option>
          <option value="Side">Side</option>
          <option value="Starter">Starter</option>
        </select>
        <input
          type="text"
          {...register("ingredientsQuantity", { required: true })}
          placeholder="Enter quantity"
          className={`${styles.ingredientsQuantity} ${styles.inputText}`}
        />
      </div>
      <AddIngrButton text="Add ingredient" />
      {/* <button type="button" className={styles.addIngrBtn}>
        Add ingredient
        <svg width={20} height={20} className={styles.svgPlusAdd}>
          <use href={`${sprite}#plus`}></use>
        </svg>
      </button> */}
      <div className={`${styles.recipePreparation} ${styles.decorLine}`}>
        <label htmlFor="recipePreparation">Recipe Preparation</label>
        <div className={styles.inputCountWrapper}>
          <textarea
            {...register(
              "recipePreparation",
              { required: true },
              { maxLength: 220 }
            )}
            placeholder="Enter recipe"
            className={`${styles.inputArea} ${styles.inputText}`}
          />
          <p className={styles.symbCounter}>0/200</p>
        </div>
      </div>
      <div className={styles.bottomBtns}>
        <DeleteButton />
        <input type="submit" className={styles.submitBtn} />
      </div>
    </form>
  );
};

export default AddRecipeForm;
