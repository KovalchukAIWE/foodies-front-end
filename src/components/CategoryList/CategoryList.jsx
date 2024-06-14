import { useState, useEffect } from "react";
import noImage from "../../images/no-image.jpg";
import styles from "./CategoryList.module.css";
import { CategoriesButton } from "../Buttons/Buttons.jsx";

const CategoryList = ({ name, image, index }) => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleClickButton = () => {
    console.log("Clicked");
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
        imageClass = styles.largeImageTablet;
        break;
      default:
        imageClass = styles.smallImageTablet;
    }
  } else {
    imageClass = styles.smallImageMobile;
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
          <CategoriesButton onClick={handleClickButton} />
        </div>
      </div>
    </li>
  );
};

export default CategoryList;
