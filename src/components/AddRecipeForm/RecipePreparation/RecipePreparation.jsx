import { useFormContext } from "react-hook-form";
import styles from "../AddRecipeForm.module.css";

const RecipePreparation = () => {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext();

  const RecipePrep = watch("instructions");
  const wordsRecipePrepCount = RecipePrep?.length
    ? RecipePrep.trim().split(" ").length
    : 0;

  return (
    <div className={styles.recipePreparation}>
      <label htmlFor="instructions" className={styles.labelText}>
        Recipe Preparation
      </label>
      <div className={styles.inputAreaWrapper}>
        <div className={styles.errorContainer}>
          <textarea
            {...register("instructions")}
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
  );
};

export default RecipePreparation;
