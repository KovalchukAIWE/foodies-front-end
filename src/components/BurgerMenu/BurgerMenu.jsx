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
        <div className={`${styles.menu} ${isOpen ? styles.open : ''}`}>
        <button className={styles.closeButton} onClick={toggleMenu}>
          &times;
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

// const BurgerMenu = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   useEffect(() => {
//     if (isOpen) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "";
//     }
//   }, [isOpen]);

//   return (
//     <>
//       <svg
//         className={styles.burgerMenuIcon}
//         width={28}
//         height={28}
//         onClick={toggleMenu}
//       >
//         <use href={`${sprite}#burger-menu`}></use>
//       </svg>
//       <div
//         className={`${styles.overlay} ${isOpen ? styles.open : ""}`}
//         onClick={toggleMenu}
//       ></div>
//       <div className={`${styles.burgerMenu} ${isOpen ? styles.open : ""}`}>
//         <nav>
//           <ul>
//             <li>
//               <a href="#home" onClick={toggleMenu}>
//                 Home
//               </a>
//             </li>
//             <li>
//               <a href="#about" onClick={toggleMenu}>
//                 About
//               </a>
//             </li>
//             <li>
//               <a href="#services" onClick={toggleMenu}>
//                 Services
//               </a>
//             </li>
//             <li>
//               <a href="#contact" onClick={toggleMenu}>
//                 Contact
//               </a>
//             </li>
//           </ul>
//         </nav>
//       </div>
//     </>
//   );
// };

// export default BurgerMenu;
