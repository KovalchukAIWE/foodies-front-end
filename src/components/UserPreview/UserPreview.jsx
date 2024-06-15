import styles from "./UserPreview.module.css";
// import { nanoid } from "nanoid";

const UserPreview = ({
  avatar,
  name,
  ownRecipes,
  isFollow,
  recipes,
  id,
  onClick,
  // total,
  // page,
  // limit,
}) => {
  return (
    <div className={styles.userPreviewCard} key={id}>
      <div className={styles.userInfo}>
        <div className={styles.previewPhotoWrapper}>
          <img
            src={avatar}
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
        {recipes.map(({ thumb, _id, name }) => (
          <li className={styles.recipePhotoItem} key={_id}>
            <img src={thumb} alt={name} className={styles.recipePreviewPhoto} />
          </li>
        ))}
      </ul>

      <button className={styles.linkToUserProfile}>
        <svg className={styles.linkToUserProfileIcon}>
          <use className="./img/symbol-defs.svg#arrow-icon"></use>
        </svg>
      </button>
    </div>
  );
};

export default UserPreview;
