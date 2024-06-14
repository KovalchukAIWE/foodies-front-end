import styles from "./Nav.module.css";

const Nav = () => {
  return (
    <div className={styles.nav}>
      <button type="button" className={styles.navLink}>
        Home
      </button>
      <button type="button" className={styles.navLink}>
        Add recipe
      </button>
    </div>
  );
};

export default Nav;
