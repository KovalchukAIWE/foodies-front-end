import clsx from "clsx";
import styles from "./ListPagination.module.css";

const ListPagination = ({ total, page, limit, onPageChange }) => {
  const totalPages = Math.ceil(total / limit);

  const handlePageClick = (pageNum) => {
    onPageChange(pageNum);
  };

  return (
    <div>
      {page && (
        <ul className={styles.buttonList}>
          {[...Array(totalPages).keys()].map((pageNum) => (
            <li key={pageNum + 1}>
              <button
                onClick={() => handlePageClick(pageNum + 1)}
                disabled={page === pageNum + 1}
                className={clsx(
                  styles.paginationBtn,
                  page === pageNum + 1 && styles.current
                )}
              >
                {pageNum + 1}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ListPagination;
