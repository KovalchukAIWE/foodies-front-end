import { useForm } from "react-hook-form";
import styles from "./AddRecipeForm.module.css";

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
        <div>SVG</div>
        <p className={styles.uploadPhotoText}>Upload a photo</p>
      </div>
      <input
        type="text"
        {...register("recipeName", { required: true })}
        placeholder="THE NAME OF THE RECIPE"
        className={styles.recipeName}
      />
      <div className={styles.inputCountWrapper}>
        <input
          type="text"
          className={styles.recipeDescrArea}
          {...register("recipeDescr", { required: true }, { maxLength: 220 })}
          placeholder="Enter a description of the dish"
        />
        <p className={styles.symbCounter}>0/200</p>
      </div>
      <div className={styles.categoryTimeWrapper}>
        <label htmlFor="category">Category</label>
        <select
          {...register("category", { required: true })}
          className={styles.selectInput}
        >
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
          <button type="button" className={styles.counterBtn}>
            svg-
          </button>
          <span className={styles.counterNum}>10 min</span>
          <button type="button" className={styles.counterBtn}>
            svg+
          </button>
        </div>
      </div>
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
        type="number"
        {...register("ingredientsQuantity", { required: true })}
        placeholder="Enter quantity"
        className={styles.ingredientsQuantity}
      />
      <button type="button" className={styles.addIngrBtn}>
        Add ingredient +
      </button>
      <div className={styles.recipePreparation}>
        <label htmlFor="recipePreparation">Recipe Preparation</label>
        <div className={styles.inputCountWrapper}>
          <textarea
            className={styles.recipePreparationArea}
            {...register(
              "recipePreparation",
              { required: true },
              { maxLength: 220 }
            )}
            placeholder="Enter recipe"
          />
          <p className={styles.symbCounter}>0/200</p>
        </div>
      </div>
      <input type="submit" />
    </form>
  );
};

export default AddRecipeForm;
