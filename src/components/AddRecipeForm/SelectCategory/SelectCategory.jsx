import { forwardRef } from "react";
import { useFormContext } from "react-hook-form";
import Select from "react-select";
import { selectStyles } from "../../../css/selectStyles";
import styles from "../AddRecipeForm.module.css";

const SelectCategory = forwardRef(function SelectCategory(
  { categoriesList },
  ref
) {
  const {
    register,
    setValue,
    trigger,
    formState: { errors },
  } = useFormContext();

  return (
    <div className={styles.addOptionsWrapper}>
      <label htmlFor="category" className={styles.labelText}>
        Category
      </label>
      <div className={styles.errorContainer}>
        <Select
          name="category"
          {...register("category")}
          placeholder={"Select a category"}
          selectedOption={null}
          ref={ref}
          options={categoriesList.map((option) => {
            return { value: option._id, label: option.name };
          })}
          onChange={(selectedOption) => {
            selectedOption ? setValue("category", selectedOption.label) : null;
            trigger();
          }}
          styles={selectStyles}
        />
        {errors.category && (
          <span className={styles.error}>{errors.category?.message}</span>
        )}
      </div>
    </div>
  );
});

export default SelectCategory;
