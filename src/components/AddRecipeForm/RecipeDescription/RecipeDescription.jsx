import { useFormContext } from "react-hook-form";

import styles from "../AddRecipeForm.module.css";

const RecipeDescription = () => {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext();

  const RecipeDescr = watch("description");
  const wordsRecipeDescrCount = RecipeDescr?.length
    ? RecipeDescr?.trim().split(" ").length
    : 0;

  return (
    <div className={`${styles.inputAreaWrapper} ${styles.recipeDescr}`}>
      <div className={styles.errorContainer}>
        <textarea
          {...register("description")}
          placeholder="Enter a description of the dish"
          className={` ${styles.inputArea} text`}
        />
        {errors.description && (
          <span className={`${styles.error} ${styles.errorInputArea}`}>
            {errors.description?.message}
          </span>
        )}
      </div>
      <p className={`${styles.symbCounter} text`}>
        <span
          className={`${styles.symbCounter} text ${
            wordsRecipeDescrCount > 0 ? styles.symbBold : ""
          }`}
        >
          {wordsRecipeDescrCount}
        </span>
        /200
      </p>
    </div>
  );
};

export default RecipeDescription;
