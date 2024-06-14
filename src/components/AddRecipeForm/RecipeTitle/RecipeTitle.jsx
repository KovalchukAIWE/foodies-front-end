import { useFormContext } from "react-hook-form";
import styles from "../AddRecipeForm.module.css";

const RecipeTitle = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className={styles.errorContainer}>
      <input
        type="text"
        {...register("title")}
        placeholder="THE NAME OF THE RECIPE"
        className={styles.recipeName}
      />
      {errors.title && (
        <span className={styles.error}>{errors.title?.message}</span>
      )}
    </div>
  );
};

export default RecipeTitle;
