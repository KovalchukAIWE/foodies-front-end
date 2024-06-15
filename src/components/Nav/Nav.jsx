import { NavLink } from "react-router-dom";
import styles from "./Nav.module.css";
import clsx from "clsx";

const Nav = () => {
  return (
    <div className={styles.nav}>
      <NavLink
        to="/"
        className={({ isActive }) => {
          return clsx(isActive ? styles.active : "", styles.navLink);
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/recipe/add"
        className={({ isActive }) =>
          clsx(isActive ? styles.active : "", styles.navLink)
        }
      >
        Add recipe
      </NavLink>
    </div>
  );
};

export default Nav;
