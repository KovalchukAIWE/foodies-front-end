import { useState, useEffect } from "react";
import noImage from "../../images/no-image.jpg";
import styles from "./CategoryList.module.css";
import { CategoriesButton } from "../Buttons/Buttons.jsx";

const CategoryList = ({
  name,
  image,
  index,
  onShowAllCategories,
  onSelectedCategory,
}) => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleClickButton = () => {
    if (name === "All categories") {
      onShowAllCategories();
    } else {
      console.log("Clicked");
    }
  };

  let imageClass = "";

  if (width >= 1440) {
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
      case 13:
        // case 14:
        imageClass = styles.largeImage;
        break;

      default:
        imageClass = styles.smallImage;
    }
  } else if (width >= 768 && width <= 1439) {
    switch (index) {
      case 0:
      case 1:
      case 3:
      case 4:
      case 5:
      case 6:
      case 8:
      case 9:
      case 10:
      case 11:
        imageClass = styles.smallImageTablet;
        break;
      case 2:
      case 7:
      case 14:
        imageClass = styles.largeImageTablet;
        break;
      default:
        imageClass = styles.smallImageTablet;
    }
  } else {
    imageClass = styles.smallImageMobile;
  }

  if (name === "All categories") {
    imageClass = `${styles.allCategories}`;
  }

  return (
    <li className={`${styles.categoryItem} ${imageClass}`}>
      <div className={styles.categoryContentWrapper}>
        {name === "All categories" ? (
          <button
            className={styles.allCategoriesText}
            type="button"
            onClick={handleClickButton}
          >
            All Categories
          </button>
        ) : (
          <img
            src={image ? image : noImage}
            alt={name}
            className={styles.categoryImage}
            width={343}
            height={250}
          />
        )}
        {name !== "All categories" && (
          <div className={styles.categoriesBottomContainer}>
            <p className={styles.categoryName}>{name}</p>
            <CategoriesButton onClick={onSelectedCategory} name={name} />
          </div>
        )}
      </div>
    </li>
  );
};

export default CategoryList;
