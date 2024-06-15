import RecipeCard from "../RecipeCard/RecipeCard";
import styles from "./PopularRecipes.module.css";

const PopularRecipes = ({ recipes }) => {
  return (
    <div className={styles.resipeList}>
      {recipes.map((recipe) => (
        <RecipeCard key={recipe._id} recipe={recipe} />
      ))}
    </div>
  );
};

export default PopularRecipes;
