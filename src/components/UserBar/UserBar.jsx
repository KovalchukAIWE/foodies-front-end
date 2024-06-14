import { useState } from "react";
import styles from "./UserBar.module.css";
import noImage from "../../images/avatar.png";

const UserBar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className={styles.userBarContainer}>
      <button type="button" className={styles.userBar} onClick={toggleDropdown}>
        <img
          className={styles.userBarAvatar}
          // src={image ? image : noImage}
          src={noImage}
          alt=""
        />
        <div className={styles.userBarDropdown}>
          <p className={styles.userBarName}>victoria</p>
          <svg
            className={`${styles.userBarArrow} ${
              showDropdown ? styles.open : ""
            }`}
            width="12"
            height="6"
            viewBox="0 0 12 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.5 0.75L6 5.25L10.5 0.75"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </button>
      {showDropdown && (
        <ul className={styles.dropdownMenu}>
          <li className={styles.dropdownItem}>Profile</li>
          <li className={styles.dropdownItemArrow}>Log Out</li>
        </ul>
      )}
    </div>
  );
};

export default UserBar;
