import PathInfo from "../../components/PathInfo/PathInfo";
import MainTitle from "../../components/MainTitle/MainTitle";
import Subtitle from "../../components/Subtitle/Subtitle";
import AddRecipeForm from "./AddRecipeForm/AddRecipeForm";

import styles from "./AddRecipeForm/AddRecipeForm.module.css";

const AddRecipePage = () => {
  return (
    <div className={styles.container}>
      <PathInfo />
      <MainTitle text="Add recipe" />
      <Subtitle text="Reveal your culinary art, share your favorite recipe and create gastronomic masterpieces with us." />
      <AddRecipeForm />
    </div>
  );
};

export default AddRecipePage;
