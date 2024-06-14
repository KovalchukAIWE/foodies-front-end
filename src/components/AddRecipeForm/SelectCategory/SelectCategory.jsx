import { useFormContext } from "react-hook-form";
import Select from "react-select";
import { selectStyles } from "../../../css/selectStyles";
import styles from "../AddRecipeForm.module.css";

const SelectCategory = ({ categoriesList }) => {
  const {
    register,
    setValue,
    //watch,
    formState: { errors },
  } = useFormContext();

  return (
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
          {...register("category", { required: true })}
          onChange={(selectedOption) =>
            setValue("category", selectedOption.label)
          }
          styles={selectStyles}
        />
        {errors.category && (
          <span className={styles.error}>{errors.category?.message}</span>
        )}
      </div>
    </div>
  );
};

export default SelectCategory;
