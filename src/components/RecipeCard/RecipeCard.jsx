import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectIsLoggedIn } from "../../redux/user/selectors";
import { setModalSignInStatus } from "../../redux/user/slice";
import sprite from "../../assets/img/icons-sprite.svg";
import styles from "./RecipeCard.module.css";

const RecipeCard = ({ recipe }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const defaultAvatar = "/src/assets/img/noUserPhoto.webp";
  const handleAuthorClick = () => {
    if (isLoggedIn) {
      navigate(`/user/${recipe.owner._id}`);
    } else {
      dispatch(setModalSignInStatus(true));
    }
  };

  return (
    <div className={styles.recipeCard}>
      <img
        className={styles.recipeCardImg}
        loading="lazy"
        src={recipe.thumb}
        alt={recipe.title}
      />
      <div className={styles.recipeCardContainer}>
        <h3 className={styles.recipeCardTitle}>{recipe.title}</h3>
        <p className={styles.recipeCardDescription}>{recipe.description}</p>
        <div className={styles.recipeCardBox}>
          <button
            className={styles.recipeCardAuthor}
            onClick={handleAuthorClick}
          >
            <img
              src={recipe.owner.avatar || defaultAvatar}
              alt={recipe.owner.name}
              className={styles.authorAvatar}
            />
            <span>{recipe.owner.name}</span>
          </button>
          <div className={styles.recipeCardSocial}>
            <div className={styles.recipeIconCircle}>
              <svg className={styles.recipeSocialIcon}>
                <use xlinkHref={`${sprite}#heart`} />
              </svg>
            </div>
            <button type="button">
              <Link to={`/recipe/${recipe._id}`}>
                <div className={styles.recipeIconCircle}>
                  <svg className={styles.recipeSocialIcon}>
                    <use xlinkHref={`${sprite}#arrow-up-right`} />
                  </svg>
                </div>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
