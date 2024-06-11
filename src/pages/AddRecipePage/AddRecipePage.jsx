import Container from "../../components/Container/Container";
import PathInfo from "../../components/PathInfo/PathInfo";
import MainTitle from "../../components/MainTitle/MainTitle";
import Subtitle from "../../components/Subtitle/Subtitle";
import AddRecipeForm from "../../components/AddRecipeForm/AddRecipeForm";

const AddRecipePage = () => {
  return (
    <Container>
      <PathInfo />
      <MainTitle text="Add recipe" />
      <Subtitle text="Reveal your culinary art, share your favorite recipe and create gastronomic masterpieces with us." />
      <AddRecipeForm />
    </Container>
  );
};

export default AddRecipePage;
