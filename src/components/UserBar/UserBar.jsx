import { useState, useEffect, useRef } from "react";
import styles from "./UserBar.module.css";
import noImage from "../../assets/img/noUserPhoto.webp";
import Modal from "../Modal/Modal";
import LogOutModal from "../LogOutModal/LogOutModal";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/user/selectors";
import { Link } from "react-router-dom";

const UserBar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isLogOutModalOpen, setIsLogOutnModalOpen] = useState(false);
  const userBarRef = useRef(null);

  const { name, avatar, id } = useSelector(selectUser);

  const openLogOutModal = () => setIsLogOutnModalOpen(true);
  const closeLogOutModal = () => setIsLogOutnModalOpen(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleClickOutside = (event) => {
    if (userBarRef.current && !userBarRef.current.contains(event.target)) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.userBarContainer} ref={userBarRef}>
      <button type="button" className={styles.userBar} onClick={toggleDropdown}>
        <img
          className={styles.userBarAvatar}
          src={avatar ? avatar : noImage}
          alt={name}
        />
        <div className={styles.userBarDropdown}>
          <p className={styles.userBarName}>{name}</p>
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
        <div className={styles.dropdownMenu}>
          <Link className={styles.dropdownItem} to={`user/${id}`}>
            profile
          </Link>
          <div className={styles.dropdownItemArrow}>
            <button
              className={styles.dropdownItemLogout}
              onClick={openLogOutModal}
            >
              Log Out
            </button>
          </div>
        </div>
      )}
      <Modal isOpen={isLogOutModalOpen} onClose={closeLogOutModal}>
        <LogOutModal onClose={closeLogOutModal} />
      </Modal>
    </div>
  );
};

export default UserBar;
