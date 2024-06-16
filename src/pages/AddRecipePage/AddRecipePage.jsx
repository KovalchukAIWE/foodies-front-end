import { useState } from "react";

import Loader from "../../components/Loader/Loader.jsx";
import Container from "../../components/Container/Container.jsx";
import PathInfo from "../../components/PathInfo/PathInfo.jsx";
import MainTitle from "../../components/MainTitle/MainTitle.jsx";
import Subtitle from "../../components/Subtitle/Subtitle.jsx";
import AddRecipeForm from "../../components/AddRecipeForm/AddRecipeForm.jsx";

import css from "./AddRecipePage.module.css";

const AddRecipePage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const onSubmit = (isLoading) => {
    setIsLoading(isLoading);
  };

  return isLoading ? (
    <Loader />
  ) : (
    <>
      <section className={css.sectionAddRecipe}>
        <Container>
          <PathInfo pageName="Add recipe" />
          <MainTitle text="Add recipe" />
          <Subtitle text="Reveal your culinary art, share your favorite recipe and create gastronomic masterpieces with us." />
          <AddRecipeForm onHandleSubmit={onSubmit} />
        </Container>
      </section>
    </>
  );
};

export default AddRecipePage;
