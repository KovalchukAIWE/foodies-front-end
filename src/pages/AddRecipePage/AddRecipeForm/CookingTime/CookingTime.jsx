import styles from "../AddRecipeForm.module.css";

import {
  MinusButton,
  PlusButton,
} from "../../../../components/Buttons/Buttons";

const CookingTime = () => {
  return (
    <div className={styles.addOptionsWrapper}>
      <label htmlFor="">COOKING TIME</label>
      <div className={styles.counter}>
        <MinusButton type="button" />
        <span className={`${styles.counterNum} text`}>10 min</span>
        <PlusButton type="button" />
      </div>
    </div>
  );
};

export default CookingTime;
