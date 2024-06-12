import { useFormContext } from "react-hook-form";

import styles from "../AddRecipeForm.module.css";

import { MinusButton, PlusButton } from "../../Buttons/Buttons";

const CookingTimeConter = ({ cookingTime, setCookingTime }) => {
  const {
    register,
    //setValue,
    watch,
    // setError,
    // clearErrors,
    formState: { errors },
  } = useFormContext();

  const time = watch("time");
  console.log("time :>> ", time);

  console.log(errors);
  const decrementTime = () => {
    if (time <= 5) {
      return;
    }
    setCookingTime((prevTime) => prevTime - 5);
    // setValue("time", cookingTime);
  };
  const incrementTime = () => {
    setCookingTime((prevTime) => prevTime + 5);
    // setValue("time", time);
  };

  return (
    <div className={styles.addOptionsWrapper}>
      <label htmlFor="time">COOKING TIME</label>
      <div className={styles.counter}>
        <MinusButton type="button" onClick={decrementTime} disabled />
        <span
          className={`${styles.counterNum} text`}
          {...register("time", { required: true })}
        >
          {cookingTime} min
        </span>
        <PlusButton type="button" onClick={incrementTime} />
      </div>
    </div>
  );
};

export default CookingTimeConter;
