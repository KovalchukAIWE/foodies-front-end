import noImage from "../../images/no-image.jpg";
import styles from "./CategoryList.module.css";

const CategoryList = ({ name, image }) => {
  return (
    <li className={styles.categoryItem}>
      <div className={styles.categoryImageWrapper}>
        <img
          src={image ? image : noImage}
          alt={name}
          className={styles.categoryImage}
        />
        <p className={styles.categoryName}>{name}</p>
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
