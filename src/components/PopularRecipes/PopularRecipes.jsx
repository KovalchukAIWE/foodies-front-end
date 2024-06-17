import RecipeCard from "../RecipeCard/RecipeCard";
import styles from "./PopularRecipes.module.css";

const PopularRecipes = ({ recipes }) => {
  return (
    <ul className={styles.resipeList}>
      {recipes.map((recipe) => (
        <RecipeCard key={recipe._id} recipe={recipe} />
      ))}
    </ul>
  );
};

export default PopularRecipes;
