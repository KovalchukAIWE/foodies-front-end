import styles from "./UserPreview.module.css";
import { Link } from "react-router-dom";
import { setNumberOfRecipesUserCard } from "../../helpers/helpers";
import noUserPhoto from "../../assets/img/noUserPhoto.webp";
import icons from "../../assets/img/icons-sprite.svg";

const UserPreview = ({
  avatar,
  name,
  ownRecipes,
  isFollow,
  recipes,
  id,
  onClick,
}) => {
  return (
    <div className={styles.userPreviewCard} key={id}>
      <div className={styles.userInfo}>
        <div className={styles.previewPhotoWrapper}>
          <img
            src={avatar ? avatar : noUserPhoto}
            alt={name}
            className={styles.userSmallPhotoPreview}
          />
        </div>
        <div className={styles.infoBox}>
          <h3 className={styles.userName}>{name}</h3>
          <p className={styles.recipesCountText}>Own recipes: {ownRecipes}</p>
          <button
            type="button"
            className={styles.userPreviewBtn}
            onClick={() => onClick(id)}
          >
            {isFollow ? "Unfollow" : "Follow"}
          </button>
        </div>
      </div>
      <ul className={styles.recipesPhotosList}>
        {recipes &&
          recipes
            .slice(0, setNumberOfRecipesUserCard())
            .map(({ thumb, _id, title }) => (
              <li className={styles.recipePhotoItem} key={_id}>
                <Link to={`/recipe/${_id}`}>
                  <img
                    src={thumb}
                    alt={title}
                    className={styles.recipePreviewPhoto}
                  />
                </Link>
              </li>
            ))}
      </ul>

      <Link to={`/user/${id}`} className={styles.linkToUserProfile}>
        <svg className={styles.linkToUserProfileIcon}>
          <use href={`${icons}#arrow-up-right`}></use>
        </svg>
      </Link>
    </div>
  );
};

export default UserPreview;
