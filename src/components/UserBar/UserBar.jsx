import { useState, useEffect, useRef } from "react";
import Modal from "../Modal/Modal";
import LogOutModal from "../LogOutModal/LogOutModal";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/user/selectors";
import { Link } from "react-router-dom";
import noImage from "../../assets/img/noUserPhoto.webp";
import arrowUp from "../../assets/img/icons-sprite.svg";
import arrowUpRight from "../../assets/img/icons-sprite.svg";
import styles from "./UserBar.module.css";

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
          width={32}
          height={32}
        />
        <div className={styles.userBarDropdown}>
          <p className={styles.userBarName}>{name}</p>
          <svg
            width={18}
            height={18}
            className={`${styles.userBarArrow} ${
              showDropdown ? styles.open : ""
            }`}
          >
            <use href={`${arrowUp}#arrow-up`}></use>
          </svg>
        </div>
      </button>
      {showDropdown && (
        <div className={styles.dropdownMenu}>
          <Link
            onClick={toggleDropdown}
            className={styles.dropdownItem}
            to={`user/${id}`}
          >
            profile
          </Link>
          <div className={styles.dropdownItemArrow}>
            <button
              className={styles.dropdownItemLogout}
              onClick={openLogOutModal}
            >
              Log Out
            </button>
            <svg className={styles.dropdownArrow} width={18} height={18}>
              <use href={`${arrowUpRight}#arrow-up-right`}></use>
            </svg>
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
