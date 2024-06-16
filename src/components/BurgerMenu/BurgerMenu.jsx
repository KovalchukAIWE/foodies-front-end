import { useState } from "react";
import sprite from "../../assets/img/icons-sprite.svg";
import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";
import imageLarge from "../../images/hero-img-large.png";
import imageSmall from "../../images/hero-img-small.png";
import styles from "./BurgerMenu.module.css";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.burgerMenu}>
      <button className={styles.burgerButton} onClick={toggleMenu}>
        <svg className={styles.burgerMenuIcon} width={28} height={28}>
          <use href={`${sprite}#burger-menu`}></use>
        </svg>
      </button>
      <div className={`${styles.menu} ${isOpen ? styles.open : ""}`}>
        <div className={styles.burgerMenuLogo}>
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <button className={styles.closeButton} onClick={toggleMenu}>
          <svg className={styles.burgerMenuIconClose} width={28} height={28}>
            <use href={`${sprite}#close`}></use>
          </svg>
        </button>
        <div className={styles.burgerMenuLinks}>
          <NavLink to="/" className={styles.burgerMenuNavLink}>
            Home
          </NavLink>
          <NavLink to="/add-recipe" className={styles.burgerMenuNavLink}>
            Add recipe
          </NavLink>
          <div className={styles.burgerMenuImages}>
            <img className={styles.burgerMenuImageSm} src={imageSmall} alt="" />
            <img
              className={styles.burgerMenuImageLarge}
              src={imageLarge}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;
