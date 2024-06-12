import MainTitle from "../MainTitle/MainTitle.jsx";
import SubTitle from "../Subtitle/Subtitle.jsx";
import CategoryList from "../CategoryList/CategoryList.jsx";
import styles from "./Categories.module.css";

const Categories = ({ categories }) => {
  console.log(categories);
  return (
    <div>
      <MainTitle text="Categories" />
      <SubTitle
        text="Discover a limitless world of culinary possibilities
       and enjoy exquisite recipes that combine taste, style and the warm atmosphere of the kitchen."
      />
      <ul className={styles.categoriesGrid}>
        {categories.map(({ _id, name, image }, index) => (
          <CategoryList key={_id} name={name} image={image} index={index} />
        ))}
      </ul>
    </div>
  );
};

export default Categories;
