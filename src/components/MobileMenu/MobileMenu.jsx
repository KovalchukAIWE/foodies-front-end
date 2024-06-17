import sprite from "../../assets/img/icons-sprite.svg";
import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";
import imageLarge from "../../images/hero-img-large.png";
import imageSmall from "../../images/hero-img-small.png";
import styles from "./MobileMenu.module.css";

const MobileMenu = ({ onToggleMenu, isOpen }) => {
  return (
    <div className={styles.burgerMenu}>
      <div className={`${styles.menu} ${isOpen ? styles.open : ""}`}>
        <div className={styles.burgerMenuLogo}>
          <Logo />
        </div>
        <button className={styles.closeButton} onClick={onToggleMenu}>
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
            <img
              className={styles.burgerMenuImageSm}
              src={imageSmall}
              alt="User avatar"
            />
            <img
              className={styles.burgerMenuImageLarge}
              src={imageLarge}
              alt="User avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
