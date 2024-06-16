import { useState } from "react";
import sprite from "../../assets/img/icons-sprite.svg";
import styles from "./BurgerMenu.module.css";
import { NavLink } from "react-router-dom";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.burgerMenu}>
      <button className={styles.burgerButton} onClick={toggleMenu}>
        <svg
          className={styles.burgerMenuIcon}
          width={28}
          height={28}
          onClick={toggleMenu}
        >
          <use href={`${sprite}#burger-menu`}></use>
        </svg>
      </button>
      {isOpen && (
        <div className={`${styles.menu} ${isOpen ? styles.open : ""}`}>
          <button className={styles.closeButton} onClick={toggleMenu}>
            <svg
              className={styles.burgerMenuIconClose}
              width={28}
              height={28}
              onClick={toggleMenu}
            >
              <use href={`${sprite}#close`}></use>
            </svg>
          </button>
          <NavLink to="/" className={styles.burgerMenuNavLink}>
            Home
          </NavLink>
          <NavLink to="/" className={styles.burgerMenuNavLink}>
            Add recipe
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default BurgerMenu;
