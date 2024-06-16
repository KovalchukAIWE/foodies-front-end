import MainTitle from "../MainTitle/MainTitle.jsx";
import SubTitle from "../Subtitle/Subtitle.jsx";
import CategoryList from "../CategoryList/CategoryList.jsx";
import styles from "./Categories.module.css";
import { useState, useEffect } from "react";

const Categories = ({ categories, onSelectedCategory }) => {
  const excludedCategories = ["chicken", "soup", "vegan", "vegetarian"];
  const [width, setWidth] = useState(window.innerWidth);
  const [showAllCategories, setShowAllCategories] = useState(false);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const filteredCategories = categories.filter(
    (category) => !excludedCategories.includes(category.name.toLowerCase())
  );

  // const sortedCategories = filteredCategories.sort((a, b) =>
  //   a.name.localeCompare(b.name)
  // );

  if (!showAllCategories && filteredCategories.length === 11) {
    filteredCategories.push({
      _id: "all-categories",
      name: "All categories",
      image: null,
    });
  }

  const categoriesToRender = showAllCategories
    ? // ? categories.sort((a, b) => a.name.localeCompare(b.name))
      categories
    : width < 768
    ? [
        ...categories.slice(0, 8),
        categories.find((cat) => cat.name === "All categories"),
      ]
    : filteredCategories;

  const handleShowAllCategories = () => {
    setShowAllCategories(true);
  };

  return (
    <section className={styles.categoriesContainer}>
      <div className={styles.categoriesWrapper}>
        <MainTitle text="Categories" />
        <SubTitle
          text="Discover a limitless world of culinary possibilities
       and enjoy exquisite recipes that combine taste, style and the warm atmosphere of the kitchen."
        />
        <ul className={styles.categoriesGrid}>
          {categoriesToRender.map(({ _id, name, image }, index) => (
            <CategoryList
              key={_id}
              onSelectedCategory={onSelectedCategory}
              name={name}
              image={image}
              index={index}
              onShowAllCategories={handleShowAllCategories}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Categories;
