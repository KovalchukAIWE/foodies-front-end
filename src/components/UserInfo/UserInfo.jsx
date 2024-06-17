import styles from "./UserInfo.module.css";
import noUserPhoto from "../../assets/img/noUserPhoto.webp";
import addPhotoIcon from "../../assets/img/icons-sprite.svg";
import UserInfoBtn from "../UserInfoBtn/UserInfoBtn";

import { useDispatch } from "react-redux";
import { setUsersAvatar } from "../../redux/user/operations";
import { toast } from "react-toastify";

const UserInfo = ({
  name,
  userPhoto,
  email,
  myRecipes,
  favorites,
  followers,
  followings,
  isOwner,
  isFollowing,
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
          <li className="profile-info-item">
            <p className={styles.infoKey}>
              Email: <span className="info-value">{email}</span>
            </p>
          </li>
          <li className="profile-info-item">
            <p className={styles.infoKey}>
              Added recipies :{" "}
              <span className={styles.infoValue}>{myRecipes}</span>
            </p>
          </li>
          {isOwner && (
            <li className="profile-info-item">
              <p className={styles.infoKey}>
                Favorites: <span className={styles.infoValue}>{favorites}</span>
              </p>
            </li>
          )}
          <li className="profile-info-item">
            <p className={styles.infoKey}>
              Followers: <span className={styles.infoValue}>{followers}</span>
            </p>
          </li>
          {isOwner && (
            <li className="profile-info-item">
              <p className={styles.infoKey}>
                Followings:{" "}
                <span className={styles.infoValue}>{followings}</span>
              </p>
            </li>
          )}
        </ul>
      </div>
      <UserInfoBtn id={id} isFollowing={isFollowing} isOwner={isOwner} />
    </div>
  );
};

export default UserInfo;
