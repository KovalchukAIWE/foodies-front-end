import { useFormContext } from "react-hook-form";

import styles from "../AddRecipeForm.module.css";

import { MinusButton, PlusButton } from "../../Buttons/Buttons";

const CookingTimeConter = ({ cookingTime, setCookingTime }) => {
  const { register, setValue } = useFormContext();
  const decrementTime = () => {
    if (cookingTime <= 10) {
      return;
    }
    cookingTime -= 10;
    setCookingTime(cookingTime);
    setValue("time", cookingTime);
  };
  const incrementTime = () => {
    cookingTime += 10;
    setCookingTime(cookingTime);
    setValue("time", cookingTime);
  };

  return (
    <div className={styles.addOptionsWrapper}>
      <label htmlFor="time">COOKING TIME</label>
      <div className={styles.counter}>
        <MinusButton type="button" onClick={decrementTime} />
        <input
          type="hidden"
          {...register("time")}
          value={cookingTime}
          name="time"
        />
        <span className={`${styles.counterNum} text`}>{cookingTime} min</span>
        <PlusButton type="button" onClick={incrementTime} />
      </div>
    </div>
  );
};

export default CookingTimeConter;
