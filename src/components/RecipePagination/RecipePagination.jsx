import styles from "./RecipePagination.module.css";

const RecipePagination = () => {
  return (
    <>
      <nav className={styles.recipePagination}>
        <button className={styles.recipePaginationButton}>1</button>
        <button className={styles.recipePaginationButton}>2</button>
        <button className={styles.recipePaginationButton}>3</button>
      </nav>
    </>
  );
};

export default RecipePagination;
