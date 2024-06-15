import { NavLink } from "react-router-dom";
import styles from "./Nav.module.css";

const Nav = () => {
  
  return (
    <div className={styles.nav}>
      <NavLink to="/" className={styles.navLink}>
        Home
      </NavLink>
      <NavLink to="/" className={styles.navLink}>
        Add recipe
      </NavLink>
    </div>
  );
};

export default Nav;
