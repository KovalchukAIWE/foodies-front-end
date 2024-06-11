import styles from "../AddRecipeForm.module.css";

import { MinusButton, PlusButton } from "../../Buttons/Buttons";

const CookingTimeConter = ({ cookingTime, setCookingTime }) => {
  const decrementTime = () => {
    setCookingTime((prevTime) => prevTime - 1);
  };
  const incrementTime = () => {
    setCookingTime((prevTime) => prevTime + 1);
  };

  return (
    <div className={styles.addOptionsWrapper}>
      <label htmlFor="">COOKING TIME</label>
      <div className={styles.counter}>
        <MinusButton type="button" onClick={decrementTime} />
        <span className={`${styles.counterNum} text`}>{cookingTime} min</span>
        <PlusButton type="button" onClick={incrementTime} />
      </div>
    </div>
  );
};

export default CookingTimeConter;
