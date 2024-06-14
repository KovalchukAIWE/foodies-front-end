import noImage from "../../images/no-image.jpg";
import styles from "./CategoryList.module.css";
import { CategoriesButton } from "../Buttons/Buttons.jsx";

const CategoryList = ({ name, image, index }) => {
  let imageClass = "";

  switch (index) {
    case 0:
    case 1:
    case 4:
    case 5:
    case 6:
    case 8:
    case 10:
    case 11:
      imageClass = styles.smallImage;
      break;
    case 2:
    case 3:
    case 7:
    case 9:
      imageClass = styles.largeImage;
      break;

    default:
      imageClass = styles.smallImage;
  }

  return (
    <li className={`${styles.categoryItem} ${imageClass}`}>
      <div className={styles.categoryImageWrapper}>
        <img
          src={image ? image : noImage}
          alt={name}
          className={styles.categoryImage}
        />
        <div className={styles.categoriesBottomContainer}>
          <p className={styles.categoryName}>{name}</p>
          <CategoriesButton type="button">
            <a href="">
              <svg>
                <use href="/assets/img/icons-sprite.svg#arrow-up-right"></use>
              </svg>
            </a>
          </CategoriesButton>
        </div>
      </div>
    </li>
  );
};

export default CategoryList;

// import noImage from "../../images/no-image.jpg";
// import styles from "./CategoryList.module.css";

// const CategoryList = ({ name, image, index }) => {
//   let imageClass = "";

//   switch (index) {
//     case 0:
//     case 1:
//     case 4:
//     case 5:
//     case 6:
//     case 8:
//     case 10:
//     case 11:
//       imageClass = styles.smallImage;
//       break;
//     case 2:
//     case 3:
//     case 7:
//     case 9:
//       imageClass = styles.largeImage;
//       break;

//     default:
//       imageClass = styles.smallImage;
//   }

//   return (
//     <li className={`${styles.categoryItem} ${imageClass}`}>
//       <div className={styles.categoryImageWrapper}>
//         <img
//           src={image ? image : noImage}
//           alt={name}
//           className={styles.categoryImage}
//         />
//         <p className={styles.categoryName}>{name}</p>
//       </div>
//     </li>
//   );
// };

// export default CategoryList;
