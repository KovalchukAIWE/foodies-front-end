import styles from "./UserInfo.module.css";
import noUserPhoto from "../../assets/img/noUserPhoto.webp";
import addPhotoIcon from "../../assets/img/icons-sprite.svg";

import { useDispatch } from "react-redux";
import { setUsersAvatar } from "../../redux/user/operations";
import { toast } from "react-toastify";
import Modal from "../Modal/Modal";
import LogOutModal from "../LogOutModal/LogOutModal";
import { useState } from "react";
import { FormButton } from "../Buttons/Buttons";

const UserInfo = ({
  name,
  userPhoto,
  email,
  myRecipes,
  favorites,
  followers,
  followings,
  isOwner,
  handleUpdatingAvatar,
  id,
}) => {
  const dispatch = useDispatch();
  const updateUserPhoto = (e) => {
    const file = e.target.files[0];
    if (file) {
      dispatch(setUsersAvatar({ avatar: file, userId: id }))
        .then(({ payload: { avatar } }) => {
          handleUpdatingAvatar(avatar);
          toast.success("Avatar changed!");
        })
        .catch(() => {
          toast.error("Anything went wrong");
        });
    }
  };
  const [isLogOutModalOpen, setIsLogOutnModalOpen] = useState(false);
  const openLogOutModal = () => setIsLogOutnModalOpen(true);
  const closeLogOutModal = () => setIsLogOutnModalOpen(false);

  return (
    <div className={styles.userInfoBox}>
      <div className={styles.profileCard}>
        <div className={styles.profilePhotoBox}>
          <div className={styles.imageWrapper}>
            <img
              src={!userPhoto ? noUserPhoto : userPhoto}
              alt="user photocard"
              className={styles.profilePhoto}
              width={80}
              height={80}
            />
          </div>
          {isOwner && (
            <form>
              <input
                onChange={updateUserPhoto}
                type="file"
                className={styles.addProfilePhotoInput}
                id="add-profile-photo-btn"
                aria-label="button for adding new profile photo"
              ></input>
              <svg className={styles.addPhotoIcon}>
                <use href={`${addPhotoIcon}#icon-add`}></use>
              </svg>
            </form>
          )}
        </div>
        <h2 className={styles.name}>{name}</h2>
        <ul className={styles.profileInfoList}>
          <li className={styles.infoKey}>
            Email: <span className={styles.infoValue}>{email}</span>
          </li>
          <li className={styles.infoKey}>
            Added recipies :{" "}
            <span className={styles.infoValue}>{myRecipes}</span>
          </li>
          {isOwner && (
            <li className={styles.infoKey}>
              Favorites: <span className={styles.infoValue}>{favorites}</span>
            </li>
          )}
          <li className={styles.infoKey}>
            Followers: <span className={styles.infoValue}>{followers}</span>
          </li>
          {isOwner && (
            <li className={styles.infoKey}>
              Followings: <span className={styles.infoValue}>{followings}</span>
            </li>
          )}
        </ul>
      </div>
      <FormButton onClick={openLogOutModal} text="Log out" />
      <Modal isOpen={isLogOutModalOpen} onClose={closeLogOutModal}>
        <LogOutModal onClose={closeLogOutModal} />
      </Modal>
    </div>
  );
};

export default UserInfo;
