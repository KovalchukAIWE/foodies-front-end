import { useEffect } from "react";
import { useWindowScroll, useMediaQuery } from "@mantine/hooks";
import styles from "./RecipePagination.module.css";

const RecipePagination = ({ onChangePage, currentPage, total, limit }) => {
  const maxPageButtons = 3;
  let startPage = Math.max(currentPage - 1, 1);
  let endPage = Math.min(
    startPage + maxPageButtons - 1,
    Math.ceil(total / limit)
  );

  const [, scrollTo] = useWindowScroll();
  const tablet = useMediaQuery("(min-width: 768px)");
  useEffect(() => {
    scrollTo({ y: tablet ? 980 : 840 });
  }, [currentPage]);

  if (endPage - startPage < maxPageButtons - 1) {
    startPage = Math.max(endPage - maxPageButtons + 1, 1);
  }

  const pageNumbers = Array.from(
    { length: endPage - startPage + 1 },
    (_, index) => startPage + index
  );

  if (Math.ceil(total / limit) <= 1) {
    return null;
  }

  return (
    <>
      <nav className={styles.recipePagination}>
        {pageNumbers.map((page) => (
          <button
            key={page}
            className={`${styles.recipePaginationButton} ${
              currentPage === page ? styles.active : ""
            }`}
            onClick={() => onChangePage(page)}
          >
            {page}
          </button>
        ))}
      </nav>
    </>
  );
};

export default RecipePagination;
