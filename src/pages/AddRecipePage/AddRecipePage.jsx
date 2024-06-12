import Container from "../../components/Container/Container.jsx";
import PathInfo from "../../components/PathInfo/PathInfo.jsx";
import MainTitle from "../../components/MainTitle/MainTitle.jsx";
import Subtitle from "../../components/Subtitle/Subtitle.jsx";
import AddRecipeForm from "../../components/AddRecipeForm/AddRecipeForm.jsx";

import css from "./AddRecipePage.module.css";

const AddRecipePage = () => {
  return (
    <>
      <section className={css.sectionAddRecipe}>
        <Container>
          <PathInfo pageName="Add recipe" />
          <MainTitle text="Add recipe" />
          <Subtitle text="Reveal your culinary art, share your favorite recipe and create gastronomic masterpieces with us." />
          <AddRecipeForm />
        </Container>
      </section>
    </>
  );
};

export default AddRecipePage;
