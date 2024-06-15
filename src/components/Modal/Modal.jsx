import { useEffect } from "react";
import ReactDOM from "react-dom";
import sprite from "../../assets/img/icons-sprite.svg";
import styles from "./Modal.module.css";

const Modal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape, false);
      return () => {
        document.removeEventListener("keydown", handleEscape, false);
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          <svg width={20} height={20}>
            <use href={`${sprite}#close`}></use>
          </svg>
        </button>
        <div className={styles.modalContent}>{children}</div>
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export default Modal;
