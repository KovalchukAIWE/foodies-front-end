import styles from "../AddRecipeForm.module.css";

import { MinusButton, PlusButton } from "../../Buttons/Buttons";

const CookingTimeConter = ({ cookingTime, setCookingTime }) => {
  const decrementTime = () => {
    if (cookingTime <= 5) {
      return;
    }
    setCookingTime((prevTime) => prevTime - 5);
  };
  const incrementTime = () => {
    setCookingTime((prevTime) => prevTime + 5);
  };

  return (
    <div className={styles.addOptionsWrapper}>
      <label htmlFor="">COOKING TIME</label>
      <div className={styles.counter}>
        <MinusButton type="button" onClick={decrementTime} disabled />
        <span className={`${styles.counterNum} text`}>{cookingTime} min</span>
        <PlusButton type="button" onClick={incrementTime} />
      </div>
    </div>
  );
};

export default CookingTimeConter;
