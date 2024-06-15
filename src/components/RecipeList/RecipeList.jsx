import RecipeCard from "../RecipeCard/RecipeCard";
import styles from "./RecipeList.module.css";

const RecipeList = ({ recipes }) => {
  return (
    <>
      {recipes && recipes.length > 0 ? (
        <div className={styles.resipeList}>
          {recipes.map((recipe) => (
            <RecipeCard key={recipe._id} recipe={recipe} />
          ))}
        </div>
      ) : (
        <div className={styles.text}>Sorry, there are no such recipes</div>
      )}
    </>
  );
};

export default RecipeList;
