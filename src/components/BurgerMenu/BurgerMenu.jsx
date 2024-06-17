import sprite from "../../assets/img/icons-sprite.svg";

import styles from "./BurgerMenu.module.css";

const BurgerMenu = ({ onToggleMenu }) => {
  return (
    <div className={styles.burgerMenu}>
      <button className={styles.burgerButton} onClick={onToggleMenu}>
        <svg className={styles.burgerMenuIcon} width={28} height={28}>
          <use href={`${sprite}#burger-menu`}></use>
        </svg>
      </button>
    </div>
  );
};

export default BurgerMenu;
